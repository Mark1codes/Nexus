"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Gift, Zap } from "lucide-react"

export default function LoyaltyRewards() {
  const pointsEarned = 2450
  const pointsNeeded = 5000
  const pointsPercentage = (pointsEarned / pointsNeeded) * 100

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slideInRight">
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Loyalty Points</p>
            <p className="text-3xl font-bold">{pointsEarned}</p>
          </div>
          <div className="p-3 bg-accent/10 rounded-lg">
            <Zap className="w-6 h-6 text-accent" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Next tier unlock</span>
            <span className="font-medium">{pointsPercentage.toFixed(0)}%</span>
          </div>
          <Progress value={pointsPercentage} className="h-2" />
        </div>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Available Rewards</p>
            <p className="text-3xl font-bold">3</p>
          </div>
          <div className="p-3 bg-primary/10 rounded-lg">
            <Gift className="w-6 h-6 text-primary" />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">Redeem for exclusive discounts and free items</p>
      </Card>
    </div>
  )
}
