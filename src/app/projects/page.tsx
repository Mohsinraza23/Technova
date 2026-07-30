import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Code, Smartphone, Globe, LayoutDashboard } from "lucide-react"
import ScrollReveal from "../components/scroll-reveal"

export const metadata: Metadata = {
  title: "Projects — Nyrvex Portfolio",
  description: "Explore Nyrvex's portfolio of AI and web development projects. E-commerce platforms, restaurant systems, consultancy websites, and more — delivered on time and on budget.",
  keywords: [
    "Nyrvex projects", "web development portfolio", "AI projects",
    "Next.js projects", "e-commerce development", "restaurant website",
    "business website development", "software portfolio",
  ],
  openGraph: {
    title: "Projects — Nyrvex Portfolio",
    description: "Explore Nyrvex's portfolio of web and AI development projects across multiple industries.",
    url: "https://nyrvex.com/projects",
    siteName: "Nyrvex",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "Nyrvex Portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Nyrvex Portfolio",
    description: "Explore Nyrvex's web and AI development portfolio.",
    images: ["/logo.jpg"],
  },
  alternates: { canonical: "https://nyrvex.com/projects" },
}

const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A scalable online marketplace with seamless payment integration, real-time inventory management, and a user-friendly shopping experience.",
    image: "/EEE.PNG",
    category: "Web Development",
    categoryIcon: <Code className="h-3 w-3" />,
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    link: "https://marketplace-builder-hackathon2025.vercel.app/",
    result: "40% increase in sales",
    resultColor: "#22c55e",
  },
  {
    id: 2,
    title: "KababJee Restaurant",
    description: "A full-featured restaurant website with online food ordering, secure payment integration, real-time menu updates, and efficient order tracking.",
    image: "/AAb.PNG",
    category: "Web Development",
    categoryIcon: <Globe className="h-3 w-3" />,
    technologies: ["React", "Firebase", "Express.js"],
    link: "https://kababjees-website-eight.vercel.app/",
    result: "3× more online orders",
    resultColor: "#C9A84C",
  },
  {
    id: 3,
    title: "Business Consultancy Website",
    description: "Professional consultancy website with modern design, service showcase, lead generation forms, and seamless client engagement tools.",
    image: "/Abc.PNG",
    category: "Web Development",
    categoryIcon: <LayoutDashboard className="h-3 w-3" />,
    technologies: ["React", "Node.js", "PostgreSQL"],
    link: "https://westchestergroup.co/",
    result: "2× lead conversion",
    resultColor: "#60A5FA",
  },
  {
    id: 4,
    title: "Dubai Hotel Booking",
    description: "A luxurious hotel website for booking premium rooms, exploring world-class amenities, and experiencing the best hospitality in Dubai.",
    image: "/dubai.PNG",
    category: "Web Development",
    categoryIcon: <Globe className="h-3 w-3" />,
    technologies: ["Next.js", "Java Spring Boot", "MySQL"],
    link: "https://dubai-hotel-website-zyw6.vercel.app/",
    result: "5-star client rating",
    resultColor: "#C9A84C",
  },
  {
    id: 5,
    title: "Novel Hub Website",
    description: "A captivating platform for novel enthusiasts to explore, read, and purchase novels online with an immersive browsing experience.",
    image: "/noval.PNG",
    category: "Web Development",
    categoryIcon: <Code className="h-3 w-3" />,
    technologies: ["Vue.js", "Node.js", "MongoDB", "AWS"],
    link: "https://novel-website-byyusrawaheed.vercel.app/",
    result: "10K+ monthly visitors",
    resultColor: "#A78BFA",
  },
  {
    id: 6,
    title: "Ansareez Digital Agency",
    description: "A professional website for Ansareez showcasing digital marketing, web design, and social media services with a sleek modern interface.",
    image: "/abcd.PNG",
    category: "Web Development",
    categoryIcon: <Smartphone className="h-3 w-3" />,
    technologies: ["Next.js", "Firebase", "Node.js"],
    link: "https://ansareez.co.uk/",
    result: "Launched in 2 weeks",
    resultColor: "#22c55e",
  },
]

