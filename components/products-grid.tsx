"use client"

import Link from "next/link"
import { ShoppingCart, Filter, Heart } from "lucide-react"
import { useState } from "react"

const allProducts = [
  {
    id: 1,
    name: "Classic Black Pants",
    price: 89.99,
    category: "Pants",
    image: "/black-chinos-pants.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Minimalist White Shirt",
    price: 59.99,
    category: "Shirts",
    image: "/white-dress-shirt.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Gray Wool Blazer",
    price: 159.99,
    category: "Outerwear",
    image: "/grey-wool-blazer.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Casual Cotton T-Shirt",
    price: 35.99,
    category: "Knitwear",
    image: "/casual-cotton-tshirt.jpg",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Classic Denim Jeans",
    price: 99.99,
    category: "Pants",
    image: "/classic-denim-jeans.jpg",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Oxford Button Shirt",
    price: 69.99,
    category: "Shirts",
    image: "/oxford-button-shirt.jpg",
    rating: 4.7,
  },
  {
    id: 7,
    name: "Merino Wool Sweater",
    price: 129.99,
    category: "Knitwear",
    image: "/merino-wool-sweater.jpg",
    rating: 4.9,
  },
  {
    id: 8,
    name: "Premium Leather Jacket",
    price: 249.99,
    category: "Outerwear",
    image: "/premium-leather-jacket.jpg",
    rating: 4.8,
  },
  {
    id: 9,
    name: "Summer Linen Shirt",
    price: 65.99,
    category: "Shirts",
    image: "/summer-linen-shirt.jpg",
    rating: 4.7,
  },
  {
    id: 10,
    name: "Structured Wool Coat",
    price: 199.99,
    category: "Outerwear",
    image: "/structured-wool-coat.jpg",
    rating: 4.9,
  },
  {
    id: 11,
    name: "Linen Trousers",
    price: 75.99,
    category: "Pants",
    image: "/linen-trousers.jpg",
    rating: 4.6,
  },
]

export default function ProductsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState("featured")
  const [wishlist, setWishlist] = useState<number[]>([])

  const categories = ["Pants", "Shirts", "Outerwear", "Knitwear"]

  let filtered = allProducts
  if (selectedCategory) {
    filtered = filtered.filter((p) => p.category === selectedCategory)
  }

  if (sortBy === "price-low") {
    filtered = [...filtered].sort((a, b) => a.price - b.price)
  } else if (sortBy === "price-high") {
    filtered = [...filtered].sort((a, b) => b.price - a.price)
  }

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fadeIn">
          <h1 className="text-5xl font-light mb-4">All Products</h1>
          <p className="text-muted-foreground">Explore our complete collection of premium minimalist apparel</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-48 flex-shrink-0 animate-slideInLeft">
            <div className="bg-white rounded-lg border border-border p-6 space-y-6 sticky top-20">
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </h3>
              </div>

              {/* Category Filter */}
              <div>
                <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider">Category</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left px-3 py-2 rounded text-sm transition-all duration-200 ${
                      selectedCategory === null
                        ? "bg-primary text-primary-foreground font-medium"
                        : "hover:bg-secondary"
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-3 py-2 rounded text-sm transition-all duration-200 ${
                        selectedCategory === cat
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-secondary"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="border-t border-border pt-4">
                <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider">Sort</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, idx) => (
                <Link key={product.id} href={`/products/${product.id}`} className="group">
                  <div
                    className="bg-white rounded-lg border border-border overflow-hidden hover:border-foreground/20 hover:shadow-lg transition-all duration-300 animate-fadeIn"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="bg-muted h-64 overflow-hidden flex items-center justify-center relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          toggleWishlist(product.id)
                        }}
                        className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-all opacity-0 group-hover:opacity-100 transform group-hover:scale-110"
                      >
                        <Heart
                          className={`w-4 h-4 transition-colors ${wishlist.includes(product.id) ? "fill-accent text-accent" : "text-foreground"}`}
                        />
                      </button>
                    </div>
                    <div className="p-4 space-y-3">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        {product.category}
                      </p>
                      <h3 className="text-base font-medium line-clamp-2 group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <div className="flex flex-col">
                          <p className="font-semibold">${product.price}</p>
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

            {filtered.length === 0 && (
              <div className="text-center py-16 animate-fadeIn">
                <p className="text-muted-foreground">No products found in this category</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
