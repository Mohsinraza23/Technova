import Link from "next/link"
import { Mail, ArrowUpRight } from "lucide-react"
import NewsletterForm from "./newsletter-form"
import TrustBadges from "./trust-badges"

const ROADMAP = [
  { name: "DispatchDOS v1",          status: "Early Access",   color: "#C9A84C", bg: "rgba(201,168,76,0.12)" },
  { name: "Bulk Canada Verification", status: "In Development", color: "#60A5FA", bg: "rgba(96,165,250,0.1)"  },
  { name: "AI Load Matching",         status: "Q4 2026",        color: "#A78BFA", bg: "rgba(167,139,250,0.1)" },
  { name: "Compliance Monitor",       status: "Planned",        color: "#8898AA", bg: "rgba(136,152,170,0.08)"},
]

const NAV_LINKS = [
  { label: "About Us",       href: "/about"        },
  { label: "Services",       href: "/services"     },
  { label: "AI Services",    href: "/ai-services"  },
  { label: "Pricing",        href: "/pricing"      },
  { label: "Projects",       href: "/projects"     },
  { label: "Testimonials",   href: "/testimonials" },
  { label: "Blog & Insights",href: "/blog"         },
  { label: "Contact Us",     href: "/contact"      },
]

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden" style={{ background: "rgba(6,10,22,0.98)" }}>

      {/* Animated gradient top border */}
      <div
        className="h-[2px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #A07830 20%, #C9A84C 40%, #E8C96A 50%, #C9A84C 60%, #A07830 80%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "glow-border-shift 4s ease-in-out infinite",
        }}
      />

      {/* Background depth glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-120px", left: "50%", transform: "translateX(-50%)",
          width: "800px", height: "400px",
          background: "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Newsletter strip ── */}
      <div className="border-b" style={{ borderColor: "rgba(201,168,76,0.07)", background: "rgba(201,168,76,0.02)" }}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: "#C9A84C", letterSpacing: "0.12em" }}>
                Stay in the Loop
              </p>
              <h3 className="text-lg font-bold text-[#E8EDF5]" style={{ fontFamily: "var(--font-montserrat)" }}>
                Get product updates &amp; early access invites
              </h3>
            </div>
            <div className="w-full md:w-[380px]">
              <NewsletterForm />
              <p className="text-[10px] text-[#8898AA] mt-2">No spam. Unsubscribe anytime. Product launches only.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="container mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            {/* Logo wordmark */}
            <div>
              <span
                className="text-3xl font-black gradient-text"
                style={{ fontFamily: "var(--font-montserrat)", letterSpacing: "-0.03em" }}
              >
                Nyrvex
              </span>
              <div className="h-[2px] w-10 mt-1 rounded-full" style={{ background: "linear-gradient(90deg, #A07830, #C9A84C)" }} />
            </div>

            <p className="text-sm leading-relaxed" style={{ color: "#8898AA", maxWidth: "210px" }}>
              Building focused AI products that solve real industry problems and drive measurable results.
            </p>

            {/* Contact pill */}
            <a
              href="mailto:hello@nyrvex.com"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all hover:-translate-y-0.5 hover:brightness-110"
              style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.18)", color: "#C9A84C" }}
            >
              <Mail className="h-3.5 w-3.5" />
              hello@nyrvex.com
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.linkedin.com/in/nyrvex-ai-19b456425/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:-translate-y-0.5 hover:border-[#C9A84C]/40 hover:text-[#C9A84C]"
                style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.12)", color: "#8898AA" }}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.15em]" style={{ color: "#C9A84C" }}>
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/dispatchdos"
                  className="group flex items-center gap-2.5 text-sm transition-colors hover:text-[#C9A84C]"
                  style={{ color: "#8898AA" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
                  DispatchDOS
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}>
                    Live
                  </span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </Link>
              </li>
              <li className="flex items-center gap-2.5 text-sm" style={{ color: "#8898AA", opacity: 0.5 }}>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50 flex-shrink-0" />
                More AI Products
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "rgba(96,165,250,0.1)", color: "#60A5FA" }}>
                  Soon
                </span>
              </li>
            </ul>

            {/* CTA box */}
            <div
              className="mt-4 p-3.5 rounded-xl"
              style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.12)" }}
            >
              <p className="text-[11px] font-bold text-[#E8EDF5] mb-1">Start a project</p>
              <p className="text-[10px] text-[#8898AA] mb-2.5">Get a free consultation with our team.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-[10px] font-black px-3 py-1.5 rounded-lg transition-all hover:brightness-110"
                style={{ background: "linear-gradient(135deg, #A07830, #C9A84C)", color: "#0A0F1E" }}
              >
                Book Free Call
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.15em]" style={{ color: "#C9A84C" }}>
              Company
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm transition-colors hover:text-[#C9A84C]"
                    style={{ color: "#8898AA" }}
                  >
                    <span
                      className="w-0 h-px rounded-full transition-all duration-300 group-hover:w-3 flex-shrink-0"
                      style={{ background: "#C9A84C" }}
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Roadmap */}
          <div className="space-y-5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.15em]" style={{ color: "#C9A84C" }}>
              Product Roadmap
            </h4>
            <ul className="space-y-3">
              {ROADMAP.map((item) => (
                <li key={item.name} className="flex items-center justify-between gap-3">
                  <span className="text-[13px] truncate" style={{ color: "#8898AA" }}>{item.name}</span>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
                    style={{ background: item.bg, color: item.color }}
                  >
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="pt-2">
              <TrustBadges compact />
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t" style={{ borderColor: "rgba(201,168,76,0.07)" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs" style={{ color: "#8898AA" }}>
              &copy; {new Date().getFullYear()} <span style={{ color: "#C9A84C" }}>Nyrvex</span>. All rights reserved.
            </p>
            <p className="text-xs font-medium" style={{ color: "#8898AA", opacity: 0.55 }}>
              Built with precision &mdash; Powered by AI
            </p>
            <p className="text-xs" style={{ color: "#8898AA", opacity: 0.5 }}>
              Founder: <span style={{ color: "#C9A84C", opacity: 1 }}>Mohsin Raza</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
