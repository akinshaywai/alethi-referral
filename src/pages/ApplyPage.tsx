import { Button, Input, Label } from "@/components/ui"
import { useState } from "react"

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
    // Will connect to Convex
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-lg">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Apply to join</h1>
            <p className="mt-2 text-gray-600">
              Start earning 30% commission on every referral
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full"
                required
              />
            </div>

            <div>
              <Label htmlFor="country" className="block text-sm font-medium text-gray-900 mb-2">
                Country
              </Label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter your country"
                className="w-full"
                required
              />
            </div>

            <div>
              <Label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-900 mb-2">
                Payment Method
              </Label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select payment method</option>
                <option value="bank">Bank Transfer</option>
                <option value="paypal">PayPal</option>
                <option value="stripe">Stripe</option>
              </select>
            </div>

            <div>
              <Label htmlFor="paymentEmail" className="block text-sm font-medium text-gray-900 mb-2">
                Payment Email
              </Label>
              <Input
                id="paymentEmail"
                type="email"
                name="paymentEmail"
                value={formData.paymentEmail}
                onChange={handleChange}
                placeholder="payment@example.com"
                className="w-full"
                required
              />
            </div>

            <div>
              <Label htmlFor="socialMedia" className="block text-sm font-medium text-gray-900 mb-2">
                Social Media <span className="text-gray-500 font-normal">(optional)</span>
              </Label>
              <Input
                id="socialMedia"
                name="socialMedia"
                value={formData.socialMedia}
                onChange={handleChange}
                placeholder="Twitter, LinkedIn, etc."
                className="w-full"
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11 text-base">
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