const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    desc: "We start by understanding your business goals, target audience, and core problems to solve. No guesswork.",
  },
  {
    step: "02",
    title: "Planning",
    desc: "Detailed technical blueprint, timelines, tech stack selection, and milestone breakdown before a single line of code.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Agile sprints with weekly demos. You see progress in real-time and give feedback at every stage.",
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Production deployment, QA testing, performance optimization, and post-launch support included.",
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="mirror-gradient section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-5 text-center">
            <div className="badge-gold mb-2">Portfolio</div>
            <h1 className="heading-xl">
              Our Recent <span className="gradient-text">Work</span>
            </h1>
            <p className="mx-auto max-w-[620px] body-lg text-muted-foreground">
              Real projects built for real clients across e-commerce, hospitality,
              consulting, and more — delivered on time and on budget.
            </p>

            {/* Hero stats */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              {[
                { value: "6+", label: "Projects Delivered" },
                { value: "100%", label: "On-Time Delivery" },
                { value: "5★", label: "Client Rating" },
                { value: "4", label: "Industries Served" },
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

      {/* ── PROJECTS GRID ── */}
      <section className="section-padding">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.08} direction="up">
                <div className="group fancy-card rounded-2xl overflow-hidden h-full flex flex-col">

                  {/* Image */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    {/* Top gradient bar */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 z-10" style={{ background: "linear-gradient(90deg, #A07830, #C9A84C, #E8C96A)" }} />
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Category badge overlay */}
                    <div className="absolute top-3 left-3">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-md"
                        style={{ background: "rgba(10,15,30,0.75)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)" }}
                      >
                        {project.categoryIcon}
                        {project.category}
                      </span>
                    </div>
                    {/* Result badge overlay */}
                    <div className="absolute top-3 right-3">
                      <span
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-md"
                        style={{ background: "rgba(10,15,30,0.75)", color: project.resultColor, border: `1px solid ${project.resultColor}30` }}
                      >
                        ↑ {project.result}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="heading-sm mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: "rgba(201,168,76,0.08)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.15)" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t" style={{ borderColor: "rgba(201,168,76,0.08)" }}>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                        style={{ color: "#C9A84C" }}
                      >
                        View Live Project <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVELOPMENT PROCESS ── */}
      <section className="section-padding" style={{ background: "rgba(201,168,76,0.02)" }}>
        <div className="container px-4 md:px-6">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-center text-center space-y-3 mb-12">
              <div className="badge-gold mb-2">How We Work</div>
              <h2 className="heading-lg">
                Our Development <span className="gradient-text">Process</span>
              </h2>
              <div className="section-divider" />
              <p className="max-w-[560px] body-lg text-muted-foreground">
                A clear, structured approach that keeps every project on track and on budget
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
            {/* Connector line */}
            <div
              className="hidden md:block absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), rgba(201,168,76,0.3), transparent)" }}
            />
            {PROCESS.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.12} direction="up">
                <div className="fancy-card rounded-xl p-6 text-center relative h-full">
                  {/* Step number circle */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-5 relative z-10"
                    style={{ background: "linear-gradient(135deg, #A07830, #C9A84C)", boxShadow: "0 0 20px rgba(201,168,76,0.25)" }}
                  >
                    <span className="text-sm font-black text-[#0A0F1E]" style={{ fontFamily: "var(--font-montserrat)" }}>{p.step}</span>
                  </div>
                  <h3 className="heading-sm mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK STRIP ── */}
      <section className="py-10 border-y" style={{ borderColor: "rgba(201,168,76,0.08)" }}>
        <div className="container px-4 md:px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-7">
            Technologies we work with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {[
              "Next.js", "React", "Node.js", "TypeScript", "Python",
              "MongoDB", "PostgreSQL", "Firebase", "AWS", "Stripe",
              "TailwindCSS", "OpenAI API",
            ].map((tech, i) => (
              <ScrollReveal key={tech} delay={i * 0.03} direction="up">
                <span
                  className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.12)", color: "#8898AA" }}
                >
                  {tech}
                </span>
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
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h2 className="heading-lg text-[#0A0F1E]">
                  Ready to Start Your Project?
                </h2>
                <p className="mx-auto max-w-[600px] body-lg text-[#0A0F1E]/75">
                  Let&apos;s build something great together. Tell us about your idea and we&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md bg-[#0A0F1E] text-[#C9A84C] px-8 text-base font-bold shadow transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  Start a Project
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
