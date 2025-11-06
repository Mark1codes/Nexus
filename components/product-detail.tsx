"use client"

import Link from "next/link"
import { useState } from "react"
import { ShoppingCart, Heart, Share2, ChevronLeft, ChevronRight, Star, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SizeGuide from "./size-guide"
import ProductReviews from "./product-reviews"

interface ProductDetailProps {
  productId: string
}

// Mock product data
const productData: Record<string, any> = {
  "1": {
    name: "Classic Black Pants",
    price: 89.99,
    rating: 4.8,
    reviews: 324,
    category: "Pants",
    image: "/black-chinos-pants.jpg",
    description:
      "Premium quality black pants crafted from 100% organic cotton. Perfect for any occasion, these minimalist pants combine comfort with timeless style.",
    details: [
      "Material: 100% Organic Cotton",
      "Care: Machine wash cold, tumble dry low",
      "Fit: Regular, runs true to size",
      "Weight: ~400g",
    ],
    colors: ["Black", "Navy", "Charcoal"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  "2": {
    name: "Minimalist White Shirt",
    price: 59.99,
    rating: 4.6,
    reviews: 287,
    category: "Shirts",
    image: "/white-dress-shirt.jpg",
    description:
      "A versatile white shirt featuring a perfect minimalist cut. Made from breathable fabric, ideal for layering or wearing alone.",
    details: [
      "Material: 100% Premium Cotton",
      "Care: Machine wash warm, tumble dry low",
      "Fit: Slim, runs true to size",
      "Weight: ~250g",
    ],
    colors: ["White", "Off-White", "Cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
  "3": {
    name: "Gray Wool Blazer",
    price: 159.99,
    rating: 4.9,
    reviews: 512,
    category: "Outerwear",
    image: "/grey-wool-blazer.jpg",
    description:
      "An essential gray wool blazer that elevates any wardrobe. Tailored to perfection with attention to every detail.",
    details: [
      "Material: 85% Wool, 15% Polyester",
      "Care: Dry clean recommended",
      "Fit: Tailored, runs small (size up)",
      "Weight: ~600g",
    ],
    colors: ["Gray", "Charcoal", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
  },
  "4": {
    name: "Neutral Sweater",
    price: 79.99,
    rating: 4.7,
    reviews: 198,
    category: "Knitwear",
    image: "/placeholder.svg?key=neutral-sweater",
    description:
      "Cozy and comfortable neutral sweater perfect for layering. Made with a premium knit blend for softness and durability.",
    details: [
      "Material: 60% Cotton, 40% Acrylic",
      "Care: Machine wash cold, lay flat to dry",
      "Fit: Relaxed, runs true to size",
      "Weight: ~350g",
    ],
    colors: ["Beige", "Gray", "Cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
  },
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const product = productData[productId] || productData["1"]
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const [isAdded, setIsAdded] = useState(false)

  const images = [product.image, "/placeholder.svg?key=alt1", "/placeholder.svg?key=alt2", "/placeholder.svg?key=alt3"]

  const nextImage = () => setImageIndex((i) => (i + 1) % images.length)
  const prevImage = () => setImageIndex((i) => (i - 1 + images.length) % images.length)

  const handleAddToCart = () => {
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-8 animate-slideInLeft overflow-x-auto pb-2">
          <Link href="/products" className="hover:text-foreground transition-colors whitespace-nowrap">
            Products
          </Link>
          <span className="flex-shrink-0">/</span>
          <Link
            href={`/products?category=${product.category}`}
            className="hover:text-foreground transition-colors whitespace-nowrap"
          >
            {product.category}
          </Link>
          <span className="flex-shrink-0">/</span>
          <span className="text-foreground font-medium whitespace-nowrap">{product.name}</span>
        </div>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4 animate-slideInLeft">
            <div className="relative bg-muted rounded-lg overflow-hidden aspect-square lg:h-[600px] flex items-center justify-center group">
              <img
                src={images[imageIndex] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full transition-all opacity-0 group-hover:opacity-100 transform hover:scale-110"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full transition-all opacity-0 group-hover:opacity-100 transform hover:scale-110"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImageIndex(i)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded border-2 transition-all flex-shrink-0 transform hover:scale-110 ${
                    i === imageIndex ? "border-primary scale-105" : "border-border hover:border-foreground/50"
                  }`}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 sm:space-y-8 animate-slideInRight">
            {/* Header */}
            <div className="space-y-3 sm:space-y-4">
              <Badge variant="outline" className="w-fit text-xs sm:text-sm">
                {product.category}
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">{product.name}</h1>
              <div className="flex items-center gap-2 sm:gap-4 flex-wrap text-xs sm:text-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors ${
                        i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-border"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
                {product.inStock && <Badge className="bg-green-500 text-xs">In Stock</Badge>}
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">${product.price}</p>
            </div>

            {/* Description */}
            <p className="text-foreground leading-relaxed text-sm sm:text-base">{product.description}</p>

            {/* Color Selection */}
            <div className="space-y-3">
              <h3 className="font-semibold text-sm sm:text-base">Color</h3>
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 sm:px-4 py-2 border-2 rounded-lg transition-all transform hover:scale-105 text-xs sm:text-sm ${
                      selectedColor === color
                        ? "border-primary bg-primary text-primary-foreground font-medium"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <h3 className="font-semibold text-sm sm:text-base">Size</h3>
              <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 border-2 rounded-lg font-medium transition-all transform hover:scale-105 text-xs sm:text-sm ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-semibold text-sm sm:text-base">Quantity</h3>
              <div className="flex items-center border border-border rounded-lg w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 sm:px-4 py-2 hover:bg-secondary transition-colors font-semibold text-sm"
                >
                  −
                </button>
                <span className="px-4 sm:px-6 font-semibold text-sm sm:text-base">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 sm:px-4 py-2 hover:bg-secondary transition-colors font-semibold text-sm"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4">
              <Button
                size="lg"
                className="flex-1 gap-2 transform hover:scale-105 transition-all text-sm sm:text-base"
                onClick={handleAddToCart}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                    Add to Cart
                  </>
                )}
              </Button>
              <Button
                variant={isWishlisted ? "default" : "outline"}
                size="lg"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="transform hover:scale-105 transition-all"
              >
                <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isWishlisted ? "fill-current" : ""}`} />
              </Button>
              <Button variant="outline" size="lg" className="transform hover:scale-105 transition-all bg-transparent">
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>

            {/* Details */}
            <div className="border-t border-border pt-6 sm:pt-8 space-y-4">
              <h3 className="font-semibold text-sm sm:text-base">Product Details</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                {product.details.map((detail: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 animate-fadeIn"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Links */}
            <div className="space-y-2 sm:space-y-3 border-t border-border pt-6 sm:pt-8 text-xs sm:text-sm">
              <Link
                href="/products/reviews"
                className="block text-accent hover:text-accent/80 transition-colors font-medium"
              >
                Read Customer Reviews
              </Link>
              <Link href="#" className="block text-accent hover:text-accent/80 transition-colors font-medium">
                Shipping & Returns Policy
              </Link>
              <Link href="#" className="block text-accent hover:text-accent/80 transition-colors font-medium">
                Complete Size Guide
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:space-y-12">
          <SizeGuide />
          <div className="border-t border-border pt-8 lg:pt-12">
            <ProductReviews />
          </div>
        </div>
      </div>
    </section>
  )
}
