"use client"

import Link from "next/link"
import { ShoppingCart, Menu, X, User, LogOut } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background animate-slideInLeft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="hidden sm:inline font-semibold text-sm tracking-tight">NEXUS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/products" className="text-sm font-medium hover:text-accent transition-colors">
              Shop
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-border">
                <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="w-6 h-6 rounded-full" />
                <Link href="/dashboard" className="text-sm font-medium hover:text-accent transition-colors">
                  {user.name}
                </Link>
              </div>
            ) : (
              <Link href="/login" className="p-2 hover:bg-secondary rounded transition-colors">
                <User className="w-5 h-5 text-foreground" />
              </Link>
            )}
            <Link href="/cart" className="p-2 hover:bg-secondary rounded transition-colors relative group">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                0
              </span>
            </Link>
            <button className="md:hidden p-2 hover:bg-secondary rounded" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-border animate-slideInLeft">
            <Link href="/products" className="block px-4 py-2 text-sm hover:bg-secondary transition-colors">
              Shop
            </Link>
            <Link href="#" className="block px-4 py-2 text-sm hover:bg-secondary transition-colors">
              About
            </Link>
            <Link href="#" className="block px-4 py-2 text-sm hover:bg-secondary transition-colors">
              Contact
            </Link>
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm hover:bg-secondary transition-colors font-medium border-t border-border mt-2 pt-2"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors flex items-center gap-2 text-destructive"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="block px-4 py-2 text-sm hover:bg-secondary transition-colors font-medium border-t border-border mt-2 pt-2"
              >
                Sign In
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
