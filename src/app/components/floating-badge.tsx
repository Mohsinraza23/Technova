"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export default function FloatingBadge() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("dispatch-badge-dismissed")) {
      return
    }
    const t = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(t)
  }, [])

  const dismiss = () => {
    setDismissed(true)
    sessionStorage.setItem("dispatch-badge-dismissed", "1")
  }

  if (dismissed || !visible) return null

  return (
    <div
      className="fixed bottom-40 right-5 z-40 animate-float"
      style={{ filter: "drop-shadow(0 8px 32px rgba(201,168,76,0.35))" }}
    >
      {/* Outer glow ring */}
      <div
        className="absolute -inset-[2px] rounded-2xl"
        style={{
          background: "linear-gradient(135deg, #A07830, #C9A84C, #E8C96A, #C9A84C, #A07830)",
          backgroundSize: "300% 300%",
          animation: "glow-border-shift 4s ease-in-out infinite",
          borderRadius: "1rem",
        }}
      />

      <div
        className="relative rounded-2xl overflow-hidden"
        style={{ background: "#0A0F1E", border: "none" }}
      >
        {/* Top accent line */}
        <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, #A07830, #C9A84C, #E8C96A)" }} />

        <div className="px-4 py-3 flex items-center gap-3">
          {/* Live indicator */}
          <div className="flex-shrink-0 flex flex-col items-center gap-1">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl" style={{ background: "rgba(201,168,76,0.1)" }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round"/>
                <rect x="9" y="3" width="6" height="4" rx="1" stroke="#C9A84C" strokeWidth="1.8"/>
                <path d="M9 12h6M9 16h4" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse border-2 border-[#0A0F1E]" />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-black uppercase tracking-widest" style={{ color: "#C9A84C" }}>
              DispatchDOS
            </p>
            <p className="text-[11px] text-[#8898AA] leading-tight mt-0.5">
              Verify 1,000+ carriers in<br />
              <span className="text-[#E8EDF5] font-semibold">minutes, not hours</span>
            </p>
            <Link
              href="/dispatchdos"
              className="inline-flex items-center gap-1 mt-2 text-[10px] font-bold px-3 py-1 rounded-full transition-all hover:brightness-110"
              style={{ background: "linear-gradient(135deg, #A07830, #C9A84C)", color: "#0A0F1E" }}
            >
              Try Free
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Dismiss */}
          <button
            onClick={dismiss}
            className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all hover:bg-white/10 self-start"
            style={{ color: "#8898AA" }}
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
