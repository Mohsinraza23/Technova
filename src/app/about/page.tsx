import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Smartphone, Layout, Database, Cloud, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-teal-50 to-green-100 dark:from-purple-900/30 dark:via-teal-900/30 dark:to-green-900/30 section-padding">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] opacity-5 bg-repeat"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transforming Ideas into <span className="gradient-text">Digital Reality</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Technova Software House delivers cutting-edge software solutions that drive business growth and
                  innovation.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md btn-primary px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1"
                >
                  Get Started
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input glass px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1"
                >
                  Our Work
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-teal-500/10 to-green-500/10 rounded-lg blur-xl"></div>
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Hero Image"
                  width={500}
                  height={500}
                  className="relative rounded-lg object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white dark:bg-gray-950 section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What We <span className="gradient-text">Offer</span>
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive software development services tailored to your business needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg glass-card p-6 transition-all hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 mb-4">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Web Development</h3>
              <p className="text-muted-foreground mt-2">
                Custom web applications and responsive websites built with the latest technologies.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-lg glass-card p-6 transition-all hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400 mb-4">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Mobile Apps</h3>
              <p className="text-muted-foreground mt-2">
                Native and cross-platform mobile applications for iOS and Android devices.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm text-teal-600 dark:text-teal-400 hover:underline"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-lg glass-card p-6 transition-all hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 mb-4">
                <Layout className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">UI/UX Design</h3>
              <p className="text-muted-foreground mt-2">
                User-centered design that enhances user experience and drives engagement.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm text-green-600 dark:text-green-400 hover:underline"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-lg glass-card p-6 transition-all hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 mb-4">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Database Solutions</h3>
              <p className="text-muted-foreground mt-2">
                Efficient database design, optimization, and management for your applications.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-lg glass-card p-6 transition-all hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400 mb-4">
                <Cloud className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Cloud Solutions</h3>
              <p className="text-muted-foreground mt-2">
                Scalable cloud infrastructure and deployment services for your applications.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm text-teal-600 dark:text-teal-400 hover:underline"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="group relative overflow-hidden rounded-lg glass-card p-6 transition-all hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">QA & Testing</h3>
              <p className="text-muted-foreground mt-2">
                Comprehensive testing services to ensure the quality and reliability of your software.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-sm text-green-600 dark:text-green-400 hover:underline"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-purple-50 to-teal-50 dark:from-purple-900/10 dark:to-teal-900/10 section-padding">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/10 rounded-lg blur-xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Why Choose Us"
                  width={600}
                  height={400}
                  className="relative rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Excellence in <span className="gradient-text">Software Development</span>
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  At Technova, we combine technical expertise with industry knowledge to deliver exceptional software
                  solutions.
                </p>
              </div>
              <ul className="grid gap-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Experienced Team</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team of skilled developers, designers, and project managers brings years of industry
                      experience.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Cutting-edge Technologies</h3>
                    <p className="text-sm text-muted-foreground">
                      We stay updated with the latest technologies and frameworks to deliver modern solutions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Client-focused Approach</h3>
                    <p className="text-sm text-muted-foreground">
                      We prioritize understanding your business needs to deliver tailored solutions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Timely Delivery</h3>
                    <p className="text-sm text-muted-foreground">
                      We adhere to project timelines and deliver high-quality solutions on schedule.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white dark:bg-gray-950 section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Featured Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Recent <span className="gradient-text">Work</span>
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore some of our successful projects that showcase our expertise
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg glass-card shadow-sm transition-all hover:shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-purple-teal"></div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Project 1"
                width={400}
                height={300}
                className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">E-commerce Platform</h3>
                <p className="text-muted-foreground mt-2">
                  A full-featured online store with payment integration and inventory management.
                </p>
                <Link
                  href="/projects"
                  className="mt-4 inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:underline"
                >
                  View details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg glass-card shadow-sm transition-all hover:shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-teal-green"></div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Project 2"
                width={400}
                height={300}
                className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Healthcare App</h3>
                <p className="text-muted-foreground mt-2">
                  A mobile application for patient management and appointment scheduling.
                </p>
                <Link
                  href="/projects"
                  className="mt-4 inline-flex items-center text-sm text-teal-600 dark:text-teal-400 hover:underline"
                >
                  View details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg glass-card shadow-sm transition-all hover:shadow-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-purple-green"></div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Project 3"
                width={400}
                height={300}
                className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Financial Dashboard</h3>
                <p className="text-muted-foreground mt-2">
                  An analytics dashboard for real-time financial data visualization.
                </p>
                <Link
                  href="/projects"
                  className="mt-4 inline-flex items-center text-sm text-green-600 dark:text-green-400 hover:underline"
                >
                  View details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="/projects"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input glass px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/10 dark:to-green-900/10 section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from businesses that have experienced our exceptional service
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg glass-card p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-purple-200 dark:border-purple-800"
                  />
                  <div>
                    <h3 className="font-medium">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">CEO, TechStart</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Technova delivered our e-commerce platform on time and within budget. Their team was professional and
                  responsive throughout the project."
                </p>
              </div>
            </div>
            <div className="rounded-lg glass-card p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-teal-200 dark:border-teal-800"
                  />
                  <div>
                    <h3 className="font-medium">Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">CTO, HealthPlus</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The healthcare app developed by Technova has transformed our patient management process. Their
                  attention to detail and understanding of our needs was impressive."
                </p>
              </div>
            </div>
            <div className="rounded-lg glass-card p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client"
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-green-200 dark:border-green-800"
                  />
                  <div>
                    <h3 className="font-medium">Emily Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">Marketing Director, GlobalFin</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The financial dashboard created by Technova has given us valuable insights into our business
                  performance. Their team's expertise in data visualization is exceptional."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="colorful-gradient text-white section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Ideas?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Let's discuss how Technova can help you achieve your business goals with custom software solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white text-purple-600 px-8 text-sm font-medium shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="inline-flex h-10 items-center justify-center rounded-md btn-outline px-8 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

