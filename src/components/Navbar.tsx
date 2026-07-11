import { Link } from "react-router-dom"
import { Button } from "@/components/ui"

export function Navbar() {
  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold text-primary">
            Alethi
          </Link>
          <div className="hidden md:flex gap-6">
            <Link
              to="/apply"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Become Affiliate
            </Link>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Docs
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
