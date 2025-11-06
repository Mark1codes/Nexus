"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { Bell, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "Order Shipped",
      message: "Your order #ORD-24562 has been shipped",
      time: "2 hours ago",
      read: false,
    },
    { id: 2, title: "New Arrival", message: "Check out our new summer collection", time: "1 day ago", read: false },
    {
      id: 3,
      title: "Order Delivered",
      message: "Your order #ORD-24561 has been delivered",
      time: "3 days ago",
      read: true,
    },
    {
      id: 4,
      title: "Exclusive Offer",
      message: "20% off on your favorite items - Use code NEXUS20",
      time: "1 week ago",
      read: true,
    },
    { id: 5, title: "Loyalty Reward", message: "You earned 100 loyalty points", time: "2 weeks ago", read: true },
  ]

  return (
    <DashboardLayout showBackButton={true}>
      <div className="space-y-4 sm:space-y-6 animate-fadeIn">
        <div className="flex items-center justify-between flex-col sm:flex-row gap-3 sm:gap-0">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2">
              <Bell className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
              Notifications
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base mt-1">Stay updated with your account activity</p>
          </div>
          <Button variant="outline" size="sm" className="w-full sm:w-auto text-xs sm:text-sm bg-transparent">
            Mark all as read
          </Button>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {notifications.map((notif) => (
            <Card
              key={notif.id}
              className={`hover:shadow-lg transition-all ${!notif.read ? "border-primary/50 bg-primary/5" : ""}`}
            >
              <CardContent className="flex items-start justify-between gap-2 sm:gap-4 p-3 sm:p-4">
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold text-sm sm:text-base ${!notif.read ? "text-primary" : ""}`}>
                    {notif.title}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate sm:break-words">{notif.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                </div>
                <Button variant="ghost" size="sm" className="p-1.5 sm:p-2 flex-shrink-0">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
