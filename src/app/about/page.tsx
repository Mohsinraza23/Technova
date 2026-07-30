import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Zap, Heart, Award, Target, Rocket, Users } from "lucide-react"
import ScrollReveal from "../components/scroll-reveal"
import TrustBadges from "../components/trust-badges"

export const metadata: Metadata = {
  title: "About Nyrvex — Founder Mohsin Raza & Our Mission",
  description: "Learn about Nyrvex, founded by Mohsin Raza. We build focused AI products that solve real industry problems — starting with DispatchDOS for freight brokers.",
  keywords: [
    "Nyrvex", "Mohsin Raza", "AI startup", "AI product company",
    "freight tech", "AI solutions Pakistan", "DispatchDOS founder",
  ],
  openGraph: {
    title: "About Nyrvex — Founder Mohsin Raza & Our Mission",
    description: "Nyrvex builds focused AI products that solve real industry problems. Founded by Mohsin Raza.",
    url: "https://nyrvex.com/about",
    siteName: "Nyrvex",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "Nyrvex About" }],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nyrvex — Founder Mohsin Raza",
    description: "Learn about Nyrvex and our mission to build focused AI products.",
    images: ["/logo.jpg"],
  },
  alternates: { canonical: "https://nyrvex.com/about" },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohsin Raza",
  jobTitle: "Founder & CEO",
  worksFor: { "@type": "Organization", name: "Nyrvex", url: "https://nyrvex.com" },
  url: "https://nyrvex.com/about",
  sameAs: ["https://www.linkedin.com/in/nyrvex-ai-19b456425/"],
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* Hero */}
      <section className="mirror-gradient section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            {/* Founder Image */}
            <div className="relative w-36 h-36 mx-auto">
              <div className="absolute -inset-1 rounded-full" style={{ background: "linear-gradient(135deg, #A07830, #C9A84C, #E8C96A)" }}></div>
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-[#0A0F1E]">
                <Image
                  src="/moh.png"
                  alt="Mohsin Raza - Founder & CEO, Nyrvex"
                  fill
                  priority
                  sizes="144px"
                  className="object-cover"
                  style={{ objectPosition: "center -20px" }}
                />
              </div>
            </div>
            <div className="space-y-3">
              <div className="badge-gold mx-auto w-fit mb-2">About Nyrvex</div>
              <h1 className="heading-xl">
                About <span className="gradient-text">Nyrvex</span>
              </h1>
              <p className="text-base font-bold gradient-text tracking-wide uppercase" style={{ letterSpacing: "0.08em", fontSize: "0.85rem" }}>Mohsin Raza — Founder & CEO</p>
              <p className="mx-auto max-w-[640px] body-lg text-muted-foreground">
                Passionate about building intelligent AI products that solve real industry problems
                and drive measurable business results.
              </p>

              {/* Founder social links */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/nyrvex-ai-19b456425/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", color: "#0A0F1E" }}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
                <a
                  href="mailto:hello@nyrvex.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", color: "#C9A84C" }}
                >
                  hello@nyrvex.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="badge-gold mb-3 w-fit">Our Story</div>
                <h2 className="heading-lg">
                  From <span className="gradient-text">Vision</span> to Product
                </h2>
                <p className="text-muted-foreground">
                  Nyrvex was founded with one clear goal: build focused AI products that solve
                  specific, painful industry problems — not generic tools that do everything poorly.
                </p>
                <p className="text-muted-foreground">
                  Our first product, DispatchDOS, was born from a deep dive into the freight
                  industry. We discovered that thousands of freight brokers were manually verifying
                  carriers on the FMCSA website — one by one — wasting hours every week and
                  exposing their businesses to serious fraud risk.
                </p>
                <p className="text-muted-foreground">
                  We built DispatchDOS to eliminate that problem completely. That same approach —
                  find a real pain, build an intelligent solution — is how every future Nyrvex
                  product will be built.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "18,000+", label: "Target Market" },
                { value: "30+", label: "Data Fields" },
                { value: "1,000+", label: "Carriers/Batch" },
                { value: "AI-First", label: "Philosophy" },
              ].map((s, i) => (
                <ScrollReveal key={s.label} delay={i * 0.1} direction="up">
                <div className="fancy-card p-6 text-center rounded-xl h-full">
                  <div className="heading-md gradient-text mb-2">{s.value}</div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ background: "rgba(201,168,76,0.02)" }}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="badge-gold mb-2">Our Purpose</div>
            <h2 className="heading-lg">
              Mission & <span className="gradient-text">Vision</span>
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <ScrollReveal direction="left" delay={0.1}>
            <div className="rounded-lg glass-card p-6 h-full">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}>
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="heading-sm">Our Mission</h3>
                <p className="text-muted-foreground">
                  To identify real, painful problems in underserved industries and build intelligent AI products
                  that solve them with precision — delivering measurable time savings, cost reduction, and fraud prevention.
                </p>
              </div>
            </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
            <div className="rounded-lg glass-card p-6 h-full">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}>
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="heading-sm">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become a globally recognized AI product company known for building focused, high-impact tools
                  that transform how industries operate — starting with freight and expanding into new verticals.
                </p>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="badge-gold mb-2">What We Stand For</div>
            <h2 className="heading-lg">
              Core <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Zap />, title: "Focused Solutions", desc: "We don't try to solve everything. We pick one problem and build the best tool for it." },
              { icon: <Award />, title: "Product Quality", desc: "Every feature ships only when it's production-ready. No half-baked demos." },
              { icon: <CheckCircle />, title: "Real Impact", desc: "We measure success by hours saved and risks eliminated — not vanity metrics." },
              { icon: <Heart />, title: "Industry Depth", desc: "We go deep into the industries we serve. Understanding the workflow is non-negotiable." },
              { icon: <Users />, title: "Move Fast", desc: "Validate quickly, ship fast, iterate on real feedback from real users." },
              { icon: <Target />, title: "AI-First Thinking", desc: "Every product starts with: how can AI make this 10x better than the manual process?" },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08} direction="up">
              <div className="rounded-lg glass-card p-6 shadow-sm h-full">
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}>
                    {v.icon}
                  </div>
                  <h3 className="heading-sm">{v.title}</h3>
                  <p className="text-muted-foreground">{v.desc}</p>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST & CREDIBILITY ── */}
      <section className="section-padding" style={{ background: "rgba(201,168,76,0.02)" }}>
        <div className="container px-4 md:px-6">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto fancy-card rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="badge-gold mb-4">Why Trust Nyrvex</div>
                  <h2 className="heading-lg mb-4">
                    Built with <span className="gradient-text">Integrity</span>
                  </h2>
                  <p className="body-md text-muted-foreground mb-6">
                    Every product we build is grounded in real data, transparent processes,
                    and a commitment to your business security. No shortcuts.
                  </p>
                  <TrustBadges />
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Official Data Sources", desc: "DispatchDOS connects directly to the FMCSA official API — the same data the government uses. Zero third-party scraping." },
                    { title: "No Data Storage", desc: "Your uploaded carrier lists are processed and immediately deleted. We never store or share your business data." },
                    { title: "Verified by Real Users", desc: "Every feature is tested with real freight brokers before it ships. We don't guess — we validate." },
                    { title: "Founder-Led Quality", desc: "Mohsin Raza personally reviews every product decision. No outsourced shortcuts, no cutting corners." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#C9A84C" }} />
                      <div>
                        <p className="text-sm font-semibold text-[#E8EDF5] mb-0.5">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="colorful-gradient text-[#0A0F1E] section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="heading-lg text-[#0A0F1E]">
                Let&apos;s Build Something Together
              </h2>
              <p className="mx-auto max-w-[640px] body-lg text-[#0A0F1E]/75">
                Interested in DispatchDOS or want a custom AI solution for your business?
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#0A0F1E] text-[#C9A84C] px-8 text-sm font-bold shadow transition-colors hover:bg-[#0A0F1E]/90"
              >
                Contact Us
              </Link>
              <Link
                href="/dispatchdos"
                className="inline-flex h-10 items-center justify-center rounded-md border-2 border-[#0A0F1E] text-[#0A0F1E] px-8 text-sm font-semibold transition-colors hover:bg-[#0A0F1E]/10"
              >
                See DispatchDOS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
