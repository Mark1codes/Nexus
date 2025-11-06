"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  LogOut,
  Settings,
  Home,
  Package,
  User,
  Menu,
  X,
  Heart,
  ShoppingBag,
  BarChart3,
  Bell,
  MapPin,
  CreditCard,
  HelpCircle,
  Download,
  ChevronLeft,
} from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"

interface DashboardLayoutProps {
  children: React.ReactNode
  showBackButton?: boolean
}

export default function DashboardLayout({ children, showBackButton = false }: DashboardLayoutProps) {
  const router = useRouter()
  const { user, logout } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const handleBack = () => {
    router.back()
  }

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home, badge: null },
    { href: "/dashboard/orders", label: "My Orders", icon: ShoppingBag, badge: "3" },
    { href: "/dashboard/wishlist", label: "Wishlist", icon: Heart, badge: "12" },
    { href: "/dashboard/purchases", label: "Purchases", icon: Package, badge: null },
    { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3, badge: null },
    { href: "/dashboard/notifications", label: "Notifications", icon: Bell, badge: "5" },
    { href: "/dashboard/addresses", label: "Saved Addresses", icon: MapPin, badge: null },
    { href: "/dashboard/payments", label: "Payment Methods", icon: CreditCard, badge: null },
  ]

  const supportItems = [
    { href: "/dashboard/profile", label: "Profile Settings", icon: User },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
    { href: "/dashboard/help", label: "Help & Support", icon: HelpCircle },
    { href: "/dashboard/downloads", label: "Downloads", icon: Download },
  ]

  if (!user) {
    router.push("/login")
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-card">
        <div className="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-6 lg:px-8 max-w-full w-full">
          <div className="flex items-center gap-2 sm:gap-3">
            {showBackButton && (
              <button
                onClick={handleBack}
                className="p-1.5 sm:p-2 hover:bg-secondary rounded transition-colors"
                title="Go back"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm sm:text-base">N</span>
              </div>
              <span className="hidden sm:inline font-semibold text-xs sm:text-sm tracking-tight">NEXUS</span>
            </Link>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <div className="hidden sm:flex items-center gap-2 sm:gap-3 pr-2 sm:pr-3 border-r border-border">
              <img
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
              />
              <div className="hidden md:block">
                <p className="text-xs text-muted-foreground">Welcome back</p>
                <p className="text-xs sm:text-sm font-medium">{user.name}</p>
              </div>
            </div>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-1.5 sm:p-2 hover:bg-secondary rounded"
            >
              {sidebarOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>

            <Button variant="ghost" size="icon" onClick={handleLogout} title="Logout" className="p-1.5 sm:p-2">
              <LogOut className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`${
            sidebarOpen ? "block" : "hidden"
          } lg:block fixed lg:relative top-14 sm:top-16 left-0 right-0 lg:top-auto lg:right-auto w-full lg:w-64 lg:border-r border-b lg:border-b-0 border-border bg-secondary/30 lg:min-h-[calc(100vh-64px)] overflow-y-auto transition-all animate-slideInLeft z-30 max-h-[calc(100vh-56px)] sm:max-h-[calc(100vh-64px)]`}
        >
          <nav className="p-4 sm:p-6 space-y-6 sm:space-y-8">
            {/* Main Navigation */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4 pl-3 sm:pl-4">
                Main
              </h3>
              <div className="space-y-1 sm:space-y-2">
                {navItems.map(({ href, label, icon: Icon, badge }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded hover:bg-secondary transition-all duration-200 text-foreground hover:text-primary group text-sm sm:text-base"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-xs sm:text-sm truncate">{label}</span>
                    </div>
                    {badge && (
                      <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0">
                        {badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Support & Account */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4 pl-3 sm:pl-4">
                Support & Account
              </h3>
              <div className="space-y-1 sm:space-y-2">
                {supportItems.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded hover:bg-secondary transition-all duration-200 text-foreground hover:text-primary group text-sm sm:text-base"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-xs sm:text-sm truncate">{label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="pt-4 sm:pt-6 border-t border-border">
              <div className="bg-linear-to-br from-primary/10 to-primary/5 rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground">Total Spent</p>
                  <p className="text-base sm:text-lg font-semibold">$1,245.00</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Loyalty Points</p>
                  <p className="text-base sm:text-lg font-semibold">2,450 pts</p>
                </div>
                <Button className="w-full text-xs sm:text-sm" size="sm">
                  Redeem Rewards
                </Button>
              </div>
            </div>
          </nav>
        </aside>

        <main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 animate-fadeIn w-full overflow-hidden">
          <div className="max-w-6xl w-full">{children}</div>
        </main>
      </div>
    </div>
  )
}
