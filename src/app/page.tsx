import Link from "next/link"
import Image from "next/image"
import TypingText from "./components/typing-text"
import StatsCounter from "./components/stats-counter"
import FadeIn from "./components/fade-in"
import ParticlesBg from "./components/particles-bg";

import {
  ArrowRight,
  Code,
  Smartphone,
  Layout,
  Database,
  Cloud,
  CheckCircle,
  ArrowDown,
  Search,
  Share2,
  BarChart3,
  Video,
  Paintbrush,
  Brain,
  Bot,
  Workflow,
  Cpu,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <ParticlesBg />
        <div className="container relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 glass border border-white/20 text-xs sm:text-sm font-medium animate-pulse-slow">
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                  Software & Agentic AI Solutions
                </div>
                <h1 className="heading-xl">
                  We Build <br />
                  <TypingText />
                </h1>
                <p className="max-w-[600px] body-lg text-muted-foreground">
                  Technova delivers cutting-edge software and Agentic AI solutions — including AI chatbots, AI
                  employees, and intelligent automation — that drive real business growth and innovation.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary flex items-center justify-center">
                  Get Started
                </Link>
                <Link href="/projects" className="btn-outline flex items-center justify-center">
                  Our Work
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-4 lg:space-x-8 pt-6 md:pt-8">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 glass flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                  </div>
                  <span className="text-sm sm:text-base font-medium">Trusted by 200+ Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 glass flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                  </div>
                  <span className="text-sm sm:text-base font-medium">10+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 lg:mt-0">
              <div className="relative animate-float w-full max-w-[400px] lg:max-w-[500px]">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
                <div className="fancy-border rounded-2xl">
                  <Image
                    src="/hom.jpeg"
                    alt="Technova AI Solutions"
                    width={600}
                    height={600}
                    className="relative rounded-2xl object-cover shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <div className="animate-bounce">
              <ArrowDown className="h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-16">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 glass border border-white/20 text-xs sm:text-sm font-medium mb-2 md:mb-4">
              Our Services
            </div>
            <h2 className="heading-lg">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="max-w-[800px] body-lg text-muted-foreground">
              Comprehensive software development and digital marketing services tailored to your business needs
            </p>
          </div>
          </FadeIn>

          <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Web Development */}
            <div className="fancy-card p-6 md:p-8 hover-lift">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400 mb-4 md:mb-6">
                <Code className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="heading-sm mb-2 md:mb-4">Web Development</h3>
              <p className="text-muted-foreground">
                Custom web applications and responsive websites built with the latest technologies to enhance your
                online presence.
              </p>
            </div>

            {/* Mobile Apps */}
            <div className="fancy-card p-6 md:p-8 hover-lift">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400 mb-4 md:mb-6">
                <Smartphone className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="heading-sm mb-2 md:mb-4">Mobile Apps</h3>
              <p className="text-muted-foreground">
                Native and cross-platform mobile applications for iOS and Android devices that deliver exceptional user
                experiences.
              </p>
            </div>

            {/* UI/UX Design */}
            <div className="fancy-card p-6 md:p-8 hover-lift">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 mb-4 md:mb-6">
                <Layout className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="heading-sm mb-2 md:mb-4">UI/UX Design</h3>
              <p className="text-muted-foreground">
                User-centered design that enhances user experience and drives engagement through intuitive interfaces.
              </p>
            </div>

            {/* Database Solutions */}
            <div className="fancy-card p-6 md:p-8 hover-lift">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400 mb-4 md:mb-6">
                <Database className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="heading-sm mb-2 md:mb-4">Database Solutions</h3>
              <p className="text-muted-foreground">
                Efficient database design, optimization, and management for your applications to ensure optimal
                performance.
              </p>
            </div>

            {/* Cloud Solutions */}
            <div className="fancy-card p-6 md:p-8 hover-lift">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400 mb-4 md:mb-6">
                <Cloud className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="heading-sm mb-2 md:mb-4">Cloud Solutions</h3>
              <p className="text-muted-foreground">
                Scalable cloud infrastructure and deployment services for your applications to maximize flexibility and
                reliability.
              </p>
            </div>

            {/* QA & Testing */}
            <div className="fancy-card p-6 md:p-8 hover-lift">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 mb-4 md:mb-6">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="heading-sm mb-2 md:mb-4">QA & Testing</h3>
              <p className="text-muted-foreground">
                Comprehensive testing services to ensure the quality and reliability of your software before deployment.
              </p>
            </div>

            {/* SEO */}
            <div className="fancy-card p-6 md:p-8 hover-lift">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 mb-4 md:mb-6">
                <Search className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="heading-sm mb-2 md:mb-4">SEO Optimization</h3>
              <p className="text-muted-foreground">
                Boost your online visibility with our comprehensive search engine optimization strategies that drive
                organic traffic to your website.
              </p>
            </div>

            {/* Social Media Marketing */}
            <div className="fancy-card p-6 md:p-8 hover-lift">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 mb-4 md:mb-6">
                <Share2 className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="heading-sm mb-2 md:mb-4">Social Media Marketing</h3>
              <p className="text-muted-foreground">
                Engage your audience and build brand awareness with strategic social media campaigns across all major
                platforms.
              </p>
            </div>

            {/* Digital Marketing (Facebook Ads) */}
            <div className="fancy-card p-6 md:p-8 hover-lift">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 mb-4 md:mb-6">
                <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="heading-sm mb-2 md:mb-4">Digital Marketing</h3>
              <p className="text-muted-foreground">
                Maximize your ROI with targeted Facebook ads and comprehensive digital marketing strategies that convert
                prospects into customers.
              </p>
            </div>

            {/* Video Editing */}
            <div className="fancy-card p-6 md:p-8 hover-lift">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 mb-4 md:mb-6">
                <Video className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="heading-sm mb-2 md:mb-4">Video Editing</h3>
              <p className="text-muted-foreground">
                Professional video editing services that transform your raw footage into compelling visual stories for
                marketing, social media, and more.
              </p>
            </div>

            {/* Graphic Design */}
            <div className="fancy-card p-6 md:p-8 hover-lift">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 mb-4 md:mb-6">
                <Paintbrush className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="heading-sm mb-2 md:mb-4">Graphic Design</h3>
              <p className="text-muted-foreground">
                Eye-catching graphic design services that communicate your brand message effectively through logos,
                marketing materials, and digital assets.
              </p>
            </div>

            {/* AI & Machine Learning */}
            <div className="fancy-card p-6 md:p-8 hover-lift">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400 mb-4 md:mb-6">
                <Brain className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="heading-sm mb-2 md:mb-4">AI & Machine Learning</h3>
              <p className="text-muted-foreground">
                Harness the power of artificial intelligence and machine learning to automate processes, gain insights
                from data, and create intelligent applications for your business.
              </p>
            </div>

            {/* AI Chatbot Development */}
            <div className="fancy-card p-6 md:p-8 hover-lift">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400 mb-4 md:mb-6">
                <Bot className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="heading-sm mb-2 md:mb-4">AI Chatbot Development</h3>
              <p className="text-muted-foreground">
                Custom AI-powered chatbots for customer support, sales, and lead generation. Smart, fast, and available
                24/7 to serve your customers without human intervention.
              </p>
            </div>

            {/* Agentic AI / AI Employee */}
            <div className="fancy-card p-6 md:p-8 hover-lift">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400 mb-4 md:mb-6">
                <Cpu className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="heading-sm mb-2 md:mb-4">AI Employee / AI Agents</h3>
              <p className="text-muted-foreground">
                Autonomous AI agents that work like real employees — handling tasks, making decisions, and completing
                workflows independently so your business runs smarter and faster.
              </p>
            </div>

            {/* AI Automation */}
            <div className="fancy-card p-6 md:p-8 hover-lift">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 mb-4 md:mb-6">
                <Workflow className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="heading-sm mb-2 md:mb-4">AI Automation & Integration</h3>
              <p className="text-muted-foreground">
                Integrate AI into your existing systems and automate repetitive business processes — from data
                processing and reporting to email handling and workflow management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-16">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 glass border border-white/20 text-xs sm:text-sm font-medium mb-2 md:mb-4">
              Featured Projects
            </div>
            <h2 className="heading-lg">
              Our Recent <span className="gradient-text">Work</span>
            </h2>
            <p className="max-w-[800px] body-lg text-muted-foreground">
              Explore some of our successful projects that showcase our expertise and innovation
            </p>
          </div>
          </FadeIn>

          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover-lift">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-cyan-500"></div>
              <Image
                src="/EEE.PNG?height=400&width=600"
                alt="Project 1"
                width={600}
                height={400}
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-6 md:p-8 bg-white/80 dark:bg-gray-900/80 glass">
                <h3 className="heading-sm mb-2">E-commerce Platform</h3>
                <p className="text-muted-foreground mb-4">
                A scalable and feature-rich online marketplace with seamless payment integration, real-time inventory management, and a user-friendly shopping experience.
                </p>
                <Link
                  href="/projects"
                  className="inline-flex items-center text-sm sm:text-base font-semibold text-violet-600 dark:text-violet-400 hover:underline group"
                >
                  View details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover-lift">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
              <Image
                src="/AAb.PNG?height=400&width=600"
                alt="Project 2"
                width={600}
                height={400}
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-6 md:p-8 bg-white/80 dark:bg-gray-900/80 glass">
                <h3 className="heading-sm mb-2">KababJee Resturant Website</h3>
                <p className="text-muted-foreground mb-4">
                A modern and elegant website showcasing the rich flavors of KababJee. Featuring an interactive menu, online reservations, and seamless ordering experience for food lovers.
                </p>
                <Link
                  href="/projects"
                  className="inline-flex items-center text-sm sm:text-base font-semibold text-cyan-600 dark:text-cyan-400 hover:underline group"
                >
                  View details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover-lift sm:col-span-2 lg:col-span-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-violet-600"></div>
              <Image
                src="/Abc.PNG?height=400&width=600"
                alt="Project 3"
                width={600}
                height={400}
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-6 md:p-8 bg-white/80 dark:bg-gray-900/80 glass">
                <h3 className="heading-sm mb-2">Business Consultancy Website</h3>
                <p className="text-muted-foreground mb-4">
                A dynamic eCommerce platform for seamless online food ordering, featuring real-time menu updates, secure transactions, and an intuitive user experience.
                </p>
                <Link
                  href="/projects"
                  className="inline-flex items-center text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 hover:underline group"
                >
                  View details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 md:mt-12">
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container">
          <FadeIn>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-16">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 glass border border-white/20 text-xs sm:text-sm font-medium mb-2 md:mb-4">
              Client Reviews
            </div>
            <h2 className="heading-lg">
              What Clients <span className="gradient-text">Say</span>
            </h2>
            <p className="max-w-[800px] body-lg text-muted-foreground">
              Real feedback from businesses we have helped grow with software and AI solutions
            </p>
          </div>
          </FadeIn>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="fancy-card p-6 md:p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                &ldquo;Technova built our e-commerce platform from scratch. The quality of work and attention to detail was outstanding. Our sales increased by 40% within the first month of launch.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full colorful-gradient flex items-center justify-center text-white font-bold text-sm">AK</div>
                <div>
                  <p className="font-semibold text-sm">Ahmed Khan</p>
                  <p className="text-xs text-muted-foreground">CEO, ShopEase Pakistan</p>
                </div>
              </div>
            </div>

            <div className="fancy-card p-6 md:p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                &ldquo;The AI chatbot Technova built for our customer support team reduced our response time by 80%. It handles hundreds of queries daily without any human intervention. Truly impressive work.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full colorful-gradient flex items-center justify-center text-white font-bold text-sm">SR</div>
                <div>
                  <p className="font-semibold text-sm">Sara Rehman</p>
                  <p className="text-xs text-muted-foreground">Founder, TechRetail Dubai</p>
                </div>
              </div>
            </div>

            <div className="fancy-card p-6 md:p-8 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                &ldquo;Mohsin and the Technova team delivered our business consultancy website on time and within budget. The design is modern, fast, and exactly what we envisioned. Highly recommended.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full colorful-gradient flex items-center justify-center text-white font-bold text-sm">OB</div>
                <div>
                  <p className="font-semibold text-sm">Omar Bilal</p>
                  <p className="text-xs text-muted-foreground">Director, Westchester Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="colorful-gradient text-white section-padding">
        <div className="container">
          <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="heading-lg text-white">Ready to Transform Your Ideas?</h2>
              <p className="mx-auto max-w-[800px] body-lg">
                Lets discuss how Technova can help you achieve your business goals with custom software solutions.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-md bg-white text-violet-600 px-6 sm:px-8 text-sm sm:text-base font-semibold shadow transition-colors hover:bg-white/90 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-1"
              >
                Contact Us
              </Link>
              <Link href="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

