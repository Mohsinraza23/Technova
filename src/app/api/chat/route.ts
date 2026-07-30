import Anthropic from "@anthropic-ai/sdk"
import { NextRequest } from "next/server"

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are a helpful AI assistant for Nyrvex. Be concise, friendly, and professional.

About Nyrvex:
- Founded by Mohsin Raza
- We build focused AI products and custom web/software solutions for businesses
- Our flagship product is DispatchDOS — a bulk FMCSA carrier verification tool for freight brokers

Our Services:
1. DispatchDOS — bulk FMCSA carrier verification, 1,000+ carriers per batch, A-F risk scoring, Excel report output. Currently in early access — request a demo via the contact page.
2. Web Development — business websites, web apps, e-commerce stores (Next.js, React, Node.js)
3. AI Chatbot Integration — custom AI chatbots trained on your specific business data
4. Agentic AI / AI Employee — autonomous AI agents that handle business tasks automatically
5. AI Automation Workflows — automate repetitive business processes end-to-end
6. Mobile Apps (iOS/Android)

Pricing: All pricing is "Contact for Price" — it depends on project scope. Encourage users to contact us for a free consultation.

Contact options:
- WhatsApp or contact form at nyrvex.com/contact
- Email: hello@nyrvex.com
- Free consultation always available

Keep answers short (2-4 sentences max). Always encourage users to reach out for a free consultation.`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    const stream = client.messages.stream({
      model: "claude-haiku-4-5",
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages,
    })

    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const event of stream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(new TextEncoder().encode(event.delta.text))
          }
        }
        controller.close()
      },
    })

    return new Response(readableStream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    })
  } catch {
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
