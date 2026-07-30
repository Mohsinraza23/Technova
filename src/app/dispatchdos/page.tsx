import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import FadeIn from "../components/fade-in"
import FaqAccordion from "../components/faq-accordion"
import ScrollReveal from "../components/scroll-reveal"
import TrustBadges from "../components/trust-badges"

// Client-only interactive components — load after page paint
const BeforeAfterTimer = dynamic(() => import("../components/before-after-timer"), { ssr: false })
const LiveDemoWidget   = dynamic(() => import("../components/live-demo-widget"),   { ssr: false })
const WaitlistCounter  = dynamic(() => import("../components/waitlist-counter"),   { ssr: false })
import {
  Upload, FileSpreadsheet, ShieldCheck, AlertTriangle,
  CheckCircle, ArrowRight, Clock, Users, Globe, BarChart3, ChevronRight, X, Zap, Download
} from "lucide-react"

export const metadata: Metadata = {
  title: "DispatchDOS — Bulk FMCSA Carrier Verification for Freight Brokers",
  description: "Verify 1,000+ carriers in minutes. DispatchDOS pulls 30+ FMCSA data fields per carrier and assigns an A–F risk score automatically. USA + Canada supported.",
  keywords: [
    "FMCSA carrier verification", "bulk carrier verification", "freight broker tool",
    "DispatchDOS", "carrier risk score", "FMCSA API", "freight compliance",
    "carrier vetting", "freight broker software", "DOT verification",
  ],
  openGraph: {
    title: "DispatchDOS — Bulk FMCSA Carrier Verification",
    description: "Verify 1,000+ carriers in minutes. 30+ FMCSA data fields, A–F risk score, USA + Canada. Built for freight brokers.",
    url: "https://nyrvex.com/dispatchdos",
    siteName: "Nyrvex",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "DispatchDOS by Nyrvex" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DispatchDOS — Bulk FMCSA Carrier Verification",
    description: "Verify 1,000+ carriers in minutes. 30+ data fields, A–F risk score. Built for freight brokers.",
    images: ["/logo.jpg"],
  },
  alternates: { canonical: "https://nyrvex.com/dispatchdos" },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DispatchDOS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "Bulk FMCSA carrier verification tool for freight brokers. Verify 1,000+ carriers in minutes with 30+ data fields and A–F risk scores.",
  url: "https://nyrvex.com/dispatchdos",
  author: { "@type": "Organization", name: "Nyrvex" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free tier available. Pro plan at $49/month.",
  },
  featureList: [
    "Bulk FMCSA carrier verification",
    "1,000+ carriers per batch",
    "30+ data fields per carrier",
    "A–F risk score system",
    "USA and Canada carrier support",
    "Excel report export",
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does DispatchDOS get FMCSA data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DispatchDOS connects directly to the FMCSA official API to pull real-time, accurate carrier data.",
      },
    },
    {
      "@type": "Question",
      name: "How many carriers can I verify at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DispatchDOS supports 1,000+ carriers per batch. Upload an Excel or CSV file and receive a complete report within minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Does DispatchDOS support Canadian carriers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. DispatchDOS supports both US and Canada carriers, making it ideal for cross-border freight brokers.",
      },
    },
    {
      "@type": "Question",
      name: "Is my carrier data secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Uploaded carrier files are processed and permanently deleted. We store nothing after your report is generated.",
      },
    },
  ],
}

