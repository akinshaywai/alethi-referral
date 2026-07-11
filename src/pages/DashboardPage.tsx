import { DollarSign, Link as LinkIcon, Users, TrendingUp, Copy, QrCode } from "lucide-react"
import { Button } from "@/components/ui"

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-gray-600">Track your earnings and referrals in real-time</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Earnings */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-600">Total Earnings</p>
              <div className="bg-blue-50 p-2 rounded-lg">
                <DollarSign className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900">$2,345</div>
            <p className="mt-2 text-xs text-gray-600">Lifetime earnings</p>
          </div>

          {/* Referral Clicks */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-600">Referral Clicks</p>
              <div className="bg-blue-50 p-2 rounded-lg">
                <LinkIcon className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900">1,234</div>
            <p className="mt-2 text-xs text-gray-600">Total clicks</p>
          </div>

          {/* Conversions */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-600">Conversions</p>
              <div className="bg-blue-50 p-2 rounded-lg">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900">45</div>
            <p className="mt-2 text-xs text-gray-600">Premium subscribers</p>
          </div>

          {/* Conversion Rate */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <div className="bg-blue-50 p-2 rounded-lg">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900">3.6%</div>
            <p className="mt-2 text-xs text-gray-600">Click to conversion</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Referral Link Card */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Your Referral Link</h3>
            <p className="text-sm text-gray-600 mb-4">Share this link to earn commissions</p>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4 break-all">
              <p className="text-sm font-mono text-gray-900">https://alethi.app/ref/ABC123456</p>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white" size="sm">
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
              <Button className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50" variant="outline" size="sm">
                <QrCode className="h-4 w-4 mr-2" />
                QR Code
              </Button>
            </div>
          </div>

          {/* Recent Commissions */}
          <div className="lg:col-span-2 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Recent Commissions</h3>
            <p className="text-sm text-gray-600 mb-6">Your latest earnings</p>

            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-medium text-gray-900">Customer {i}</p>
                    <p className="text-sm text-gray-600">Premium Plan</p>
                  </div>
                  <span className="font-semibold text-gray-900">$6.00</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
