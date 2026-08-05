"use client"

import { useEffect } from "react"

const COLORS = ["#E8C96A", "#C9A84C", "#A07830", "#F5D780", "#ffffff"]
const SELECTOR = ".btn-primary, .btn-outline, .btn-shine"

function burst(x: number, y: number) {
  const count = 14
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div")
    const angle = (360 / count) * i + Math.random() * 15
    const distance = 40 + Math.random() * 50
    const size = 4 + Math.random() * 4
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]
    const rad = (angle * Math.PI) / 180
    const tx = Math.cos(rad) * distance
    const ty = Math.sin(rad) * distance
    const duration = 500 + Math.random() * 200

    el.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: ${color};
      pointer-events: none;
      z-index: 99999;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 ${size * 2}px ${color};
      animation: none;
    `
    document.body.appendChild(el)

    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(t, 2) // ease-out quad
      el.style.transform = `translate(calc(-50% + ${tx * ease}px), calc(-50% + ${ty * ease}px)) scale(${1 - t})`
      el.style.opacity = String(1 - t)
      if (t < 1) requestAnimationFrame(tick)
      else el.remove()
    }
    requestAnimationFrame(tick)
  }
}

export default function ParticleBurst() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest(SELECTOR)) {
        burst(e.clientX, e.clientY)
      }
    }
    window.addEventListener("click", onClick)
    return () => window.removeEventListener("click", onClick)
  }, [])

  return null
}
