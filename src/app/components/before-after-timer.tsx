"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"
import { Clock, Zap, CheckCircle } from "lucide-react"

export default function BeforeAfterTimer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [manualSecs, setManualSecs] = useState(0)
  const [dispatchSecs, setDispatchSecs] = useState(0)
  const [dispatchDone, setDispatchDone] = useState(false)
  const [started, setStarted] = useState(false)

  // Manual: counts up slowly (simulating 3h+ of work)
  // DispatchDOS: counts up to 224 seconds (3m 44s) then DONE
  const DISPATCH_TOTAL = 224 // 3 min 44 sec
  const MANUAL_MAX = 10800 // 3 hours in seconds (display only)

  useEffect(() => {
    if (!isInView || started) return
    setStarted(true)

    // DispatchDOS timer — fast, finishes at ~4 seconds real time
    let ds = 0
    const dispatchInterval = setInterval(() => {
      ds += Math.floor(Math.random() * 8 + 4) // jump 4-12 seconds per tick
      if (ds >= DISPATCH_TOTAL) {
        ds = DISPATCH_TOTAL
        setDispatchSecs(ds)
        setDispatchDone(true)
        clearInterval(dispatchInterval)
      } else {
        setDispatchSecs(ds)
      }
    }, 80)

    // Manual timer — slow crawl, never finishes
    let ms = 0
    const manualInterval = setInterval(() => {
      ms += 1
      setManualSecs(ms)
      if (ms >= MANUAL_MAX) clearInterval(manualInterval)
    }, 30)

    return () => {
      clearInterval(dispatchInterval)
      clearInterval(manualInterval)
    }
  }, [isInView, started])

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600)
    const m = Math.floor((s % 3600) / 60)
    const sec = s % 60
    if (h > 0) return `${h}h ${String(m).padStart(2, "0")}m ${String(sec).padStart(2, "0")}s`
    return `${String(m).padStart(2, "0")}m ${String(sec).padStart(2, "0")}s`
  }

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-6">
      {/* Manual side */}
      <div className="rounded-2xl p-6 relative overflow-hidden" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)" }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center">
            <Clock className="h-5 w-5 text-red-400" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-red-400">Manual FMCSA</p>
            <p className="text-xs text-muted-foreground">Verifying 1,000 carriers</p>
          </div>
        </div>

        {/* Timer display */}
        <div className="font-mono text-4xl font-black text-red-400 mb-3 tabular-nums">
          {formatTime(manualSecs)}
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            <span>Still searching carrier #{Math.min(Math.floor(manualSecs / 10) + 1, 1000)}...</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
            <span className="opacity-60">Copy-pasting to Excel...</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400/30" />
            <span className="opacity-40">Missing insurance expiry dates...</span>
          </div>
        </div>

        <div className="mt-4 w-full h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(239,68,68,0.1)" }}>
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${Math.min((manualSecs / MANUAL_MAX) * 100, 100)}%`,
              background: "linear-gradient(90deg, #ef4444, #f97316)"
            }}
          />
        </div>
        <p className="text-[10px] text-red-400/60 mt-1 text-right">
          {Math.min(Math.floor((manualSecs / MANUAL_MAX) * 100), 100)}% done
        </p>
      </div>

      {/* DispatchDOS side */}
      <div className="rounded-2xl p-6 relative overflow-hidden" style={{
        background: dispatchDone ? "rgba(201,168,76,0.08)" : "rgba(201,168,76,0.04)",
        border: `1px solid ${dispatchDone ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.2)"}`,
        transition: "all 0.5s ease"
      }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)" }}>
            <Zap className="h-5 w-5" style={{ color: "#C9A84C" }} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A84C" }}>DispatchDOS</p>
            <p className="text-xs text-muted-foreground">Verifying 1,000 carriers</p>
          </div>
        </div>

        {/* Timer display */}
        <div className="font-mono text-4xl font-black mb-3 tabular-nums" style={{ color: dispatchDone ? "#22c55e" : "#C9A84C" }}>
          {dispatchDone ? "03m 44s" : formatTime(dispatchSecs)}
        </div>

        {dispatchDone ? (
          <div className="space-y-2">
            {[
              "1,000 carriers verified",
              "30+ fields per carrier",
              "A–F risk scores assigned",
              "Excel report ready to download",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-green-400">
                <CheckCircle className="h-3.5 w-3.5 flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#C9A84C" }} />
              <span>Fetching carrier {Math.min(Math.floor(dispatchSecs * 4.46) + 1, 1000)} of 1,000...</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(201,168,76,0.5)" }} />
              <span className="opacity-70">Calculating risk scores...</span>
            </div>
          </div>
        )}

        <div className="mt-4 w-full h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(201,168,76,0.1)" }}>
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${Math.min((dispatchSecs / DISPATCH_TOTAL) * 100, 100)}%`,
              background: dispatchDone ? "linear-gradient(90deg, #22c55e, #16a34a)" : "linear-gradient(90deg, #A07830, #C9A84C, #E8C96A)",
              boxShadow: dispatchDone ? "0 0 8px rgba(34,197,94,0.4)" : "0 0 8px rgba(201,168,76,0.3)"
            }}
          />
        </div>
        <p className="text-[10px] mt-1 text-right" style={{ color: dispatchDone ? "#22c55e" : "rgba(201,168,76,0.6)" }}>
          {dispatchDone ? "✓ COMPLETE" : `${Math.floor((dispatchSecs / DISPATCH_TOTAL) * 100)}% done`}
        </p>
      </div>
    </div>
  )
}
