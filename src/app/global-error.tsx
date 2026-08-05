"use client"

import { useEffect } from "react"
import { Home, RefreshCw } from "lucide-react"

interface Props {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: Props) {
  useEffect(() => {
    console.error("Global error:", error)
  }, [error])

  return (
    <html lang="en" className="dark">
      <body style={{ margin: 0, background: "#0A0F1E", color: "#E8EDF5", fontFamily: "sans-serif" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "clamp(5rem, 15vw, 10rem)",
                fontWeight: 900,
                lineHeight: 1,
                background: "linear-gradient(135deg, rgba(201,168,76,0.4), rgba(232,201,106,0.2), rgba(160,120,48,0.35))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                letterSpacing: "-0.05em",
                marginBottom: "1.5rem",
              }}
            >
              500
            </div>

            <div
              style={{
                height: 2,
                width: 80,
                borderRadius: 999,
                margin: "0 auto 2rem",
                background: "linear-gradient(90deg, transparent, #C9A84C, #E8C96A, #C9A84C, transparent)",
              }}
            />

            <div
              style={{
                display: "inline-block",
                padding: "4px 14px",
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.25)",
                color: "#C9A84C",
                marginBottom: "1.25rem",
              }}
            >
              Critical Error
            </div>

            <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 800, marginBottom: "1rem" }}>
              Something went{" "}
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                wrong
              </span>
            </h1>

            <p style={{ color: "#8898AA", maxWidth: 480, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
              A critical error occurred. We&apos;ve been notified and are working on a fix. Please try refreshing the page.
            </p>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={reset}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 22px",
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                  border: "none",
                  background: "linear-gradient(135deg, #A07830, #C9A84C)",
                  color: "#0A0F1E",
                  boxShadow: "0 4px 16px rgba(201,168,76,0.35)",
                }}
              >
                <RefreshCw style={{ width: 16, height: 16 }} />
                Try Again
              </button>
              <a
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 22px",
                  borderRadius: 10,
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "pointer",
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "#8898AA",
                  textDecoration: "none",
                }}
              >
                <Home style={{ width: 16, height: 16 }} />
                Back to Home
              </a>
            </div>

            {error.digest && (
              <p style={{ marginTop: "2rem", fontSize: 11, fontFamily: "monospace", color: "rgba(201,168,76,0.35)" }}>
                Error ID: {error.digest}
              </p>
            )}
          </div>
        </div>
      </body>
    </html>
  )
}
