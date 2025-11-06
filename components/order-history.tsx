"use client"
import { Eye, Download, Package, CheckCircle, Clock, AlertCircle } from "lucide-react"

const orders = [
  {
    id: "ORD-001",
    date: "Dec 15, 2024",
    status: "delivered",
    total: "$89.99",
    items: "Classic Black Pants",
    image: "/black-pants.jpg",
  },
  {
    id: "ORD-002",
    date: "Dec 10, 2024",
    status: "in-transit",
    total: "$169.98",
    items: "White Shirt, Gray Blazer",
    image: "/white-shirt.jpg",
  },
  {
    id: "ORD-003",
    date: "Dec 1, 2024",
    status: "processing",
    total: "$79.99",
    items: "Neutral Sweater",
    image: "/neutral-sweater.jpg",
  },
]

const statusConfig = {
  delivered: { icon: CheckCircle, label: "Delivered", color: "bg-green-50 text-green-700" },
  "in-transit": { icon: Package, label: "In Transit", color: "bg-blue-50 text-blue-700" },
  processing: { icon: Clock, label: "Processing", color: "bg-yellow-50 text-yellow-700" },
  cancelled: { icon: AlertCircle, label: "Cancelled", color: "bg-red-50 text-red-700" },
}

export default function OrderHistory() {
  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-xl font-semibold">Order History</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-secondary/30">
              <th className="px-6 py-3 text-left text-sm font-semibold">Order</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Items</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Total</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const statusInfo = statusConfig[order.status as keyof typeof statusConfig]
              const StatusIcon = statusInfo.icon

              return (
                <tr key={order.id} className="border-b border-border hover:bg-secondary/20 transition-colors">
                  <td className="px-6 py-4 font-medium">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{order.date}</td>
                  <td className="px-6 py-4 text-sm">{order.items}</td>
                  <td className="px-6 py-4 font-semibold">{order.total}</td>
                  <td className="px-6 py-4">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}
                    >
                      <StatusIcon className="w-4 h-4" />
                      {statusInfo.label}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-secondary rounded transition-colors" title="View Details">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-secondary rounded transition-colors" title="Download Invoice">
                        <Download className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {orders.length === 0 && (
        <div className="p-12 text-center">
          <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No orders yet</p>
        </div>
      )}
    </div>
  )
}
