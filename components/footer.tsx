import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4 animate-slideInLeft">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold">N</span>
              </div>
              <span className="font-semibold">NEXUS</span>
            </div>
            <p className="text-sm text-muted-foreground">Premium minimalist apparel for the modern individual.</p>
            <div className="flex gap-3 pt-4">
              <a href="#" className="p-2 hover:bg-secondary rounded-lg transition-colors hover:scale-110 transform">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 hover:bg-secondary rounded-lg transition-colors hover:scale-110 transform">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 hover:bg-secondary rounded-lg transition-colors hover:scale-110 transform">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="animate-slideInLeft" style={{ animationDelay: "50ms" }}>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="/products"
                  className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="/products?category=Pants"
                  className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  Pants
                </a>
              </li>
              <li>
                <a
                  href="/products?category=Shirts"
                  className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  Shirts
                </a>
              </li>
              <li>
                <a
                  href="/products?category=Outerwear"
                  className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                >
                  Outerwear
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div className="animate-slideInLeft" style={{ animationDelay: "100ms" }}>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors hover:translate-x-1 inline-block">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-slideInRight" style={{ animationDelay: "150ms" }}>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@nexus.com">hello@nexus.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  123 Fashion Ave
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 NEXUS Apparel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
