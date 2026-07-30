import type { Metadata } from "next"
import Link from "next/link"
import { Bot, Cpu, Workflow, CheckCircle, ArrowRight, Zap, Shield, Clock } from "lucide-react"
import ScrollReveal from "../components/scroll-reveal"

export const metadata: Metadata = {
  title: "AI Services — Nyrvex",
  description: "Nyrvex builds custom AI chatbots, autonomous AI agents, and business automation workflows. Intelligent solutions that work 24/7 for your business.",
  keywords: ["AI chatbot development", "agentic AI", "AI employee", "business automation", "Nyrvex AI services"],
  alternates: { canonical: "https://nyrvex.com/ai-services" },
}

const ICON_STYLE = { background: "rgba(201,168,76,0.1)", color: "#C9A84C" }

export default function AIServicesPage() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="mirror-gradient section-padding relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="badge-gold mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block mr-1" />
              AI Solutions
            </div>
            <h1 className="heading-xl">
              Your Business, <span className="gradient-text">Powered by AI</span>
            </h1>
            <p className="max-w-[660px] body-lg text-muted-foreground">
              We build intelligent AI systems — chatbots, autonomous AI agents, and automation workflows —
              that work for your business 24/7 without breaks, without errors, without a salary.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row pt-2">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Start Your AI Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-outline inline-flex items-center justify-center">
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN SERVICES ── */}
      <section className="section-padding">
        <div className="container px-4 md:px-6">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-center text-center space-y-3 mb-16">
              <div className="badge-gold mb-2">What We Build</div>
              <h2 className="heading-lg">
                Three Core <span className="gradient-text">AI Capabilities</span>
              </h2>
              <div className="section-divider" />
            </div>
          </ScrollReveal>

          {/* Service 1: AI Chatbot */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-24">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={ICON_STYLE}>
                  <Bot className="h-7 w-7" />
                </div>
                <h3 className="heading-md">AI Chatbot Development</h3>
                <p className="body-lg text-muted-foreground">
                  Custom AI chatbots that understand your business, speak your customers&apos; language,
                  and handle queries instantly — day or night, without any human involvement.
                </p>
                <ul className="space-y-3">
                  {[
                    "Customer support automation",
                    "Lead generation & qualification",
                    "Product recommendation engine",
                    "WhatsApp & website integration",
                    "Multi-language support",
                    "CRM integration",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: "#C9A84C" }} />
                      <span className="text-sm text-[#E8EDF5]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get a Chatbot Built <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="fancy-card p-8 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Example Use Cases</p>
                {[
                  { title: "E-commerce Store", desc: "Answers product questions, tracks orders, processes returns automatically" },
                  { title: "Restaurant", desc: "Takes reservations, answers menu queries, handles delivery inquiries 24/7" },
                  { title: "Real Estate", desc: "Qualifies buyers, schedules viewings, answers property questions instantly" },
                  { title: "Healthcare", desc: "Books appointments, answers FAQs, sends appointment reminders" },
                ].map((uc) => (
                  <div
                    key={uc.title}
                    className="p-4 rounded-xl"
                    style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.1)" }}
                  >
                    <p className="font-semibold text-sm text-[#E8EDF5] mb-1">{uc.title}</p>
                    <p className="text-xs text-muted-foreground">{uc.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Service 2: AI Employee */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-24">
            <ScrollReveal direction="left">
              <div className="fancy-card p-8 space-y-3 order-2 lg:order-1">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">What an AI Employee Can Do</p>
                {[
                  { title: "Research & Analysis", desc: "Researches topics, competitors, and market trends automatically" },
                  { title: "Content Creation", desc: "Writes emails, social posts, reports, and documents on demand" },
                  { title: "Data Processing", desc: "Reads, sorts, and processes large data sets without errors" },
                  { title: "Workflow Execution", desc: "Completes multi-step tasks from start to finish autonomously" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl"
                    style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.1)" }}
                  >
                    <p className="font-semibold text-sm text-[#E8EDF5] mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={ICON_STYLE}>
                  <Cpu className="h-7 w-7" />
                </div>
                <h3 className="heading-md">AI Employee / Autonomous Agents</h3>
                <p className="body-lg text-muted-foreground">
                  A digital employee that never sleeps, never makes mistakes, and costs a fraction
                  of a human salary. Our agentic AI systems take on real business tasks independently.
                </p>
                <ul className="space-y-3">
                  {[
                    "Autonomous task execution",
                    "Multi-step workflow automation",
                    "AI-powered decision making",
                    "Email & calendar management",
                    "Report generation",
                    "API & tool integration",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: "#C9A84C" }} />
                      <span className="text-sm text-[#E8EDF5]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Build Your AI Agent <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Service 3: AI Automation */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl" style={ICON_STYLE}>
                  <Workflow className="h-7 w-7" />
                </div>
                <h3 className="heading-md">AI Automation &amp; Integration</h3>
                <p className="body-lg text-muted-foreground">
                  Plug AI into your existing business tools and automate repetitive processes —
                  saving your team hours every week and eliminating human error permanently.
                </p>
                <ul className="space-y-3">
                  {[
                    "Connect AI to your existing software",
                    "Automate data entry & processing",
                    "Automated email campaigns",
                    "Social media automation",
                    "Invoice & document automation",
                    "Custom dashboard & reporting",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: "#C9A84C" }} />
                      <span className="text-sm text-[#E8EDF5]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Automate My Business <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="fancy-card p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">Tools We Integrate With</p>
                <div className="grid grid-cols-2 gap-3">
                  {["WhatsApp Business", "Gmail / Outlook", "Google Sheets", "Notion", "Slack", "WordPress", "Shopify", "Zapier"].map((tool) => (
                    <div
                      key={tool}
                      className="p-3 rounded-xl text-sm text-center font-semibold text-[#E8EDF5] transition-all hover:-translate-y-0.5"
                      style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.12)" }}
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
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
                AI Built the <span className="gradient-text">Right Way</span>
              </h2>
              <div className="section-divider" />
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              { icon: Zap, title: "Fast Delivery", desc: "Most AI projects delivered in 1–3 weeks, not months. We ship fast and iterate on real feedback." },
              { icon: Shield, title: "Secure & Private", desc: "Your data stays private. We build with security-first principles from the ground up." },
              { icon: Clock, title: "24/7 Operation", desc: "Your AI systems work round the clock — no breaks, no sick days, no overtime." },
              { icon: CheckCircle, title: "Proven Results", desc: "Our AI solutions have helped clients reduce support costs by 70–80% and response time by 90%." },
              { icon: Bot, title: "Custom Built", desc: "No generic tools or off-the-shelf platforms. Every AI solution is built for your specific workflow." },
              { icon: Workflow, title: "Full Support", desc: "We support and maintain your AI system after delivery. You're never left on your own." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.08} direction="up">
                <div className="fancy-card p-6 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full mb-4" style={ICON_STYLE}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="heading-sm mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="colorful-gradient text-[#0A0F1E] section-padding relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h2 className="heading-lg text-[#0A0F1E]">Ready to Add AI to Your Business?</h2>
                <p className="mx-auto max-w-[560px] body-lg text-[#0A0F1E]/75">
                  Tell us your business challenge and we&apos;ll build an AI solution that saves you time, money, and effort.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md bg-[#0A0F1E] text-[#C9A84C] px-8 text-base font-bold shadow transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md border-2 border-[#0A0F1E] text-[#0A0F1E] px-8 text-base font-semibold transition-all hover:bg-[#0A0F1E]/10 hover:-translate-y-1"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
