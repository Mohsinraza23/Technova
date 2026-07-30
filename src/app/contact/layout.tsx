import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Nyrvex — Book a Free Consultation",
  description: "Reach out to Nyrvex to discuss DispatchDOS early access, a custom AI solution, or a business automation project. We respond within 24 hours.",
  openGraph: {
    title: "Contact Nyrvex — Book a Free Consultation",
    description: "Reach out to Nyrvex to discuss DispatchDOS early access, custom AI solutions, or business automation. We respond within 24 hours.",
    url: "https://nyrvex.com/contact",
    siteName: "Nyrvex",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "Nyrvex — Contact Us" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Nyrvex — Book a Free Consultation",
    description: "Reach out to discuss DispatchDOS or a custom AI solution. We respond within 24 hours.",
    images: ["/logo.jpg"],
  },
  alternates: { canonical: "https://nyrvex.com/contact" },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
