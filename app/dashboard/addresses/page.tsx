"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { MapPin, Plus, Edit2, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AddressesPage() {
  const addresses = [
    { id: 1, type: "Home", address: "123 Fashion Street, NYC, NY 10001", default: true },
    { id: 2, type: "Office", address: "456 Business Ave, NYC, NY 10002", default: false },
    { id: 3, type: "Apartment", address: "789 Park Avenue, Brooklyn, NY 11201", default: false },
  ]

  return (
    <DashboardLayout showBackButton={true}>
      <div className="space-y-4 sm:space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            Saved Addresses
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">Manage your delivery addresses</p>
        </div>

        <div className="flex justify-end">
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Address
          </Button>
        </div>

        <div className="grid gap-3 sm:gap-4">
          {addresses.map((addr, idx) => (
            <Card
              key={addr.id}
              className="hover:shadow-lg transition-all animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-base sm:text-lg">{addr.type}</p>
                      {addr.default && (
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">Default</span>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm sm:text-base">{addr.address}</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 text-xs sm:text-sm bg-transparent"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 text-xs sm:text-sm bg-transparent"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
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
