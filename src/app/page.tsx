import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import TypingText from "./components/typing-text"

export const metadata: Metadata = {
  title: "Nyrvex — Intelligent AI Solutions",
  description: "Nyrvex builds intelligent AI solutions — custom software, automation, and AI products that solve real industry problems. Featuring DispatchDOS, the #1 bulk FMCSA carrier verification tool for freight brokers.",
  alternates: { canonical: "https://nyrvex.com" },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nyrvex",
  url: "https://nyrvex.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://nyrvex.com/projects?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is DispatchDOS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DispatchDOS is a bulk FMCSA carrier verification tool for freight brokers. Upload 1,000+ carriers and get back a full Excel report with 30+ data points and an A–F risk score in minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Nyrvex offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nyrvex offers custom AI chatbots, AI agents, business process automation, full-stack web development, mobile apps, and AI-powered SaaS products.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with DispatchDOS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DispatchDOS is currently in early access. Visit the Contact page to request a demo and we will respond within 24 hours.",
      },
    },
  ],
}
import dynamic from "next/dynamic"
import StatsCounter from "./components/stats-counter"
import FadeIn from "./components/fade-in"
import FaqAccordion from "./components/faq-accordion"
import ScrollReveal from "./components/scroll-reveal"
import TiltCard from "./components/tilt-card"
import TestimonialsCarousel from "./components/testimonials-carousel"

