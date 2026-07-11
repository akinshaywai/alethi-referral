import { Button, Input, Label } from "@/components/ui"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    paymentMethod: "",
    paymentEmail: "",
    socialMedia: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Apply form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Join the Program
          </h1>
          <p className="text-xl text-gray-600">
            Get approved in minutes and start earning commissions today
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <Label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Country */}
            <div>
              <Label htmlFor="country" className="block text-sm font-semibold text-gray-900 mb-2">
                Country
              </Label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="United States"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Payment Method */}
            <div>
              <Label htmlFor="paymentMethod" className="block text-sm font-semibold text-gray-900 mb-2">
                Payment Method
              </Label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
                required
              >
                <option value="">Select your preferred method</option>
                <option value="bank">Bank Transfer</option>
                <option value="paypal">PayPal</option>
                <option value="stripe">Stripe Connect</option>
              </select>
            </div>

            {/* Payment Email */}
            <div>
              <Label htmlFor="paymentEmail" className="block text-sm font-semibold text-gray-900 mb-2">
                Payment Email
              </Label>
              <Input
                id="paymentEmail"
                type="email"
                name="paymentEmail"
                value={formData.paymentEmail}
                onChange={handleChange}
                placeholder="payments@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Social Media */}
            <div>
              <Label htmlFor="socialMedia" className="block text-sm font-semibold text-gray-900 mb-2">
                Social Media <span className="text-gray-500 font-normal text-xs">(optional)</span>
              </Label>
              <Input
                id="socialMedia"
                name="socialMedia"
                value={formData.socialMedia}
                onChange={handleChange}
                placeholder="@yourhandle or profile URL"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all mt-8"
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Info */}
            <p className="text-center text-sm text-gray-600 pt-4">
              ✓ Instant approval • ✓ No fees • ✓ 30% commission
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
