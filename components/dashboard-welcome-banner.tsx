"use client"

import { useAuth } from "@/lib/auth-context"
import { Card } from "@/components/ui/card"
import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WelcomeBanner() {
  const { user } = useAuth()

  return (
    <Card className="relative overflow-hidden bg-linear-to-br from-primary/10 to-accent/5 border-accent/20 p-8 mb-8 animate-scaleIn">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent animate-pulse-soft" />
            <h2 className="text-2xl font-semibold">Welcome back, {user?.name}!</h2>
          </div>
          <p className="text-muted-foreground">Browse our latest collection and discover new premium pieces</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            Continue Shopping
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Card>
  )
}
