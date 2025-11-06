"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ThumbsUp } from "lucide-react"

interface Review {
  id: string
  author: string
  rating: number
  title: string
  text: string
  helpful: number
  verified: boolean
}

const reviews: Review[] = [
  {
    id: "1",
    author: "Sarah M.",
    rating: 5,
    title: "Excellent Quality",
    text: "The fabric quality is outstanding. Perfect fit and arrived quickly.",
    helpful: 24,
    verified: true,
  },
  {
    id: "2",
    author: "James T.",
    rating: 4,
    title: "Great Value",
    text: "Good quality for the price. Would recommend to friends.",
    helpful: 12,
    verified: true,
  },
  {
    id: "3",
    author: "Emma L.",
    rating: 5,
    title: "Love It",
    text: "Exactly as described. Very comfortable and stylish.",
    helpful: 18,
    verified: true,
  },
]

export default function ProductReviews() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Rating Summary */}
        <Card className="p-4 sm:p-6">
          <div className="text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-bold">{avgRating}</div>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    i < Math.floor(Number.parseFloat(avgRating)) ? "fill-amber-500 text-amber-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">{reviews.length} verified reviews</p>
          </div>
        </Card>

        {/* Rating Distribution */}
        <Card className="p-4 sm:p-6 col-span-1 sm:col-span-2 lg:col-span-2">
          <h3 className="font-semibold text-sm sm:text-base mb-3">Rating Breakdown</h3>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="w-12 sm:w-14">{rating} star</span>
                <div className="flex-1 bg-secondary rounded-full h-2">
                  <div className="bg-accent h-full rounded-full" style={{ width: `${rating * 20}%` }}></div>
                </div>
                <span className="w-8 text-right text-muted-foreground">{rating * 20}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Individual Reviews */}
      <div>
        <h3 className="font-semibold text-base sm:text-lg mb-4">Customer Reviews</h3>
        <div className="space-y-3">
          {reviews.map((review) => (
            <Card key={review.id} className="p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 sm:gap-0 mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm sm:text-base">{review.author}</span>
                    {review.verified && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Verified</span>
                    )}
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          i < review.rating ? "fill-amber-500 text-amber-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <h4 className="font-semibold text-xs sm:text-sm mb-1">{review.title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">{review.text}</p>
              <Button variant="ghost" size="sm" className="gap-2 text-xs h-auto py-1">
                <ThumbsUp className="w-3 h-3" />
                Helpful ({review.helpful})
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
