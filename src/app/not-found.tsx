import Link from "next/link"
import { ArrowRight, Home, FileSpreadsheet } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute pointer-events-none">
        <div style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          top: "-200px",
          left: "-150px",
          filter: "blur(60px)",
        }} />
        <div style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(160,120,48,0.06) 0%, transparent 70%)",
          bottom: "-150px",
          right: "-100px",
          filter: "blur(60px)",
        }} />
      </div>

      <div className="container px-4 text-center relative z-10">

        {/* 404 number */}
        <div className="mb-6 select-none" aria-hidden="true">
          <span
            className="text-[8rem] sm:text-[12rem] font-black leading-none"
            style={{
              fontFamily: "var(--font-montserrat)",
              background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(232,201,106,0.08))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.05em",
            }}
          >
            404
          </span>
        </div>

        {/* Gold accent line */}
        <div className="w-16 h-1 rounded-full mx-auto mb-8" style={{ background: "linear-gradient(90deg, #A07830, #C9A84C, #E8C96A)" }} />

        <div className="badge-gold mx-auto w-fit mb-5">Page Not Found</div>

        <h1 className="heading-lg mb-4">
          This page doesn&apos;t <span className="gradient-text">exist</span>
        </h1>

        <p className="body-lg text-muted-foreground max-w-[500px] mx-auto mb-10">
          The page you&apos;re looking for may have been moved, deleted, or never existed.
          Let&apos;s get you back on track.
        </p>

        {/* Quick links */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2 justify-center"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/dispatchdos"
            className="btn-outline inline-flex items-center gap-2 justify-center"
          >
            <FileSpreadsheet className="h-4 w-4" />
            See DispatchDOS
          </Link>
          <Link
            href="/contact"
            className="btn-outline inline-flex items-center gap-2 justify-center"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Helpful links grid */}
        <div className="max-w-lg mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
            Popular pages
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "DispatchDOS", href: "/dispatchdos" },
              { label: "Blog", href: "/blog" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2.5 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5 text-center"
                style={{
                  background: "rgba(201,168,76,0.06)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  color: "#8898AA",
                }}
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
