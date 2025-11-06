"use client"

import { ShoppingBag, Truck, RotateCcw, Award } from "lucide-react"

const ShopShowcaseSection = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: "Premium Collection",
      description: "Curated minimalist apparel crafted with precision and quality materials",
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Free shipping on orders over $100. Delivered within 3-5 business days",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day return policy. No questions asked for unworn items",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Premium fabrics with lifetime warranty on manufacturing defects",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-secondary/30 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Why Shop With NEXUS</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            We're committed to delivering exceptional quality, style, and service to our customers worldwide
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-slideInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 sm:p-12 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-center animate-slideInUp">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Join the NEXUS Community</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm sm:text-base">
            Subscribe to get exclusive offers, early access to new collections, and style tips
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopShowcaseSection
