"use client"

import { useRef, ReactNode } from "react"
import { useInView } from "framer-motion"

interface Props {
  children: ReactNode
  delay?: number
  direction?: "up" | "left" | "right" | "none"
  className?: string
}

export default function ScrollReveal({ children, delay = 0, direction = "up", className = "" }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  const getTransform = () => {
    if (!isInView) {
      if (direction === "up") return "translateY(32px)"
      if (direction === "left") return "translateX(-32px)"
      if (direction === "right") return "translateX(32px)"
    }
    return "translateY(0) translateX(0)"
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
