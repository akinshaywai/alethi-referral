import { DollarSign, Link as LinkIcon, Users, TrendingUp, Copy, QrCode, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui"

export function DashboardPage() {
  const stats = [
    { label: "Total Earnings", value: "$2,345", subtitle: "Lifetime", icon: DollarSign, color: "from-blue-500 to-blue-600" },
    { label: "Referral Clicks", value: "1,234", subtitle: "This month", icon: LinkIcon, color: "from-indigo-500 to-indigo-600" },
    { label: "Conversions", value: "45", subtitle: "Premium subs", icon: Users, color: "from-emerald-500 to-emerald-600" },
    { label: "Conversion Rate", value: "3.6%", subtitle: "Click → Purchase", icon: TrendingUp, color: "from-purple-500 to-purple-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-8 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-lg text-gray-600">Track your earnings and referrals in real-time</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                    <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
                    <p className="text-xs text-gray-500 mt-2">{stat.subtitle}</p>
                  </div>
                  <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-xl`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>+12.5% this month</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Referral Link Card */}
          <div className="lg:col-span-1 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Referral Link</h2>
            <p className="text-gray-600 mb-6">Share to earn 30% commissions</p>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100 mb-6">
              <p className="text-sm font-mono text-gray-900 break-all font-semibold">
                https://alethi.app/ref/ABC123456
              </p>
            </div>

            <div className="flex gap-2 mb-6">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
                <Copy className="h-4 w-4 mr-2" />
                Copy Link
              </Button>
              <Button className="flex-1 border-2 border-gray-300 text-gray-900 hover:bg-gray-50 font-semibold rounded-lg" variant="outline">
                <QrCode className="h-4 w-4 mr-2" />
                QR Code
              </Button>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-600 font-medium mb-3">QUICK STATS</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Clicks This Week</span>
                  <span className="font-bold text-gray-900">234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Conversions</span>
                  <span className="font-bold text-gray-900">12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Commissions */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Recent Commissions</h2>
                <p className="text-gray-600 mt-1">Your latest earnings</p>
              </div>
              <Button variant="outline" className="border-gray-300">View All</Button>
            </div>

            <div className="space-y-1">
              {[
                { name: "Sarah Johnson", plan: "Premium Plan", amount: "$6.00", time: "2 hours ago" },
                { name: "Mike Chen", plan: "Premium Plan", amount: "$6.00", time: "5 hours ago" },
                { name: "Alex Rivera", plan: "Premium Plan", amount: "$6.00", time: "Yesterday" },
              ].map((commission, i) => (
                <div key={i} className="group flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{commission.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                        {commission.plan}
                      </span>
                      <span className="text-xs text-gray-500">{commission.time}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900 text-lg">{commission.amount}</p>
                    <p className="text-xs text-emerald-600 font-medium">✓ Available</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
