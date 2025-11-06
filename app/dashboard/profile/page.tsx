import DashboardLayout from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Edit2 } from "lucide-react"

export default function ProfilePage() {
  return (
    <DashboardLayout showBackButton={true}>
      <div className="space-y-4 sm:space-y-6 animate-fadeIn">
        <div className="flex items-center justify-between flex-col sm:flex-row gap-3 sm:gap-0">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold">My Profile</h1>
            <p className="text-muted-foreground text-sm sm:text-base">Manage your account information</p>
          </div>
          <Button className="gap-2 w-full sm:w-auto text-xs sm:text-sm">
            <Edit2 className="w-3 h-3 sm:w-4 sm:h-4" />
            Edit Profile
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
          <Card className="p-4 sm:p-6 animate-slideInLeft">
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Full Name</p>
                <p className="text-base sm:text-lg font-semibold">John Doe</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Email Address</p>
                <p className="text-base sm:text-lg font-semibold break-all">john@example.com</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Phone Number</p>
                <p className="text-base sm:text-lg font-semibold">+1 (555) 123-4567</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-6 animate-slideInRight">
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Member Since</p>
                <p className="text-base sm:text-lg font-semibold">January 2024</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Membership Tier</p>
                <p className="text-base sm:text-lg font-semibold text-accent">Premium Member</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Account Status</p>
                <p className="text-base sm:text-lg font-semibold text-green-600">Active</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-4 sm:p-6 animate-fadeIn" style={{ animationDelay: "200ms" }}>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Shipping Address</h3>
          <div className="space-y-2 text-muted-foreground text-sm sm:text-base">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>123 Main Street</span>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>New York, NY 10001</span>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>United States</span>
            </p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
