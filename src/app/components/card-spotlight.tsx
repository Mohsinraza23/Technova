"use client"

import { useEffect } from "react"

export default function CardSpotlight() {
  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(hover: none)").matches) return

    const attach = (card: Element) => {
      const el = card as HTMLElement
      const onMove = (e: Event) => {
        const me = e as MouseEvent
        const rect = el.getBoundingClientRect()
        const x = ((me.clientX - rect.left) / rect.width) * 100
        const y = ((me.clientY - rect.top) / rect.height) * 100
        el.style.setProperty("--card-x", `${x}%`)
        el.style.setProperty("--card-y", `${y}%`)
      }
      el.addEventListener("mousemove", onMove)
      return onMove
    }

    const listeners = new Map<Element, (e: Event) => void>()

    const init = () => {
      document.querySelectorAll(".fancy-card").forEach((card) => {
        if (!listeners.has(card)) {
          listeners.set(card, attach(card))
        }
      })
    }

    // Initial pass
    init()

    // Watch for new cards (carousels, lazy renders, etc.)
    const observer = new MutationObserver(init)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      listeners.forEach((fn, card) => {
        card.removeEventListener("mousemove", fn)
      })
    }
  }, [])

  return null
}
