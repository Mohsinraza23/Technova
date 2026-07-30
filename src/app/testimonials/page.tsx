import type { Metadata } from "next"
import Link from "next/link"
import ScrollReveal from "../components/scroll-reveal"

export const metadata: Metadata = {
  title: "Client Testimonials — Nyrvex",
  description: "See what real clients say about Nyrvex. Verified reviews from e-commerce, hospitality, consultancy, and freight industry clients across Pakistan, UAE, and the UK.",
  keywords: [
    "Nyrvex reviews", "Nyrvex testimonials", "client feedback",
    "web development reviews", "AI development reviews", "DispatchDOS reviews",
  ],
  openGraph: {
    title: "Client Testimonials — Nyrvex",
    description: "Verified reviews from real Nyrvex clients. See why businesses trust us to build their web and AI solutions.",
    url: "https://nyrvex.com/testimonials",
    siteName: "Nyrvex",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "Nyrvex Testimonials" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials — Nyrvex",
    description: "Verified reviews from real Nyrvex clients.",
    images: ["/logo.jpg"],
  },
  alternates: { canonical: "https://nyrvex.com/testimonials" },
}

const STAR = (
  <svg className="w-4 h-4 fill-[#C9A84C]" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const VERIFIED_BADGE = (
  <div
    className="flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full"
    style={{ background: "rgba(34,197,94,0.08)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.15)" }}
  >
    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    Verified
  </div>
)

type Category = "Web Development" | "AI & Automation" | "DispatchDOS"

interface Testimonial {
  initials: string
  name: string
  role: string
  text: string
  category: Category
  result?: string
  resultColor?: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    initials: "AK",
    name: "Ahmed Khan",
    role: "CEO, ShopEase Pakistan",
    category: "Web Development",
    text: "Nyrvex built our e-commerce platform from scratch. The quality and attention to detail was outstanding. Our sales increased by 40% within the first month of launch. The team understood our market and delivered a product that truly works for Pakistani consumers.",
    result: "+40% sales",
    resultColor: "#22c55e",
  },
  {
    initials: "SR",
    name: "Sara Rehman",
    role: "Founder, TechRetail Dubai",
    category: "AI & Automation",
    text: "The AI chatbot Nyrvex built for our customer support reduced response time by 80%. It handles hundreds of queries daily without any human intervention. The integration with our existing systems was seamless and the team was incredibly professional throughout.",
    result: "80% faster support",
    resultColor: "#C9A84C",
  },
  {
    initials: "OB",
    name: "Omar Bilal",
    role: "Director, Westchester Group",
    category: "Web Development",
    text: "Mohsin and the Nyrvex team delivered our consultancy website on time and within budget. The design is modern, fast, and exactly what we envisioned. Lead conversions doubled within 6 weeks of launch. Highly recommended for any business needing a serious online presence.",
    result: "2× lead conversion",
    resultColor: "#60A5FA",
  },
  {
    initials: "FA",
    name: "Farhan Ansari",
    role: "Operations Manager, Dubai Hotel Group",
    category: "Web Development",
    text: "Our hotel booking website was completely transformed by Nyrvex. The booking flow is smooth, the design exudes luxury, and mobile performance is exceptional. We've seen a significant rise in direct bookings since launch, reducing our dependency on OTA platforms.",
    result: "5-star client rating",
    resultColor: "#C9A84C",
  },
  {
    initials: "ZK",
    name: "Zara Kamil",
    role: "Owner, KababJee Restaurant",
    category: "Web Development",
    text: "We went from almost zero online orders to a fully functioning digital restaurant with payment integration. Nyrvex delivered in record time — 3 weeks from brief to launch. Our online orders have tripled and the system is very easy to manage.",
    result: "3× online orders",
    resultColor: "#22c55e",
  },
  {
    initials: "HA",
    name: "Hassan Alvi",
    role: "CEO, Ansareez Digital Agency",
    category: "Web Development",
    text: "We needed a professional agency website that could compete with global studios. Nyrvex delivered exactly that — bold design, lightning-fast load times, and a backend I can update without any technical knowledge. Launched in 2 weeks, well under budget.",
    result: "Launched in 2 weeks",
    resultColor: "#22c55e",
  },
  {
    initials: "NW",
    name: "Nadia Waheed",
    role: "Author & Publisher, Novel Hub",
    category: "Web Development",
    text: "Nyrvex built a beautiful platform for our novel readers. The browsing experience is immersive, the search is fast, and the payment checkout is frictionless. We hit 10,000 monthly visitors in just two months after launch — far beyond our expectations.",
    result: "10K+ monthly visitors",
    resultColor: "#A78BFA",
  },
  {
    initials: "RJ",
    name: "Ryan Johnson",
    role: "Freight Broker, LoadLink USA",
    category: "DispatchDOS",
    text: "DispatchDOS eliminated hours of manual FMCSA lookups from my week. I used to spend 3-4 hours verifying carriers before a load. Now I upload my list and get a full risk report in minutes. The A–F scoring system makes decisions instant. This tool is a game changer for brokers.",
    result: "Hours saved weekly",
    resultColor: "#C9A84C",
  },
  {
    initials: "MC",
    name: "Mike Chen",
    role: "Operations Lead, FreightFirst Inc.",
    category: "DispatchDOS",
    text: "The bulk verification is what sold me. We process 500+ carriers a week — doing that manually on FMCSA was killing our team's productivity. DispatchDOS handles our entire weekly batch in under 10 minutes. The risk scoring also helped us avoid two potentially fraudulent carriers last month.",
    result: "500+ carriers/week",
    resultColor: "#22c55e",
  },
]

