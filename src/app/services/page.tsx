import type { Metadata } from "next"
import Link from "next/link"
import {
  Bot, Cpu, Workflow, Brain, Code, Smartphone,
  CheckCircle, ArrowRight, Zap, Clock, Shield, TrendingUp,
} from "lucide-react"
import ScrollReveal from "../components/scroll-reveal"
import TiltCard from "../components/tilt-card"

export const metadata: Metadata = {
  title: "Services — AI Solutions & Software Development",
  description: "Nyrvex builds custom AI chatbots, AI agents, automation systems, web applications, and mobile apps. Explore all services and find the right solution for your business.",
  keywords: [
    "AI chatbot development", "AI agents", "business automation", "custom software",
    "web development", "mobile app development", "AI solutions", "Nyrvex services",
    "machine learning", "AI employees", "Next.js development",
  ],
  openGraph: {
    title: "Services — AI Solutions & Software Development | Nyrvex",
    description: "Custom AI chatbots, agents, automation, web & mobile development. Built for businesses that want real results.",
    url: "https://nyrvex.com/services",
    siteName: "Nyrvex",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "Nyrvex Services" }],
    type: "website",
  },
  alternates: { canonical: "https://nyrvex.com/services" },
}

const SERVICES = [
  {
    icon: <Bot className="h-7 w-7" />,
    title: "AI Chatbot Development",
    tagline: "24/7 intelligent support without the headcount",
    desc: "Custom AI-powered chatbots that handle customer support, qualify leads, answer questions, and close sales — automatically, around the clock.",
    color: "rgba(201,168,76,0.12)",
    textColor: "#C9A84C",
    includes: [
      "GPT-4 / Claude integration on your data",
      "Website, WhatsApp & Telegram deployment",
      "Custom personality & brand voice training",
      "Handoff to human agent when needed",
      "Analytics dashboard & conversation logs",
    ],
    useCases: ["E-commerce support", "Lead qualification", "Appointment booking", "FAQ automation"],
    timeline: "2–4 weeks",
    span: 2,
  },
  {
    icon: <Cpu className="h-7 w-7" />,
    title: "AI Agents / AI Employees",
    tagline: "Autonomous AI that works without supervision",
    desc: "AI agents that independently handle complex multi-step tasks — researching, writing, processing data, managing emails, and making decisions on your behalf.",
    color: "rgba(99,102,241,0.12)",
    textColor: "#818CF8",
    includes: [
      "Custom agent logic & decision workflows",
      "CRM / email / calendar integrations",
      "Web browsing & data extraction agents",
      "Automated reporting & escalation",
      "Monitoring dashboard & activity logs",
    ],
    useCases: ["Lead research", "Email triage", "Report generation", "Data processing"],
    timeline: "3–6 weeks",
    span: 1,
  },
  {
    icon: <Workflow className="h-7 w-7" />,
    title: "AI Automation",
    tagline: "Eliminate repetitive work from your team's day",
    desc: "End-to-end business process automation — from data entry and verification to reporting, notifications, and cross-system syncing. If it's repetitive, we automate it.",
    color: "rgba(34,197,94,0.12)",
    textColor: "#22C55E",
    includes: [
      "Full workflow mapping & analysis",
      "API & third-party system integrations",
      "Automated data pipelines & validation",
      "Scheduled reports & alert systems",
      "Error handling & human escalation paths",
    ],
    useCases: ["Invoice processing", "Carrier verification", "Data entry", "Compliance checks"],
    timeline: "2–5 weeks",
    span: 1,
  },
  {
    icon: <Brain className="h-7 w-7" />,
    title: "AI & Machine Learning",
    tagline: "Turn your data into intelligent decisions",
    desc: "Custom ML models and AI systems that learn from your data — predicting outcomes, classifying information, detecting anomalies, and surfacing actionable insights.",
    color: "rgba(6,182,212,0.12)",
    textColor: "#06B6D4",
    includes: [
      "Dataset analysis & feature engineering",
      "Custom model training & fine-tuning",
      "Predictive analytics & forecasting",
      "NLP: classification, sentiment, extraction",
      "Model deployment & monitoring API",
    ],
    useCases: ["Risk scoring", "Demand forecasting", "Fraud detection", "Document parsing"],
    timeline: "4–10 weeks",
    span: 2,
  },
  {
    icon: <Code className="h-7 w-7" />,
    title: "Web Development",
    tagline: "Fast, modern web apps built to convert",
    desc: "Custom web applications built with Next.js, React, and modern APIs. From business websites and SaaS dashboards to e-commerce platforms and internal tools.",
    color: "rgba(201,168,76,0.12)",
    textColor: "#C9A84C",
    includes: [
      "Next.js / React / TypeScript frontend",
      "REST & GraphQL API development",
      "Database design (PostgreSQL, MongoDB)",
      "Authentication, payments & third-party APIs",
      "Deployment, CI/CD & ongoing support",
    ],
    useCases: ["SaaS products", "E-commerce", "Admin dashboards", "Landing pages"],
    timeline: "3–8 weeks",
    span: 1,
  },
  {
    icon: <Smartphone className="h-7 w-7" />,
    title: "Mobile Apps",
    tagline: "Native experiences on iOS & Android",
    desc: "Cross-platform mobile applications using React Native and Flutter — with native performance, seamless UX, and full App Store & Google Play deployment.",
    color: "rgba(249,115,22,0.12)",
    textColor: "#F97316",
    includes: [
      "React Native or Flutter development",
      "iOS & Android from a single codebase",
      "Push notifications & offline support",
      "Backend API & database integration",
      "App Store & Play Store submission",
    ],
    useCases: ["Customer-facing apps", "Driver/delivery apps", "Booking systems", "Field tools"],
    timeline: "6–12 weeks",
    span: 2,
  },
]

