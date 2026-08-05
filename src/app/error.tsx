"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Home, RefreshCw, MessageSquare } from "lucide-react"

interface Props {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error("App error:", error)
  }, [error])

  return (
    <div className="min-h-[88vh] flex items-center justify-center relative overflow-hidden">

      {/* Background depth */}
      <div className="blob blob-1" style={{ opacity: 0.1 }} />
      <div className="blob blob-4" style={{ opacity: 0.18 }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(201,168,76,0.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
        }}
      />

      <div className="container px-4 text-center relative z-10">

        {/* Glitch 500 */}
        <div className="mb-4 select-none" aria-hidden="true">
          <span
            className="glitch-404 inline-block text-[7rem] sm:text-[11rem] font-black leading-none"
            style={{
              fontFamily: "var(--font-montserrat)",
              background: "linear-gradient(135deg, rgba(201,168,76,0.18), rgba(232,201,106,0.09), rgba(160,120,48,0.15))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.05em",
              filter: "drop-shadow(0 0 40px rgba(201,168,76,0.12))",
            }}
          >
            500
          </span>
        </div>

        {/* Accent line */}
        <div
          className="h-[2px] w-20 rounded-full mx-auto mb-8"
          style={{ background: "linear-gradient(90deg, transparent, #C9A84C, #E8C96A, #C9A84C, transparent)" }}
        />

        <div className="badge-gold mx-auto w-fit mb-5">Server Error</div>

        <h1 className="heading-lg mb-4">
          Something went <span className="gradient-text">wrong</span>
        </h1>

        <p className="body-lg text-muted-foreground max-w-[480px] mx-auto mb-10">
          An unexpected error occurred on our server. We&apos;ve been notified and are working on a fix.
          You can try again or head back home.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <button
            onClick={reset}
            className="btn-primary inline-flex items-center gap-2 justify-center"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>
          <Link href="/" className="btn-outline inline-flex items-center gap-2 justify-center">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link href="/contact" className="btn-outline inline-flex items-center gap-2 justify-center">
            <MessageSquare className="h-4 w-4" />
            Contact Us
          </Link>
        </div>

        {/* Error ID */}
        {error.digest && (
          <p className="text-[11px] font-mono" style={{ color: "rgba(201,168,76,0.35)" }}>
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}
