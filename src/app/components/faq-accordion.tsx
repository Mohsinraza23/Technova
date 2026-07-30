"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQ {
  q: string
  a: string
}

export default function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl border overflow-hidden transition-all duration-300"
          style={{
            borderColor: open === i ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.1)",
            background: open === i ? "rgba(201,168,76,0.05)" : "rgba(15,22,41,0.6)",
          }}
        >
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className={`text-sm sm:text-base font-semibold transition-colors ${open === i ? "" : "text-[#94A3B8]"}`}
              style={open === i ? { color: "#C9A84C" } : {}}>
              {faq.q}
            </span>
            <ChevronDown
              className="h-5 w-5 flex-shrink-0 ml-4 transition-transform duration-300"
              style={{
                color: open === i ? "#C9A84C" : "#94A3B8",
                transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? "300px" : "0px" }}
          >
            <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
