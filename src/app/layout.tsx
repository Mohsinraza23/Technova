import type { Metadata } from "next"
import { Montserrat, Poppins } from "next/font/google"
import "./globals.css"

import dynamic from "next/dynamic"
import Footer from "../app/components/footer"
import Header from "./components/header"
import { Providers } from "./components/providers"

// Dynamically import client-only components — keeps initial JS bundle small
const WhatsAppButton = dynamic(() => import("./components/whatsapp-button"), { ssr: false })
const PageLoader    = dynamic(() => import("./components/page-loader"),    { ssr: false })
const ScrollToTop   = dynamic(() => import("./components/scroll-to-top"),  { ssr: false })
const ChatBot       = dynamic(() => import("./components/chat-bot"),       { ssr: false })
const CustomCursor  = dynamic(() => import("./components/custom-cursor"),  { ssr: false })

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
  metadataBase: new URL("https://nyrvex.com"),
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
    sameAs: ["https://www.linkedin.com/in/mohsinraza-dev/"],
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
            <CustomCursor />
            <Header />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
            <PageLoader />
            <ChatBot />
          </div>
        </Providers>
      </body>
    </html>
  )
}
