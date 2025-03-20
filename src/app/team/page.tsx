import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Mohsin Raza",
      role: "CEO & Founder",
      bio: "With over 3 years of experience in software development and business leadership Mohsin founded Technova with a vision to create innovative solutions that drive business growth.",
      image: "/mo.jpeg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/mohsin-raza-a514392b6/",
      },
    },
    {
      id: 2,
      name: "Saad Raza",
      role: "CTO",
      bio: "Saad leads our technical strategy and oversees all development projects. His expertise in cloud architecture and software engineering ensures our solutions are robust and scalable.",
      image: "/saad.jpg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/muhammad-saad-raza-6aa58b2b4/",
      },
    },
    {
      id: 3,
      name: "Rahat Bano",
      role: "Manager & Graphic Designing Head",
      bio: "Rahat specializes in full-stack development and has led numerous successful projects. His attention to detail and problem-solving skills make him an invaluable member of our team.",
      image: "/rahat.jpg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/rahat-bano-5b78b41b3/",
      },
    },
    {
      id: 4,
      name: "Nida Nasar",
      role: "Senior Developer & UI/UX Designer",
      bio: "Nida brings creativity and user-centered design principles to every project. Her designs are not only visually appealing but also enhance user experience and engagement.",
      image: "/n.jpg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/nida-nasar-37452914b/",
      },
    },
    {
      id: 5,
      name: "Farrukh Salim",
      role: "Group Director",
      bio: "Farrukh Salim is a visionary leader and strategist, driving the growth and success of our organization. With extensive experience in management and business development.",
      image: "/f.jpg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/farrukh-salim-834209106/",
      },
    },
    {
      id: 6,
      name: "Haroon Afridi",
      role: "Senior Coordinator / Marketing Manager",
      bio: "Haroon excels at coordinating complex projects and ensuring they are delivered on time and within budget. Her communication skills and attention to detail keep our projects running smoothly.",
      image: "/haron.jpg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/haroon-khan-afridi-2aa798168/",
      },
    },
    {
      id: 7,
      name: "Dua Ali Khan",
      role: "SQA Engineer",
      bio: "Dua ensures the quality and reliability of our software through rigorous testing and quality assurance processes. His meticulous approach helps us deliver bug-free solutions.",
      image: "/Dua.jpg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/dua-ali-khan-7015952b4/",
      },
    },
    {
      id: 8,
      name: "Yousra Khan",
      role: "Senior Developer",
      bio: " Yousra Khan is a passionate Senior Developer with a keen interest in coding and problem-solving. She is dedicated to writing clean, efficient code and continuously learning new technologies.",
      image: "/ys.jpeg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/hafiza-yousra-khan-/",
      },
    },
    {
      id: 9,
      name: "Abdul Salam",
      role: "Senior Developer & Marketing Executive",
      bio: " Senior Developer and Marketing Executive, combining technical expertise with strategic marketing insights. ",
      image: "/sa.jpg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/abdul-salam-9248bb244/",
      },
    },
    {
      id: 10,
      name: "Vandana Chohan",
      role: "Social & Digital Marketing , SEO Expert",
      bio: "Vandana is a skilled Social & Digital Marketing expert and SEO strategist, specializing in driving online visibility, engagement, and brand growth. She optimizes digital campaigns.",
      image: "/vad2.jpg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/vandana-chohan-0880962b7/",
      },
    },
    {
      id: 11,
      name: "Amna Immad",
      role: "Joiner Developer",
      bio: " Amna Immad is a passionate Junior Developer with a keen interest in coding and problem-solving. She is dedicated to writing clean, efficient code and continuously learning new technologies. .",
      image: "/am.jpg?height=300&width=300",
      social: {
        linkedin: "https://www.linkedin.com/in/aamna-imdadullah-9616082bb/",
      },
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="mirror-gradient section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Meet Our <span className="gradient-text">Team</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                The talented individuals behind Technova success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-white dark:bg-gray-950 section-padding">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-lg glass-card p-6 transition-all hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>
                  <div className="flex space-x-4">
  <Link
    href={member.social.linkedin}
    className="text-muted-foreground hover:text-primary"
  >
    <FaLinkedin className="h-5 w-5" />
    <span className="sr-only">LinkedIn</span>
  </Link>
</div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-gray-50 dark:bg-gray-900 section-padding">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Join Our Team
                </h2>
                <p className="text-muted-foreground">
                  We are always looking for talented individuals to join our
                  team. At Technova you will work on exciting projects
                  collaborate with skilled professionals and grow your career
                  in a supportive environment.
                </p>
                <p className="text-muted-foreground">
                  We offer competitive compensation, flexible work arrangements,
                  continuous learning opportunities, and a positive company
                  culture that values innovation, collaboration, and work-life
                  balance.
                </p>
                <div className="pt-4"></div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              {/* <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Join Our Team"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-violet-800 text-white section-padding">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Work With Us?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Contact our team to discuss your project and how we can help
                bring your ideas to life.
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
  );
}