const WHY = [
  { icon: <Zap className="h-5 w-5" />, title: "AI-First Approach", desc: "Every solution starts with the question: how can AI make this 10× better than the manual process?" },
  { icon: <Shield className="h-5 w-5" />, title: "Production Quality", desc: "No prototypes shipped as products. Every feature is tested, documented, and production-ready before delivery." },
  { icon: <Clock className="h-5 w-5" />, title: "Fast Delivery", desc: "Focused sprints with weekly updates. You see working software quickly — not after months of silence." },
  { icon: <TrendingUp className="h-5 w-5" />, title: "Measurable Results", desc: "We define success metrics upfront and measure every project against real outcomes — time saved, revenue added, errors eliminated." },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="mirror-gradient section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-5 text-center">
            <div className="badge-gold mb-2">What We Build</div>
            <h1 className="heading-xl">
              AI Solutions &amp; <span className="gradient-text">Software</span> Services
            </h1>
            <p className="mx-auto max-w-[640px] body-lg text-muted-foreground">
              From AI chatbots and autonomous agents to full-stack web apps and mobile products —
              we build focused solutions that solve real problems and deliver measurable results.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              {[
                { value: "6+", label: "Service Areas" },
                { value: "AI-First", label: "Approach" },
                { value: "2–12wk", label: "Delivery" },
                { value: "24hr", label: "Response Time" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center px-5 py-3 rounded-xl"
                  style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.15)" }}
                >
                  <span className="text-lg font-black" style={{ color: "#C9A84C", fontFamily: "var(--font-montserrat)" }}>{s.value}</span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES BENTO GRID ── */}
      <section className="section-padding">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ScrollReveal
                key={s.title}
                delay={i * 0.07}
                direction="up"
                className={s.span === 2 ? "md:col-span-2 lg:col-span-2" : "col-span-1"}
              >
                <TiltCard className="h-full" intensity={4}>
                  <div className="fancy-card rounded-2xl p-6 md:p-8 h-full flex flex-col relative overflow-hidden">

                    {/* Colored top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: `linear-gradient(90deg, ${s.textColor}, transparent 70%)` }} />

                    {/* Faint watermark icon */}
                    <div className="absolute right-5 bottom-5 pointer-events-none select-none"
                      style={{ color: s.textColor, opacity: 0.06, transform: "scale(5)", transformOrigin: "bottom right" }}>
                      {s.icon}
                    </div>

                    {s.span === 2 ? (
                      /* ── LARGE BENTO CARD ── */
                      <>
                        <div className="flex items-start gap-4 mb-5">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ background: s.color, color: s.textColor }}>
                            {s.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 flex-wrap mb-0.5">
                              <h2 className="heading-sm">{s.title}</h2>
                              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full flex-shrink-0"
                                style={{ background: s.color, color: s.textColor, border: `1px solid ${s.textColor}30` }}>
                                {s.timeline}
                              </span>
                            </div>
                            <p className="text-xs font-semibold" style={{ color: s.textColor }}>{s.tagline}</p>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>

                        <div className="grid sm:grid-cols-2 gap-6 flex-1">
                          {/* Includes */}
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                              What&apos;s Included
                            </p>
                            <ul className="space-y-2">
                              {s.includes.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                                  <CheckCircle className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: s.textColor }} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Use cases + CTA */}
                          <div className="flex flex-col">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                              Use Cases
                            </p>
                            <div className="flex flex-wrap gap-1.5 mb-auto">
                              {s.useCases.map((uc) => (
                                <span key={uc} className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                                  style={{ background: s.color, color: s.textColor, border: `1px solid ${s.textColor}25` }}>
                                  {uc}
                                </span>
                              ))}
                            </div>
                            <Link
                              href="/contact"
                              className="btn-shine inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-lg transition-all hover:-translate-y-0.5 text-[#0A0F1E] mt-6 w-fit"
                              style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", boxShadow: "0 4px 15px rgba(201,168,76,0.2)" }}
                            >
                              Get a Quote <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </>
                    ) : (
                      /* ── SMALL BENTO CARD ── */
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                            style={{ background: s.color, color: s.textColor }}>
                            {s.icon}
                          </div>
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                            style={{ background: s.color, color: s.textColor, border: `1px solid ${s.textColor}30` }}>
                            {s.timeline}
                          </span>
                        </div>

                        <h2 className="heading-sm mb-1">{s.title}</h2>
                        <p className="text-xs font-semibold mb-3" style={{ color: s.textColor }}>{s.tagline}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{s.desc}</p>

                        <ul className="space-y-2 mb-4">
                          {s.includes.slice(0, 3).map((item) => (
                            <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <CheckCircle className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: s.textColor }} />
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {s.useCases.slice(0, 3).map((uc) => (
                            <span key={uc} className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                              style={{ background: s.color, color: s.textColor, border: `1px solid ${s.textColor}25` }}>
                              {uc}
                            </span>
                          ))}
                        </div>

                        <Link
                          href="/contact"
                          className="btn-shine inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg transition-all hover:-translate-y-0.5 text-[#0A0F1E] w-fit"
                          style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", boxShadow: "0 4px 15px rgba(201,168,76,0.15)" }}
                        >
                          Get a Quote <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </>
                    )}
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NYRVEX ── */}
      <section className="section-padding" style={{ background: "rgba(201,168,76,0.02)" }}>
        <div className="container px-4 md:px-6">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-center text-center space-y-3 mb-12">
              <div className="badge-gold mb-2">Why Nyrvex</div>
              <h2 className="heading-lg">
                What Makes Us <span className="gradient-text">Different</span>
              </h2>
              <div className="section-divider" />
              <p className="max-w-[560px] body-lg text-muted-foreground">
                We don&apos;t do everything for everyone. We pick real problems and build the best possible solution.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {WHY.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 0.1} direction="up">
                <TiltCard className="h-full">
                <div className="fancy-card rounded-xl p-6 text-center h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}
                  >
                    {w.icon}
                  </div>
                  <h3 className="heading-sm mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-padding">
        <div className="container px-4 md:px-6">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-center text-center space-y-3 mb-12">
              <div className="badge-gold mb-2">How We Work</div>
              <h2 className="heading-lg">
                From Brief to <span className="gradient-text">Launch</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {[
              { step: "01", title: "Discovery Call", desc: "Free 30-minute call to understand your problem, goals, and constraints. No sales pitch — just honest conversation about what's possible.", time: "Day 1" },
              { step: "02", title: "Proposal & Scoping", desc: "We send a detailed proposal with timeline, deliverables, tech stack, and fixed price. No vague estimates.", time: "Day 2–3" },
              { step: "03", title: "Build & Demo", desc: "Agile sprints with real working demos every week. You give feedback, we iterate — no surprises at the end.", time: "Weeks 1–N" },
              { step: "04", title: "Launch & Handover", desc: "Production deployment, documentation, team training, and 30 days of post-launch support included.", time: "Final Week" },
            ].map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.1} direction="up">
                <div className="flex gap-5 md:gap-8 pb-8 relative">
                  {/* Connector */}
                  {i < 3 && (
                    <div
                      className="absolute left-[1.35rem] top-11 bottom-0 w-px"
                      style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.3), transparent)" }}
                    />
                  )}
                  {/* Step circle */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                    style={{ background: "linear-gradient(135deg, #A07830, #C9A84C)", boxShadow: "0 0 20px rgba(201,168,76,0.25)" }}
                  >
                    <span className="text-xs font-black text-[#0A0F1E]" style={{ fontFamily: "var(--font-montserrat)" }}>{p.step}</span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="heading-sm">{p.title}</h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}>
                        {p.time}
                      </span>
                    </div>
                    <p className="body-md text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCT CALLOUT ── */}
      <section className="section-padding" style={{ background: "rgba(201,168,76,0.02)" }}>
        <div className="container px-4 md:px-6">
          <ScrollReveal direction="up">
            <div
              className="fancy-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto"
              style={{ borderColor: "rgba(201,168,76,0.25)" }}
            >
              <div className="badge-gold mb-4 mx-auto w-fit">Featured Product</div>
              <h2 className="heading-lg mb-3">
                Already built something you need: <span className="gradient-text">DispatchDOS</span>
              </h2>
              <p className="body-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Freight broker? Stop wasting hours on manual FMCSA lookups.
                DispatchDOS verifies 1,000+ carriers in minutes with 30+ data fields and an A–F risk score.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/dispatchdos" className="btn-primary inline-flex items-center gap-2 justify-center">
                  See DispatchDOS <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-outline inline-flex items-center justify-center">
                  Request Early Access
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="colorful-gradient text-[#0A0F1E] section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h2 className="heading-lg text-[#0A0F1E]">
                Not Sure Which Service You Need?
              </h2>
              <p className="mx-auto max-w-[600px] body-lg text-[#0A0F1E]/75">
                Book a free 30-minute discovery call. We&apos;ll listen to your problem and recommend
                exactly what you need — even if it&apos;s not us.
              </p>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center gap-2 justify-center rounded-md bg-[#0A0F1E] text-[#C9A84C] px-10 text-base font-bold shadow transition-all hover:shadow-xl hover:-translate-y-1"
              >
                Book Free Discovery Call <ArrowRight className="h-5 w-5" />
              </Link>
              <p className="text-sm text-[#0A0F1E]/60">No commitment. No credit card. Just an honest conversation.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
