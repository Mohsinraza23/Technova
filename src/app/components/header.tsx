"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, FileSpreadsheet, ShieldCheck, BarChart3, Upload, CheckCircle, ArrowRight, Search } from "lucide-react"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

const MOBILE_EXTRA_LINKS = [
  { href: "/ai-services", label: "AI Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
]

const DISPATCH_FEATURES = [
  { icon: <Upload className="h-4 w-4" />, title: "Bulk Upload", desc: "1,000+ carriers via Excel/CSV" },
  { icon: <ShieldCheck className="h-4 w-4" />, title: "FMCSA Verification", desc: "30+ data fields per carrier" },
  { icon: <BarChart3 className="h-4 w-4" />, title: "Risk Scoring A–F", desc: "Instant go/no-go decision" },
  { icon: <FileSpreadsheet className="h-4 w-4" />, title: "Excel Report", desc: "Download & share instantly" },
  { icon: <CheckCircle className="h-4 w-4" />, title: "USA + Canada", desc: "Cross-border support" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [megaOpen, setMegaOpen] = useState(false)
  const pathname = usePathname()
  const megaRef = useRef<HTMLDivElement>(null)

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
    setMegaOpen(false)
  }, [pathname])

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Keyboard: Escape closes menus
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false)
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMenuOpen])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <>
      {/* Skip to content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold focus:text-[#0A0F1E]"
        style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
      >
        Skip to content
      </a>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 z-[60] h-[3px] w-full" style={{ background: "rgba(201,168,76,0.08)" }}>
        <div
          className="h-full transition-all duration-150"
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, #A07830, #C9A84C, #E8C96A)",
            boxShadow: "0 0 10px rgba(201,168,76,0.6)",
          }}
        />
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "glass shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 sm:h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group" aria-label="Nyrvex Home">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full fancy-border">
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #A07830, #C9A84C, #E8C96A)" }} />
              <Image
                src="/logo.jpg"
                alt="Nyrvex Logo"
                width={48}
                height={48}
                priority
                sizes="48px"
                className="rounded-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span
              className="text-xl sm:text-2xl font-extrabold gradient-text"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Nyrvex
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative text-sm lg:text-[0.9rem] font-medium px-3 py-2 rounded-lg transition-all ${
                  isActive(href)
                    ? "text-[#C9A84C]"
                    : "text-[#94A3B8] hover:text-[#E8EDF5] hover:bg-white/5"
                }`}
                aria-current={isActive(href) ? "page" : undefined}
              >
                {label}
                {isActive(href) && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                    style={{ background: "linear-gradient(90deg, #C9A84C, #E8C96A)" }}
                  />
                )}
              </Link>
            ))}

            {/* DispatchDOS mega menu */}
            <div
              ref={megaRef}
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                aria-expanded={megaOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 text-sm lg:text-[0.9rem] font-medium px-3 py-2 rounded-lg transition-all relative ${
                  isActive("/dispatchdos")
                    ? "text-[#C9A84C]"
                    : "text-[#94A3B8] hover:text-[#E8EDF5] hover:bg-white/5"
                }`}
              >
                DispatchDOS
                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform duration-200"
                  style={{ transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
                {isActive("/dispatchdos") && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                    style={{ background: "linear-gradient(90deg, #C9A84C, #E8C96A)" }}
                  />
                )}
              </button>

              {/* Mega Menu */}
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] rounded-2xl p-5 shadow-2xl border"
                style={{
                  background: "rgba(8, 13, 28, 0.98)",
                  borderColor: "rgba(201,168,76,0.2)",
                  backdropFilter: "blur(24px)",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 40px rgba(201,168,76,0.06)",
                  opacity: megaOpen ? 1 : 0,
                  transform: `translateX(-50%) translateY(${megaOpen ? "0" : "-8px"})`,
                  pointerEvents: megaOpen ? "auto" : "none",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                }}
                role="menu"
              >
                {/* Arrow */}
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-t border-l"
                  style={{ background: "rgba(8,13,28,0.98)", borderColor: "rgba(201,168,76,0.2)" }}
                />

                <div className="mb-4 pb-3 border-b" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold" style={{ color: "#C9A84C", fontFamily: "var(--font-montserrat)" }}>
                      DispatchDOS
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(34,197,94,0.1)", color: "#22c55e" }}>
                      Early Access
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Bulk FMCSA carrier verification for freight brokers
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {DISPATCH_FEATURES.map((f) => (
                    <Link
                      key={f.title}
                      href="/dispatchdos"
                      role="menuitem"
                      className="flex items-start gap-3 p-3 rounded-xl transition-all group"
                      style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.08)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)")}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.08)")}
                    >
                      <span className="mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }}>{f.icon}</span>
                      <div>
                        <p className="text-xs font-semibold text-[#E8EDF5]">{f.title}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{f.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  href="/contact"
                  role="menuitem"
                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-bold text-[#0A0F1E] transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                    boxShadow: "0 4px 15px rgba(201,168,76,0.25)",
                  }}
                >
                  Request Early Access
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* ⌘K hint */}
            <button
              onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true }))}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all hover:border-[#C9A84C]/30"
              style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.12)", color: "#8898AA" }}
              aria-label="Open command palette"
            >
              <Search className="h-3 w-3" />
              <span>Search</span>
              <kbd className="ml-1 text-[10px] px-1.5 py-0.5 rounded" style={{ background: "rgba(201,168,76,0.08)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.15)", fontFamily: "monospace" }}>⌘K</kbd>
            </button>
            <Link
              href="/contact"
              className="btn-shine inline-flex items-center gap-2 text-sm font-bold py-2.5 px-5 rounded-lg transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                color: "#0A0F1E",
                boxShadow: "0 4px 15px rgba(201,168,76,0.3)",
              }}
            >
              Request Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-all"
            style={{ background: isMenuOpen ? "rgba(201,168,76,0.1)" : "transparent", border: "1px solid rgba(201,168,76,0.15)" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className="transition-all duration-200"
              style={{ color: "#C9A84C" }}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden"
        style={{
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
          transition: "opacity 0.25s ease",
        }}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className="fixed top-0 right-0 bottom-0 z-50 md:hidden w-[85vw] max-w-sm flex flex-col"
        style={{
          background: "rgba(8, 13, 28, 0.98)",
          backdropFilter: "blur(24px)",
          borderLeft: "1px solid rgba(201,168,76,0.15)",
          transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        aria-label="Mobile navigation"
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
          <span className="text-lg font-extrabold gradient-text" style={{ fontFamily: "var(--font-montserrat)" }}>
            Nyrvex
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg"
            style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)", color: "#C9A84C" }}
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile search button */}
        <button
          onClick={() => {
            setIsMenuOpen(false)
            setTimeout(() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })), 300)
          }}
          className="mx-4 mt-4 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm w-[calc(100%-2rem)]"
          style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)", color: "#8898AA" }}
        >
          <Search className="h-4 w-4" style={{ color: "#C9A84C" }} />
          <span>Search pages...</span>
          <span className="ml-auto text-[10px] font-mono" style={{ color: "#C9A84C" }}>⌘K</span>
        </button>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all ${
                isActive(href)
                  ? "text-[#C9A84C] font-semibold"
                  : "text-[#94A3B8] hover:text-[#E8EDF5] hover:bg-white/5"
              }`}
              style={isActive(href) ? { background: "rgba(201,168,76,0.08)", borderLeft: "3px solid #C9A84C" } : {}}
              aria-current={isActive(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}

          {/* Extra links */}
          <div className="pt-1 pb-1 border-t my-2" style={{ borderColor: "rgba(201,168,76,0.08)" }} />
          {MOBILE_EXTRA_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all ${
                isActive(href)
                  ? "text-[#C9A84C] font-semibold"
                  : "text-[#94A3B8] hover:text-[#E8EDF5] hover:bg-white/5"
              }`}
              style={isActive(href) ? { background: "rgba(201,168,76,0.08)", borderLeft: "3px solid #C9A84C" } : {}}
              aria-current={isActive(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}

          {/* DispatchDOS section */}
          <Link
            href="/dispatchdos"
            onClick={() => setIsMenuOpen(false)}
            className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all ${
              isActive("/dispatchdos")
                ? "text-[#C9A84C] font-semibold"
                : "text-[#94A3B8] hover:text-[#E8EDF5] hover:bg-white/5"
            }`}
            style={isActive("/dispatchdos") ? { background: "rgba(201,168,76,0.08)", borderLeft: "3px solid #C9A84C" } : {}}
          >
            DispatchDOS
            <span className="ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(34,197,94,0.1)", color: "#22c55e" }}>
              Live
            </span>
          </Link>

          {/* DispatchDOS feature pills */}
          <div className="mx-1 p-4 rounded-xl space-y-2.5" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.1)" }}>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "#C9A84C" }}>
              DispatchDOS Features
            </p>
            {DISPATCH_FEATURES.map((f) => (
              <Link
                key={f.title}
                href="/dispatchdos"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-[#E8EDF5] py-1 transition-colors"
              >
                <span style={{ color: "#C9A84C" }}>{f.icon}</span>
                <div>
                  <span className="font-medium">{f.title}</span>
                  <span className="text-xs text-muted-foreground ml-2 hidden sm:inline">{f.desc}</span>
                </div>
              </Link>
            ))}
          </div>
        </nav>

        {/* Bottom CTA */}
        <div className="px-4 py-5 border-t space-y-3" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
          <Link
            href="/contact"
            className="btn-shine w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-[#0A0F1E] transition-all hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", boxShadow: "0 4px 15px rgba(201,168,76,0.3)" }}
          >
            Request Demo <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-center text-xs text-muted-foreground">
            Free consultation · No credit card required
          </p>
        </div>
      </div>
    </>
  )
}
