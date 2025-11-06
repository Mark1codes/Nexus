"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export default function FlashSaleBanner() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 32 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          minutes = 59
          hours--
        }
        if (hours < 0) {
          hours = 0
          minutes = 0
          seconds = 0
        }
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="bg-linear-to-r from-accent via-accent/80 to-accent/60 text-accent-foreground overflow-hidden animate-fadeIn">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
            <div>
              <h3 className="font-bold text-lg sm:text-xl">Flash Sale</h3>
              <p className="text-sm sm:text-base opacity-90">Up to 40% off on selected items</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex gap-1 sm:gap-2">
              {[
                { label: "H", value: String(timeLeft.hours).padStart(2, "0") },
                { label: "M", value: String(timeLeft.minutes).padStart(2, "0") },
                { label: "S", value: String(timeLeft.seconds).padStart(2, "0") },
              ].map((unit) => (
                <div key={unit.label} className="text-center">
                  <div className="bg-black/20 rounded px-2 py-1 font-mono font-bold text-sm sm:text-base">
                    {unit.value}
                  </div>
                  <span className="text-xs opacity-75">{unit.label}</span>
                </div>
              ))}
            </div>
            <Button variant="secondary" size="sm" className="sm:size-auto text-xs sm:text-sm whitespace-nowrap">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
