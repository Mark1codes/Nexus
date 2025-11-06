import Header from "@/components/header"
import Hero from "@/components/Landing"
import FeaturedProducts from "@/components/featured-products"
import ShopShowcase from "@/components/shop-showcase"
import Footer from "@/components/footer"
import FlashSaleBanner from "@/components/flash-sale-banner"
import LiveChatWidget from "@/components/live-chat-widget"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl mx-auto w-full">
          <FlashSaleBanner />
        </div>
        <FeaturedProducts />
        <ShopShowcase />
      </main>
      <Footer />
      <LiveChatWidget />
    </div>
  )
}
