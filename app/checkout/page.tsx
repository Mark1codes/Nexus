import Header from "@/components/header"
import CheckoutForm from "@/components/checkout-form"
import Footer from "@/components/footer"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CheckoutForm />
      </main>
      <Footer />
    </div>
  )
}
