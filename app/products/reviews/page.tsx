import Header from "@/components/header"
import ProductReviews from "@/components/product-reviews"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-4xl mx-auto w-full">
        <Link href="/products">
          <Button variant="ghost" size="sm" className="mb-6 gap-2">
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Products</span>
            <span className="sm:hidden">Back</span>
          </Button>
        </Link>

        <div className="space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Customer Reviews</h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              See what our customers think about our products
            </p>
          </div>

          <ProductReviews />
        </div>
      </main>
      <Footer />
    </div>
  )
}