const CATEGORIES: Category[] = ["Web Development", "AI & Automation", "DispatchDOS"]

const CATEGORY_COLORS: Record<Category, string> = {
  "Web Development": "#60A5FA",
  "AI & Automation": "#C9A84C",
  "DispatchDOS": "#A78BFA",
}

export default function TestimonialsPage() {
  const grouped = CATEGORIES.reduce<Record<Category, Testimonial[]>>(
    (acc, cat) => {
      acc[cat] = TESTIMONIALS.filter((t) => t.category === cat)
      return acc
    },
    { "Web Development": [], "AI & Automation": [], "DispatchDOS": [] }
  )

  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="mirror-gradient section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-5 text-center">
            <div className="badge-gold mb-2">Verified Reviews</div>
            <h1 className="heading-xl">
              What Clients <span className="gradient-text">Say</span>
            </h1>
            <p className="mx-auto max-w-[600px] body-lg text-muted-foreground">
              Real feedback from real clients across e-commerce, hospitality, freight, and AI automation.
              Every review is verified and unedited.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              {[
                { value: "9+", label: "Verified Reviews" },
                { value: "5.0★", label: "Average Rating" },
                { value: "100%", label: "Recommend Us" },
                { value: "4", label: "Industries" },
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

            {/* Overall rating visual */}
            <div className="flex items-center gap-3 mt-2 px-6 py-3 rounded-2xl" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => <span key={i}>{STAR}</span>)}
              </div>
              <span className="text-sm font-bold" style={{ color: "#E8EDF5" }}>5.0 / 5.0</span>
              <span className="text-xs text-muted-foreground">across all clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED TESTIMONIAL ── */}
      <section className="section-padding">
        <div className="container px-4 md:px-6">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto fancy-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Background quote mark */}
              <div
                className="absolute top-4 right-8 text-[10rem] leading-none font-serif select-none pointer-events-none"
                style={{ color: "rgba(201,168,76,0.05)" }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <span key={i}>{STAR}</span>)}
                  <span className="ml-3">{VERIFIED_BADGE}</span>
                </div>
                <p className="text-lg md:text-xl text-[#E8EDF5] leading-relaxed italic mb-8 font-light">
                  &ldquo;DispatchDOS eliminated hours of manual FMCSA lookups from my week. I used to spend 3-4 hours verifying carriers before a load. Now I upload my list and get a full risk report in minutes. The A–F scoring system makes decisions instant. This tool is a game changer for brokers.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-[#0A0F1E] font-black text-base"
                    style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
                  >
                    RJ
                  </div>
                  <div>
                    <p className="font-bold text-[#E8EDF5]">Ryan Johnson</p>
                    <p className="text-sm text-muted-foreground">Freight Broker, LoadLink USA</p>
                    <span
                      className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(167,139,250,0.1)", color: "#A78BFA", border: "1px solid rgba(167,139,250,0.2)" }}
                    >
                      DispatchDOS User
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── REVIEWS BY CATEGORY ── */}
      {CATEGORIES.map((category) => (
        <section key={category} className="section-padding" style={{ background: category === "AI & Automation" ? "rgba(201,168,76,0.02)" : "transparent" }}>
          <div className="container px-4 md:px-6">
            <ScrollReveal direction="up">
              <div className="flex flex-col items-center text-center space-y-3 mb-10">
                <span
                  className="inline-block text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest"
                  style={{
                    background: `rgba(${CATEGORY_COLORS[category] === "#60A5FA" ? "96,165,250" : CATEGORY_COLORS[category] === "#C9A84C" ? "201,168,76" : "167,139,250"},0.1)`,
                    color: CATEGORY_COLORS[category],
                    border: `1px solid ${CATEGORY_COLORS[category]}30`,
                  }}
                >
                  {category}
                </span>
                <h2 className="heading-lg">
                  {category === "Web Development" && <>Web Project <span className="gradient-text">Reviews</span></>}
                  {category === "AI & Automation" && <>AI & Automation <span className="gradient-text">Reviews</span></>}
                  {category === "DispatchDOS" && <>DispatchDOS <span className="gradient-text">Reviews</span></>}
                </h2>
                <div className="section-divider" />
              </div>
            </ScrollReveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {grouped[category].map((t, i) => (
                <ScrollReveal key={t.name} delay={i * 0.1} direction="up">
                  <div className="fancy-card p-6 md:p-7 h-full flex flex-col">
                    {/* Stars + result */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, j) => <span key={j}>{STAR}</span>)}
                      </div>
                      {t.result && (
                        <span
                          className="text-[10px] font-bold px-2 py-1 rounded-full"
                          style={{
                            background: `${t.resultColor}15`,
                            color: t.resultColor,
                            border: `1px solid ${t.resultColor}30`,
                          }}
                        >
                          ↑ {t.result}
                        </span>
                      )}
                    </div>

                    {/* Quote */}
                    <p className="text-muted-foreground mb-6 italic text-sm leading-relaxed flex-1">
                      &ldquo;{t.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "rgba(201,168,76,0.08)" }}>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-[#0A0F1E] font-bold text-sm flex-shrink-0"
                          style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
                        >
                          {t.initials}
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-[#E8EDF5]">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.role}</p>
                        </div>
                      </div>
                      {VERIFIED_BADGE}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── TRUST STRIP ── */}
      <section className="py-10 border-y" style={{ borderColor: "rgba(201,168,76,0.08)", background: "rgba(201,168,76,0.02)" }}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { value: "9+", label: "Verified Reviews" },
              { value: "5.0★", label: "Average Rating" },
              { value: "6+", label: "Projects Delivered" },
              { value: "4", label: "Countries Served" },
              { value: "100%", label: "On-Time Delivery" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <span className="stat-number">{s.value}</span>
                <span className="text-[11px] text-muted-foreground uppercase tracking-wider mt-1">{s.label}</span>
              </div>
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
                <h2 className="heading-lg text-[#0A0F1E]">
                  Ready to Join Them?
                </h2>
                <p className="mx-auto max-w-[560px] body-lg text-[#0A0F1E]/75">
                  Let&apos;s build something you&apos;ll be proud to talk about. Tell us your idea and we&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md bg-[#0A0F1E] text-[#C9A84C] px-8 text-base font-bold shadow transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md border-2 border-[#0A0F1E] text-[#0A0F1E] px-8 text-base font-semibold transition-all hover:bg-[#0A0F1E]/10 hover:-translate-y-1"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
