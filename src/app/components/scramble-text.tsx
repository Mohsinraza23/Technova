"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*"

interface Props {
  text: string
  className?: string
  delay?: number // seconds
  as?: keyof JSX.IntrinsicElements
}

export default function ScrambleText({ text, className = "", delay = 0, as: Tag = "span" }: Props) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" })
  const [display, setDisplay] = useState(text)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!isInView || started) return
    setStarted(true)

    const delayMs = delay * 1000
    const totalFrames = 20
    let frame = 0

    const t = setTimeout(() => {
      const id = setInterval(() => {
        frame++
        const resolved = Math.floor((frame / totalFrames) * text.length)
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " "
              if (i < resolved) return char
              return CHARS[Math.floor(Math.random() * CHARS.length)]
            })
            .join("")
        )
        if (frame >= totalFrames) {
          setDisplay(text)
          clearInterval(id)
        }
      }, 38)
    }, delayMs)

    return () => clearTimeout(t)
  }, [isInView, started, text, delay])

  const Comp = Tag as React.ElementType
  return (
    <Comp ref={ref} className={className}>
      {display}
    </Comp>
  )
}
