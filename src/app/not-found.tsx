import Link from "next/link"
import { ArrowRight, Home, FileSpreadsheet, MessageSquare, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[88vh] flex items-center justify-center relative overflow-hidden">

      {/* Background blobs */}
      <div className="blob blob-1" style={{ opacity: 0.12 }} />
      <div className="blob blob-4" style={{ opacity: 0.2 }} />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(201,168,76,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
        }}
      />

      <div className="container px-4 text-center relative z-10">

        {/* Glitch 404 */}
        <div className="mb-4 select-none" aria-hidden="true">
          <span
            className="glitch-404 inline-block text-[8rem] sm:text-[12rem] font-black leading-none"
            style={{
              fontFamily: "var(--font-montserrat)",
              background: "linear-gradient(135deg, rgba(201,168,76,0.18), rgba(232,201,106,0.09), rgba(160,120,48,0.15))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.05em",
              filter: "drop-shadow(0 0 40px rgba(201,168,76,0.15))",
            }}
          >
            404
          </span>
        </div>

        {/* Gold accent line */}
        <div
          className="h-[2px] w-20 rounded-full mx-auto mb-8"
          style={{ background: "linear-gradient(90deg, transparent, #C9A84C, #E8C96A, #C9A84C, transparent)" }}
        />

        <div className="badge-gold mx-auto w-fit mb-5">Page Not Found</div>

        <h1 className="heading-lg mb-4">
          This page doesn&apos;t <span className="gradient-text">exist</span>
        </h1>

        <p className="body-lg text-muted-foreground max-w-[480px] mx-auto mb-10">
          The page you&apos;re looking for may have been moved, deleted, or never existed.
          Let&apos;s get you back on track.
        </p>

        {/* Tip */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs mb-10"
          style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)", color: "#8898AA" }}
        >
          <Search className="h-3 w-3" style={{ color: "#C9A84C" }} />
          Press <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono mx-1" style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.2)" }}>⌘K</kbd> to search all pages
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link href="/" className="btn-primary inline-flex items-center gap-2 justify-center">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link href="/dispatchdos" className="btn-outline inline-flex items-center gap-2 justify-center">
            <FileSpreadsheet className="h-4 w-4" />
            See DispatchDOS
          </Link>
          <Link href="/contact" className="btn-outline inline-flex items-center gap-2 justify-center">
            <MessageSquare className="h-4 w-4" />
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div className="max-w-lg mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
            Popular pages
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Home",        href: "/" },
              { label: "Services",    href: "/services" },
              { label: "DispatchDOS", href: "/dispatchdos" },
              { label: "Blog",        href: "/blog" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2.5 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-[#C9A84C]/30 text-center"
                style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.1)", color: "#8898AA" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
