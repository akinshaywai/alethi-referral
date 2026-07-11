import { Link } from "react-router-dom"
import { Button } from "@/components/ui"

export function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Alethi
          </Link>
          <div className="hidden md:flex gap-8">
            <Link
              to="/apply"
              className="text-sm text-gray-600 hover:text-gray-900 transition"
            >
              Become Affiliate
            </Link>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition"
            >
              Docs
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
