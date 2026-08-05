"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const pathname = usePathname()

  // Hide on contact & dispatchdos pages — user is already converting
  const hidden = pathname === "/contact" || pathname === "/dispatchdos"

  useEffect(() => {
    setDismissed(false)
    setVisible(false)
  }, [pathname])

  useEffect(() => {
    if (hidden) return

    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [hidden, pathname])

  if (hidden || dismissed) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[200] pointer-events-none"
      style={{
        transform: visible ? "translateY(0)" : "translateY(110%)",
        transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Gradient top fade */}
      <div
        className="h-8 w-full pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(6,10,22,0.9), transparent)" }}
      />

      <div
        className="pointer-events-auto w-full"
        style={{ background: "rgba(6,10,22,0.97)", borderTop: "1px solid rgba(201,168,76,0.18)", backdropFilter: "blur(20px)" }}
      >
        {/* Animated gold top line */}
        <div
          className="h-[2px] w-full"
          style={{
            background: "linear-gradient(90deg, transparent, #A07830, #C9A84C, #E8C96A, #C9A84C, #A07830, transparent)",
            backgroundSize: "200% 100%",
            animation: "glow-border-shift 3s ease-in-out infinite",
          }}
        />

        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Left — message */}
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="hidden sm:flex w-8 h-8 rounded-lg items-center justify-center flex-shrink-0"
              style={{ background: "rgba(201,168,76,0.12)" }}
            >
              <span className="text-sm">⚡</span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-[#E8EDF5] truncate">
                Ready to build something intelligent?
              </p>
              <p className="text-[11px] text-[#8898AA] hidden sm:block">
                Free consultation · No credit card required
              </p>
            </div>
          </div>

          {/* Right — CTAs */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href="/dispatchdos"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all hover:-translate-y-0.5"
              style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", color: "#C9A84C" }}
            >
              Try DispatchDOS
            </Link>
            <Link
              href="/contact"
              className="btn-shine inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #A07830, #C9A84C)", color: "#0A0F1E", boxShadow: "0 4px 15px rgba(201,168,76,0.3)" }}
            >
              Get Started
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button
              onClick={() => setDismissed(true)}
              className="w-7 h-7 flex items-center justify-center rounded-lg transition-all hover:bg-white/10"
              style={{ color: "#8898AA" }}
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
