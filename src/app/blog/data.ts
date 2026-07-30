export interface Article {
  slug: string
  title: string
  excerpt: string
  category: "Freight Tech" | "AI & Automation" | "Web Development" | "Company"
  readingTime: number // minutes
  publishedAt: string // ISO date
  featured?: boolean
  content: string // HTML string
}

export const ARTICLES: Article[] = [
  {
    slug: "why-freight-brokers-lose-money-to-carrier-fraud",
    title: "Why Freight Brokers Lose Money to Carrier Fraud — And How to Stop It",
    excerpt: "Double brokering, fake carriers, and lapsed authority cost the freight industry millions every year. Here's exactly what's happening and what brokers can do about it.",
    category: "Freight Tech",
    readingTime: 6,
    publishedAt: "2025-06-10",
    featured: true,
    content: `
<h2>The Problem Nobody Talks About Openly</h2>
<p>Every experienced freight broker has a story. A carrier with an active DOT number that turned out to be inactive. A load that was double-brokered without their knowledge. A shipper who held them liable for cargo that was stolen in transit by a company they thought they had verified.</p>
<p>Carrier fraud in the trucking industry is not a fringe problem — it's a systemic one. The FBI estimates double brokering alone costs the US freight industry <strong>over $500 million annually</strong>. And the number is growing.</p>

<h2>What Carrier Fraud Actually Looks Like</h2>
<p>Carrier fraud takes several forms, and not all of them are obvious:</p>
<ul>
  <li><strong>Double brokering:</strong> A carrier accepts a load, then secretly re-brokers it to another carrier without your knowledge or consent — often to a company with no insurance or safety record.</li>
  <li><strong>Identity theft:</strong> Fraudsters clone a legitimate carrier's MC/DOT number, answer calls as that company, and pick up freight with no intention of delivering it.</li>
  <li><strong>Lapsed authority:</strong> A carrier whose operating authority was revoked or voluntarily relinquished continues to haul freight. If something goes wrong, you have zero coverage.</li>
  <li><strong>Insurance lapses:</strong> Carriers with outdated or cancelled insurance policies. A single accident can expose your brokerage to catastrophic liability.</li>
</ul>

<h2>The Manual Verification Problem</h2>
<p>The FMCSA public portal exists precisely to prevent this. Every licensed carrier in the US has a public record — authority status, insurance status, safety rating, inspection history, crash records. The data is all there.</p>
<p>The problem is the process. Checking a single carrier manually takes 3-5 minutes. For a broker processing 50-100 loads per week, that's <strong>2.5 to 8 hours of manual lookups every single week</strong> — just for verification. And it's not even accurate: insurance status can change the day after you verify it.</p>

<h2>The Real Cost of Inadequate Verification</h2>
<p>Beyond the time cost, the financial exposure from inadequate verification is severe:</p>
<ul>
  <li>Cargo claims from uninsured carriers fall back on the broker</li>
  <li>Double brokering incidents can void shipper relationships permanently</li>
  <li>Regulatory fines for brokering loads to carriers without active authority</li>
  <li>Reputation damage that takes years to rebuild</li>
</ul>

<h2>What the Solution Looks Like</h2>
<p>The solution is not doing the manual checks faster — it's eliminating the manual process entirely. That's why we built <strong>DispatchDOS</strong>.</p>
<p>DispatchDOS connects directly to the FMCSA official API — the same data source the government uses. You upload your carrier list (up to 1,000+ carriers at once), and within minutes you receive a complete Excel report with:</p>
<ul>
  <li>Current authority status (Active / Revoked / Inactive)</li>
  <li>Real-time insurance verification</li>
  <li>Safety rating and out-of-service rate</li>
  <li>Crash history and inspection records</li>
  <li>An A–F risk score for every carrier — so decisions are instant</li>
</ul>
<p>The result: what used to take a team hours now takes minutes, with higher accuracy and a documented compliance record.</p>

<h2>The Bottom Line</h2>
<p>Carrier fraud is not going away. But it can be made dramatically less likely with the right verification process. The question is whether that process is a 3-minute-per-carrier manual lookup, or an automated system that gives you complete coverage across your entire carrier base every week.</p>
<p>For brokers serious about protecting their business, the answer is clear.</p>
    `.trim(),
  },
  {
    slug: "how-ai-is-reshaping-freight-industry-2025",
    title: "How AI Is Reshaping the Freight Industry in 2025",
    excerpt: "From route optimization to carrier verification to document processing — artificial intelligence is moving from a buzzword to an operational necessity in logistics.",
    category: "Freight Tech",
    readingTime: 5,
    publishedAt: "2025-05-22",
    content: `
<h2>AI in Freight: Beyond the Hype</h2>
<p>For years, "AI in logistics" meant expensive pilot programs at large carriers that never quite shipped to production. That era is over. In 2025, AI tools are being used daily by freight brokers, dispatchers, and carriers of every size — and the companies adopting them are gaining meaningful competitive advantages.</p>

<h2>Where AI Is Actually Making a Difference</h2>
<h3>1. Carrier Verification and Compliance</h3>
<p>Manual FMCSA lookups are being replaced by automated verification pipelines that check authority status, insurance, and safety ratings in bulk. Tools like DispatchDOS process thousands of carriers in the time it previously took to verify ten. The compliance burden that used to require a full-time employee is being handled automatically.</p>

<h3>2. Load Matching and Pricing</h3>
<p>AI-powered load boards and TMS platforms now use machine learning to match available capacity to available freight with far more precision than keyword searches. Pricing algorithms factor in lane history, seasonal demand, fuel costs, and carrier availability in real time.</p>

<h3>3. Document Processing</h3>
<p>Bills of lading, proof of delivery, rate confirmations — the freight industry runs on documents. AI-powered OCR and extraction tools are eliminating manual data entry, reducing errors, and accelerating invoice cycles.</p>

<h3>4. Predictive Analytics</h3>
<p>Instead of reacting to delays, AI systems are predicting them. Weather data, port congestion patterns, carrier performance history, and traffic data are combined to flag shipments at risk before problems occur.</p>

<h2>The Barrier Is Lower Than You Think</h2>
<p>The most important shift in 2025 is accessibility. AI tools no longer require a data science team or a seven-figure IT budget. API-based tools, SaaS platforms, and purpose-built products like DispatchDOS are making enterprise-grade capabilities available to independent brokers and small 3PLs.</p>
<p>The freight businesses that will struggle in the next five years are not the ones that failed to build AI — they're the ones that failed to adopt it.</p>
    `.trim(),
  },
  {
    slug: "5-signs-your-business-needs-a-custom-web-app",
    title: "5 Signs Your Business Needs a Custom Web Application",
    excerpt: "Most businesses start with off-the-shelf software. Many eventually outgrow it. Here's how to know when a custom application is the right investment.",
    category: "Web Development",
    readingTime: 4,
    publishedAt: "2025-05-05",
    content: `
<h2>When Generic Tools Stop Working</h2>
<p>Every business starts with generic tools — spreadsheets, off-the-shelf SaaS, free tiers of everything. For early stages, this is the right call. But there's a point where the tools that helped you grow start holding you back. Recognizing that inflection point early can save significant time and money.</p>

<h2>Sign 1: Your Team Spends Hours on Manual Data Entry</h2>
<p>If your team is copy-pasting data between systems, reformatting spreadsheets, or manually triggering processes that should be automatic — you have a custom application problem. Every hour spent on manual data handling is an hour not spent on actual work. Custom applications eliminate these bottlenecks by integrating systems and automating repetitive workflows.</p>

<h2>Sign 2: You've Built a "System" in Spreadsheets</h2>
<p>Spreadsheets are powerful tools. They're also a red flag when they become the backbone of a critical business process. When a spreadsheet has macros, multiple tabs with complex formulas, and only one person who truly understands it — you need a proper application. The risk of data corruption, version conflicts, and knowledge silos in a spreadsheet "system" is enormous.</p>

<h2>Sign 3: Off-the-Shelf Software Doesn't Fit Your Workflow</h2>
<p>Generic software is built for the average business. If you find yourself constantly working around the software's limitations — using features in unintended ways, maintaining workaround processes, or paying for features you'll never use — that's a sign your business has specific enough needs to warrant a custom solution built around how you actually work.</p>

<h2>Sign 4: Your Data Is Siloed Across Multiple Platforms</h2>
<p>Using a CRM that doesn't talk to your accounting software, which doesn't integrate with your project management tool, which exports CSV files that someone manually imports somewhere else — this is the data silo problem. A custom application can unify your data model, give you a single source of truth, and make reporting actually useful.</p>

<h2>Sign 5: You Have a Competitive Advantage That Software Can Amplify</h2>
<p>Sometimes custom software isn't about fixing a problem — it's about widening a lead. If your business has a unique process, a proprietary methodology, or a specialized workflow that drives results, custom software can encode that advantage, make it scalable, and make it impossible for competitors to replicate easily.</p>

<h2>What to Do Next</h2>
<p>If you recognized your business in two or more of these signs, a custom application is worth a serious conversation. The key is partnering with developers who take time to understand your actual workflow before writing a line of code. At Nyrvex, every project starts with a discovery phase — we map your current process, identify the highest-leverage opportunities, and only then do we build.</p>
    `.trim(),
  },
  {
    slug: "why-we-built-dispatchdos",
    title: "Why We Built DispatchDOS: The Problem No One Was Solving",
    excerpt: "The story behind DispatchDOS — how a deep dive into the freight brokerage industry revealed a painful, costly, and completely unsolved problem.",
    category: "Company",
    readingTime: 4,
    publishedAt: "2025-04-18",
    content: `
<h2>How It Started</h2>
<p>Nyrvex's approach to every product is the same: find an industry, go deep, identify the most painful unsolved problem, and build the best tool for it. For our first product, we chose freight brokerage.</p>
<p>We spent weeks interviewing freight brokers, sitting in on their operations, and mapping out their daily workflows. We expected to find technology gaps around load matching or TMS integration. What we found instead was something far more fundamental.</p>

<h2>The Carrier Verification Problem</h2>
<p>Almost every broker we talked to spent significant time every week manually verifying carriers on the FMCSA website. One by one. Copy, paste, check, record, repeat — for every carrier they worked with or considered working with.</p>
<p>The brokers knew it was inefficient. They knew it left gaps. But they didn't have an alternative that was affordable, accurate, and actually designed for how they worked.</p>

<h2>What Existed Wasn't Good Enough</h2>
<p>There were tools in the market, but they had serious limitations: either they scraped data unreliably, charged enterprise pricing inaccessible to independent brokers, required complex integrations, or provided raw data without any interpretation layer — leaving the broker to still make the risk assessment manually.</p>
<p>Nobody had built a tool that said: upload your entire carrier list, get back a complete risk report with a clear A–F score for every carrier, downloadable as Excel, at a price that works for a solo broker or a small team.</p>

<h2>So We Built It</h2>
<p>DispatchDOS connects directly to the official FMCSA API — zero scraping, zero data quality risk. It processes 1,000+ carriers per batch and returns 30+ data fields per carrier with an automated risk scoring system. The output is a clean Excel report that can be shared with a team, filed for compliance records, or used immediately for load decisions.</p>
<p>The product went from concept to first working version in eight weeks. Every feature was tested with real freight brokers before it shipped.</p>

<h2>What Comes Next</h2>
<p>DispatchDOS is in early access now. We're onboarding freight brokers and gathering real-world feedback to shape v2. If you're a freight broker spending hours on manual carrier verification, we'd like to talk.</p>
    `.trim(),
  },
  {
    slug: "fmcsa-compliance-guide-for-freight-brokers",
    title: "FMCSA Compliance: What Every Freight Broker Must Know in 2025",
    excerpt: "Operating authority, insurance requirements, carrier vetting obligations — a practical guide to staying compliant and avoiding penalties.",
    category: "Freight Tech",
    readingTime: 5,
    publishedAt: "2025-03-30",
    content: `
<h2>Your Compliance Obligations as a Licensed Broker</h2>
<p>Freight brokers licensed with the FMCSA operate under a specific set of regulatory obligations. Violating these isn't just a fine risk — it can mean suspension of your operating authority and personal liability for cargo claims.</p>

<h2>Core Requirements</h2>
<h3>Operating Authority</h3>
<p>Every freight broker must hold active broker authority (MC number) issued by the FMCSA. This must be maintained continuously — letting it lapse even briefly can create legal exposure for loads brokered during the gap period.</p>
<h3>Surety Bond or Trust Fund</h3>
<p>As of 2013, freight brokers are required to maintain a $75,000 surety bond (BMC-84) or equivalent trust fund (BMC-85). This protects motor carriers and shippers in the event the broker defaults on payment obligations.</p>
<h3>Carrier Vetting</h3>
<p>Brokers are responsible for ensuring carriers they work with hold active operating authority, proper insurance (minimum $750,000 for most freight, $1M+ for hazmat), and do not have a history of serious safety violations. While FMCSA regulations don't mandate a specific verification process, brokers who cannot demonstrate due diligence face liability in disputes.</p>

<h2>Record-Keeping Requirements</h2>
<p>Brokers must maintain records of all transactions for a minimum of three years, including: shipper information, carrier information, rate information, and the basis for carrier selection. These records must be available for FMCSA inspection on request.</p>

<h2>How Automated Verification Supports Compliance</h2>
<p>One practical benefit of automated carrier verification tools is the compliance record they generate. When you use DispatchDOS to verify carriers, you have a timestamped, documented record of the verification — what data was checked, when, and what the result was. This is valuable documentation if a claim ever goes to dispute.</p>
    `.trim(),
  },
  {
    slug: "ai-chatbots-that-actually-convert",
    title: "AI Chatbots That Actually Convert: Lessons from Real Deployments",
    excerpt: "Most AI chatbots are a disappointment. Here's what separates the ones that generate real business results from the ones that get disabled after a month.",
    category: "AI & Automation",
    readingTime: 5,
    publishedAt: "2025-03-12",
    content: `
<h2>Why Most Chatbots Fail</h2>
<p>The typical chatbot deployment story goes like this: a business installs a chatbot, excited about 24/7 automated support. Three months later, it's quietly disabled because customers found it frustrating and staff kept having to intervene anyway. The promise wasn't delivered.</p>
<p>This is not a technology problem — the underlying AI capabilities are genuinely impressive. It's a deployment problem. Most chatbots fail because they're built around what's easy to implement, not around what the customer actually needs.</p>

<h2>What High-Converting Chatbots Have in Common</h2>
<h3>1. They Know Their Scope</h3>
<p>The best chatbots are specialists, not generalists. A chatbot for a freight broker that knows everything about carrier verification, load status, and rate quotes — and immediately routes anything else to a human — will outperform a general-purpose bot every time. Knowing what you don't know is as important as knowing what you do.</p>
<h3>2. They're Trained on Real Conversations</h3>
<p>Generic AI models trained on the internet will give generic answers. Chatbots that convert are fine-tuned or prompted with the specific language your customers use, the specific questions they ask, and the specific objections they raise. This requires real conversation data — not assumptions.</p>
<h3>3. They Have a Clear Job to Do</h3>
<p>Is the chatbot's job to qualify leads? Answer support questions? Book demos? Process orders? The best chatbots have one primary job and are optimized ruthlessly for that job. A chatbot trying to do five things will do all five poorly.</p>
<h3>4. They Hand Off Gracefully</h3>
<p>A customer who hits a wall in a chatbot conversation is more frustrated than one who never used the chatbot at all. High-converting chatbots know exactly when to say "Let me connect you with the team" and make that transition seamless — not a dead end.</p>

<h2>What We've Learned Building Chatbots for Clients</h2>
<p>At Nyrvex, we've deployed AI chatbots for e-commerce, restaurant, and professional services clients. The consistent finding: the chatbots that perform best are the ones where we spent the most time in discovery — mapping actual customer conversations, identifying the highest-volume question types, and building the bot's personality around the brand's actual voice.</p>
<p>The technical implementation is the easy part. The hard part is understanding what the customer actually wants when they open the chat window.</p>
    `.trim(),
  },
]

export const CATEGORY_COLORS: Record<Article["category"], string> = {
  "Freight Tech": "#C9A84C",
  "AI & Automation": "#A78BFA",
  "Web Development": "#60A5FA",
  "Company": "#22c55e",
}
