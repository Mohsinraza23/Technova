"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

const INITIAL_MESSAGE = "Hi! I'm Nyrvex's AI assistant. Ask me about DispatchDOS, our services, pricing, or how we can help your business!"

const QUICK_REPLIES = [
  "What is DispatchDOS?",
  "How much does it cost?",
  "Request a quote",
]

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: INITIAL_MESSAGE },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [chipsVisible, setChipsVisible] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  async function sendMessage(text?: string) {
    const content = (text ?? input).trim()
    if (!content || loading) return

    setChipsVisible(false)
    const userMessage: Message = { role: "user", content }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput("")
    setLoading(true)

    setMessages((prev) => [...prev, { role: "assistant", content: "" }])

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!response.body) return

      const reader = response.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        setMessages((prev) => {
          const updated = [...prev]
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            content: updated[updated.length - 1].content + chunk,
          }
          return updated
        })
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          content: "Sorry, something went wrong. Please try again or contact us on WhatsApp.",
        }
        return updated
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Chat window */}
      <div
        className="fixed bottom-24 left-4 z-[210] w-80 max-w-[calc(100vw-2rem)] flex flex-col rounded-2xl shadow-2xl overflow-hidden"
        style={{
          border: "1px solid rgba(201,168,76,0.2)",
          background: "rgba(8, 13, 28, 0.97)",
          backdropFilter: "blur(20px)",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(12px) scale(0.95)",
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
        aria-hidden={!open}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ background: "linear-gradient(135deg, #A07830, #C9A84C)", borderBottom: "1px solid rgba(201,168,76,0.2)" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0A0F1E]/30 flex items-center justify-center">
              <Bot className="h-4 w-4 text-[#0A0F1E]" />
            </div>
            <div>
              <p className="text-[#0A0F1E] font-bold text-sm leading-none" style={{ fontFamily: "var(--font-montserrat)" }}>Nyrvex AI</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-800 animate-pulse" />
                <p className="text-[#0A0F1E]/70 text-[10px]">Online</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-[#0A0F1E]/60 hover:text-[#0A0F1E] transition-colors p-1 rounded"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className="max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed"
                style={
                  msg.role === "user"
                    ? { background: "linear-gradient(135deg, #C9A84C, #E8C96A)", color: "#0A0F1E", borderBottomRightRadius: "4px" }
                    : { background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.12)", color: "#E8EDF5", borderBottomLeftRadius: "4px" }
                }
              >
                {msg.content || (loading && i === messages.length - 1 ? (
                  <span className="flex gap-1 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-bounce [animation-delay:0.3s]" />
                  </span>
                ) : "")}
              </div>
            </div>
          ))}

          {/* Quick reply chips — visible only before first user message */}
          {chipsVisible && !loading && (
            <div className="flex flex-col gap-1.5 pt-1">
              {QUICK_REPLIES.map((chip) => (
                <button
                  key={chip}
                  onClick={() => sendMessage(chip)}
                  className="self-start text-left px-3 py-1.5 rounded-xl text-xs font-semibold transition-all hover:-translate-y-0.5"
                  style={{
                    background: "rgba(201,168,76,0.07)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    color: "#C9A84C",
                  }}
                >
                  {chip}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t" style={{ borderColor: "rgba(201,168,76,0.12)" }}>
          <div className="flex items-center gap-2 p-3">
            <input
              className="flex-1 rounded-xl px-3 py-2 text-sm outline-none text-[#E8EDF5] placeholder:text-[#8898AA]"
              style={{
                background: "rgba(201,168,76,0.07)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={loading}
              aria-label="Chat message"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="flex items-center justify-center w-9 h-9 rounded-xl transition-all disabled:opacity-40 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", color: "#0A0F1E" }}
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <p className="text-center text-[10px] pb-2" style={{ color: "rgba(136,152,170,0.6)" }}>
            Press <kbd style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)", padding: "0 4px", borderRadius: "3px", color: "#C9A84C" }}>Enter</kbd> to send
          </p>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => {
          setOpen((prev) => {
            if (!prev) {
              // Reset chat state when reopening
              setMessages([{ role: "assistant", content: INITIAL_MESSAGE }])
              setChipsVisible(true)
              setInput("")
            }
            return !prev
          })
        }}
        className="fixed bottom-6 left-4 z-[210] rounded-full p-3.5 shadow-xl transition-all hover:-translate-y-1"
        style={{
          background: "linear-gradient(135deg, #A07830, #C9A84C, #E8C96A)",
          boxShadow: "0 8px 25px rgba(201,168,76,0.4)",
        }}
        aria-label={open ? "Close chat" : "Open Nyrvex AI chat"}
        aria-expanded={open}
      >
        <div style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}>
          {open ? <X className="h-5 w-5 text-[#0A0F1E]" /> : <MessageCircle className="h-5 w-5 text-[#0A0F1E]" />}
        </div>
      </button>
    </>
  )
}
