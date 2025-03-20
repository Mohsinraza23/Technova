import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "  A scalable and feature-rich online marketplace with seamless payment integration, real-time inventory management, and a user-friendly shopping experience.",
      image: "/EEE.PNG?height=300&width=400",
      category: "Web Development",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      link: "https://marketplace-builder-hackathon2025.vercel.app/",
    },
    {
      id: 2,
      title: "KababJee Resturant Website",
      description: "A full-featured online food ordering system with secure payment integration, real-time menu updates, and efficient order tracking.",
      image: "/AAb.PNG?height=300&width=400",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "Express.js"],
      link: "https://kababjees-website-eight.vercel.app/",
    },
    {
      id: 3,
      title: "Business Consultancy Website",
      description: " A scalable and feature-rich online marketplace with seamless payment integration, real-time inventory management, and a user-friendly shopping experience.",
      image: "/Abc.PNG?height=300&width=400",
      category: "Web Development",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      link: "https://westchestergroup.co/",
    },
    {
      id: 4,
      title: "Dubai Hotel Booking",
      description: "A luxurious hotel website for booking premium rooms, exploring world-class amenities, and experiencing the best hospitality in Dubai.",
      image: "/dubai.PNG?height=300&width=400",
      category: "Enterprise Software",
      technologies: ["Angular", "Java Spring Boot", "MySQL"],
      link: "https://dubai-hotel-website-zyw6.vercel.app/",
    },
    {
      id: 5,
      title: "Novel Hub Website",
      description: "A captivating and user-friendly website for novel enthusiasts, designed to explore, read, and purchase novels online with an immersive browsing experience and seamless navigation.",
      image: "/noval.PNG?height=300&width=400",
      category: "Web Development",
      technologies: ["Vue.js", "Node.js", "MongoDB", "AWS"],
      link: "https://novel-website-byyusrawaheed.vercel.app/",
    },
    {
      id: 6,
      title: "Ansareez Digital Agency Website",
      description: "A professional and modern website for Ansareez, showcasing digital marketing, web design, and social media services. Designed with a sleek interface and user-friendly navigation to highlight the agency's expertise and services.",
      image: "/abcd.PNG?height=300&width=400",
      category: "Mobile Development",
      technologies: ["Flutter", "Firebase", "Node.js"],
      link: "https://ansareez.co.uk/",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="mirror-gradient section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our <span className="gradient-text">Projects</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Explore our portfolio of successful projects across various industries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white dark:bg-gray-950 section-padding">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg glass-card transition-all hover:shadow-xl"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground mt-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={project.link} className="inline-flex items-center text-sm text-primary hover:underline">
                    View details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="bg-gray-50 dark:bg-gray-900 section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Development Process</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                How we turn your ideas into successful digital products
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Discovery</h3>
                <p className="text-muted-foreground">
                  We start by understanding your business goals, target audience, and project requirements.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Planning</h3>
                <p className="text-muted-foreground">
                  We create a detailed project plan, including timelines, milestones, and resource allocation.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Development</h3>
                <p className="text-muted-foreground">
                  Our team builds your solution using agile methodologies and best practices.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold">Delivery</h3>
                <p className="text-muted-foreground">
                  We deploy your solution and provide ongoing support and maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-violet-800 text-white section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Project?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Contact us today to discuss how we can help bring your ideas to life.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-white text-purple-900 px-8 text-sm font-medium shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

