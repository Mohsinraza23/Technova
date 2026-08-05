"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUp } from "lucide-react"

const SIZE = 48
const STROKE = 3
const RADIUS = (SIZE - STROKE * 2) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const circleRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0

      setVisible(scrollTop > 400)

      if (circleRef.current) {
        circleRef.current.style.strokeDashoffset = String(
          CIRCUMFERENCE - progress * CIRCUMFERENCE
        )
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-24 right-5 z-50 transition-all duration-500 hover:scale-110 focus:outline-none"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1) translateY(0)" : "scale(0.8) translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
        width: SIZE,
        height: SIZE,
      }}
    >
      {/* Progress ring */}
      <svg
        width={SIZE}
        height={SIZE}
        className="absolute inset-0 -rotate-90"
        style={{ filter: "drop-shadow(0 0 6px rgba(201,168,76,0.5))" }}
      >
        {/* Track */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="rgba(201,168,76,0.15)"
          strokeWidth={STROKE}
        />
        {/* Progress fill */}
        <circle
          ref={circleRef}
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="url(#ring-gradient)"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          style={{ transition: "stroke-dashoffset 0.15s linear" }}
        />
        <defs>
          <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A07830" />
            <stop offset="50%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#E8C96A" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center button */}
      <div
        className="absolute inset-[5px] rounded-full flex items-center justify-center"
        style={{
          background: "rgba(10,15,30,0.9)",
          border: "1px solid rgba(201,168,76,0.2)",
          backdropFilter: "blur(8px)",
        }}
      >
        <ArrowUp className="w-4 h-4" style={{ color: "#C9A84C" }} />
      </div>
    </button>
  )
}
