const ITEMS = [
  { label: "Next.js",       icon: "⬡" },
  { label: "React",         icon: "⚛" },
  { label: "TypeScript",    icon: "TS" },
  { label: "Python",        icon: "🐍" },
  { label: "OpenAI API",    icon: "◈" },
  { label: "Node.js",       icon: "⬢" },
  { label: "TailwindCSS",   icon: "✦" },
  { label: "PostgreSQL",    icon: "🐘" },
  { label: "Framer Motion", icon: "◎" },
  { label: "Vercel",        icon: "▲" },
  { label: "Stripe",        icon: "◆" },
  { label: "LangChain",     icon: "⛓" },
]

// Duplicate for seamless loop
const TRACK = [...ITEMS, ...ITEMS]

export default function MarqueeStrip() {
  return (
    <div
      className="w-full overflow-hidden border-y relative"
      style={{
        borderColor: "rgba(201,168,76,0.08)",
        background: "rgba(201,168,76,0.015)",
      }}
    >
      {/* Left + right fade masks */}
      <div
        className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
      />

      <div
        className="flex items-center gap-0 py-4"
        style={{
          width: "max-content",
          animation: "marquee-scroll 28s linear infinite",
        }}
      >
        {TRACK.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-6 whitespace-nowrap"
            style={{ borderRight: "1px solid rgba(201,168,76,0.1)" }}
          >
            <span
              className="text-sm font-black"
              style={{ color: "rgba(201,168,76,0.6)", fontFamily: "monospace", minWidth: "1.25rem", textAlign: "center" }}
            >
              {item.icon}
            </span>
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#8898AA", letterSpacing: "0.1em" }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
