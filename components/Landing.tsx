"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slideInLeft">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight">
                Minimal Style,
                <br />
                <span className="text-accent">Maximum Quality</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Curated collection of premium apparel designed for the discerning minimalist. Every piece crafted with
                intention and precision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/products">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Explore Collection
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="#about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 gap-8 pt-8 border-t border-border animate-fadeIn"
              style={{ animationDelay: "200ms" }}
            >
              <div className="space-y-1">
                <p className="text-3xl font-semibold">1000+</p>
                <p className="text-sm text-muted-foreground">Satisfied Customers</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-semibold">15+</p>
                <p className="text-sm text-muted-foreground">Styles Available</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full rounded-lg overflow-hidden bg-linear-to-br from-muted to-secondary animate-slideInRight">
            <img
              src="/minimal-fashion-minimalist-lifestyle-clothing.jpg"
              alt="Premium Apparel"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
