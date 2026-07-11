import { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Input, Label } from "@/components/ui"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"

export function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sign in:", { email, password })
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Brand */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white flex-col justify-between p-12">
        <div>
          <div className="text-4xl font-bold mb-2">Alethi</div>
          <p className="text-blue-100 text-lg">Affiliate Program</p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              Earn 30% Commission
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Join our affiliate program and start earning passive income from day one. Track everything in real-time and scale your earnings.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="bg-white/20 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">30% Direct Commission</p>
                <p className="text-blue-100 text-sm">On every subscription you refer</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-white/20 p-3 rounded-lg">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">Build a Team</p>
                <p className="text-blue-100 text-sm">Earn 5% override from your recruits</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-white/20 p-3 rounded-lg">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">Real-time Tracking</p>
                <p className="text-blue-100 text-sm">Monitor clicks, conversions, earnings</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-blue-200 text-sm">Join 500+ successful affiliates</p>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-600 text-lg">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <Label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                required
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label htmlFor="password" className="block text-sm font-semibold text-gray-900">
                  Password
                </Label>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  Forgot?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                required
              />
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all mt-8 text-base"
            >
              Sign In <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-700">
                Sign up now
              </Link>
            </p>
          </div>

          {/* Demo Info */}
          <div className="mt-12 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-xs font-medium text-gray-900 mb-2">Demo Credentials</p>
            <p className="text-xs text-gray-600">
              Email: <span className="font-mono font-medium text-gray-900">demo@alethi.app</span>
            </p>
            <p className="text-xs text-gray-600">
              Password: <span className="font-mono font-medium text-gray-900">demo123</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
