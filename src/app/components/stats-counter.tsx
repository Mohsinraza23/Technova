"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

const STATS = [
  { target: 18000, suffix: "+", label: "US Freight Brokers", sublabel: "Target market size", prefix: "" },
  { target: 30,    suffix: "+", label: "FMCSA Data Fields",  sublabel: "Per carrier verified", prefix: "" },
  { target: 1000,  suffix: "+", label: "Carriers Per Batch", sublabel: "Bulk verification",   prefix: "" },
  { target: 500,   suffix: "M+",label: "Lost to Fraud/Year", sublabel: "Industry problem size", prefix: "$" },
]

// Ease-out cubic — starts fast, slows to final value
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function formatNumber(n: number): string {
  if (n >= 1000) return n.toLocaleString("en-US")
  return String(n)
}

function Counter({
  target, suffix, label, sublabel, prefix, delay = 0,
}: {
  target: number; suffix: string; label: string; sublabel: string; prefix: string; delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!isInView || started) return
    const timeout = setTimeout(() => {
      setStarted(true)
      const duration = 1800
      const startTime = performance.now()

      const tick = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = easeOutCubic(progress)
        setCount(Math.round(eased * target))
        if (progress < 1) requestAnimationFrame(tick)
        else setDone(true)
      }
      requestAnimationFrame(tick)
    }, delay)

    return () => clearTimeout(timeout)
  }, [isInView, started, target, delay])

  const progress = done ? 100 : Math.round((count / target) * 100)

  return (
    <div ref={ref} className="group flex flex-col items-center text-center px-4 py-2">
      {/* Number */}
      <div className="relative mb-3">
        <span
          className="stat-number tabular-nums"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {prefix}{formatNumber(count)}{suffix}
        </span>
        {/* Animated underline bar */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] rounded-full transition-all duration-300"
          style={{
            width: `${progress}%`,
            maxWidth: "80px",
            background: "linear-gradient(90deg, #A07830, #C9A84C, #E8C96A)",
            boxShadow: done ? "0 0 10px rgba(201,168,76,0.5)" : "none",
          }}
        />
      </div>

      {/* Labels */}
      <p className="text-sm font-bold text-[#E8EDF5] mt-4" style={{ fontFamily: "var(--font-montserrat)" }}>
        {label}
      </p>
      <p className="text-[11px] text-muted-foreground mt-0.5">{sublabel}</p>
    </div>
  )
}

export default function StatsCounter() {
  return (
    <section
      className="section-padding border-y relative overflow-hidden"
      style={{ borderColor: "rgba(201,168,76,0.1)", background: "rgba(201,168,76,0.02)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((s, i) => (
            <Counter key={s.label} {...s} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}
