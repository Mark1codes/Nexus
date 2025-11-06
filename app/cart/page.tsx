import Header from "@/components/header"
import CartContent from "@/components/cart-content"
import Footer from "@/components/footer"

export default function CartPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CartContent />
      </main>
      <Footer />
    </div>
  )
}
