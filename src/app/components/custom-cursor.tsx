"use client"

import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only on desktop
    if (window.innerWidth < 1024) return

    let rafId: number
    let targetX = -100, targetY = -100

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
      // Directly mutate spotlight style — avoids React re-render on every mouse move
      if (spotlightRef.current) {
        spotlightRef.current.style.background =
          `radial-gradient(700px circle at ${e.clientX}px ${e.clientY}px, rgba(201,168,76,0.055), transparent 40%)`
      }
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const onHoverStart = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (el.closest("a, button, [data-cursor-hover]")) setHovering(true)
    }
    const onHoverEnd = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (el.closest("a, button, [data-cursor-hover]")) setHovering(false)
    }

    // Smooth trail
    const animate = () => {
      setTrail(prev => ({
        x: prev.x + (targetX - prev.x) * 0.12,
        y: prev.y + (targetY - prev.y) * 0.12,
      }))
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    window.addEventListener("mouseleave", onLeave)
    window.addEventListener("mouseenter", onEnter)
    document.addEventListener("mouseover", onHoverStart)
    document.addEventListener("mouseout", onHoverEnd)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      window.removeEventListener("mouseleave", onLeave)
      window.removeEventListener("mouseenter", onEnter)
      document.removeEventListener("mouseover", onHoverStart)
      document.removeEventListener("mouseout", onHoverEnd)
    }
  }, [visible])

  if (typeof window !== "undefined" && window.innerWidth < 1024) return null

  return (
    <>
      {/* Page-wide cursor spotlight glow */}
      <div
        ref={spotlightRef}
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          transition: "background 0.08s ease",
        }}
      />
      {/* Dot cursor */}
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          width: clicking ? "6px" : "8px",
          height: clicking ? "6px" : "8px",
          borderRadius: "50%",
          background: "#C9A84C",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transition: "width 0.15s, height 0.15s, opacity 0.3s",
          boxShadow: "0 0 6px rgba(201,168,76,0.8)",
        }}
      />
      {/* Trail ring */}
      <div
        style={{
          position: "fixed",
          left: trail.x,
          top: trail.y,
          width: hovering ? "44px" : clicking ? "24px" : "32px",
          height: hovering ? "44px" : clicking ? "24px" : "32px",
          borderRadius: "50%",
          border: `1.5px solid ${hovering ? "#E8C96A" : "rgba(201,168,76,0.5)"}`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: visible ? 1 : 0,
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.2s, opacity 0.3s",
          background: hovering ? "rgba(201,168,76,0.06)" : "transparent",
        }}
      />
    </>
  )
}
