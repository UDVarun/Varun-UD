"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle Theme"
      className="p-2 rounded-full border hover:bg-muted transition"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
