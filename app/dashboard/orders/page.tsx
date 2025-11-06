import DashboardLayout from "@/components/dashboard-layout"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Package, Calendar, DollarSign } from "lucide-react"

const orders = [
  {
    id: "ORD-001",
    date: "Dec 15, 2024",
    total: "$189.99",
    status: "Delivered",
    items: 3,
  },
  {
    id: "ORD-002",
    date: "Dec 10, 2024",
    total: "$89.99",
    status: "Processing",
    items: 1,
  },
  {
    id: "ORD-003",
    date: "Dec 5, 2024",
    total: "$459.97",
    status: "Shipped",
    items: 5,
  },
]

export default function OrdersPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800"
      case "Processing":
        return "bg-blue-100 text-blue-800"
      case "Shipped":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <DashboardLayout showBackButton={true}>
      <div className="space-y-4 sm:space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold">Order History</h1>
          <p className="text-muted-foreground text-sm sm:text-base">View and track all your orders</p>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {orders.map((order, idx) => (
            <Card
              key={order.id}
              className="p-4 sm:p-6 hover:shadow-lg transition-all border-l-4 border-l-primary animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4">
                <div className="flex-1 space-y-1 sm:space-y-2 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Package className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <p className="font-semibold text-sm sm:text-base truncate">{order.id}</p>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      {order.items} items
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">{order.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span>{order.total}</span>
                    </span>
                  </div>
                </div>
                <Badge className={`${getStatusColor(order.status)} text-xs sm:text-sm flex-shrink-0`}>
                  {order.status}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