// Heavy canvas lib — browser-only, skip SSR
const ParticlesBg = dynamic(() => import("./components/particles-bg"), { ssr: false })
import {
  ArrowRight, Code, Smartphone, Bot, Cpu, Workflow,
  CheckCircle, Brain, ChevronRight, FileSpreadsheet,
  ShieldCheck, TrendingUp, Clock, Users, Star
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />

      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden min-h-[95vh] flex items-center">
        {/* Aurora Gradient Mesh Blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
        <div className="blob blob-5" />

        {/* Grid overlay */}
        <div className="hero-grid" />

        {/* Center glow */}
        <div className="hero-glow" />

        {/* Bottom fade */}
        <div className="hero-fade" />

        {/* Particles */}
        <ParticlesBg />

        <div className="container relative z-10 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">

            {/* Left — Text */}
            <div className="flex flex-col space-y-7">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-[#C9A84C]/20 text-xs sm:text-sm font-semibold w-fit animate-pulse-slow" style={{ color: "#C9A84C" }}>
                <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                AI-First Product Company
              </div>

              <div>
                <h1 className="heading-xl mb-4">
                  We Build <br />
                  <span className="gradient-text">
                    <TypingText />
                  </span>
                </h1>
                <p className="body-lg max-w-lg" style={{ color: "#8898AA" }}>
                  Nyrvex builds intelligent AI solutions — custom software, automation,
                  and AI products that solve real industry problems and drive measurable results.
                </p>
              </div>

              {/* Hero Stats Pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { value: "18K+", label: "Market Size" },
                  { value: "1000+", label: "Carriers/Batch" },
                  { value: "30+", label: "Data Fields" },
                  { value: "A–F", label: "Risk Score" },
                ].map((s) => (
                  <div key={s.label} className="hero-stat">
                    <span className="text-lg font-extrabold" style={{ color: "#C9A84C", fontFamily: "var(--font-montserrat)" }}>
                      {s.value}
                    </span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dispatchdos" className="btn-primary flex items-center justify-center gap-2">
                  See DispatchDOS <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-outline flex items-center justify-center">
                  Book a Free Call
                </Link>
              </div>
            </div>

            {/* Right — Animated DispatchDOS visualization */}
            <div className="flex items-center justify-center">
              <TiltCard className="relative w-full max-w-[480px] animate-float" intensity={6}>
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl blur-2xl"
                  style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(160,120,48,0.1))" }} />

                <div className="glow-border-wrap-pulse rounded-2xl">
                <div className="fancy-card rounded-2xl p-5 relative">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-xs font-semibold text-muted-foreground">DispatchDOS — Live Verification</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: "#C9A84C" }}>
                      <FileSpreadsheet className="h-3.5 w-3.5" />
                      1,247 carriers
                    </div>
                  </div>

                  {/* Column headers */}
                  <div className="grid text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-3 mb-2"
                    style={{ gridTemplateColumns: "auto 1fr auto auto auto" }}>
                    <span>MC#</span>
                    <span className="ml-2">Carrier</span>
                    <span>Auth</span>
                    <span>Ins</span>
                    <span>Risk</span>
                  </div>

                  {/* Animated rows */}
                  <div className="space-y-1.5">
                    {[
                      { mc: "MC-472910", name: "Swift Freight LLC", auth: "Active", ins: "Valid", score: "A", sc: "#22c55e", cls: "data-row-1" },
                      { mc: "MC-883201", name: "Apex Transport Co", auth: "Active", ins: "Valid", score: "B", sc: "#84cc16", cls: "data-row-2" },
                      { mc: "MC-339041", name: "Nova Carriers Inc", auth: "Active", ins: "Expiring", score: "C", sc: "#eab308", cls: "data-row-3" },
                      { mc: "MC-109432", name: "FastLine Corp", auth: "Revoked", ins: "None", score: "F", sc: "#ef4444", cls: "data-row-4" },
                      { mc: "MC-774521", name: "BlueStar Logistics", auth: "Active", ins: "Valid", score: "A", sc: "#22c55e", cls: "data-row-5" },
                    ].map((r) => (
                      <div key={r.mc}
                        className={`grid items-center gap-2 rounded-lg px-3 py-2 text-xs ${r.cls}`}
                        style={{ background: "rgba(201,168,76,0.04)", gridTemplateColumns: "auto 1fr auto auto auto" }}
                      >
                        <span className="font-mono text-[10px] text-muted-foreground">{r.mc}</span>
                        <span className="text-muted-foreground truncate ml-1">{r.name}</span>
                        <span className={r.auth === "Active" ? "text-green-400 text-[10px]" : "text-red-400 text-[10px]"}>{r.auth}</span>
                        <span className={r.ins === "Valid" ? "text-green-400 text-[10px]" : r.ins === "Expiring" ? "text-yellow-400 text-[10px]" : "text-red-400 text-[10px]"}>{r.ins}</span>
                        <span className="font-black text-sm" style={{ color: r.sc }}>{r.score}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Processed in 3m 42s</span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#C9A84C" }}>
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Report Ready — Download Excel
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-3 w-full h-1 rounded-full" style={{ background: "rgba(201,168,76,0.1)" }}>
                    <div className="h-1 rounded-full" style={{ width: "100%", background: "linear-gradient(90deg, #A07830, #C9A84C, #E8C96A)" }} />
                  </div>
                </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <div className="proof-bar py-4 overflow-hidden">
        <div className="ticker-track">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-10 px-5">
              {[
                { icon: <Users className="h-4 w-4" />, text: "18,000+ Licensed US Freight Brokers" },
                { icon: <ShieldCheck className="h-4 w-4" />, text: "FMCSA Official API Data" },
                { icon: <TrendingUp className="h-4 w-4" />, text: "1,000+ Carriers Verified Per Batch" },
                { icon: <Clock className="h-4 w-4" />, text: "Minutes, Not Hours" },
                { icon: <CheckCircle className="h-4 w-4" />, text: "30+ Data Fields Per Carrier" },
                { icon: <Star className="h-4 w-4" />, text: "USA + Canada Carriers Supported" },
                { icon: <FileSpreadsheet className="h-4 w-4" />, text: "Instant Excel Report Export" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 whitespace-nowrap text-xs font-medium" style={{ color: "#C9A84C" }}>
                  {item.icon}
                  <span>{item.text}</span>
                  <span className="mx-4 text-[#C9A84C]/30">◆</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── CLIENT LOGO STRIP ── */}
      <section className="py-12 border-b" style={{ borderColor: "rgba(201,168,76,0.08)" }}>
        <div className="container">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
            Trusted by businesses across industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { name: "ShopEase", tag: "E-Commerce" },
              { name: "TechRetail", tag: "Retail Tech" },
              { name: "Westchester", tag: "Consulting" },
              { name: "KababJee", tag: "Restaurant" },
              { name: "BlueStar", tag: "Logistics" },
              { name: "Ansareez", tag: "Digital Agency" },
            ].map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 0.07} direction="up">
              <div
                className="flex flex-col items-center gap-1 px-5 py-3 rounded-xl transition-all hover:-translate-y-1"
                style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.1)" }}
              >
                <span className="text-sm font-extrabold tracking-wide" style={{ color: "#C9A84C", fontFamily: "var(--font-montserrat)" }}>
                  {c.name}
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{c.tag}</span>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsCounter />

      {/* ── FEATURED PRODUCT — DispatchDOS ── */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-16">
              <div className="badge-gold mb-2">Flagship Product</div>
              <h2 className="heading-lg">
                Meet <span className="gradient-text">DispatchDOS</span>
              </h2>
              <p className="max-w-[700px] body-lg text-muted-foreground">
                Freight brokers waste hours verifying carriers manually on FMCSA — one by one.
                DispatchDOS automates the entire process in minutes.
              </p>
            </div>
          </FadeIn>

          <ScrollReveal direction="up" delay={0.1}>
          <div className="fancy-card p-6 md:p-10 rounded-2xl">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <h3 className="heading-sm mb-4 text-[#F1F5F9]">
                  1,000+ Carriers Verified in <span className="gradient-text">Minutes</span>
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Upload your carrier list (Excel or CSV)",
                    "30+ FMCSA data fields per carrier automatically",
                    "Authority status, insurance & safety rating verified",
                    "Instant A–F risk score for every carrier",
                    "USA + Canada carriers supported",
                    "Download full Excel report instantly",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/dispatchdos" className="btn-primary flex items-center gap-2 w-fit">
                  Learn More <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="glass-card rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Sample Report</span>
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: "#C9A84C" }}>
                    <FileSpreadsheet className="h-3.5 w-3.5" />
                    Excel Export
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { mc: "MC-472910", name: "Swift Freight LLC", score: "A", color: "#22c55e" },
                    { mc: "MC-883201", name: "Apex Transport Co", score: "B", color: "#84cc16" },
                    { mc: "MC-339041", name: "Nova Carriers Inc", score: "C", color: "#eab308" },
                    { mc: "MC-109432", name: "FastLine Corp", score: "F", color: "#ef4444" },
                  ].map((row) => (
                    <div key={row.mc}
                      className="grid items-center gap-2 rounded-lg px-3 py-2.5 text-xs"
                      style={{ background: "rgba(201,168,76,0.04)", gridTemplateColumns: "auto 1fr auto" }}
                    >
                      <span className="font-mono text-muted-foreground">{row.mc}</span>
                      <span className="text-muted-foreground truncate">{row.name}</span>
                      <span className="font-bold" style={{ color: row.color }}>Risk {row.score}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Showing 4 of 1,247 carriers</span>
                  <div className="flex items-center gap-1 text-xs" style={{ color: "#C9A84C" }}>
                    <ShieldCheck className="h-3.5 w-3.5" />
                    All verified
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-16">
              <div className="badge-gold mb-2">What We Build</div>
              <h2 className="heading-lg">
                Our <span className="gradient-text">Services</span>
              </h2>
              <div className="section-divider" />
              <p className="max-w-[680px] body-lg text-muted-foreground">
                Focused AI solutions and software development for businesses that want real results
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Bot className="h-7 w-7" />, title: "AI Chatbot Development", desc: "Custom AI-powered chatbots for customer support, sales, and lead generation. Smart, fast, and available 24/7.", color: "rgba(201,168,76,0.12)", textColor: "#C9A84C" },
              { icon: <Cpu className="h-7 w-7" />, title: "AI Agents / AI Employees", desc: "Autonomous AI agents that handle tasks, make decisions, and complete workflows independently.", color: "rgba(99,102,241,0.12)", textColor: "#818CF8" },
              { icon: <Workflow className="h-7 w-7" />, title: "AI Automation", desc: "Automate repetitive business processes — data verification, reporting, email handling, and more.", color: "rgba(34,197,94,0.12)", textColor: "#22C55E" },
              { icon: <Brain className="h-7 w-7" />, title: "AI & Machine Learning", desc: "Harness AI and ML to automate processes, gain insights from data, and build intelligent applications.", color: "rgba(6,182,212,0.12)", textColor: "#06B6D4" },
              { icon: <Code className="h-7 w-7" />, title: "Web Development", desc: "Custom web applications and responsive websites built with modern technologies like Next.js and React.", color: "rgba(201,168,76,0.12)", textColor: "#C9A84C" },
              { icon: <Smartphone className="h-7 w-7" />, title: "Mobile Apps", desc: "Native and cross-platform mobile applications for iOS and Android that deliver great user experiences.", color: "rgba(249,115,22,0.12)", textColor: "#F97316" },
            ].map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.08} direction="up">
                <div className="fancy-card p-6 md:p-8 h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl mb-4 md:mb-6"
                    style={{ background: s.color, color: s.textColor }}>
                    {s.icon}
                  </div>
                  <h3 className="heading-sm mb-2 md:mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex justify-center mt-10 md:mt-14">
              <Link href="/services" className="btn-primary inline-flex items-center gap-2">
                View All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-16">
              <div className="badge-gold mb-2">Portfolio</div>
              <h2 className="heading-lg">
                Our Recent <span className="gradient-text">Work</span>
              </h2>
              <div className="section-divider" />
              <p className="max-w-[560px] body-lg text-muted-foreground">
                Real projects we have built for real clients
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: "/EEE.PNG", title: "E-commerce Platform", desc: "A scalable online marketplace with seamless payment integration and real-time inventory management.", color: "from-[#C9A84C] to-[#A07830]" },
              { img: "/AAb.PNG", title: "KababJee Restaurant", desc: "Modern restaurant website with interactive menu, online reservations, and seamless ordering.", color: "from-[#A07830] to-[#C9A84C]" },
              { img: "/Abc.PNG", title: "Business Consultancy", desc: "Professional consultancy website with modern design, service showcase, and lead generation.", color: "from-[#C9A84C] to-[#E8C96A]", span: true },
            ].map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up" className={p.span ? "sm:col-span-2 lg:col-span-1" : ""}>
              <div className={`group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover-lift h-full`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${p.color}`}></div>
                <Image src={p.img} alt={p.title} width={600} height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="p-6 md:p-8 glass-card">
                  <h3 className="heading-sm mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                  <Link href="/projects" className="inline-flex items-center text-sm font-semibold hover:underline group" style={{ color: "#C9A84C" }}>
                    View details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="flex justify-center mt-8 md:mt-12">
            <Link href="/projects" className="btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding" style={{ background: "rgba(201,168,76,0.02)" }}>
        <div className="container">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-16">
              <div className="badge-gold mb-2">Client Reviews</div>
              <h2 className="heading-lg">
                What Clients <span className="gradient-text">Say</span>
              </h2>
              <div className="section-divider" />
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5"
                style={{ color: "#C9A84C" }}
              >
                View all 9+ reviews
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-14">
              <div className="badge-gold mb-2">FAQ</div>
              <h2 className="heading-lg">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <div className="section-divider" />
              <p className="max-w-[560px] body-lg text-muted-foreground">
                Everything you need to know about Nyrvex and DispatchDOS
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={[
              {
                q: "What is DispatchDOS?",
                a: "DispatchDOS is a bulk FMCSA carrier verification tool built for freight brokers. Instead of manually checking each carrier on the FMCSA website one by one, you upload a list of 1,000+ carriers and get back a full Excel report with 30+ data points and an A–F risk score for every carrier — in minutes."
              },
              {
                q: "How many carriers can I verify at once?",
                a: "DispatchDOS supports 1,000+ carriers per batch. Simply upload your carrier list as an Excel or CSV file, and we handle the rest. The report is ready within minutes regardless of batch size."
              },
              {
                q: "What data does DispatchDOS pull from FMCSA?",
                a: "DispatchDOS pulls 30+ data fields per carrier including: authority status (Active/Revoked/Inactive), insurance verification, safety rating, out-of-service rate, crash history, inspection history, fleet size, operating regions, and more. Every carrier also gets an A–F risk score for instant decision-making."
              },
              {
                q: "Does DispatchDOS support Canadian carriers?",
                a: "Yes! DispatchDOS supports both US and Canada carriers, making it ideal for cross-border freight brokers and logistics companies that work with carriers from both countries."
              },
              {
                q: "What other services does Nyrvex offer?",
                a: "Beyond DispatchDOS, Nyrvex builds custom AI chatbots, AI agents (autonomous AI employees), business process automation, full-stack web applications, and mobile apps. We specialize in applying AI to solve specific, real industry problems."
              },
              {
                q: "How do I get started with DispatchDOS?",
                a: "DispatchDOS is currently in early access. Click 'Request Demo' or go to our Contact page to request access. We will get back to you within 24 hours to set up a demo and discuss your verification needs."
              },
            ]} />
          </div>
        </div>
      </section>

      {/* ── ROADMAP TEASER ── */}
      <section className="section-padding" style={{ background: "rgba(8,13,28,0.6)" }}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-center text-center space-y-3 mb-12">
              <div className="badge-gold mb-2">What&apos;s Coming</div>
              <h2 className="heading-lg">
                Product <span className="gradient-text">Roadmap</span>
              </h2>
              <div className="section-divider" />
              <p className="max-w-[560px] body-lg text-muted-foreground">
                We build focused AI products, one at a time. Here&apos;s what&apos;s live, in development, and planned.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "DispatchDOS",
                quarter: "Now",
                desc: "Bulk FMCSA carrier verification for freight brokers. 1,000+ carriers, 30+ data fields, A–F risk score.",
                status: "Early Access",
                statusColor: "#C9A84C",
                statusBg: "rgba(201,168,76,0.12)",
                dot: "#22c55e",
                href: "/dispatchdos",
              },
              {
                name: "DispatchDOS v2",
                quarter: "Q4 2026",
                desc: "Canada-first carrier verification, deeper safety analytics, and TMS/CRM API integrations.",
                status: "In Development",
                statusColor: "#60A5FA",
                statusBg: "rgba(96,165,250,0.1)",
                dot: "#60A5FA",
                href: null,
              },
              {
                name: "AI Load Matching",
                quarter: "2027",
                desc: "AI-powered load-to-carrier matching engine that factors in risk scores, routes, and past performance.",
                status: "Planned",
                statusColor: "#A78BFA",
                statusBg: "rgba(167,139,250,0.1)",
                dot: "#A78BFA",
                href: null,
              },
              {
                name: "Compliance Monitor",
                quarter: "2027",
                desc: "Continuous 24/7 monitoring of your active carrier list — instant alerts when insurance expires or authority changes.",
                status: "Planned",
                statusColor: "#8898AA",
                statusBg: "rgba(136,152,170,0.08)",
                dot: "#8898AA",
                href: null,
              },
            ].map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.1} direction="up">
                <div className="fancy-card rounded-xl p-6 h-full flex flex-col justify-between">
                  {/* Top */}
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full flex-shrink-0 mt-0.5" style={{ background: item.dot, boxShadow: `0 0 6px ${item.dot}` }} />
                        <h3 className="heading-sm">{item.name}</h3>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0" style={{ background: item.statusBg, color: item.statusColor }}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground mb-4">{item.desc}</p>
                  </div>
                  {/* Bottom */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "rgba(201,168,76,0.08)" }}>
                    <span className="text-xs font-semibold" style={{ color: "#C9A84C" }}>{item.quarter}</span>
                    {item.href ? (
                      <a href={item.href} className="text-xs font-semibold underline underline-offset-2 hover:text-[#E8C96A] transition-colors" style={{ color: "#C9A84C" }}>
                        Learn more →
                      </a>
                    ) : (
                      <span className="text-xs text-muted-foreground">Stay tuned</span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="colorful-gradient text-[#0A0F1E] section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <div className="container relative z-10">
          <ScrollReveal direction="up">
          <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="heading-lg text-[#0A0F1E]">Ready to Build Something <br />Intelligent?</h2>
              <p className="mx-auto max-w-[800px] body-lg text-[#0A0F1E]/75">
                Let&apos;s discuss how Nyrvex can help you automate, innovate, and grow with AI.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md bg-[#0A0F1E] text-[#C9A84C] px-6 sm:px-8 text-sm sm:text-base font-bold shadow transition-all hover:shadow-xl hover:-translate-y-1">
                Book a Free Consultation
              </Link>
              <Link href="/dispatchdos"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md border-2 border-[#0A0F1E] text-[#0A0F1E] px-6 sm:px-8 text-sm sm:text-base font-semibold transition-all hover:bg-[#0A0F1E]/10 hover:-translate-y-1">
                See DispatchDOS
              </Link>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
