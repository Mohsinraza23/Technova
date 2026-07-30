import Link from "next/link"
import { Mail } from "lucide-react"
import NewsletterForm from "./newsletter-form"
import TrustBadges from "./trust-badges"

const ROADMAP = [
  { name: "DispatchDOS v1", status: "Early Access", color: "#C9A84C", bg: "rgba(201,168,76,0.12)" },
  { name: "Bulk Canada Verification", status: "In Development", color: "#60A5FA", bg: "rgba(96,165,250,0.1)" },
  { name: "AI Load Matching", status: "Q4 2026", color: "#A78BFA", bg: "rgba(167,139,250,0.1)" },
  { name: "Compliance Monitor", status: "Planned", color: "#8898AA", bg: "rgba(136,152,170,0.08)" },
]

export default function Footer() {
  return (
    <footer className="w-full border-t" style={{ background: "rgba(8,13,28,0.95)", borderColor: "rgba(201,168,76,0.1)" }}>

      {/* ── Pre-footer newsletter strip ── */}
      <div className="border-b" style={{ borderColor: "rgba(201,168,76,0.08)", background: "rgba(201,168,76,0.03)" }}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#C9A84C", letterSpacing: "0.1em" }}>
                Stay Updated
              </p>
              <h3 className="text-lg font-bold text-[#E8EDF5]" style={{ fontFamily: "var(--font-montserrat)" }}>
                Get product updates &amp; early access invites
              </h3>
            </div>
            <div className="w-full md:w-[380px]">
              <NewsletterForm />
              <p className="text-[10px] text-[#8898AA] mt-2">
                No spam. Unsubscribe anytime. Product launches only.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-2xl font-black gradient-text" style={{ fontFamily: "var(--font-montserrat)", letterSpacing: "-0.02em" }}>
              Nyrvex
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#8898AA", maxWidth: "220px" }}>
              Building intelligent AI solutions — custom software, automation, and AI products for businesses.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/in/nyrvex-ai-19b456425/"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)", color: "#8898AA" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:hello@nyrvex.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)", color: "#8898AA" }}
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A84C", letterSpacing: "0.1em" }}>
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/dispatchdos" className="group flex items-center gap-2 text-sm transition-colors hover:text-[#C9A84C]" style={{ color: "#8898AA" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>
                  DispatchDOS
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded" style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}>
                    Live
                  </span>
                </Link>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm" style={{ color: "#8898AA", opacity: 0.6 }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60 flex-shrink-0"></span>
                  More AI Products
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded" style={{ background: "rgba(96,165,250,0.1)", color: "#60A5FA" }}>
                    Soon
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A84C", letterSpacing: "0.1em" }}>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "AI Services", href: "/ai-services" },
                { label: "Pricing", href: "/pricing" },
                { label: "Projects", href: "/projects" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Blog & Insights", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors hover:text-[#C9A84C]" style={{ color: "#8898AA" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Roadmap */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A84C", letterSpacing: "0.1em" }}>
              Product Roadmap
            </h4>
            <ul className="space-y-2.5">
              {ROADMAP.map((item) => (
                <li key={item.name} className="flex items-center justify-between gap-3">
                  <span className="text-sm truncate" style={{ color: "#8898AA" }}>{item.name}</span>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap flex-shrink-0"
                    style={{ background: item.bg, color: item.color }}
                  >
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] leading-relaxed" style={{ color: "#8898AA", opacity: 0.7 }}>
              Sign up above to get notified when new products launch.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t" style={{ borderColor: "rgba(201,168,76,0.08)" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs" style={{ color: "#8898AA" }}>
              &copy; {new Date().getFullYear()} Nyrvex. All rights reserved.
            </p>
            <TrustBadges compact />
            <p className="text-xs" style={{ color: "#8898AA", opacity: 0.6 }}>
              Built with precision. Powered by AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
