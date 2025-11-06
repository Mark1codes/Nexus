"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function ReferralProgram() {
  const [copied, setCopied] = useState(false)
  const referralCode = "NEXUS2024"
  const rewards = 50

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 sm:p-6 animate-fadeIn">
      <div className="flex items-start gap-3 sm:gap-4 mb-6">
        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold mb-1">Referral Program</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">Share and earn rewards on every purchase</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <Card className="p-3 sm:p-4 bg-white">
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">Your Referral Code</p>
            <div className="flex gap-2">
              <Input value={referralCode} readOnly className="text-sm font-mono" />
              <Button onClick={handleCopy} size="sm" variant="outline" className="px-2 sm:px-3 bg-transparent">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </Card>

          <Card className="p-3 sm:p-4 bg-accent/10">
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">Available Rewards</p>
            <p className="text-2xl sm:text-3xl font-bold text-accent">${rewards}</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t">
          {[
            { title: "Share", desc: "Send code to friends" },
            { title: "They Buy", desc: "Get 10% off first order" },
            { title: "You Earn", desc: "$5 per successful referral" },
          ].map((step, i) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-accent mb-1">{i + 1}</div>
              <p className="font-semibold text-xs sm:text-sm">{step.title}</p>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>

        <Button className="w-full" size="sm">
          Invite Friends
        </Button>
      </div>
    </Card>
  )
}
