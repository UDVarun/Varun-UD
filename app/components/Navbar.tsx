"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="#home"
          className="text-base font-semibold tracking-tight text-foreground"
        >
          Varun UD
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                text-sm font-medium
                text-muted-foreground
                hover:text-foreground
                transition-colors
              "
            >
              {link.name}
            </Link>
          ))}

          {/* Divider (kept – this is fine) */}
          <span className="w-px h-4 bg-border/40" />

          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
