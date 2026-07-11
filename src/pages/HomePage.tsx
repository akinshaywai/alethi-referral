import { Link } from "react-router-dom"
import { Button } from "@/components/ui"
import { ArrowRight, TrendingUp, Users, Zap, CheckCircle2 } from "lucide-react"

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <span className="text-sm font-medium text-blue-700">🚀 Join 500+ Affiliates</span>
            </div>

            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Earn 30% Commission
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Build passive income by referring customers to Alethi. Track everything in real-time, earn commissions instantly, and scale your earnings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all h-12 px-8 text-base font-semibold" asChild>
                <Link to="/apply">
                  Start Earning Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-900 hover:bg-gray-50 h-12 px-8 text-base font-semibold" asChild>
                <a href="#features">See How It Works</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-8 rounded-2xl border border-gray-200 group-hover:border-blue-200 transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">30% Per Referral</h3>
                <p className="text-gray-600 leading-relaxed">
                  Earn 30% commission on every premium subscription your referrals make
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-8 rounded-2xl border border-gray-200 group-hover:border-blue-200 transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Build Your Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Recruit other affiliates and earn 5% override commission on their sales
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-8 rounded-2xl border border-gray-200 group-hover:border-blue-200 transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Tracking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Track clicks, conversions, and earnings with live updates in your dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Everything You Need</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Unique referral links with QR codes",
              "Real-time earning dashboard",
              "Marketing assets & templates",
              "Dedicated affiliate support",
              "Instant commission payouts",
              "Advanced analytics & reports"
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                </div>
                <p className="text-lg text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Ready to earn passive income?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Join our affiliate program today and start earning from day one
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg h-12 px-8 text-base font-semibold" asChild>
              <Link to="/apply">Apply to Join</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 h-12 px-8 text-base font-semibold">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
