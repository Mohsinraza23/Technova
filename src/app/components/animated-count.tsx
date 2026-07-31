"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

interface Props {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  delay?: number
  className?: string
}

export default function AnimatedCount({
  value, suffix = "", prefix = "", duration = 1600, delay = 0, className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!isInView || started) return
    const timeout = setTimeout(() => {
      setStarted(true)
      const startTime = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        setCount(Math.round(easeOutCubic(progress) * value))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, delay)
    return () => clearTimeout(timeout)
  }, [isInView, started, value, duration, delay])

  const display = count >= 1000 ? count.toLocaleString("en-US") : String(count)

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  )
}
