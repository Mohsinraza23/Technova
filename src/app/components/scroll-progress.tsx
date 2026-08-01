"use client"

import { useEffect, useRef } from "react"

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      bar.style.width = `${progress}%`
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-[2px] pointer-events-none"
      style={{ background: "rgba(201,168,76,0.08)" }}
    >
      <div
        ref={barRef}
        className="h-full rounded-r-full"
        style={{
          width: "0%",
          background: "linear-gradient(90deg, #A07830, #C9A84C, #E8C96A)",
          boxShadow: "0 0 8px rgba(201,168,76,0.7), 0 0 20px rgba(201,168,76,0.3)",
          transition: "width 0.05s linear",
        }}
      />
    </div>
  )
}
