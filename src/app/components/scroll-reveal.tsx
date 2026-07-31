"use client"

import { useRef, ReactNode } from "react"
import { useInView } from "framer-motion"

interface Props {
  children: ReactNode
  delay?: number
  direction?: "up" | "left" | "right" | "none"
  className?: string
}

const EASING = "cubic-bezier(0.16, 1, 0.3, 1)"

export default function ScrollReveal({ children, delay = 0, direction = "up", className = "" }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const getTransform = () => {
    if (!isInView) {
      if (direction === "up") return "translateY(28px) scale(0.97)"
      if (direction === "left") return "translateX(-28px) scale(0.97)"
      if (direction === "right") return "translateX(28px) scale(0.97)"
    }
    return "translateY(0) translateX(0) scale(1)"
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: getTransform(),
        filter: isInView ? "blur(0px)" : "blur(4px)",
        transition: `opacity 0.7s ${EASING} ${delay}s, transform 0.7s ${EASING} ${delay}s, filter 0.7s ${EASING} ${delay}s`,
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  )
}
