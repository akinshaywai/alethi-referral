import { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Input, Label } from "@/components/ui"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"

export function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sign up:", formData)
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
              Start Earning Today
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Join thousands of affiliates earning passive income. Get your unique referral link and start earning 30% commission on every referral.
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
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white overflow-y-auto">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Create account</h1>
            <p className="text-gray-600 text-lg">Join the affiliate program</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <Label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                required
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                required
              />
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <Label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-900 mb-2">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                required
              />
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all mt-8 text-base"
            >
              Create Account <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          {/* Sign In Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700">
                Sign in
              </Link>
            </p>
          </div>

          {/* Terms */}
          <p className="mt-8 text-center text-xs text-gray-500">
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