export default function DispatchDOSPage() {
  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 50%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }} />
        <div className="container relative z-10 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-gold mb-5">Freight Tech — Bulk FMCSA Verification</div>
              <h1 className="heading-xl mb-5">
                Verify 1,000+ Carriers<br />
                in <span className="gradient-text">Minutes</span>
              </h1>
              <p className="body-lg text-muted-foreground mb-4 max-w-xl">
                DispatchDOS is the bulk FMCSA carrier verification tool built for freight brokers.
                Upload your carrier list, get back a full Excel report with 30+ data points
                and an A–F risk score — instantly.
              </p>
              <p className="text-sm font-semibold mb-8" style={{ color: "#C9A84C" }}>
                No more manual FMCSA lookups. No more fraud exposure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary flex items-center gap-2">
                  Request Early Access <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#how-it-works" className="btn-outline">See How It Works</a>
              </div>

              <TrustBadges className="mt-2" />
            </div>

            {/* Hero visual */}
            <div className="animate-float">
              <div className="fancy-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow"></div>
                    <span className="text-xs text-muted-foreground font-medium">Processing batch...</span>
                  </div>
                  <span className="text-xs font-bold" style={{ color: "#C9A84C" }}>1,247 carriers</span>
                </div>
                <div className="space-y-2 mb-4">
                  {[
                    { mc: "MC-472910", name: "Swift Freight LLC", auth: "Active", score: "A", c: "#22c55e" },
                    { mc: "MC-883201", name: "Apex Transport", auth: "Active", score: "B", c: "#84cc16" },
                    { mc: "MC-339041", name: "Nova Carriers", auth: "Active", score: "C", c: "#eab308" },
                    { mc: "MC-109432", name: "FastLine Corp", auth: "Revoked", score: "F", c: "#ef4444" },
                    { mc: "MC-774521", name: "BlueStar Logistics", auth: "Active", score: "A", c: "#22c55e" },
                  ].map((row) => (
                    <div key={row.mc}
                      className="grid items-center gap-2 rounded-lg px-3 py-2 text-xs"
                      style={{ background: "rgba(201,168,76,0.04)", gridTemplateColumns: "auto 1fr auto auto" }}
                    >
                      <span className="font-mono text-muted-foreground">{row.mc}</span>
                      <span className="text-muted-foreground truncate">{row.name}</span>
                      <span className={row.auth === "Active" ? "text-green-400" : "text-red-400"}>{row.auth}</span>
                      <span className="font-bold" style={{ color: row.c }}>Risk {row.score}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Report ready in 3 min</span>
                  <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#C9A84C" }}>
                    <FileSpreadsheet className="h-3.5 w-3.5" />
                    Download Excel
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding border-y border-white/5" style={{ background: "rgba(201,168,76,0.02)" }}>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "18,000+", label: "Licensed US Freight Brokers" },
              { value: "1,000+", label: "Carriers per Batch" },
              { value: "30+", label: "FMCSA Data Fields" },
              { value: "A–F", label: "Risk Score System" },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1} direction="up">
              <div>
                <div className="heading-lg gradient-text mb-1">{s.value}</div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">The Problem We <span className="gradient-text">Solve</span></h2>
            </div>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-6">
            <ScrollReveal direction="left" delay={0.1}>
            <div className="fancy-card rounded-2xl p-8 h-full" style={{ borderColor: "rgba(239,68,68,0.2)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="text-lg font-bold">Before DispatchDOS</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Open FMCSA website, search carrier one by one",
                  "Copy-paste data into Excel manually",
                  "Miss expired insurance or revoked authority",
                  "Expose brokerage to fraud and costly fines",
                  "Waste 3–5 hours verifying just 50 carriers",
                  "Repeat this painful process every single month",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>{p}
                  </li>
                ))}
              </ul>
            </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
            <div className="fancy-card rounded-2xl p-8 h-full" style={{ borderColor: "rgba(201,168,76,0.3)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(201,168,76,0.12)" }}>
                  <ShieldCheck className="h-5 w-5" style={{ color: "#C9A84C" }} />
                </div>
                <h3 className="text-lg font-bold">With DispatchDOS</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Upload your carrier list (Excel or CSV)",
                  "DispatchDOS hits FMCSA API for every carrier",
                  "Get 30+ data points per carrier automatically",
                  "Instant A–F risk score for every carrier",
                  "Download full Excel report in minutes",
                  "USA + Canada carriers both supported",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER TIMER ── */}
      <section className="section-padding" style={{ background: "rgba(201,168,76,0.02)" }}>
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="badge-gold mb-4">Time Comparison</div>
              <h2 className="heading-lg mb-4">
                See the <span className="gradient-text">Time Difference</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Watch a real-time simulation of verifying 1,000 carriers — manually vs DispatchDOS.
                Scroll into view to start the timer.
              </p>
            </div>
          </FadeIn>
          <div className="max-w-4xl mx-auto">
            <BeforeAfterTimer />
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Manual method takes <span className="text-red-400 font-semibold">3–6 hours</span> for 1,000 carriers.
                DispatchDOS does it in <span className="font-semibold" style={{ color: "#C9A84C" }}>under 4 minutes.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE DEMO WIDGET ── */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="badge-gold mb-4">Interactive Demo</div>
              <h2 className="heading-lg mb-4">
                Try It <span className="gradient-text">Right Now</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Enter a carrier MC number and see what DispatchDOS pulls from FMCSA.
                No signup required for the demo.
              </p>
            </div>
          </FadeIn>
          <div className="max-w-2xl mx-auto">
            <LiveDemoWidget />
          </div>
        </div>
      </section>

      {/* ── WAITLIST COUNTER + SAMPLE REPORT ── */}
      <section className="section-padding" style={{ background: "rgba(201,168,76,0.02)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* Waitlist Counter */}
            <div>
              <FadeIn>
                <div className="badge-gold mb-4">Early Access</div>
                <h2 className="heading-lg mb-4">
                  Join the <span className="gradient-text">Waitlist</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  DispatchDOS is in early access. Brokers who join now get
                  3 months Pro free when we launch.
                </p>
              </FadeIn>
              <WaitlistCounter />
              <div className="mt-4">
                <Link href="/contact" className="btn-primary flex items-center gap-2 w-fit mt-4">
                  Request Early Access <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Sample Report Teaser */}
            <div>
              <FadeIn>
                <div className="badge-gold mb-4">Sample Report</div>
                <h2 className="heading-lg mb-4">
                  See the <span className="gradient-text">Full Report</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Preview the Excel report DispatchDOS generates for every batch.
                  30+ columns, risk scores, and everything your team needs.
                </p>
              </FadeIn>

              <div className="fancy-card rounded-2xl p-5">
                {/* Excel header row */}
                <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                  <div className="grid text-[10px] font-bold uppercase tracking-wider px-3 py-2"
                    style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C", gridTemplateColumns: "auto auto auto auto auto 1fr" }}>
                    <span className="mr-4">MC#</span>
                    <span className="mr-4">Carrier</span>
                    <span className="mr-4">Auth</span>
                    <span className="mr-4">Ins</span>
                    <span className="mr-4">Safety</span>
                    <span className="text-right">Risk</span>
                  </div>
                  {[
                    { mc: "MC-472910", name: "Swift Freight LLC", auth: "Active", ins: "Valid", safety: "Satisfactory", score: "A", c: "#22c55e" },
                    { mc: "MC-883201", name: "Apex Transport", auth: "Active", ins: "Valid", safety: "Satisfactory", score: "B", c: "#84cc16" },
                    { mc: "MC-339041", name: "Nova Carriers", auth: "Active", ins: "Expiring", safety: "Conditional", score: "C", c: "#eab308" },
                    { mc: "MC-109432", name: "FastLine Corp", auth: "Revoked", ins: "Expired", safety: "Unsat.", score: "F", c: "#ef4444" },
                  ].map((r, i) => (
                    <div key={r.mc}
                      className="grid items-center px-3 py-2 text-[10px] border-t"
                      style={{
                        gridTemplateColumns: "auto auto auto auto auto 1fr",
                        borderColor: "rgba(201,168,76,0.08)",
                        background: i % 2 === 0 ? "rgba(201,168,76,0.02)" : "transparent"
                      }}>
                      <span className="font-mono text-muted-foreground mr-4">{r.mc}</span>
                      <span className="text-muted-foreground mr-4 truncate max-w-[80px]">{r.name}</span>
                      <span className={`mr-4 font-medium ${r.auth === "Active" ? "text-green-400" : "text-red-400"}`}>{r.auth}</span>
                      <span className={`mr-4 font-medium ${r.ins === "Valid" ? "text-green-400" : r.ins === "Expiring" ? "text-yellow-400" : "text-red-400"}`}>{r.ins}</span>
                      <span className={`mr-4 font-medium text-[9px] ${r.safety === "Satisfactory" ? "text-green-400" : r.safety === "Conditional" ? "text-yellow-400" : "text-red-400"}`}>{r.safety}</span>
                      <span className="font-black text-right" style={{ color: r.c }}>{r.score}</span>
                    </div>
                  ))}
                  <div className="px-3 py-2 text-[10px] text-muted-foreground border-t text-center"
                    style={{ borderColor: "rgba(201,168,76,0.08)", background: "rgba(201,168,76,0.03)" }}>
                    + 996 more rows · 30+ columns per carrier
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-[#0A0F1E] transition-all hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
                >
                  <Download className="h-4 w-4" />
                  Request Sample Report
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding" style={{ background: "rgba(201,168,76,0.02)" }}>
        <div className="container">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="badge-gold mb-4">Simple Process</div>
              <h2 className="heading-lg mb-4">3 Steps to <span className="gradient-text">Full Verification</span></h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: <Upload className="h-7 w-7" />, title: "Upload Your List", desc: "Upload an Excel or CSV file with your carrier MC numbers. Supports 1,000+ carriers per batch." },
              { step: "02", icon: <ShieldCheck className="h-7 w-7" />, title: "We Verify Everything", desc: "DispatchDOS pulls 30+ FMCSA data fields per carrier — authority, insurance, safety rating, OOS rate, and more." },
              { step: "03", icon: <FileSpreadsheet className="h-7 w-7" />, title: "Download Your Report", desc: "Receive a clean Excel report with every carrier scored A–F. Make instant go/no-go decisions." },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.15} direction="up">
              <div className="fancy-card rounded-xl p-7 text-center relative h-full">
                <div className="text-xs font-bold text-muted-foreground mb-4 tracking-widest">{s.step}</div>
                <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}>
                  {s.icon}
                </div>
                <h3 className="heading-sm mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                {i < 2 && <ChevronRight className="h-5 w-5 text-muted-foreground absolute -right-3 top-1/2 -translate-y-1/2 hidden md:block" />}
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Data Fields */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="badge-gold mb-4">30+ Data Points</div>
              <h2 className="heading-lg mb-4">Every Field That <span className="gradient-text">Matters</span></h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <ShieldCheck />, label: "Authority Status", desc: "Active, Inactive, or Revoked" },
              { icon: <CheckCircle />, label: "Insurance Verification", desc: "Valid, Expiring, or Missing" },
              { icon: <BarChart3 />, label: "Safety Rating", desc: "Satisfactory, Conditional, Unsatisfactory" },
              { icon: <AlertTriangle />, label: "Out-of-Service Rate", desc: "Vehicles & drivers OOS %" },
              { icon: <Globe />, label: "Operating Regions", desc: "Interstate & intrastate authority" },
              { icon: <Users />, label: "Fleet Size", desc: "Number of power units & drivers" },
              { icon: <Clock />, label: "Inspection History", desc: "Total inspections & violations" },
              { icon: <FileSpreadsheet />, label: "Crash History", desc: "Fatal, injury & tow-away crashes" },
              { icon: <ShieldCheck />, label: "Risk Score A–F", desc: "Instant go/no-go decision" },
            ].map((f, i) => (
              <ScrollReveal key={f.label} delay={i * 0.06} direction="up">
              <div className="fancy-card rounded-xl p-5 flex gap-4 items-start h-full">
                <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}>
                  {f.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">{f.label}</p>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Score */}
      <section className="section-padding" style={{ background: "rgba(201,168,76,0.02)" }}>
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="badge-gold mb-4">Risk Score System</div>
              <h2 className="heading-lg mb-4">Instant <span className="gradient-text">A–F Decision</span></h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                No need to read through data. Every carrier gets a single risk score so your team can decide in seconds.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {[
              { score: "A", label: "Excellent", desc: "Safe to work with", color: "#22c55e", bg: "rgba(34,197,94,0.08)" },
              { score: "B", label: "Good", desc: "Minor issues only", color: "#84cc16", bg: "rgba(132,204,22,0.08)" },
              { score: "C", label: "Caution", desc: "Review carefully", color: "#eab308", bg: "rgba(234,179,8,0.08)" },
              { score: "D", label: "High Risk", desc: "Avoid if possible", color: "#f97316", bg: "rgba(249,115,22,0.08)" },
              { score: "F", label: "Reject", desc: "Do not use", color: "#ef4444", bg: "rgba(239,68,68,0.08)" },
            ].map((r, i) => (
              <ScrollReveal key={r.score} delay={i * 0.1} direction="up">
              <div className="rounded-xl p-5 text-center border h-full"
                style={{ background: r.bg, borderColor: `${r.color}30` }}>
                <div className="text-4xl font-black mb-2" style={{ color: r.color }}>{r.score}</div>
                <p className="text-sm font-semibold mb-1">{r.label}</p>
                <p className="text-xs text-muted-foreground">{r.desc}</p>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="badge-gold mb-4">Why DispatchDOS</div>
              <h2 className="heading-lg mb-4">
                Manual vs <span className="gradient-text">DispatchDOS</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                See exactly what changes when you stop doing FMCSA verification manually
              </p>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-muted-foreground w-2/5">Feature</th>
                  <th className="py-4 px-6 text-center w-[30%]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-sm font-bold text-red-400">Manual FMCSA</span>
                      <span className="text-xs text-muted-foreground">One by one</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-center w-[30%]">
                    <div className="flex flex-col items-center gap-1 py-2 px-4 rounded-xl" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>
                      <span className="text-sm font-bold gradient-text">DispatchDOS</span>
                      <span className="text-xs text-muted-foreground">Bulk automated</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Carriers verified at once", manual: "1", dispatch: "1,000+" },
                  { feature: "Time for 100 carriers", manual: "4–6 hours", dispatch: "Under 5 min" },
                  { feature: "Data fields per carrier", manual: "3–5 (manual)", dispatch: "30+" },
                  { feature: "Risk scoring", manual: "❌ None", dispatch: "✅ A–F Score" },
                  { feature: "Insurance verification", manual: "Manual check", dispatch: "✅ Automated" },
                  { feature: "Out-of-service rate", manual: "❌ Often missed", dispatch: "✅ Always included" },
                  { feature: "Canada carriers", manual: "Separate site", dispatch: "✅ Included" },
                  { feature: "Excel export", manual: "Manual copy-paste", dispatch: "✅ One click" },
                  { feature: "Human error risk", manual: "❌ High", dispatch: "✅ Zero" },
                  { feature: "Cost per carrier", manual: "$2–5 (labor)", dispatch: "Cents" },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-t"
                    style={{ borderColor: "rgba(201,168,76,0.08)", background: i % 2 === 0 ? "rgba(201,168,76,0.02)" : "transparent" }}
                  >
                    <td className="py-3.5 px-6 text-sm text-muted-foreground">{row.feature}</td>
                    <td className="py-3.5 px-6 text-center text-sm text-red-400 font-medium">{row.manual}</td>
                    <td className="py-3.5 px-6 text-center text-sm font-semibold" style={{ color: "#C9A84C" }}>{row.dispatch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="section-padding" style={{ background: "rgba(201,168,76,0.02)" }}>
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="badge-gold mb-4">Pricing</div>
              <h2 className="heading-lg mb-4">
                Simple, <span className="gradient-text">Transparent Pricing</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Start free. Scale as you grow. No hidden fees.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Free",
                period: "forever",
                desc: "Perfect for small brokerages testing the waters",
                features: [
                  "50 carriers / month",
                  "15 data fields per carrier",
                  "Basic risk score",
                  "Excel export",
                  "Email support",
                ],
                missing: ["Canada carriers", "Priority support", "API access"],
                cta: "Get Started Free",
                highlight: false,
              },
              {
                name: "Pro",
                price: "$49",
                period: "/ month",
                desc: "For active brokers who verify regularly",
                features: [
                  "1,000 carriers / month",
                  "30+ data fields per carrier",
                  "Full A–F risk score",
                  "USA + Canada carriers",
                  "Excel export",
                  "Priority support",
                ],
                missing: ["API access"],
                cta: "Request Early Access",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "pricing",
                desc: "For large brokerages and logistics companies",
                features: [
                  "Unlimited carriers",
                  "30+ data fields per carrier",
                  "Full A–F risk score",
                  "USA + Canada carriers",
                  "API access",
                  "Slack/CRM integration",
                  "Dedicated support",
                  "Custom workflows",
                ],
                missing: [],
                cta: "Contact Sales",
                highlight: false,
              },
            ].map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.12} direction="up">
              <div
                className="relative rounded-2xl p-6 flex flex-col h-full"
                style={plan.highlight ? {
                  background: "rgba(201,168,76,0.08)",
                  border: "2px solid rgba(201,168,76,0.4)",
                  boxShadow: "0 0 40px rgba(201,168,76,0.1)"
                } : {
                  background: "rgba(15,22,41,0.8)",
                  border: "1px solid rgba(201,168,76,0.15)"
                }}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="text-xs font-bold px-4 py-1.5 rounded-full text-[#0A0F1E]"
                      style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}>
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">{plan.name}</p>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-black" style={{ color: plan.highlight ? "#C9A84C" : "#F1F5F9", fontFamily: "var(--font-montserrat)" }}>
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground mb-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.desc}</p>
                </div>

                <div className="space-y-2.5 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: "#C9A84C" }} />
                      <span>{f}</span>
                    </div>
                  ))}
                  {plan.missing.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <X className="h-4 w-4 flex-shrink-0 text-[#374151]" />
                      <span className="opacity-50">{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 ${plan.highlight ? "text-[#0A0F1E]" : "text-[#C9A84C]"}`}
                  style={plan.highlight ? {
                    background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                    boxShadow: "0 4px 15px rgba(201,168,76,0.3)"
                  } : {
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.25)"
                  }}
                >
                  {plan.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8">
            All plans include free onboarding. Cancel anytime. Early access users get 3 months Pro free.
          </p>
        </div>
      </section>

      {/* ── SECURITY & PRIVACY ── */}
      <section className="section-padding" style={{ background: "rgba(201,168,76,0.02)" }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto">
              <div className="fancy-card rounded-2xl p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <div className="badge-gold mb-4">Security & Privacy</div>
                    <h2 className="heading-lg mb-3">
                      Your Data is <span className="gradient-text">Safe</span>
                    </h2>
                    <p className="body-md text-muted-foreground mb-6">
                      We take data security seriously. DispatchDOS is built with privacy-first architecture
                      so your carrier lists and business data are never at risk.
                    </p>
                    <TrustBadges />
                  </div>
                  <div className="flex-1 space-y-4">
                    {[
                      { icon: "🔒", title: "SSL Encrypted", desc: "All data in transit is protected with 256-bit SSL encryption. Every request is secure end-to-end." },
                      { icon: "🗑️", title: "Zero Data Retention", desc: "Your uploaded carrier files are processed and permanently deleted. We store nothing after your report is generated." },
                      { icon: "🏛️", title: "Official FMCSA API", desc: "Data comes directly from the U.S. FMCSA official API — the same source as the government website." },
                      { icon: "🔑", title: "No Third-Party Sharing", desc: "Your carrier lists and business data are never shared with, sold to, or accessed by any third party." },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3 items-start">
                        <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-[#E8EDF5]">{item.title}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="badge-gold mb-4">FAQ</div>
              <h2 className="heading-lg mb-4">
                Got <span className="gradient-text">Questions?</span>
              </h2>
            </div>
          </FadeIn>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={[
              { q: "How does DispatchDOS get FMCSA data?", a: "DispatchDOS connects directly to the FMCSA API (the same official data source used by the FMCSA website) to pull real-time, accurate carrier data. You always get the most up-to-date information." },
              { q: "Is my carrier data secure?", a: "Yes. We do not store your carrier lists after processing. Your uploaded files are processed and deleted immediately. The Excel report is generated and sent directly to you." },
              { q: "How accurate is the A–F risk score?", a: "The risk score is calculated from 30+ FMCSA data points including authority status, insurance validity, safety rating, out-of-service rate, and crash history. It is designed to match the decision criteria used by experienced freight brokers." },
              { q: "Can I try DispatchDOS before paying?", a: "Yes! The Starter plan is completely free with 50 carriers per month. Early access users also get 3 months of Pro plan free. Request access from our Contact page." },
              { q: "Do you offer API access for integration?", a: "Yes, API access is available on the Enterprise plan. You can integrate DispatchDOS verification directly into your TMS, CRM, or internal tools. Contact us for Enterprise pricing and integration support." },
            ]} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="colorful-gradient text-[#0A0F1E] section-padding">
        <div className="container text-center">
          <ScrollReveal direction="up">
          <div className="badge-gold mb-6 mx-auto w-fit" style={{ color: "#0A0F1E", background: "rgba(10,15,30,0.15)", borderColor: "rgba(10,15,30,0.3)" }}>
            Early Access
          </div>
          <h2 className="heading-lg text-[#0A0F1E] mb-4">
            Stop Wasting Hours on Manual Verification
          </h2>
          <p className="text-[#0A0F1E]/75 mb-8 max-w-xl mx-auto body-lg">
            Join freight brokers saving hours every week with DispatchDOS. Get early access today.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md bg-[#0A0F1E] text-[#C9A84C] px-8 text-base font-bold shadow transition-all hover:shadow-lg hover:-translate-y-1"
          >
            Request Early Access
          </Link>
          <p className="text-xs text-[#0A0F1E]/50 mt-4">No credit card required for early access demo</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
