"use client"

import { useState } from "react"
import { Search, AlertTriangle, CheckCircle, XCircle, Loader2 } from "lucide-react"

const DEMO_CARRIERS: Record<string, {
  name: string; auth: string; ins: string; safety: string
  oos: string; fleet: string; score: "A" | "B" | "C" | "D" | "F"
}> = {
  "MC-472910": { name: "Swift Freight LLC", auth: "Active", ins: "Valid", safety: "Satisfactory", oos: "2.1%", fleet: "47 trucks", score: "A" },
  "MC-883201": { name: "Apex Transport Co", auth: "Active", ins: "Valid", safety: "Satisfactory", oos: "5.8%", fleet: "23 trucks", score: "B" },
  "MC-339041": { name: "Nova Carriers Inc", auth: "Active", ins: "Expiring Soon", safety: "Conditional", oos: "12.4%", fleet: "11 trucks", score: "C" },
  "MC-109432": { name: "FastLine Corp", auth: "Revoked", ins: "Expired", safety: "Unsatisfactory", oos: "38.7%", fleet: "8 trucks", score: "F" },
  "MC-774521": { name: "BlueStar Logistics", auth: "Active", ins: "Valid", safety: "Satisfactory", oos: "1.3%", fleet: "92 trucks", score: "A" },
}

const SCORE_CONFIG = {
  A: { color: "#22c55e", label: "Excellent — Safe to use", bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.3)" },
  B: { color: "#84cc16", label: "Good — Minor concerns", bg: "rgba(132,204,22,0.1)", border: "rgba(132,204,22,0.3)" },
  C: { color: "#eab308", label: "Caution — Review carefully", bg: "rgba(234,179,8,0.1)", border: "rgba(234,179,8,0.3)" },
  D: { color: "#f97316", label: "High Risk — Avoid", bg: "rgba(249,115,22,0.1)", border: "rgba(249,115,22,0.3)" },
  F: { color: "#ef4444", label: "Reject — Do not use", bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.3)" },
}

export default function LiveDemoWidget() {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<typeof DEMO_CARRIERS[string] | null>(null)
  const [notFound, setNotFound] = useState(false)
  const [searched, setSearched] = useState("")

  const handleSearch = async () => {
    const query = input.trim().toUpperCase()
    if (!query) return
    setLoading(true)
    setResult(null)
    setNotFound(false)

    // Simulate API delay
    await new Promise((r) => setTimeout(r, 1400))

    const found = DEMO_CARRIERS[query]
    if (found) {
      setResult(found)
      setSearched(query)
    } else {
      setNotFound(true)
    }
    setLoading(false)
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch()
  }

  const score = result ? SCORE_CONFIG[result.score] : null

  return (
    <div className="fancy-card rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C9A84C" }}>
          Live Demo — Try It Now
        </p>
      </div>
      <p className="text-xs text-muted-foreground mb-5">
        Enter a carrier MC number to see DispatchDOS in action.{" "}
        <span className="opacity-60">Try: MC-472910, MC-109432, MC-339041</span>
      </p>

      {/* Search Input */}
      <div className="flex gap-2 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="e.g. MC-472910"
            className="w-full pl-9 pr-4 py-3 rounded-xl text-sm font-mono outline-none transition-all"
            style={{
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.2)",
              color: "#F1F5F9",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)")}
          />
        </div>
        <button
          onClick={handleSearch}
          disabled={loading || !input.trim()}
          className="btn-shine px-5 py-3 rounded-xl text-sm font-bold text-[#0A0F1E] transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
          {loading ? "Verifying..." : "Verify"}
        </button>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="rounded-xl p-4 space-y-2.5" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.1)" }}>
          {["Connecting to FMCSA API...", "Fetching authority status...", "Checking insurance records...", "Calculating risk score..."].map((t, i) => (
            <div key={t} className="flex items-center gap-2 text-xs text-muted-foreground">
              <Loader2 className="h-3 w-3 animate-spin flex-shrink-0" style={{ color: "#C9A84C", animationDelay: `${i * 0.2}s` }} />
              {t}
            </div>
          ))}
        </div>
      )}

      {/* Not Found */}
      {notFound && !loading && (
        <div className="rounded-xl p-4 flex items-center gap-3" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)" }}>
          <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-red-400">Carrier not found in demo</p>
            <p className="text-xs text-muted-foreground mt-0.5">Try: MC-472910, MC-883201, MC-339041, MC-109432, MC-774521</p>
          </div>
        </div>
      )}

      {/* Result */}
      {result && score && !loading && (
        <div className="space-y-3 animate-[fadeUp_0.4s_ease_forwards]">
          {/* Risk Score Banner */}
          <div className="rounded-xl p-4 flex items-center justify-between" style={{ background: score.bg, border: `1px solid ${score.border}` }}>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{searched}</p>
              <p className="text-base font-bold text-[#E8EDF5]">{result.name}</p>
              <p className="text-sm mt-0.5" style={{ color: score.color }}>{score.label}</p>
            </div>
            <div className="text-6xl font-black" style={{ color: score.color, fontFamily: "var(--font-montserrat)" }}>
              {result.score}
            </div>
          </div>

          {/* Data Fields */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Authority", value: result.auth, ok: result.auth === "Active" },
              { label: "Insurance", value: result.ins, ok: result.ins === "Valid" },
              { label: "Safety Rating", value: result.safety, ok: result.safety === "Satisfactory" },
              { label: "OOS Rate", value: result.oos, ok: parseFloat(result.oos) < 10 },
              { label: "Fleet Size", value: result.fleet, ok: true },
              { label: "Risk Score", value: result.score, ok: ["A", "B"].includes(result.score) },
            ].map((f) => (
              <div key={f.label} className="rounded-lg px-3 py-2.5 flex items-center justify-between text-xs"
                style={{ background: "rgba(255,255,255,0.03)" }}>
                <span className="text-muted-foreground">{f.label}</span>
                <div className="flex items-center gap-1.5">
                  {f.ok
                    ? <CheckCircle className="h-3 w-3 text-green-400" />
                    : <AlertTriangle className="h-3 w-3 text-red-400" />
                  }
                  <span className={`font-semibold ${f.ok ? "text-green-400" : "text-red-400"}`}>{f.value}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-center text-muted-foreground opacity-50">
            Demo data for illustration. Real DispatchDOS pulls live FMCSA data.
          </p>
        </div>
      )}
    </div>
  )
}
