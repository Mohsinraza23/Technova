"use client"

import { useEffect } from "react"

export default function MagneticButtons() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return

    const SELECTOR = ".btn-primary, .btn-outline"
    const STRENGTH = 0.28

    const cleanups: Array<() => void> = []

    const attach = (btn: Element) => {
      const el = btn as HTMLElement
      if (el.dataset.magnetic) return
      el.dataset.magnetic = "1"

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (e.clientX - cx) * STRENGTH
        const dy = (e.clientY - cy) * STRENGTH
        el.style.transform = `translate(${dx}px, ${dy}px)`
        el.style.transition = "transform 0.12s ease"
      }

      const onLeave = () => {
        el.style.transform = "translate(0, 0)"
        el.style.transition = "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)"
      }

      el.addEventListener("mousemove", onMove)
      el.addEventListener("mouseleave", onLeave)
      cleanups.push(() => {
        el.removeEventListener("mousemove", onMove)
        el.removeEventListener("mouseleave", onLeave)
      })
    }

    document.querySelectorAll(SELECTOR).forEach(attach)

    // Pick up buttons added after initial render (page transitions, carousels)
    const observer = new MutationObserver(() => {
      document.querySelectorAll(SELECTOR).forEach(attach)
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      cleanups.forEach((fn) => fn())
    }
  }, [])

  return null
}
