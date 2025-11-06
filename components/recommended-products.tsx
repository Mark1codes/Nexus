"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  image: string
  rating: number
  badge?: string
}

const recommendedProducts: Product[] = [
  {
    id: "1",
    name: "Classic Black Chinos",
    price: 89.99,
    image: "/black-chinos-pants.jpg",
    rating: 4.8,
    badge: "Popular",
  },
  {
    id: "2",
    name: "Premium White Shirt",
    price: 79.99,
    image: "/white-dress-shirt.jpg",
    rating: 4.9,
    badge: "New",
  },
  {
    id: "3",
    name: "Grey Wool Blazer",
    price: 199.99,
    image: "/grey-wool-blazer.jpg",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Casual Cotton T-Shirt",
    price: 35.0,
    image: "/casual-cotton-tshirt.jpg",
    rating: 4.6,
    badge: "Best Seller",
  },
  {
    id: "5",
    name: "Classic Denim Jeans",
    price: 99.99,
    image: "/classic-denim-jeans.jpg",
    rating: 4.8,
  },
  {
    id: "6",
    name: "Oxford Button Shirt",
    price: 69.99,
    image: "/oxford-button-shirt.jpg",
    rating: 4.7,
  },
]

export default function RecommendedProducts() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Recommended For You</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendedProducts.map((product, i) => (
          <Card
            key={product.id}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 group animate-fadeIn"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="relative overflow-hidden bg-secondary h-48">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {product.badge && (
                <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {product.badge}
                </div>
              )}
              <button className="absolute top-3 left-3 p-2 bg-white/80 hover:bg-white rounded-full transition-colors opacity-0 group-hover:opacity-100">
                <Heart className="w-4 h-4 text-accent" />
              </button>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-1">New Collection</p>
                <h4 className="font-semibold group-hover:text-primary transition-colors">{product.name}</h4>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-amber-500">★</span>
                  <span className="font-medium">{product.rating}</span>
                </div>
              </div>
              <Button className="w-full gap-2" size="sm">
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
