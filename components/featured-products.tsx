"use client"

import Link from "next/link"
import { ShoppingCart, Heart } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Classic Black Pants",
    price: "$89.99",
    category: "Pants",
    image: "/black-chinos-pants.jpg",
    rating: 4.8,
    badge: "Popular",
  },
  {
    id: 2,
    name: "Minimalist White Shirt",
    price: "$59.99",
    category: "Shirts",
    image: "/white-dress-shirt.jpg",
    rating: 4.9,
    badge: "New",
  },
  {
    id: 3,
    name: "Gray Wool Blazer",
    price: "$159.99",
    category: "Outerwear",
    image: "/grey-wool-blazer.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Neutral Sweater",
    price: "$79.99",
    category: "Knitwear",
    image: "/placeholder.svg?key=neutral-sweater",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Casual Cotton T-Shirt",
    price: "$35.99",
    category: "Knitwear",
    image: "/casual-cotton-tshirt.jpg",
    rating: 4.6,
  },
]

export default function FeaturedProducts() {
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Featured Collection</h2>
          <p className="text-muted-foreground max-w-2xl">
            Handpicked essentials that define contemporary minimalism. Quality, comfort, and timeless design in every
            piece.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <div
                className="bg-white rounded-lg overflow-hidden border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Image */}
                <div className="bg-muted h-64 rounded-t-lg overflow-hidden flex items-center justify-center relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {product.badge}
                    </div>
                  )}
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      toggleWishlist(product.id)
                    }}
                    className="absolute top-3 left-3 p-2 bg-white/80 hover:bg-white rounded-full transition-all opacity-0 group-hover:opacity-100 transform group-hover:scale-110"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${wishlist.includes(product.id) ? "fill-accent text-accent" : "text-foreground"}`}
                    />
                  </button>
                </div>

                {/* Details */}
                <div className="p-4 space-y-3">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    {product.category}
                  </p>
                  <h3 className="text-base font-medium line-clamp-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">{product.price}</p>
                      <div className="flex items-center gap-1 text-xs">
                        <span className="text-amber-500">★</span>
                        <span className="font-medium">{product.rating}</span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        console.log("Added to cart:", product.name)
                      }}
                      className="p-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-all transform hover:scale-110"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
