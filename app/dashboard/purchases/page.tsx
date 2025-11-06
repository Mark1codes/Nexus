"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { ShoppingBag, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function PurchasesPage() {
  const purchases = [
    { id: 1, item: "Black Chinos Pants", price: "$89.99", date: "2024-11-20", status: "Delivered" },
    { id: 2, item: "White Dress Shirt", price: "$65.00", date: "2024-11-18", status: "Delivered" },
    { id: 3, item: "Grey Wool Blazer", price: "$159.99", date: "2024-11-15", status: "Delivered" },
    { id: 4, item: "Casual Cotton T-Shirt", price: "$35.00", date: "2024-11-12", status: "Delivered" },
    { id: 5, item: "Linen Trousers", price: "$75.00", date: "2024-11-08", status: "Delivered" },
  ]

  return (
    <DashboardLayout showBackButton={true}>
      <div className="space-y-4 sm:space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
            Purchase History
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base mt-1">All your previous purchases</p>
        </div>

        <div className="grid gap-2 sm:gap-4">
          {purchases.map((purchase) => (
            <Card key={purchase.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="flex items-center justify-between gap-2 sm:gap-4 p-3 sm:p-6 flex-wrap">
                <div className="flex-1 min-w-[200px]">
                  <p className="font-medium text-sm sm:text-lg">{purchase.item}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{purchase.date}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-semibold text-sm sm:text-lg">{purchase.price}</p>
                  <p className="text-xs text-green-600">{purchase.status}</p>
                </div>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0 hidden sm:block" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
