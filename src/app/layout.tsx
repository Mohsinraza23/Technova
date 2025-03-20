import type { Metadata } from "next"
import { Montserrat, Poppins } from "next/font/google"
import "./globals.css"

import Footer from "../app/components/footer"
import Header from "./components/header"

// Define fonts
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

// ✅ Move metadata to the top-level scope
export const metadata: Metadata = {
  title: "Technova Software House",
  description: "Professional software development services for businesses of all sizes",
  openGraph: {
    title: "Technova Software House",
    description: "Professional software development services for businesses of all sizes",
    url: "https://technova-zeta.vercel.app/", // Apni website ka link
    siteName: "Technova Software House",
    images: [
      {
        url: "/logo.jpeg", // ✅ Public folder wali image ka path
        width: 1200,
        height: 630,
        alt: "Technova Software House Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technova Software House",
    description: "Professional software development services for businesses of all sizes",
    images: ["/logo.jpeg"], // ✅ Yahan bhi local image ka path
  },
  icons: {
    icon: "/favicon.ico", // ✅ Agar favicon bhi hai
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable} font-sans`}>
        <div className="flex min-h-screen flex-col animated-bg">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
