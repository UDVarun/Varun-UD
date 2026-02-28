"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

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
? "bg-black/80 backdrop-blur-md border-b border-white/10"
: "bg-transparent"
}`}
>

<nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">


{/* Brand */}

<Link
href="#home"
className="
text-base
font-semibold
tracking-tight

text-white
"
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
text-sm
font-medium

text-white/70

hover:text-white

transition-colors
"

>

{link.name}

</Link>

))}



{/* Divider */}

<span className="w-px h-4 bg-white/20" />


</div>


</nav>

</header>

  )

}