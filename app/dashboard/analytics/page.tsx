"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { BarChart3, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AnalyticsPage() {
  return (
    <DashboardLayout showBackButton={true}>
      <div className="space-y-4 sm:space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2">
            <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
            Your Analytics
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base mt-1">Track your shopping activity and insights</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                Total Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl sm:text-4xl font-bold">24</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">↑ 12% from last month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="text-sm sm:text-base">Average Order Value</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl sm:text-4xl font-bold">$82.50</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">↓ 5% from last month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="text-sm sm:text-base">Favorite Category</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl sm:text-3xl font-bold">Pants</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">8 items purchased</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="text-sm sm:text-base">Total Savings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl sm:text-4xl font-bold">$245.89</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">From promotions & loyalty</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
