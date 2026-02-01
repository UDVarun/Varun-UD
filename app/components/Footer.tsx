"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

/* =========================
   FOOTER REVEAL ANIMATION
========================= */
const footerReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Footer() {
  return (
    <motion.footer
      variants={footerReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="w-full border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* MAIN ROW */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          
          {/* LEFT — PERSONAL INFO */}
          <div className="max-w-sm">
            <h3 className="text-lg font-semibold">Varun UD</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Frontend Engineer building refined, scalable, and high-performance
              web applications with modern UI patterns.
            </p>

            {/* SOCIALS */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition hover:text-foreground"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition hover:text-foreground"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT — SITE MAP + CONTACT */}
          <div className="flex gap-16">
            {/* SITE MAP */}
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
                Site Map
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#home" className="hover:text-foreground transition">Home</Link></li>
                <li><Link href="#about" className="hover:text-foreground transition">About</Link></li>
                <li><Link href="#experience" className="hover:text-foreground transition">Experience</Link></li>
                <li><Link href="#projects" className="hover:text-foreground transition">Projects</Link></li>
                <li><Link href="#contact" className="hover:text-foreground transition">Contact</Link></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
                Contact
              </h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-3">
                  <Mail size={16} />
                  <a href="mailto:varunud84@gmail.com" className="hover:text-foreground transition">
                    varunud84@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={16} />
                  <a href="tel:+919353943827" className="hover:text-foreground transition">
                    +91 93539 43827
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <MapPin size={16} />
                  Bangalore, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 border-t border-border pt-4 text-center text-sm text-muted-foreground">
         Copyright © 2026 Varun UD. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}
