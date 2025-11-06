import { TrendingUp, Package, DollarSign, Award } from "lucide-react"

export default function QuickStats() {
  const stats = [
    { label: "Total Orders", value: "12", icon: Package, color: "text-blue-600" },
    { label: "Total Spent", value: "$1,290", icon: DollarSign, color: "text-green-600" },
    { label: "Loyalty Points", value: "2,450", icon: Award, color: "text-amber-600" },
    { label: "Savings", value: "$189", icon: TrendingUp, color: "text-purple-600" },
  ]

  return (
    <>
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition-all hover:scale-105 transform animate-fadeIn"
          style={{ animationDelay: `${i * 75}ms` }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-3xl font-semibold">{stat.value}</p>
            </div>
            <div className={`p-3 bg-secondary rounded-lg ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
