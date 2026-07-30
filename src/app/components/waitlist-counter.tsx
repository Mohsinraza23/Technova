"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Users, TrendingUp } from "lucide-react"

export default function WaitlistCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  const TARGET = 347

  useEffect(() => {
    if (!isInView) return
    let current = 0
    const increment = TARGET / 60
    const timer = setInterval(() => {
      current += increment
      if (current >= TARGET) {
        setCount(TARGET)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 20)
    return () => clearInterval(timer)
  }, [isInView])

  return (
    <div ref={ref}
      className="rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left"
      style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}
    >
      <div className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center"
        style={{ background: "rgba(201,168,76,0.15)" }}>
        <Users className="h-7 w-7" style={{ color: "#C9A84C" }} />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
          <span className="text-4xl font-black tabular-nums" style={{ color: "#C9A84C", fontFamily: "var(--font-montserrat)" }}>
            {count}
          </span>
          <div className="flex items-center gap-1 text-xs text-green-400 font-semibold bg-green-400/10 px-2 py-1 rounded-full">
            <TrendingUp className="h-3 w-3" />
            +12 today
          </div>
        </div>
        <p className="text-base font-semibold text-[#E8EDF5]">freight brokers on the waitlist</p>
        <p className="text-sm text-muted-foreground mt-1">
          Early access users get <span style={{ color: "#C9A84C" }} className="font-semibold">3 months Pro free</span> — limited spots remaining.
        </p>
      </div>
      <div className="flex-shrink-0">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse mx-auto sm:mx-0" />
        <p className="text-[10px] text-green-400 font-medium mt-1 whitespace-nowrap">Live count</p>
      </div>
    </div>
  )
}
