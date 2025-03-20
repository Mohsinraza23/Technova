import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Award, Clock, Zap, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100 via-teal-50 to-green-100 dark:from-purple-900/30 dark:via-teal-900/30 dark:to-green-900/30 section-padding">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] opacity-5 bg-repeat"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About <span className="gradient-text">Technova</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                We are a team of passionate developers, designers, and strategists dedicated to creating exceptional
                software solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white dark:bg-gray-950 section-padding">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/10 rounded-lg blur-xl"></div>
                <Image
                  src="/about.jpeg?height=400&width=600"
                  alt="Our Story"
                  width={500}
                  height={400}
                  className="relative rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  From <span className="gradient-text">Vision</span> to <span className="gradient-text">Reality</span>
                </h2>
                <p className="text-muted-foreground">
                  Founded in 2022 Technova Software House began with a simple mission: to help businesses leverage
                  technology to achieve their goals. What started as a small team of three developers has grown into a
                  full-service software development company with a global client base.
                </p>
                <p className="text-muted-foreground">
                  Over the years we have helped startups launch their first products assisted mid-sized companies in
                  digital transformation, and partnered with enterprises to modernize their systems. Our journey has
                  been defined by continuous learning innovation and a commitment to excellence.
                </p>
                <p className="text-muted-foreground">
                  Today, Technova stands as a trusted partner for businesses seeking reliable, scalable, and innovative
                  software solutions. Our team combines technical expertise with industry knowledge to deliver results
                  that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="bg-gradient-to-br from-purple-50 to-teal-50 dark:from-purple-900/10 dark:to-teal-900/10 section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our <span className="gradient-text">Mission</span> & <span className="gradient-text">Vision</span>
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Guiding principles that drive our work and shape our future
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            <div className="rounded-lg glass-card p-6">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with innovative software solutions that drive growth, efficiency, and
                  competitive advantage. We are committed to delivering high-quality, user-centered products that solve
                  real-world problems and create lasting value for our clients.
                </p>
              </div>
            </div>
            <div className="rounded-lg glass-card p-6">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be a global leader in software development, recognized for our technical excellence, innovative
                  solutions, and exceptional client service. We aspire to create a positive impact on businesses and
                  communities through technology, while fostering a culture of continuous learning and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white dark:bg-gray-950 section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Our Core <span className="gradient-text">Values</span>
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                The principles that guide our decisions and define our culture
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg glass-card p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from code quality to client communication. We set high
                  standards and continuously work to exceed them.
                </p>
              </div>
            </div>
            <div className="rounded-lg glass-card p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in the power of teamwork and collaboration. We work closely with our clients and within our
                  team to achieve the best results.
                </p>
              </div>
            </div>
            <div className="rounded-lg glass-card p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Reliability</h3>
                <p className="text-muted-foreground">
                  We deliver on our promises and meet our commitments. Our clients can count on us for timely,
                  high-quality solutions.
                </p>
              </div>
            </div>
            <div className="rounded-lg glass-card p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Integrity</h3>
                <p className="text-muted-foreground">
                  We conduct our business with honesty, transparency, and ethical practices. We build trust through our
                  actions and decisions.
                </p>
              </div>
            </div>
            <div className="rounded-lg glass-card p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace new technologies and approaches to solve complex problems. We encourage creativity and
                  continuous learning.
                </p>
              </div>
            </div>
            <div className="rounded-lg glass-card p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Client Focus</h3>
                <p className="text-muted-foreground">
                  We put our clients at the center of everything we do. Their success is our success, and we are
                  committed to helping them achieve their goals.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Journey</h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Partner with Technova and experience the difference of working with a team that
                is passionate about your
                success.
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
                href="/team"
                className="inline-flex h-10 items-center justify-center rounded-md btn-outline px-8 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

