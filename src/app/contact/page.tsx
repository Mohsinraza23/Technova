"use client"

import type React from "react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import TrustBadges from "../components/trust-badges"

const EMAILJS_SERVICE_ID = "service_np39pm8"
const EMAILJS_TEMPLATE_ID = "template_glr2aws"
const EMAILJS_PUBLIC_KEY = "95gs-osIS2Sl_hMdi"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", service: "", message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        subject: formData.subject,
        message: formData.message,
      }, EMAILJS_PUBLIC_KEY)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", subject: "", service: "", message: "" })
    } catch {
      setError("Something went wrong. Please try again or contact us via WhatsApp.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="mirror-gradient section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="badge-gold mx-auto w-fit mb-4">Get In Touch</div>
              <h1 className="heading-xl">
                Let&apos;s Talk About <span className="gradient-text">Your Needs</span>
              </h1>
              <p className="mx-auto max-w-[620px] body-lg text-muted-foreground">
                Interested in DispatchDOS early access, a custom AI solution, or want to explore a partnership?
                We respond within 24 hours.
              </p>
              <TrustBadges className="justify-center mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="heading-md">Send a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form and we will get back to you as soon as possible.
                </p>
              </div>
              {isSubmitted ? (
                <div className="rounded-lg glass-card p-6" style={{ background: "rgba(34,197,94,0.05)", borderColor: "rgba(34,197,94,0.2)" }}>
                  <h3 className="text-xl font-bold text-green-400">Thank You!</h3>
                  <p className="mt-2 text-muted-foreground">Your message has been received. We will get back to you shortly.</p>
                  <Button className="mt-4" onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 glass-card p-6 rounded-lg">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" placeholder="Your name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="you@company.com" required value={formData.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">I&apos;m Interested In</Label>
                      <Select value={formData.service} onValueChange={handleSelectChange}>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select one..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dispatchdos">DispatchDOS Early Access</SelectItem>
                          <SelectItem value="custom-ai">Custom AI Solution</SelectItem>
                          <SelectItem value="automation">AI Automation</SelectItem>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="Project Inquiry" required value={formData.subject} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell us about your project or inquiry..." required className="min-h-[120px]" value={formData.message} onChange={handleChange} />
                  </div>
                  {error && <p className="text-sm text-red-400">{error}</p>}
                  <Button type="submit" className="btn-shine w-full" disabled={isSubmitting}
                    style={{ background: "linear-gradient(135deg, #C9A84C, #E8C96A)", color: "#0A0F1E", fontWeight: 700 }}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  <div className="flex items-center gap-2 pt-1">
                    <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#C9A84C" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <p className="text-xs" style={{ color: "#8898AA" }}>
                      Your information is SSL-encrypted and never shared with third parties.
                    </p>
                  </div>
                </form>
              )}
            </div>

            <div className="flex flex-col space-y-6">
              <div className="rounded-lg glass-card p-6">
                <h3 className="heading-sm mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 mt-0.5" style={{ color: "#C9A84C" }} />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-sm text-muted-foreground">hello@nyrvex.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MessageCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">WhatsApp</h4>
                      <a href="https://wa.me/923452615590" target="_blank" rel="noopener noreferrer"
                        className="text-sm text-green-400 hover:underline font-medium">
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 mt-0.5" style={{ color: "#C9A84C" }} />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-sm text-muted-foreground">+92 (345) 261-5590</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 mt-0.5" style={{ color: "#C9A84C" }} />
                    <div>
                      <h4 className="font-medium">Response Time</h4>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 mt-0.5" style={{ color: "#C9A84C" }} />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-sm text-muted-foreground">Karachi, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg glass-card p-6">
                <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-muted-foreground">Quick Interests</h3>
                <div className="space-y-2">
                  {[
                    "DispatchDOS Early Access",
                    "Custom AI Product Development",
                    "Business Process Automation",
                    "AI Agent Development",
                    "Web / Mobile Development",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#C9A84C" }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: "rgba(201,168,76,0.02)" }}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="badge-gold mb-2">FAQ</div>
            <h2 className="heading-lg">Frequently Asked <span className="gradient-text">Questions</span></h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            {[
              { q: "What is DispatchDOS?", a: "DispatchDOS is a bulk FMCSA carrier verification tool. Freight brokers upload a list of carriers and get back a full Excel report with 30+ data points and A–F risk scores in minutes." },
              { q: "How many carriers can I verify at once?", a: "DispatchDOS supports 1,000+ carriers per batch. You upload an Excel or CSV file and receive a complete report for all carriers within minutes." },
              { q: "Do you build custom AI solutions?", a: "Yes. Beyond DispatchDOS, we build custom AI chatbots, AI agents, automation systems, and full-stack software tailored to your specific business needs." },
              { q: "Are Canada carriers supported?", a: "Yes, DispatchDOS supports both US and Canada carriers, making it ideal for cross-border freight brokers and logistics companies." },
            ].map((faq) => (
              <div key={faq.q} className="rounded-lg glass-card p-6">
                <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
