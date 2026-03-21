import Link from "next/link"
import { ArrowRight, Clock, User } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "What is Agentic AI? The Future of Business Automation",
    excerpt:
      "Agentic AI refers to AI systems that can act autonomously — making decisions, completing multi-step tasks, and achieving goals without constant human input. Learn how it works and why businesses are adopting it fast.",
    category: "Agentic AI",
    readTime: "5 min read",
    date: "March 10, 2025",
    slug: "what-is-agentic-ai",
    color: "violet",
  },
  {
    id: 2,
    title: "How AI Chatbots Are Replacing Customer Support Teams",
    excerpt:
      "Businesses are saving thousands of dollars monthly by deploying AI chatbots that handle customer queries 24/7. Discover how a well-built AI chatbot can reduce your support costs by up to 80%.",
    category: "AI Chatbots",
    readTime: "4 min read",
    date: "March 5, 2025",
    slug: "ai-chatbots-replacing-customer-support",
    color: "cyan",
  },
  {
    id: 3,
    title: "Top 5 Business Processes You Should Automate with AI in 2025",
    excerpt:
      "From invoice processing to email management, AI automation is transforming how businesses operate. Here are the top 5 processes you should automate right now to stay competitive.",
    category: "AI Automation",
    readTime: "6 min read",
    date: "February 28, 2025",
    slug: "top-5-business-processes-automate-ai",
    color: "emerald",
  },
  {
    id: 4,
    title: "Why Every Small Business Needs an AI Employee",
    excerpt:
      "You do not need to hire more staff to scale your business. An AI employee can handle research, data entry, reporting, and communication — costing far less than a full-time hire.",
    category: "AI Agents",
    readTime: "4 min read",
    date: "February 20, 2025",
    slug: "why-small-business-needs-ai-employee",
    color: "teal",
  },
  {
    id: 5,
    title: "Next.js vs React: Which Should You Choose for Your Web App?",
    excerpt:
      "Both are powerful tools, but they serve different purposes. This guide breaks down the key differences between Next.js and React, and helps you choose the right one for your project.",
    category: "Web Development",
    readTime: "7 min read",
    date: "February 15, 2025",
    slug: "nextjs-vs-react",
    color: "amber",
  },
  {
    id: 6,
    title: "How We Built a Full AI Customer Support Bot in 2 Weeks",
    excerpt:
      "A behind-the-scenes look at how Technova built and deployed a fully functional AI customer support chatbot for a Dubai-based retail business in just 14 days.",
    category: "Case Study",
    readTime: "8 min read",
    date: "February 8, 2025",
    slug: "ai-customer-support-bot-2-weeks",
    color: "rose",
  },
]

const colorMap: Record<string, string> = {
  violet: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  cyan: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
  emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  teal: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  rose: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
}

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 glass border border-white/20 text-sm font-medium">
              Technova Blog
            </div>
            <h1 className="heading-xl">
              Insights on <span className="gradient-text">AI & Software</span>
            </h1>
            <p className="mx-auto max-w-[700px] body-lg text-muted-foreground">
              Practical articles on Agentic AI, chatbots, automation, and software development — written by Mohsin Raza
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="fancy-card overflow-hidden hover-lift flex flex-col group"
              >
                <div className={`h-2 w-full ${article.color === "violet" ? "bg-gradient-to-r from-violet-500 to-purple-500" : article.color === "cyan" ? "bg-gradient-to-r from-cyan-500 to-blue-500" : article.color === "emerald" ? "bg-gradient-to-r from-emerald-500 to-green-500" : article.color === "teal" ? "bg-gradient-to-r from-teal-500 to-cyan-500" : article.color === "amber" ? "bg-gradient-to-r from-amber-500 to-yellow-500" : "bg-gradient-to-r from-rose-500 to-pink-500"}`}></div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorMap[article.color]}`}>
                      {article.category}
                    </span>
                  </div>
                  <h2 className="heading-sm mb-3 line-clamp-2">{article.title}</h2>
                  <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" /> Mohsin Raza
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {article.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center text-sm font-semibold text-violet-600 dark:text-violet-400 group-hover:underline">
                      Read <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="colorful-gradient text-white section-padding">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="heading-lg text-white">Want AI Tips in Your Inbox?</h2>
            <p className="mx-auto max-w-[600px] body-lg">
              Get practical AI and software development insights delivered directly to you.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white text-violet-600 px-8 text-sm font-semibold shadow transition-colors hover:bg-white/90"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
