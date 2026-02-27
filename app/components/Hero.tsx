"use client";

import Image from "next/image";
import { Facebook, Linkedin, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SocialIcon from "./SocialIcon";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const haloRef = useRef<HTMLSpanElement | null>(null);

  const [visible, setVisible] = useState(false);

  /* Fade-in on enter */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  /* Cursor halo on name */
  const handleNameMove = (e: React.MouseEvent) => {
    if (!haloRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();

    haloRef.current.style.setProperty(
      "--hx",
      `${e.clientX - rect.left}px`
    );

    haloRef.current.style.setProperty(
      "--hy",
      `${e.clientY - rect.top}px`
    );

    haloRef.current.style.opacity = "1";
  };

  const handleNameLeave = () => {
    if (!haloRef.current) return;
    haloRef.current.style.opacity = "0";
  };

  /* Image light mask */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    e.currentTarget.style.setProperty(
      "--x",
      `${e.clientX - rect.left}px`
    );

    e.currentTarget.style.setProperty(
      "--y",
      `${e.clientY - rect.top}px`
    );
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden pt-28 md:pt-20"
    >
      <div
        ref={heroRef}
        className={`mx-auto max-w-7xl px-6 py-20 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div
              onMouseMove={handleMouseMove}
              className="relative group w-[260px] sm:w-[300px] md:w-[340px] aspect-[3/4]"
              style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
            >
              <Image
                src="/images/varun-dark.png"
                alt="Varun UD"
                fill
                priority
                className="object-contain"
              />

              <Image
                src="/images/varun-light.png"
                alt="Varun Hover"
                fill
                className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{
                  maskImage:
                    "radial-gradient(120px at var(--x) var(--y), black 0%, black 55%, transparent 60%)",
                  WebkitMaskImage:
                    "radial-gradient(120px at var(--x) var(--y), black 0%, black 55%, transparent 60%)",
                }}
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="flex flex-col justify-center">
            <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem] font-semibold tracking-tight leading-[1.08]">
              Hi, I&apos;m{" "}
              <span
                onMouseMove={handleNameMove}
                onMouseLeave={handleNameLeave}
                className="relative inline-block"
              >
                <span
                  ref={haloRef}
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(140px at var(--hx) var(--hy), rgba(99,102,241,0.35), transparent 65%)",
                  }}
                />

                <span
                  className="
                    name-jello
                    relative z-10 inline-block
                    bg-gradient-to-r
                    from-indigo-400 via-purple-400 to-indigo-400
                    bg-[length:200%_100%]
                    bg-clip-text text-transparent
                  "
                >
                  Varun UD
                </span>
              </span>{" "}
              — <br />
              <div className="text-[0.77em] font-medium text-foreground/90 pb-4">
                Full-Stack Software Engineer
              </div>

              <section className="text-[0.385em] font-normal text-muted-foreground">
                building scalable, secure, production-ready systems.
              </section>
            </h1>

            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed text-[15.5px] sm:text-base">
              Focused on building high-performance, production-ready applications across web,
              mobile, and cloud — helping businesses turn ideas into scalable,
              reliable software.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-6">

              {/* LIGHT MODE */}
              <a
                href="/Varun-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-black/30 px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-black hover:text-white dark:hidden"
              >
                Download CV ↓
              </a>

              {/* DARK MODE */}
              <a
                href="/Varun-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden dark:inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-white hover:text-black"
              >
                Download CV ↓
              </a>

              {/* SOCIAL */}
              <div className="flex items-center gap-4">
                <SocialIcon href="https://www.facebook.com/varun.ud.31" hover="hover:bg-[#4267B2]">
                  <Facebook size={16} />
                </SocialIcon>

                <SocialIcon href="https://www.linkedin.com/in/varunud" hover="hover:bg-[#0077B5]">
                  <Linkedin size={16} />
                </SocialIcon>

                <SocialIcon href="https://github.com/UDVarun" hover="hover:bg-[#333]">
                  <Github size={16} />
                </SocialIcon>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}