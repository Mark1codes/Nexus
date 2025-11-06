import DashboardLayout from "@/components/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, Lock, Eye, LogOut } from "lucide-react"

export default function SettingsPage() {
  return (
    <DashboardLayout showBackButton={true}>
      <div className="space-y-4 sm:space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold">Settings</h1>
          <p className="text-muted-foreground text-sm sm:text-base">Manage your account preferences</p>
        </div>

        <Card className="p-4 sm:p-6 space-y-4 sm:space-y-6 animate-slideInLeft">
          <div className="border-b border-border pb-4 sm:pb-6 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-1 min-w-0">
                <h3 className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                  <Bell className="w-4 h-4 flex-shrink-0" />
                  Email Notifications
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Receive order updates and promotions</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded cursor-pointer flex-shrink-0" defaultChecked />
            </div>
          </div>

          <div className="border-b border-border pb-4 sm:pb-6 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-1 min-w-0">
                <h3 className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                  <Eye className="w-4 h-4 flex-shrink-0" />
                  Marketing Emails
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Get notified about new collections and sales</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded cursor-pointer flex-shrink-0" />
            </div>
          </div>

          <div className="border-b border-border pb-4 sm:pb-6 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-1 min-w-0">
                <h3 className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                  <Lock className="w-4 h-4 flex-shrink-0" />
                  Two-Factor Authentication
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded cursor-pointer flex-shrink-0" />
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <Button className="w-full gap-2 bg-red-600 hover:bg-red-700 text-xs sm:text-sm">
              <LogOut className="w-4 h-4" />
              Logout from All Devices
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
