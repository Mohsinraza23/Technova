import Link from "next/link"
import { Bot, Cpu, Workflow, CheckCircle, ArrowRight, Zap, Shield, Clock } from "lucide-react"

export default function AIServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-cyan-900/20 to-emerald-900/20"></div>
        <div className="container relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 glass border border-white/20 text-sm font-medium animate-pulse-slow">
              <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
              Agentic AI Solutions
            </div>
            <h1 className="heading-xl">
              The Future of Business is <span className="gradient-text">AI-Powered</span>
            </h1>
            <p className="max-w-[700px] body-lg text-muted-foreground">
              We build intelligent AI systems — chatbots, autonomous AI employees, and automation workflows — that work
              for your business 24/7 without breaks.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary flex items-center justify-center">
                Start Your AI Project
              </Link>
              <Link href="/pricing" className="btn-outline flex items-center justify-center">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 glass border border-white/20 text-sm font-medium">
              Our AI Services
            </div>
            <h2 className="heading-lg">
              What We <span className="gradient-text">Build</span>
            </h2>
          </div>

          {/* Service 1: AI Chatbot */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
            <div className="space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
                <Bot className="h-8 w-8" />
              </div>
              <h3 className="heading-md">AI Chatbot Development</h3>
              <p className="body-lg text-muted-foreground">
                Custom AI chatbots that understand your business, speak your language, and handle customer queries
                instantly — day or night, without any human involvement.
              </p>
              <ul className="space-y-3">
                {[
                  "Customer support automation",
                  "Lead generation & qualification",
                  "Product recommendation bot",
                  "WhatsApp & website integration",
                  "Multi-language support",
                  "Integration with your existing CRM",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Get a Chatbot Built <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="fancy-card p-8 space-y-4">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Example Use Cases</div>
              {[
                { title: "E-commerce Store", desc: "Bot answers product questions, tracks orders, processes returns automatically" },
                { title: "Restaurant", desc: "Takes reservations, answers menu queries, handles delivery inquiries 24/7" },
                { title: "Real Estate", desc: "Qualifies buyers, schedules viewings, answers property questions instantly" },
                { title: "Healthcare", desc: "Books appointments, answers FAQs, sends reminders to patients" },
              ].map((uc) => (
                <div key={uc.title} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="font-semibold text-sm mb-1">{uc.title}</p>
                  <p className="text-xs text-muted-foreground">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service 2: AI Employee */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
            <div className="fancy-card p-8 space-y-4 order-2 lg:order-1">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">What an AI Employee Can Do</div>
              {[
                { title: "Research & Analysis", desc: "Automatically researches topics, competitors, and market trends" },
                { title: "Content Creation", desc: "Writes emails, social posts, reports, and documents on demand" },
                { title: "Data Processing", desc: "Reads, sorts, and processes large data sets without errors" },
                { title: "Workflow Execution", desc: "Completes multi-step tasks from start to finish autonomously" },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="heading-md">AI Employee / Autonomous Agents</h3>
              <p className="body-lg text-muted-foreground">
                Think of it as hiring a digital employee that never sleeps, never makes mistakes, and costs a fraction
                of a human salary. Our agentic AI systems take on real business tasks independently.
              </p>
              <ul className="space-y-3">
                {[
                  "Autonomous task execution",
                  "Multi-step workflow automation",
                  "Decision making with AI logic",
                  "Email & calendar management",
                  "Report generation",
                  "API & tool integration",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Build Your AI Employee <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Service 3: AI Automation */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                <Workflow className="h-8 w-8" />
              </div>
              <h3 className="heading-md">AI Automation & Integration</h3>
              <p className="body-lg text-muted-foreground">
                Plug AI into your existing business tools and automate repetitive processes — saving your team hours
                every week and eliminating human error.
              </p>
              <ul className="space-y-3">
                {[
                  "Connect AI to your existing software",
                  "Automate data entry & processing",
                  "Automated email campaigns",
                  "Social media automation",
                  "Invoice & document automation",
                  "Custom dashboard & reporting",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Automate My Business <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="fancy-card p-8 space-y-4">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tools We Integrate With</div>
              <div className="grid grid-cols-2 gap-3">
                {["WhatsApp Business", "Gmail / Outlook", "Google Sheets", "Notion", "Slack", "WordPress", "Shopify", "Zapier"].map((tool) => (
                  <div key={tool} className="p-3 rounded-lg bg-white/5 border border-white/10 text-sm text-center font-medium">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white/5">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="heading-lg">
              Why Choose <span className="gradient-text">Technova AI</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Zap, title: "Fast Delivery", desc: "Most AI projects delivered in 1-3 weeks, not months.", color: "amber" },
              { icon: Shield, title: "Secure & Private", desc: "Your data stays private. We build with security-first principles.", color: "violet" },
              { icon: Clock, title: "24/7 Operation", desc: "Your AI systems work round the clock — no breaks, no sick days.", color: "cyan" },
              { icon: CheckCircle, title: "Proven Results", desc: "Our AI solutions have helped clients reduce costs by up to 60%.", color: "emerald" },
              { icon: Bot, title: "Custom Built", desc: "No generic tools. Every AI solution is built specifically for your business.", color: "rose" },
              { icon: Workflow, title: "Full Support", desc: "We support and maintain your AI system after delivery.", color: "teal" },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="fancy-card p-6 hover-lift">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-${color}-100 text-${color}-600 dark:bg-${color}-900/30 dark:text-${color}-400 mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="heading-sm mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="colorful-gradient text-white section-padding">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="heading-lg text-white">Ready to Add AI to Your Business?</h2>
            <p className="mx-auto max-w-[700px] body-lg">
              Let us discuss your business needs and build an AI solution that saves you time, money, and effort.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md bg-white text-violet-600 px-8 text-sm sm:text-base font-semibold shadow transition-colors hover:bg-white/90"
              >
                Get Free Consultation
              </Link>
              <Link href="/pricing" className="btn-outline">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
