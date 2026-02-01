"use client";

import { useEffect, useRef } from "react";
import { Calendar, LucideIcon } from "lucide-react";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ExperienceItem {
  side: "left" | "right";
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
}

export default function ExperienceCard({
  side,
  title,
  company,
  period,
  description,
  tech,
  icon: Icon,
}: ExperienceItem) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, { stiffness: 140, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 140, damping: 18 });
  const scale = useSpring(1, { stiffness: 160, damping: 22 });

  /* ===============================
     AUTO-ENLARGE ONLY WHEN CENTERED
  =============================== */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        scale.set(entry.intersectionRatio > 0.85 ? 1.06 : 1);
      },
      { threshold: [0.6, 0.85, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [scale]);

  /* ===============================
     PREMIUM 3D TILT
  =============================== */
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    rotateY.set(px * 14);
    rotateX.set(py * -14);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformPerspective: 1400,
      }}
      className={cn(
        "w-full max-w-4xl will-change-transform",
        side === "left" ? "ml-auto" : "mr-auto"
      )}
    >
      <div
        className={cn(
          "relative rounded-3xl border border-muted-foreground/30",
          "bg-background/60 backdrop-blur",
          "px-10 py-5",
          "shadow-[0_16px_50px_-25px_rgba(0,0,0,0.45)]",
          "transition-all duration-300",
          "hover:-translate-y-1",
          "hover:border-primary/50",
          "hover:shadow-[0_0_0_1px_rgba(99,102,241,0.35),0_0_35px_8px_rgba(99,102,241,0.25),0_20px_60px_-25px_rgba(0,0,0,0.6)]"
        )}
      >
        {/* HEADER */}
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-muted-foreground/40">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="text-sm font-medium">{company}</h3>
        </div>

        {/* TITLE */}
        <div className="mb-3">
          <h4 className="text-lg font-semibold tracking-tight">
            {title}
          </h4>
          <div className="mt-0.5 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {period}
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* TECH */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-muted-foreground/30 px-3 py-1 text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
