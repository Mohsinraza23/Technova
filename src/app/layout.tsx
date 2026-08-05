import type { Metadata } from "next"
import { Montserrat, Poppins } from "next/font/google"
import "./globals.css"

import dynamic from "next/dynamic"
import Footer from "../app/components/footer"
import Header from "./components/header"
import { Providers } from "./components/providers"

// Dynamically import client-only components — keeps initial JS bundle small
const WhatsAppButton = dynamic(() => import("./components/whatsapp-button"), { ssr: false })
const PageLoader     = dynamic(() => import("./components/page-loader"),     { ssr: false })
const ScrollToTop    = dynamic(() => import("./components/scroll-to-top"),   { ssr: false })
const ChatBot        = dynamic(() => import("./components/chat-bot"),        { ssr: false })
const CustomCursor   = dynamic(() => import("./components/custom-cursor"),   { ssr: false })
const FloatingBadge    = dynamic(() => import("./components/floating-badge"),    { ssr: false })
const CardSpotlight    = dynamic(() => import("./components/card-spotlight"),    { ssr: false })
// ScrollProgress removed — header already has its own scroll progress bar
const MagneticButtons  = dynamic(() => import("./components/magnetic-buttons"),  { ssr: false })
const ParticleBurst    = dynamic(() => import("./components/particle-burst"),    { ssr: false })
const StickyCTA          = dynamic(() => import("./components/sticky-cta"),          { ssr: false })
const SocialProofToast   = dynamic(() => import("./components/social-proof-toast"),  { ssr: false })
const CookieBanner       = dynamic(() => import("./components/cookie-banner"),        { ssr: false })
const CommandPalette   = dynamic(() => import("./components/command-palette"),   { ssr: false })
import PageTransition   from "./components/page-transition"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://nyrvex-zeta.vercel.app"),
  title: {
    default: "Nyrvex — Intelligent AI Solutions",
    template: "%s | Nyrvex",
  },
  description: "Nyrvex builds intelligent AI solutions — custom software, automation, and AI products that solve real industry problems and drive measurable results.",
  keywords: [
    "AI solutions", "custom software", "AI automation", "freight broker tools",
    "FMCSA carrier verification", "DispatchDOS", "AI products", "Nyrvex",
    "AI chatbot", "AI agents", "web development", "Pakistan AI company",
  ],
  authors: [{ name: "Mohsin Raza", url: "https://nyrvex.com/about" }],
  creator: "Mohsin Raza",
  publisher: "Nyrvex",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Nyrvex — Intelligent AI Solutions",
    description: "Nyrvex builds intelligent AI solutions — custom software, automation, and AI products that solve real industry problems.",
    siteName: "Nyrvex",
    url: "https://nyrvex.com",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "Nyrvex — Intelligent AI Solutions" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyrvex — Intelligent AI Solutions",
    description: "Nyrvex builds intelligent AI solutions — custom software, automation, and AI products for businesses.",
    images: ["/logo.jpg"],
    creator: "@nyrvex",
  },
  alternates: { canonical: "https://nyrvex.com" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nyrvex",
    url: "https://nyrvex.com",
    logo: "https://nyrvex.com/logo.jpg",
    description: "Nyrvex builds intelligent AI solutions — custom software, automation, and AI products for businesses.",
    founder: { "@type": "Person", name: "Mohsin Raza" },
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@nyrvex.com",
      contactType: "customer support",
    },
    sameAs: ["https://www.linkedin.com/in/nyrvex-ai-19b456425/"],
  }

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className={`${montserrat.variable} ${poppins.variable} font-sans`}>
        <Providers>
          <div className="flex min-h-screen flex-col animated-bg">
            {/* Film grain noise overlay — adds tactile depth like Vercel/Linear */}
            <div
              aria-hidden="true"
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 9997,
                pointerEvents: "none",
                opacity: 0.032,
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
                backgroundRepeat: "repeat",
                backgroundSize: "180px 180px",
              }}
            />
            <CustomCursor />
            <Header />
            <main id="main-content" className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
            <PageLoader />
            <ChatBot />
            <FloatingBadge />
            <CardSpotlight />
            <MagneticButtons />
            <ParticleBurst />
            <StickyCTA />
            <SocialProofToast />
            <CookieBanner />
            <CommandPalette />
          </div>
        </Providers>
      </body>
    </html>
  )
}
