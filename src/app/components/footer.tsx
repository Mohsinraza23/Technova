import Link from "next/link"
import { Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full glass py-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Technova</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Professional software development services for businesses of all sizes.
            </p>
            <div className="flex space-x-6 pt-2">
              <Link
                href="https://www.facebook.com/share/p/1AEtzd3cvy/"
                className="text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors hover-scale"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/105704597/"
                className="text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors hover-scale"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors hover-lift"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-sm text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors hover-lift"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-violet-600 dark:hover:text-violet-400 transition-colors hover-lift"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors hover-lift"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Technova Software House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

