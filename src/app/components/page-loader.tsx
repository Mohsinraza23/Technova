"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function PageLoader() {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(timer)
  }, [pathname])

  if (!loading) return null

  return (
    <div className="fixed top-0 left-0 w-full z-[100]">
      <div className="h-1 animate-loading-bar" style={{ background: "linear-gradient(90deg, #A07830, #C9A84C, #E8C96A)" }} />
    </div>
  )
}
