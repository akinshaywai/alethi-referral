import { Link } from "react-router-dom"
import { Button } from "@/components/ui"

export function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Alethi
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-12 items-center">
          <Link to="/apply" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
            Become Affiliate
          </Link>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
            Docs
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
            asChild
          >
            <Link to="/login">Sign In</Link>
          </Button>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all"
            asChild
          >
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
