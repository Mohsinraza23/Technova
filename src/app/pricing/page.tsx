import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, X, ArrowRight } from "lucide-react"
import ScrollReveal from "../components/scroll-reveal"

export const metadata: Metadata = {
  title: "Pricing — Nyrvex",
  description: "Transparent pricing for Nyrvex web development and AI services. No hidden fees — custom quotes based on your project scope.",
  alternates: { canonical: "https://nyrvex.com/pricing" },
}

const PLANS = [
  {
    name: "Starter",
    price: "Contact for Price",
    description: "Professional web presence for small businesses and startups",
    features: [
      "5-page responsive website",
      "Mobile-first design",
      "Basic SEO setup",
      "Contact form integration",
      "1 month post-launch support",
    ],
    notIncluded: ["AI chatbot", "Custom backend", "E-commerce"],
    popular: false,
  },
  {
    name: "Growth",
    price: "Contact for Price",
    description: "Full custom web application or AI chatbot for growing businesses",
    features: [
      "Full custom web application",
      "AI chatbot integration",
      "User authentication",
      "Admin dashboard",
      "Database & API setup",
      "3 months post-launch support",
      "SEO optimization",
    ],
    notIncluded: ["Autonomous AI agents"],
    popular: true,
  },
  {
    name: "AI Pro",
    price: "Custom Quote",
    description: "End-to-end agentic AI and automation for established businesses",
    features: [
      "Agentic AI / AI Employee",
      "Multi-step AI automation",
      "Custom AI chatbot",
      "CRM & tool integrations",
      "Full backend development",
      "Ongoing maintenance",
      "Priority support",
      "Monthly performance reports",
    ],
    notIncluded: [],
    popular: false,
  },
]

const SERVICES = [
  { name: "Basic Website (5 pages)", note: "Contact for price" },
  { name: "E-commerce Store", note: "Contact for price" },
  { name: "Custom Web Application", note: "Contact for price" },
  { name: "AI Chatbot", note: "Contact for price" },
  { name: "Agentic AI / AI Employee", note: "Contact for price" },
  { name: "AI Automation Workflow", note: "Contact for price" },
  { name: "DispatchDOS Early Access", note: "Request demo" },
  { name: "Mobile App (iOS/Android)", note: "Contact for price" },
  { name: "SEO Package (3 months)", note: "Contact for price" },
]

const FAQS = [
  {
    q: "Do you require full payment upfront?",
    a: "No. We work with 50% upfront and 50% upon project delivery. For larger projects, milestone-based payments can be arranged.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Bank transfers, JazzCash, EasyPaisa, and international payments via Wise or PayPal.",
  },
  {
    q: "Can I add features after launch?",
    a: "Absolutely. You can start with a basic website and add AI features, e-commerce, or automation at any time.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer revisions until you are satisfied with the result. Refunds are handled case by case based on project stage.",
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="mirror-gradient section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-5 text-center">
            <div className="badge-gold mb-2">Transparent Pricing</div>
            <h1 className="heading-xl">
              Simple &amp; <span className="gradient-text">Honest Pricing</span>
            </h1>
            <p className="mx-auto max-w-[640px] body-lg text-muted-foreground">
              No hidden fees. No surprises. Every project starts with a free consultation —
              we quote based on your exact scope, not a generic tier.
            </p>
          </div>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section className="section-padding">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {PLANS.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.1} direction="up">
                <div className="relative flex flex-col h-full">
                  {plan.popular && (
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 text-[#0A0F1E] text-xs font-black px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap"
                      style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", fontFamily: "var(--font-montserrat)" }}
                    >
                      Most Popular
                    </div>
                  )}
                  <div
                    className="fancy-card p-8 flex flex-col flex-1"
                    style={plan.popular ? { border: "1px solid rgba(201,168,76,0.45)", boxShadow: "0 0 40px rgba(201,168,76,0.1)" } : {}}
                  >
                    {/* Top accent */}
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: "linear-gradient(90deg, #A07830, #C9A84C, #E8C96A)" }} />
                    )}

                    <div className="mb-6">
                      <h3 className="heading-sm mb-2">{plan.name}</h3>
                      <div className="mb-2">
                        <span className="heading-md gradient-text">{plan.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#C9A84C" }} />
                          <span className="text-sm text-[#E8EDF5]">{f}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((f) => (
                        <li key={f} className="flex items-start gap-3 opacity-35">
                          <X className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground line-through">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="w-full text-center py-3 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                      style={
                        plan.popular
                          ? { background: "linear-gradient(135deg, #C9A84C, #E8C96A)", color: "#0A0F1E" }
                          : { background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C" }
                      }
                    >
                      Get a Quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES TABLE ── */}
      <section className="section-padding" style={{ background: "rgba(201,168,76,0.02)" }}>
        <div className="container px-4 md:px-6">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-center text-center space-y-3 mb-12">
              <div className="badge-gold mb-2">A La Carte</div>
              <h2 className="heading-lg">
                Individual <span className="gradient-text">Services</span>
              </h2>
              <div className="section-divider" />
              <p className="max-w-[520px] body-lg text-muted-foreground">
                Need one specific thing? Every service can be scoped and quoted independently.
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto fancy-card rounded-2xl overflow-hidden">
            {SERVICES.map((s, i) => (
              <div
                key={s.name}
                className="flex items-center justify-between px-6 py-4"
                style={{ borderBottom: i !== SERVICES.length - 1 ? "1px solid rgba(201,168,76,0.08)" : "none" }}
              >
                <span className="font-medium text-[#E8EDF5] text-sm">{s.name}</span>
                <span className="text-xs font-bold" style={{ color: "#C9A84C" }}>{s.note}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-5">
            Final pricing depends on project scope. Contact us for a free custom quote — we respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding">
        <div className="container px-4 md:px-6">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-center text-center space-y-3 mb-12">
              <div className="badge-gold mb-2">Pricing FAQ</div>
              <h2 className="heading-lg">
                Common <span className="gradient-text">Questions</span>
              </h2>
              <div className="section-divider" />
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto grid gap-4">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.08} direction="up">
                <div className="fancy-card p-6 rounded-xl">
                  <h3 className="font-bold text-sm text-[#E8EDF5] mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
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
                <h2 className="heading-lg text-[#0A0F1E]">Not Sure Which Plan to Choose?</h2>
                <p className="mx-auto max-w-[560px] body-lg text-[#0A0F1E]/75">
                  Tell us about your project and we&apos;ll recommend the right approach for your budget and goals.
                  Free consultation, always.
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
                  href="/services"
                  className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md border-2 border-[#0A0F1E] text-[#0A0F1E] px-8 text-base font-semibold transition-all hover:bg-[#0A0F1E]/10 hover:-translate-y-1"
                >
                  See All Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
