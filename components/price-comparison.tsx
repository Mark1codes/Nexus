"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingDown } from "lucide-react"

interface PriceHistory {
  date: string
  price: number
}

interface ComparisonProduct {
  id: string
  name: string
  price: number
  competitor: string
  savings: number
  inStock: boolean
  priceHistory: PriceHistory[]
}

const comparisonProducts: ComparisonProduct[] = [
  {
    id: "1",
    name: "Premium White Shirt",
    price: 79.99,
    competitor: "Competitor A: $84.99",
    savings: 5,
    inStock: true,
    priceHistory: [
      { date: "30d ago", price: 89.99 },
      { date: "15d ago", price: 84.99 },
      { date: "Today", price: 79.99 },
    ],
  },
  {
    id: "2",
    name: "Classic Denim Jeans",
    price: 99.99,
    competitor: "Competitor B: $102.99",
    savings: 3,
    inStock: true,
    priceHistory: [
      { date: "30d ago", price: 105.0 },
      { date: "15d ago", price: 101.99 },
      { date: "Today", price: 99.99 },
    ],
  },
]

export default function PriceComparison() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg sm:text-xl font-semibold">Price Comparison</h3>
        <Badge>Best Prices</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {comparisonProducts.map((product) => (
          <Card key={product.id} className="p-4 sm:p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-2">
                <h4 className="font-semibold text-sm sm:text-base flex-1">{product.name}</h4>
                {product.inStock && (
                  <Badge variant="outline" className="text-xs">
                    In Stock
                  </Badge>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-muted-foreground">Our Price</span>
                  <span className="text-2xl sm:text-3xl font-bold text-accent">${product.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-muted-foreground">{product.competitor}</span>
                  <Badge variant="secondary" className="text-xs sm:text-sm">
                    Save ${product.savings}
                  </Badge>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-xs sm:text-sm font-semibold mb-2">Price Trend (Last 30 Days)</p>
                <div className="flex items-end justify-between gap-1 h-12">
                  {product.priceHistory.map((entry, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-accent/70 rounded-t hover:bg-accent transition-colors"
                        style={{ height: `${(entry.price / 110) * 100}%` }}
                      ></div>
                      <span className="text-xs text-muted-foreground">${entry.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-green-600 text-xs sm:text-sm pt-2 border-t">
                <TrendingDown className="w-4 h-4" />
                <span>Price decreased by $10 in 30 days</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
