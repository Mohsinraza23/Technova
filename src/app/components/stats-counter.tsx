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
    <div ref={ref} className="flex flex-col items-center space-y-2">
      <span className="heading-lg gradient-text">
        {count}{suffix}
      </span>
      <span className="text-muted-foreground font-medium">{label}</span>
    </div>
  )
}

export default function StatsCounter() {
  return (
    <section className="section-padding border-y border-white/10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Counter target={200} suffix="+" label="Projects Delivered" />
          <Counter target={3} suffix="+" label="Years Experience" />
          <Counter target={50} suffix="+" label="Happy Clients" />
          <Counter target={24} suffix="/7" label="Support Available" />
        </div>
      </div>
    </section>
  )
}
