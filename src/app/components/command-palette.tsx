"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import {
  Search, Home, Info, Briefcase, Brain, DollarSign,
  FolderOpen, MessageSquare, FileText, Users, Truck, X,
} from "lucide-react"

const COMMANDS = [
  { label: "Home",          href: "/",            icon: Home,         desc: "Back to homepage"              },
  { label: "About Nyrvex",  href: "/about",        icon: Info,         desc: "Our story, mission & founder"  },
  { label: "Services",      href: "/services",     icon: Briefcase,    desc: "Web, mobile & AI development"  },
  { label: "AI Services",   href: "/ai-services",  icon: Brain,        desc: "AI agents, chatbots & ML"      },
  { label: "DispatchDOS",   href: "/dispatchdos",  icon: Truck,        desc: "Freight carrier verification"  },
  { label: "Pricing",       href: "/pricing",      icon: DollarSign,   desc: "Plans & packages"              },
  { label: "Projects",      href: "/projects",     icon: FolderOpen,   desc: "Our portfolio & case studies"  },
  { label: "Testimonials",  href: "/testimonials", icon: Users,        desc: "What clients say"              },
  { label: "Blog",          href: "/blog",         icon: FileText,     desc: "Insights & articles"           },
  { label: "Contact Us",    href: "/contact",      icon: MessageSquare,desc: "Get in touch"                  },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const filtered = COMMANDS.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.desc.toLowerCase().includes(query.toLowerCase())
  )

  const close = useCallback(() => {
    setOpen(false)
    setQuery("")
    setSelected(0)
  }, [])

  const navigate = useCallback(
    (href: string) => {
      close()
      router.push(href)
    },
    [close, router]
  )

  // Keyboard shortcut — Cmd/Ctrl + K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((o) => {
          if (o) { close(); return false }
          setQuery("")
          setSelected(0)
          return true
        })
      }
      if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [close])

  // Auto-focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 40)
  }, [open])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelected((s) => Math.min(s + 1, filtered.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelected((s) => Math.max(s - 1, 0))
    } else if (e.key === "Enter" && filtered[selected]) {
      navigate(filtered[selected].href)
    }
  }

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[10000]"
        style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
        onClick={close}
        aria-hidden
      />

      {/* Palette */}
      <div
        className="fixed z-[10001] w-full max-w-[560px] px-4"
        style={{ top: "18%", left: "50%", transform: "translateX(-50%)" }}
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(8,13,28,0.97)",
            border: "1px solid rgba(201,168,76,0.22)",
            boxShadow:
              "0 0 0 1px rgba(201,168,76,0.08), 0 30px 60px rgba(0,0,0,0.7), 0 0 80px rgba(201,168,76,0.07)",
            backdropFilter: "blur(24px)",
          }}
        >
          {/* Animated top border */}
          <div
            className="h-[2px] w-full"
            style={{
              background: "linear-gradient(90deg, transparent, #A07830, #C9A84C, #E8C96A, #C9A84C, #A07830, transparent)",
              backgroundSize: "200% 100%",
              animation: "glow-border-shift 3s ease-in-out infinite",
            }}
          />

          {/* Search row */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
            <Search className="h-4 w-4 flex-shrink-0" style={{ color: "#C9A84C" }} />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSelected(0) }}
              onKeyDown={onKeyDown}
              placeholder="Search pages & features..."
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: "#E8EDF5" }}
            />
            <button onClick={close} className="transition-colors hover:text-[#C9A84C]" style={{ color: "#8898AA" }}>
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Results */}
          <div className="py-1.5 max-h-72 overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="text-center text-sm py-10" style={{ color: "#8898AA" }}>
                No results for &ldquo;{query}&rdquo;
              </p>
            ) : (
              filtered.map((cmd, i) => {
                const Icon = cmd.icon
                const active = i === selected
                return (
                  <button
                    key={cmd.href}
                    onClick={() => navigate(cmd.href)}
                    onMouseEnter={() => setSelected(i)}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all"
                    style={{
                      background: active ? "rgba(201,168,76,0.07)" : "transparent",
                      borderLeft: `2px solid ${active ? "#C9A84C" : "transparent"}`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                      style={{
                        background: active ? "rgba(201,168,76,0.15)" : "rgba(201,168,76,0.05)",
                        color: active ? "#C9A84C" : "#8898AA",
                      }}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold" style={{ color: active ? "#E8EDF5" : "#8898AA" }}>
                        {cmd.label}
                      </p>
                      <p className="text-[11px] truncate" style={{ color: "#8898AA" }}>
                        {cmd.desc}
                      </p>
                    </div>
                    {active && (
                      <span className="text-[10px] font-bold flex-shrink-0" style={{ color: "#C9A84C" }}>
                        ↵
                      </span>
                    )}
                  </button>
                )
              })
            )}
          </div>

          {/* Footer hint bar */}
          <div className="px-4 py-2.5 border-t flex items-center gap-5" style={{ borderColor: "rgba(201,168,76,0.07)" }}>
            {[["↑↓", "navigate"], ["↵", "open"], ["esc", "close"]].map(([key, label]) => (
              <div key={key} className="flex items-center gap-1.5">
                <kbd
                  className="text-[10px] px-1.5 py-0.5 rounded"
                  style={{
                    background: "rgba(201,168,76,0.07)",
                    color: "#C9A84C",
                    border: "1px solid rgba(201,168,76,0.15)",
                    fontFamily: "monospace",
                  }}
                >
                  {key}
                </kbd>
                <span className="text-[10px]" style={{ color: "#8898AA" }}>{label}</span>
              </div>
            ))}
            <span className="ml-auto text-[10px]" style={{ color: "#8898AA", opacity: 0.5 }}>
              Nyrvex
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
