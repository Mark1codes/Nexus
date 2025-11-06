"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { CreditCard, Plus, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function PaymentsPage() {
  const router = useRouter()
  const paymentMethods = [
    { id: 1, type: "Visa", last4: "4242", expiry: "12/25", default: true },
    { id: 2, type: "Mastercard", last4: "5555", expiry: "08/24", default: false },
    { id: 3, type: "American Express", last4: "3782", expiry: "06/26", default: false },
  ]

  return (
    <DashboardLayout showBackButton={true}>
      <div className="space-y-4 sm:space-y-6 animate-fadeIn">
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="outline" size="icon" onClick={() => router.back()} className="hover:bg-secondary">
            <CreditCard className="w-4 h-4" />
          </Button>
          <h2 className="text-lg font-semibold">Payment Methods</h2>
        </div>

        <div className="flex items-center justify-between">
          <div className="hidden md:block">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <CreditCard className="w-8 h-8" />
              Payment Methods
            </h1>
            <p className="text-muted-foreground mt-1">Manage your payment information</p>
          </div>
          <div className="flex justify-end">
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Payment Method
            </Button>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4">
          {paymentMethods.map((method, idx) => (
            <Card
              key={method.id}
              className="hover:shadow-lg transition-all animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="w-12 h-8 bg-gradient-to-br from-primary to-primary/60 rounded flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{method.type}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">**** **** **** {method.last4}</p>
                      <p className="text-xs text-muted-foreground">Expires {method.expiry}</p>
                    </div>
                  </div>
                  {method.default && (
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">Default</span>
                  )}
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs sm:text-sm text-red-600 bg-transparent">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
