"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "glass" : "bg-transparent"}`}>
      <div className="container flex h-16 sm:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full fancy-border">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-cyan-500 to-emerald-500"></div>
            <Image
              src="/logo.jpeg?height=48&width=48"
              alt="Technova Logo"
              width={48}
              height={48}
              className="rounded-full mix-blend-overlay group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="text-xl sm:text-2xl font-montserrat font-extrabold gradient-text">Technova</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-8">
          <Link href="/" className="text-sm lg:text-base font-medium relative nav-link">
            Home
          </Link>
          <Link href="/about" className="text-sm lg:text-base font-medium relative nav-link">
            About
          </Link>
          <Link href="/team" className="text-sm lg:text-base font-medium relative nav-link">
            Team
          </Link>
          <Link href="/projects" className="text-sm lg:text-base font-medium relative nav-link">
            Projects
          </Link>
          <Link href="/contact" className="text-sm lg:text-base font-medium relative nav-link">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Link href="/contact" className="btn-primary text-sm lg:text-base py-2 px-4 lg:px-6">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center rounded-md p-2 text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass">
          <div className="container flex flex-col space-y-4 py-6">
            <Link
              href="/"
              className="text-base font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-base font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/team"
              className="text-base font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/projects"
              className="text-base font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-primary w-full flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: linear-gradient(to right, #9333ea, #06b6d4);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  )
}

