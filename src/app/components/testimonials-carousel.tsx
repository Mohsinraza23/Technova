"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const STAR = (
  <svg className="w-4 h-4 fill-[#C9A84C]" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const TESTIMONIALS = [
  {
    initials: "AK", name: "Ahmed Khan", role: "CEO, ShopEase Pakistan",
    text: "Nyrvex built our e-commerce platform from scratch. The quality and attention to detail was outstanding. Our sales increased by 40% within the first month of launch.",
    result: "+40% sales", resultColor: "#22c55e",
  },
  {
    initials: "SR", name: "Sara Rehman", role: "Founder, TechRetail Dubai",
    text: "The AI chatbot Nyrvex built for our customer support reduced response time by 80%. It handles hundreds of queries daily without any human intervention. Truly impressive work.",
    result: "80% faster support", resultColor: "#C9A84C",
  },
  {
    initials: "OB", name: "Omar Bilal", role: "Director, Westchester Group",
    text: "Mohsin and the Nyrvex team delivered our consultancy website on time and within budget. The design is modern, fast, and exactly what we envisioned. Lead conversions doubled in 6 weeks.",
    result: "2× lead conversion", resultColor: "#60A5FA",
  },
  {
    initials: "FA", name: "Farhan Ansari", role: "Operations Manager, Dubai Hotel Group",
    text: "Our hotel booking website was completely transformed by Nyrvex. The booking flow is smooth, the design exudes luxury, and mobile performance is exceptional. Direct bookings rose significantly.",
    result: "5-star rating", resultColor: "#C9A84C",
  },
  {
    initials: "ZK", name: "Zara Kamil", role: "Owner, KababJee Restaurant",
    text: "We went from almost zero online orders to a fully functioning digital restaurant with payment integration. Nyrvex delivered in 3 weeks from brief to launch. Online orders have tripled.",
    result: "3× online orders", resultColor: "#22c55e",
  },
  {
    initials: "HA", name: "Hassan Alvi", role: "CEO, Ansareez Digital Agency",
    text: "We needed a professional agency website that could compete with global studios. Nyrvex delivered exactly that — bold design, lightning-fast load times, and launched in 2 weeks under budget.",
    result: "Launched in 2 weeks", resultColor: "#22c55e",
  },
  {
    initials: "NW", name: "Nadia Waheed", role: "Author & Publisher, Novel Hub",
    text: "Nyrvex built a beautiful platform for our novel readers. The browsing experience is immersive, the search is fast, and checkout is frictionless. We hit 10,000 monthly visitors in two months.",
    result: "10K+ monthly visitors", resultColor: "#A78BFA",
  },
  {
    initials: "RJ", name: "Ryan Johnson", role: "Freight Broker, LoadLink USA",
    text: "DispatchDOS eliminated hours of manual FMCSA lookups. I used to spend 3–4 hours verifying carriers before a load. Now I upload my list and get a full risk report in minutes. Game changer.",
    result: "Hours saved weekly", resultColor: "#C9A84C",
  },
  {
    initials: "ML", name: "Marcus Lee", role: "Logistics Director, FreightFirst Inc.",
    text: "The A–F risk scoring system in DispatchDOS is brilliant. We caught two carriers with revoked authority that we would have missed manually. It's now a non-negotiable part of our workflow.",
    result: "Zero fraud incidents", resultColor: "#22c55e",
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const total = TESTIMONIALS.length
  const containerRef = useRef<HTMLDivElement>(null)
  const [cardsToShow, setCardsToShow] = useState(3)

  // Responsive cards
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsToShow(1)
      else if (window.innerWidth < 1024) setCardsToShow(2)
      else setCardsToShow(3)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const maxIndex = total - cardsToShow

  const goTo = useCallback((idx: number, dir: "left" | "right") => {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 400)
  }, [animating])

  const next = useCallback(() => {
    const nextIdx = current >= maxIndex ? 0 : current + 1
    goTo(nextIdx, "right")
  }, [current, maxIndex, goTo])

  const prev = useCallback(() => {
    const prevIdx = current <= 0 ? maxIndex : current - 1
    goTo(prevIdx, "left")
  }, [current, maxIndex, goTo])

  // Auto-slide
  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4500)
    return () => clearInterval(id)
  }, [paused, next])

  const visibleCards = Array.from({ length: cardsToShow }, (_, i) => {
    const idx = (current + i) % total
    return TESTIMONIALS[idx]
  })

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Cards */}
      <div
        ref={containerRef}
        className="grid gap-5 transition-all"
        style={{
          gridTemplateColumns: `repeat(${cardsToShow}, 1fr)`,
          opacity: animating ? 0 : 1,
          transform: animating
            ? `translateX(${direction === "right" ? "-20px" : "20px"})`
            : "translateX(0)",
          transition: animating
            ? "opacity 0.3s ease, transform 0.3s ease"
            : "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        {visibleCards.map((t, i) => (
          <div key={`${current}-${i}`} className="fancy-card p-6 flex flex-col h-full">
            {/* Stars */}
            <div className="flex items-center gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => <span key={j}>{STAR}</span>)}
            </div>

            {/* Quote */}
            <p className="text-sm text-muted-foreground leading-relaxed italic flex-1 mb-5">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Result badge */}
            {t.result && (
              <div
                className="inline-flex items-center gap-1.5 text-[10px] font-bold px-3 py-1 rounded-full mb-4 w-fit"
                style={{ background: `${t.resultColor}15`, color: t.resultColor, border: `1px solid ${t.resultColor}30` }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.resultColor }} />
                {t.result}
              </div>
            )}

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "rgba(201,168,76,0.08)" }}>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#0A0F1E] font-black text-sm flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)" }}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-[#E8EDF5]">{t.name}</p>
                <p className="text-[11px] text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-8">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                background: i === current
                  ? "linear-gradient(90deg, #C9A84C, #E8C96A)"
                  : "rgba(201,168,76,0.25)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
            style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C" }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
            style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C" }}
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Auto-play progress bar */}
      {!paused && (
        <div className="mt-4 h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(201,168,76,0.1)" }}>
          <div
            key={current}
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #A07830, #C9A84C, #E8C96A)",
              animation: "carousel-progress 4.5s linear forwards",
            }}
          />
        </div>
      )}
    </div>
  )
}
