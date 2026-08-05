"use client"

import { useEffect, useState, useCallback } from "react"
import { X } from "lucide-react"

const TOASTS = [
  { name: "Ahmed K.",    location: "Karachi, PK",   action: "signed up for DispatchDOS",      avatar: "AK", color: "#C9A84C" },
  { name: "Ryan J.",     location: "Texas, USA",     action: "verified 1,200 carriers today",  avatar: "RJ", color: "#22c55e" },
  { name: "Sara R.",     location: "Dubai, UAE",     action: "requested an AI chatbot",        avatar: "SR", color: "#60A5FA" },
  { name: "Marcus L.",   location: "New York, USA",  action: "caught a fraudulent carrier",    avatar: "ML", color: "#22c55e" },
  { name: "Omar B.",     location: "London, UK",     action: "launched his new website",       avatar: "OB", color: "#A78BFA" },
  { name: "Zara K.",     location: "Lahore, PK",     action: "tripled online orders",          avatar: "ZK", color: "#22c55e" },
  { name: "Farhan A.",   location: "Dubai, UAE",     action: "upgraded to DispatchDOS Pro",    avatar: "FA", color: "#C9A84C" },
  { name: "Nadia W.",    location: "Islamabad, PK",  action: "hit 10K monthly visitors",       avatar: "NW", color: "#A78BFA" },
  { name: "Hassan A.",   location: "Riyadh, SA",     action: "booked a free consultation",     avatar: "HA", color: "#60A5FA" },
  { name: "Lena M.",     location: "Toronto, CA",    action: "signed up for DispatchDOS",      avatar: "LM", color: "#C9A84C" },
]

interface Toast {
  id: number
  name: string
  location: string
  action: string
  avatar: string
  color: string
  timeAgo: string
}

const TIME_LABELS = ["just now", "2 min ago", "5 min ago", "8 min ago", "12 min ago"]

let toastIndex = Math.floor(Math.random() * TOASTS.length)

export default function SocialProofToast() {
  const [toast, setToast] = useState<Toast | null>(null)
  const [visible, setVisible] = useState(false)

  const showNext = useCallback(() => {
    const data = TOASTS[toastIndex % TOASTS.length]
    toastIndex++
    setToast({
      ...data,
      id: Date.now(),
      timeAgo: TIME_LABELS[Math.floor(Math.random() * TIME_LABELS.length)],
    })
    setVisible(true)
    setTimeout(() => setVisible(false), 4500)
  }, [])

  useEffect(() => {
    // First toast after 8s, then every 18s
    const first = setTimeout(showNext, 8000)
    const interval = setInterval(showNext, 18000)
    return () => { clearTimeout(first); clearInterval(interval) }
  }, [showNext])

  if (!toast) return null

  return (
    <div
      className="fixed bottom-28 left-4 z-[300] max-w-[300px]"
      style={{
        transform: visible ? "translateX(0) scale(1)" : "translateX(-120%) scale(0.9)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "rgba(8,13,28,0.96)",
          border: "1px solid rgba(201,168,76,0.18)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.06)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Gold top accent */}
        <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${toast.color}, transparent)` }} />

        <div className="p-3.5 flex items-start gap-3">
          {/* Avatar */}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#0A0F1E] text-xs font-black flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${toast.color}, ${toast.color}aa)` }}
          >
            {toast.avatar}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-xs font-bold text-[#E8EDF5]">{toast.name}</span>
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
                style={{ background: toast.color }}
              />
            </div>
            <p className="text-[11px] text-[#8898AA] leading-tight">
              {toast.action}
            </p>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="text-[10px]" style={{ color: "#8898AA", opacity: 0.6 }}>📍 {toast.location}</span>
              <span style={{ color: "rgba(201,168,76,0.3)" }}>·</span>
              <span className="text-[10px]" style={{ color: toast.color, opacity: 0.8 }}>{toast.timeAgo}</span>
            </div>
          </div>

          {/* Dismiss */}
          <button
            onClick={() => setVisible(false)}
            className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full transition-all hover:bg-white/10 mt-0.5"
            style={{ color: "#8898AA" }}
            aria-label="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  )
}
