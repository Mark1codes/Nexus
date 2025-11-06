import DashboardLayout from "@/components/dashboard-layout"
import OrderHistory from "@/components/order-history"
import ProfileCard from "@/components/profile-card"
import QuickStats from "@/components/quick-stats"
import WelcomeBanner from "@/components/dashboard-welcome-banner"
import RecommendedProducts from "@/components/recommended-products"
import LoyaltyRewards from "@/components/loyalty-rewards"
import ReferralProgram from "@/components/referral-program"
import PriceComparison from "@/components/price-comparison"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <WelcomeBanner />

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <QuickStats />
        </div>

        {/* Loyalty & Rewards Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Rewards</h2>
          <LoyaltyRewards />
        </div>

        <ReferralProgram />

        {/* Recommended Products */}
        <RecommendedProducts />

        <PriceComparison />

        {/* Profile and Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ProfileCard />
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            <OrderHistory />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
