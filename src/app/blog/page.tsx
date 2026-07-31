import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import ScrollReveal from "../components/scroll-reveal"
import { ARTICLES, CATEGORY_COLORS } from "./data"

export const metadata: Metadata = {
  title: "Insights & Blog — Nyrvex",
  description: "Practical insights on freight technology, AI automation, and web development from the Nyrvex team — no fluff, no filler.",
  keywords: [
    "freight tech blog", "AI automation insights", "web development blog",
    "FMCSA carrier verification", "DispatchDOS", "freight broker tips",
    "Nyrvex blog", "AI chatbot guide",
  ],
  openGraph: {
    title: "Insights & Blog — Nyrvex",
    description: "Practical insights on freight tech, AI, and web development from the Nyrvex team.",
    url: "https://nyrvex.com/blog",
    siteName: "Nyrvex",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "Nyrvex Insights" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Blog — Nyrvex",
    description: "Practical insights on freight tech, AI, and web development from the Nyrvex team.",
    images: ["/logo.jpg"],
  },
  alternates: { canonical: "https://nyrvex.com/blog" },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

const featured = ARTICLES.find((a) => a.featured)!
const rest = ARTICLES.filter((a) => !a.featured)

export default function BlogPage() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="mirror-gradient section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-5 text-center">
            <div className="badge-gold mb-2">Insights</div>
            <h1 className="heading-xl">
              Ideas &amp; <span className="gradient-text">Analysis</span>
            </h1>
            <p className="mx-auto max-w-[600px] body-lg text-muted-foreground">
              Practical articles on freight technology, AI automation, and web development
              from the Nyrvex team — no fluff, no filler.
            </p>

            {/* Category pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {(["Freight Tech", "AI & Automation", "Web Development", "Company"] as const).map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: `${CATEGORY_COLORS[cat]}12`,
                    border: `1px solid ${CATEGORY_COLORS[cat]}30`,
                    color: CATEGORY_COLORS[cat],
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ── */}
      <section className="section-padding">
        <div className="container px-4 md:px-6">
          <ScrollReveal direction="up">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Featured Article</p>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="glow-border-wrap rounded-2xl">
              <div className="fancy-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, #A07830, #C9A84C, #E8C96A)" }} />

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                        style={{
                          background: `${CATEGORY_COLORS[featured.category]}15`,
                          color: CATEGORY_COLORS[featured.category],
                          border: `1px solid ${CATEGORY_COLORS[featured.category]}30`,
                        }}
                      >
                        {featured.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" /> {featured.readingTime} min read
                      </span>
                      <span className="text-xs text-muted-foreground">{formatDate(featured.publishedAt)}</span>
                    </div>
                    <h2 className="heading-lg group-hover:text-[#C9A84C] transition-colors">
                      {featured.title}
                    </h2>
                    <p className="body-md">{featured.excerpt}</p>
                    <span
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
                      style={{ color: "#C9A84C" }}
                    >
                      Read article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Stat visual */}
                  <div
                    className="hidden md:flex h-52 rounded-xl items-center justify-center relative overflow-hidden"
                    style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.1)" }}
                  >
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: "linear-gradient(rgba(201,168,76,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.08) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div className="relative text-center px-6">
                      <div className="text-4xl font-black mb-2" style={{ color: "#C9A84C", fontFamily: "var(--font-montserrat)" }}>$500M+</div>
                      <div className="text-sm text-muted-foreground">Lost annually to carrier fraud</div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ARTICLES GRID ── */}
      <section className="section-padding" style={{ background: "rgba(201,168,76,0.02)" }}>
        <div className="container px-4 md:px-6">
          <ScrollReveal direction="up">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">All Articles</p>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.08} direction="up">
                <Link href={`/blog/${article.slug}`} className="group block h-full">
                  <div className="fancy-card rounded-2xl p-6 h-full flex flex-col">
                    {/* Category accent line */}
                    <div
                      className="h-0.5 w-10 rounded-full mb-5"
                      style={{ background: `linear-gradient(90deg, ${CATEGORY_COLORS[article.category]}, transparent)` }}
                    />

                    {/* Meta */}
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                        style={{
                          background: `${CATEGORY_COLORS[article.category]}12`,
                          color: CATEGORY_COLORS[article.category],
                          border: `1px solid ${CATEGORY_COLORS[article.category]}25`,
                        }}
                      >
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <Clock className="h-3 w-3" /> {article.readingTime} min
                      </span>
                    </div>

                    {/* Title + excerpt */}
                    <h3 className="heading-sm mb-3 group-hover:text-[#C9A84C] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                      {article.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "rgba(201,168,76,0.08)" }}>
                      <span className="text-xs text-muted-foreground">{formatDate(article.publishedAt)}</span>
                      <span
                        className="inline-flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2"
                        style={{ color: "#C9A84C" }}
                      >
                        Read <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTHOR STRIP ── */}
      <section className="py-12 border-y" style={{ borderColor: "rgba(201,168,76,0.08)" }}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 max-w-2xl mx-auto">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-[#0A0F1E] font-black text-xl flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
            >
              MR
            </div>
            <div className="text-center sm:text-left">
              <p className="font-bold text-[#E8EDF5] mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                Written by Mohsin Raza
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Founder &amp; CEO of Nyrvex. Building AI products that solve real industry problems.
                Writing about freight tech, AI automation, and the craft of building software businesses.
              </p>
            </div>
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
                <h2 className="heading-lg text-[#0A0F1E]">Have a Project in Mind?</h2>
                <p className="mx-auto max-w-[560px] body-lg text-[#0A0F1E]/75">
                  We don&apos;t just write about solving industry problems — we build the tools that do it.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md bg-[#0A0F1E] text-[#C9A84C] px-8 text-base font-bold shadow transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  Talk to Us
                </Link>
                <Link
                  href="/dispatchdos"
                  className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md border-2 border-[#0A0F1E] text-[#0A0F1E] px-8 text-base font-semibold transition-all hover:bg-[#0A0F1E]/10 hover:-translate-y-1"
                >
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
