"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    setTimeout(() => {
      setStatus("done")
      setEmail("")
    }, 1000)
  }

  if (status === "done") {
    return (
      <div className="flex items-center gap-2 text-sm font-semibold py-3" style={{ color: "#C9A84C" }}>
        <CheckCircle className="h-4 w-4" />
        You&apos;re on the list — we&apos;ll keep you updated!
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-1">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 min-w-0 px-3 py-2 text-sm rounded-lg outline-none text-[#E8EDF5] placeholder:text-[#8898AA]"
        style={{
          background: "rgba(201,168,76,0.07)",
          border: "1px solid rgba(201,168,76,0.2)",
        }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold text-[#0A0F1E] transition-all hover:-translate-y-0.5 disabled:opacity-60"
        style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
      >
        {status === "loading" ? "..." : <><ArrowRight className="h-4 w-4" /></>}
      </button>
    </form>
  )
}
