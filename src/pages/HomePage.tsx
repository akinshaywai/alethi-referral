import { Link } from "react-router-dom"
import { Button } from "@/components/ui"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Earn 30% Commission
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join the Alethi affiliate program. Refer customers, earn commissions,
            and build passive income.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/apply">
                Become an Affiliate <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Join Our Program
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">30% Commission</h3>
              <p className="text-muted-foreground">
                Earn 30% on every subscription you refer
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Build a Team</h3>
              <p className="text-muted-foreground">
                Earn 5% override from affiliates you recruit
              </p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-muted-foreground">
                Track clicks, conversions, and earnings instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start earning?</h2>
          <p className="text-muted-foreground mb-8">
            Join hundreds of affiliates making passive income with Alethi
          </p>
          <Button size="lg" asChild>
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
