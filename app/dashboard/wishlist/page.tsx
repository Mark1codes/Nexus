import DashboardLayout from "@/components/dashboard-layout"
import { Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const wishlistItems = [
  { id: 1, name: "Classic Black Pants", price: 89.99, image: "/black-chinos-pants.jpg" },
  { id: 2, name: "Premium White Shirt", price: 79.99, image: "/white-dress-shirt.jpg" },
  { id: 3, name: "Gray Wool Blazer", price: 199.99, image: "/grey-wool-blazer.jpg" },
]

export default function WishlistPage() {
  return (
    <DashboardLayout showBackButton={true}>
      <div className="space-y-4 sm:space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold">My Wishlist</h1>
          <p className="text-muted-foreground text-sm sm:text-base">Items you're interested in</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {wishlistItems.map((item, idx) => (
            <div
              key={item.id}
              className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-40 sm:h-48 bg-secondary overflow-hidden group">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
                <button className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 bg-white rounded-full hover:bg-red-50 transition-colors">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 fill-red-500 text-red-500" />
                </button>
              </div>
              <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                <h3 className="font-semibold text-sm sm:text-base">{item.name}</h3>
                <p className="text-base sm:text-lg font-bold">${item.price}</p>
                <Link href={`/products/${item.id}`} className="block">
                  <Button className="w-full gap-2 text-xs sm:text-sm" size="sm">
                    <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                    Add to Cart
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
