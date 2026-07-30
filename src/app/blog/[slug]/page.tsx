import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"
import { notFound } from "next/navigation"
import { ARTICLES, CATEGORY_COLORS } from "../data"

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const article = ARTICLES.find((a) => a.slug === params.slug)
  if (!article) return {}
  return {
    title: `${article.title} — Nyrvex Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://nyrvex.com/blog/${article.slug}`,
      siteName: "Nyrvex",
      images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: article.title }],
      type: "article",
      publishedTime: article.publishedAt,
      authors: ["Mohsin Raza"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: ["/logo.jpg"],
    },
    alternates: { canonical: `https://nyrvex.com/blog/${article.slug}` },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

export default function ArticlePage({ params }: Props) {
  const article = ARTICLES.find((a) => a.slug === params.slug)
  if (!article) notFound()

  const related = ARTICLES.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 2)
  const fallback = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2)
  const relatedArticles = related.length >= 2 ? related : fallback

  return (
    <div className="flex flex-col">
      <section className="section-padding">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">

            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-10 transition-all hover:gap-3 hover:text-[#C9A84C]"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Insights
            </Link>

            {/* Category badge */}
            <span
              className="inline-block text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-5"
              style={{
                background: `${CATEGORY_COLORS[article.category]}15`,
                color: CATEGORY_COLORS[article.category],
                border: `1px solid ${CATEGORY_COLORS[article.category]}30`,
              }}
            >
              {article.category}
            </span>

            {/* Title */}
            <h1 className="heading-xl mb-6">{article.title}</h1>

            {/* Meta row */}
            <div
              className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-10 pb-8 border-b"
              style={{ borderColor: "rgba(201,168,76,0.1)" }}
            >
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" style={{ color: "#C9A84C" }} />
                Mohsin Raza
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" style={{ color: "#C9A84C" }} />
                {formatDate(article.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" style={{ color: "#C9A84C" }} />
                {article.readingTime} min read
              </span>
            </div>

            {/* Article content */}
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Author card */}
            <div
              className="mt-14 p-6 rounded-2xl flex items-start gap-5"
              style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.12)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-[#0A0F1E] font-black text-sm flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
              >
                MR
              </div>
              <div>
                <p className="font-bold text-[#E8EDF5] text-sm mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                  Mohsin Raza — Founder &amp; CEO, Nyrvex
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building AI products that solve real industry problems. Every article here comes from direct
                  experience building DispatchDOS and working with clients across freight, e-commerce, and consulting.
                </p>
              </div>
            </div>

            {/* CTA card */}
            <div
              className="mt-8 p-8 rounded-2xl text-center"
              style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)" }}
            >
              <div
                className="h-0.5 w-16 rounded-full mx-auto mb-6"
                style={{ background: "linear-gradient(90deg, #C9A84C, #E8C96A)" }}
              />
              <h3 className="heading-sm mb-3">Ready to Apply This to Your Business?</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto leading-relaxed">
                Nyrvex builds AI products and custom web applications that solve real problems. Let&apos;s talk about yours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-lg px-6 text-sm font-bold transition-all hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", color: "#0A0F1E" }}
                >
                  Get in Touch
                </Link>
                <Link
                  href="/dispatchdos"
                  className="inline-flex h-11 items-center justify-center rounded-lg px-6 text-sm font-semibold transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", color: "#C9A84C" }}
                >
                  See DispatchDOS
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section-padding" style={{ background: "rgba(201,168,76,0.02)", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
          <div className="container px-4 md:px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8 text-center">
              Continue Reading
            </p>
            <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
              {relatedArticles.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="group block">
                  <div className="fancy-card rounded-xl p-6 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                        style={{
                          background: `${CATEGORY_COLORS[a.category]}12`,
                          color: CATEGORY_COLORS[a.category],
                          border: `1px solid ${CATEGORY_COLORS[a.category]}25`,
                        }}
                      >
                        {a.category}
                      </span>
                      <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {a.readingTime} min
                      </span>
                    </div>
                    <h3 className="heading-sm mb-2 group-hover:text-[#C9A84C] transition-colors leading-snug flex-1">
                      {a.title}
                    </h3>
                    <span
                      className="text-xs font-semibold mt-3 transition-all group-hover:gap-2 inline-flex items-center gap-1"
                      style={{ color: "#C9A84C" }}
                    >
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
