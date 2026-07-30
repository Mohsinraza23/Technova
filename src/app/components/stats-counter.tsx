"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

function Counter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <div ref={ref} className="flex flex-col items-center space-y-3">
      <span className="stat-number">
        {count}{suffix}
      </span>
      <span className="text-muted-foreground text-sm font-medium tracking-wide uppercase" style={{ letterSpacing: "0.06em", fontSize: "0.7rem" }}>{label}</span>
    </div>
  )
}

export default function StatsCounter() {
  return (
    <section className="section-padding border-y" style={{ borderColor: "rgba(201,168,76,0.1)", background: "rgba(201,168,76,0.02)" }}>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          <Counter target={18000} suffix="+" label="US Freight Brokers Market" />
          <Counter target={30} suffix="+" label="FMCSA Data Fields" />
          <Counter target={1000} suffix="+" label="Carriers per Batch" />
          <Counter target={24} suffix="/7" label="Automated Verification" />
        </div>
      </div>
    </section>
  )
}
