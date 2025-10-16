import { Link } from "react-router-dom"
import { Twitter, Linkedin, Github } from "lucide-react"
import SharedAnimatedBackground from "./SharedAnimatedBackground"

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t">
      <SharedAnimatedBackground />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Placfy. All rights reserved.</p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-5 text-sm">
              <li>
                <Link to="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <Link aria-label="Twitter" to="#" className="rounded-md p-2 hover:bg-secondary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link aria-label="LinkedIn" to="#" className="rounded-md p-2 hover:bg-secondary">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link aria-label="GitHub" to="#" className="rounded-md p-2 hover:bg-secondary">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
