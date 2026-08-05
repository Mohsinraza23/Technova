"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Cookie, X, ShieldCheck, BarChart2, Settings } from "lucide-react"

const STORAGE_KEY = "nyrvex-cookie-consent"

type Choice = "all" | "essential" | null

export default function CookieBanner() {
  const [choice, setChoice] = useState<Choice>("all") // assume accepted — prevents flash
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      // Small delay so page loads first
      setTimeout(() => {
        setChoice(null)
        setVisible(true)
      }, 1500)
    }
  }, [])

  const accept = (level: "all" | "essential") => {
    localStorage.setItem(STORAGE_KEY, level)
    setChoice(level)
    setVisible(false)
  }

  if (choice !== null) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[500] pointer-events-none"
      style={{
        transform: visible ? "translateY(0)" : "translateY(110%)",
        transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div
        className="pointer-events-auto w-full"
        style={{
          background: "rgba(6,10,22,0.98)",
          borderTop: "1px solid rgba(201,168,76,0.2)",
          backdropFilter: "blur(24px)",
          boxShadow: "0 -8px 40px rgba(0,0,0,0.5)",
        }}
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

        <div className="container mx-auto px-4 py-4">
          {!showDetails ? (
            /* ── Compact view ── */
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Icon + text */}
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}
                >
                  <Cookie className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#E8EDF5] mb-0.5">We use cookies</p>
                  <p className="text-xs text-[#8898AA] leading-relaxed">
                    We use cookies to enhance your experience and analyse site traffic.{" "}
                    <button
                      onClick={() => setShowDetails(true)}
                      className="underline transition-colors hover:text-[#C9A84C]"
                    >
                      Manage preferences
                    </button>
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => accept("essential")}
                  className="px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", color: "#8898AA" }}
                >
                  Essential only
                </button>
                <button
                  onClick={() => accept("all")}
                  className="btn-shine px-5 py-2 rounded-lg text-xs font-bold transition-all hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #A07830, #C9A84C)", color: "#0A0F1E", boxShadow: "0 4px 12px rgba(201,168,76,0.3)" }}
                >
                  Accept All
                </button>
                <button
                  onClick={() => accept("essential")}
                  className="w-7 h-7 flex items-center justify-center rounded-lg transition-all hover:bg-white/10"
                  style={{ color: "#8898AA" }}
                  aria-label="Dismiss"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* ── Detail view ── */
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-bold text-[#E8EDF5]">Cookie Preferences</p>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-xs text-[#8898AA] hover:text-[#C9A84C] transition-colors"
                >
                  ← Back
                </button>
              </div>

              <div className="space-y-3 mb-5">
                {/* Essential */}
                <div
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.1)" }}
                >
                  <ShieldCheck className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "#22c55e" }} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-[#E8EDF5]">Essential Cookies</p>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(34,197,94,0.1)", color: "#22c55e" }}>Always on</span>
                    </div>
                    <p className="text-[11px] text-[#8898AA] mt-0.5">Required for the site to function. Cannot be disabled.</p>
                  </div>
                </div>

                {/* Analytics */}
                <div
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.08)" }}
                >
                  <BarChart2 className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "#60A5FA" }} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-[#E8EDF5]">Analytics Cookies</p>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(96,165,250,0.1)", color: "#60A5FA" }}>Optional</span>
                    </div>
                    <p className="text-[11px] text-[#8898AA] mt-0.5">Help us understand how visitors use our site. All data is anonymous.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => accept("essential")}
                  className="px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", color: "#8898AA" }}
                >
                  Essential only
                </button>
                <button
                  onClick={() => accept("all")}
                  className="btn-shine px-5 py-2 rounded-lg text-xs font-bold transition-all hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #A07830, #C9A84C)", color: "#0A0F1E", boxShadow: "0 4px 12px rgba(201,168,76,0.3)" }}
                >
                  Accept All
                </button>
                <p className="text-[10px] text-[#8898AA] ml-auto">
                  <Link href="/contact" className="hover:text-[#C9A84C] transition-colors underline">Privacy Policy</Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
