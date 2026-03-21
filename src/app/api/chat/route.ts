import Anthropic from "@anthropic-ai/sdk"
import { NextRequest } from "next/server"

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are a helpful AI assistant for Technova Software House. Be concise, friendly, and professional.

About Technova:
- Founded by Mohsin Raza, based in Gulshan-e-Iqbal, Karachi, Pakistan
- We build custom software, AI solutions, and digital products for businesses

Our Services:
1. Web Development - business websites, web apps, e-commerce stores
2. AI Chatbot Integration - custom AI chatbots for businesses
3. Agentic AI / AI Employee - autonomous AI agents that handle tasks automatically
4. AI Automation Workflows - automate repetitive business processes
5. Mobile Apps (iOS/Android)
6. UI/UX Design
7. SEO Packages (3 months)
8. Social Media Management
9. Logo & Brand Design

Pricing: All pricing is "Contact for Price" — it depends on project scope. Encourage users to contact us for a free custom quote.

Contact options:
- WhatsApp or contact form on the website
- Free consultation available

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
