"use client"

import { useEffect, useRef } from "react"

interface Props {
  /** ID of the article content element to measure against */
  targetId: string
}

export default function ReadingProgress({ targetId }: Props) {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const onScroll = () => {
      const target = document.getElementById(targetId)
      if (!target) return

      const rect = target.getBoundingClientRect()
      const articleTop = target.offsetTop
      const articleHeight = target.offsetHeight
      const scrolled = window.scrollY - articleTop + window.innerHeight * 0.1

      const progress = Math.min(Math.max(scrolled / articleHeight, 0), 1)
      bar.style.width = `${progress * 100}%`

      // Change glow intensity as you near the end
      if (progress > 0.9) {
        bar.style.boxShadow = "0 0 12px rgba(201,168,76,0.9), 0 0 24px rgba(201,168,76,0.4)"
      } else {
        bar.style.boxShadow = "0 0 6px rgba(201,168,76,0.6)"
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [targetId])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-[3px] pointer-events-none"
      style={{ background: "rgba(201,168,76,0.08)" }}
    >
      <div
        ref={barRef}
        className="h-full rounded-r-full"
        style={{
          width: "0%",
          background: "linear-gradient(90deg, #A07830, #C9A84C, #E8C96A)",
          boxShadow: "0 0 6px rgba(201,168,76,0.6)",
          transition: "width 0.08s linear",
        }}
      />
    </div>
  )
}
