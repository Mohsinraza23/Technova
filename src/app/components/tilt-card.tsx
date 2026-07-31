"use client"

import { useRef, type MouseEvent, type ReactNode } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  intensity?: number
}

export default function TiltCard({ children, className = "", style, intensity = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Skip on touch devices
    if (window.matchMedia("(hover: none)").matches) return
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -intensity
    const rotateY = ((x - cx) / cx) * intensity

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    card.style.transition = "transform 0.1s ease"
  }

  const handleMouseLeave = () => {
    const card = ref.current
    if (!card) return
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    card.style.transition = "transform 0.5s ease"
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transformStyle: "preserve-3d", willChange: "transform" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
