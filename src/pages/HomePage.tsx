import { Link } from "react-router-dom"
import { Button } from "@/components/ui"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900">
              Earn 30% Commission
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Join the Alethi affiliate program. Refer customers, earn commissions, and build passive income.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link to="/apply">
                  Become an Affiliate <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300" asChild>
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Features */}
      <section id="features" className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="rounded-lg bg-blue-50 p-3 w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">30% Commission</h3>
              <p className="text-gray-600 text-sm">
                Earn 30% on every subscription you refer
              </p>
            </div>
            <div>
              <div className="rounded-lg bg-blue-50 p-3 w-fit mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Build a Team</h3>
              <p className="text-gray-600 text-sm">
                Earn 5% override from affiliates you recruit
              </p>
            </div>
            <div>
              <div className="rounded-lg bg-blue-50 p-3 w-fit mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Tracking</h3>
              <p className="text-gray-600 text-sm">
                Track clicks, conversions, and earnings instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to start earning?</h2>
          <p className="text-gray-600 mb-8">
            Join hundreds of affiliates making passive income with Alethi
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
