"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export default function FadeIn({ children, delay = 0, direction = "up", className }: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  const directions = {
    up:    { y: 30, x: 0 },
    down:  { y: -30, x: 0 },
    left:  { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97, filter: "blur(5px)", ...directions[direction] }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, filter: "blur(0px)", x: 0, y: 0 }
          : { opacity: 0, scale: 0.97, filter: "blur(5px)", ...directions[direction] }
      }
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
