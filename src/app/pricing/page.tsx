import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "Contact for Price",
    priceNote: "",
    description: "Perfect for small businesses that need a professional web presence",
    color: "cyan",
    features: [
      "5-page responsive website",
      "Mobile-friendly design",
      "Basic SEO setup",
      "Contact form",
      "Social media links",
      "1 month free support",
    ],
    notIncluded: ["AI chatbot", "Custom backend", "E-commerce"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "Contact for Price",
    priceNote: "",
    description: "For businesses ready to scale with a custom web app or AI chatbot",
    color: "violet",
    features: [
      "Full custom web application",
      "AI chatbot integration",
      "User authentication",
      "Admin dashboard",
      "Database setup",
      "API integration",
      "3 months free support",
      "SEO optimization",
    ],
    notIncluded: ["Autonomous AI agents"],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "AI Pro",
    price: "Custom",
    priceNote: "contact for quote",
    description: "For businesses that want full Agentic AI and automation solutions",
    color: "emerald",
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
    cta: "Contact Us",
    popular: false,
  },
]

const services = [
  { name: "Basic Website (5 pages)", price: "Contact for Price" },
  { name: "E-commerce Store", price: "Contact for Price" },
  { name: "AI Chatbot", price: "Contact for Price" },
  { name: "Agentic AI / AI Employee", price: "Contact for Price" },
  { name: "AI Automation Workflow", price: "Contact for Price" },
  { name: "Mobile App (iOS/Android)", price: "Contact for Price" },
  { name: "UI/UX Design", price: "Contact for Price" },
  { name: "SEO Package (3 months)", price: "Contact for Price" },
  { name: "Social Media Management", price: "Contact for Price" },
  { name: "Logo & Brand Design", price: "Contact for Price" },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 glass border border-white/20 text-sm font-medium">
              Transparent Pricing
            </div>
            <h1 className="heading-xl">
              Simple & <span className="gradient-text">Honest Pricing</span>
            </h1>
            <p className="mx-auto max-w-[700px] body-lg text-muted-foreground">
              No hidden fees. No surprises. You know exactly what you are paying for before we start.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className="relative flex flex-col">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 bg-violet-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <div
                  className={`fancy-card p-8 flex flex-col flex-1 ${plan.popular ? "ring-2 ring-violet-500 mt-4" : ""}`}
                >
                <div className="mb-6">
                  <h3 className="heading-sm mb-2">{plan.name}</h3>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="heading-lg gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground text-sm mb-1">{plan.priceNote}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-3 opacity-40">
                      <span className="h-4 w-4 mt-0.5 flex-shrink-0 text-center text-xs leading-4">✕</span>
                      <span className="text-sm line-through">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full text-center py-3 rounded-md font-semibold text-sm transition-all ${
                    plan.popular
                      ? "btn-primary"
                      : "border border-white/20 hover:bg-white/10"
                  }`}
                >
                  {plan.cta} <ArrowRight className="inline ml-1 h-4 w-4" />
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="section-padding bg-white/5">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="heading-lg">
              Individual <span className="gradient-text">Service Pricing</span>
            </h2>
            <p className="text-muted-foreground body-lg">Need just one specific service? Here are our rates.</p>
          </div>
          <div className="max-w-3xl mx-auto fancy-card overflow-hidden">
            {services.map((s, index) => (
              <div
                key={s.name}
                className={`flex items-center justify-between px-6 py-4 ${index !== services.length - 1 ? "border-b border-white/10" : ""}`}
              >
                <span className="font-medium">{s.name}</span>
                <span className="gradient-text font-bold">{s.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            * Final pricing depends on project scope. Contact us for a free custom quote.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="heading-lg">
              Pricing <span className="gradient-text">FAQ</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid gap-4">
            {[
              {
                q: "Do you require full payment upfront?",
                a: "No. We typically work with 50% upfront and 50% upon project delivery. For larger projects, we can set up milestone-based payments.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept bank transfers, JazzCash, EasyPaisa, and international payments via Wise or PayPal.",
              },
              {
                q: "Can I upgrade my plan later?",
                a: "Absolutely. You can start with a basic website and add AI features, e-commerce, or automation later.",
              },
              {
                q: "Do you offer refunds?",
                a: "We offer revisions until you are satisfied. Refunds are handled case by case based on project stage.",
              },
            ].map((faq) => (
              <div key={faq.q} className="fancy-card p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="colorful-gradient text-white section-padding">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="heading-lg text-white">Not Sure Which Plan to Choose?</h2>
            <p className="mx-auto max-w-[600px] body-lg">
              Contact us for a free consultation. We will recommend the best solution for your budget and goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white text-violet-600 px-8 text-sm font-semibold shadow transition-colors hover:bg-white/90"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
