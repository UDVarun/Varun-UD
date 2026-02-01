"use client";

import { ShieldCheck, Code2, Laptop, GraduationCap } from "lucide-react";
import ExperienceCard, { ExperienceItem } from "./ExperienceCard";

/* =====================
   EXPERIENCE DATA
===================== */
const experiences: ExperienceItem[] = [
  {
    side: "left",
    title: "Cybersecurity Intern",
    company: "Redynox",
    period: "2025",
    icon: ShieldCheck,
    description:
      "Performed threat analysis and vulnerability assessments, identified security risks, and applied best practices for system hardening, Linux security, and network protection.",
    tech: [
      "Cybersecurity",
      "Network Security",
      "Linux",
      "Vulnerability Assessment",
      "Security Fundamentals",
    ],
  },
  {
    side: "right",
    title: "Web Developer Intern",
    company: "FiveM Infotech",
    period: "2025 – Present",
    icon: Code2,
    description:
      "Developing responsive web applications, implementing clean UI components, optimizing performance, ensuring cross-browser compatibility, and maintaining scalable codebases in collaborative environments.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "API Integration",
    ],
  },
  {
    side: "left",
    title: "Web & Mobile Developer Intern",
    company: "Rooman Technologies",
    period: "2024 – 2025",
    icon: Laptop,
    description:
      "Designed and developed full-stack web and mobile applications, implemented REST APIs, authentication, database integration, and delivered optimized, deployment-ready solutions in team environments.",
    tech: [
      "React",
      "AngularJS",
      "Node.js",
      "Django",
      "PHP",
      "MongoDB",
      "MySQL",
      "REST APIs",
    ],
  },
];

/* =====================
   EDUCATION DATA
===================== */
const education: ExperienceItem[] = [
  {
    side: "right",
    title: "B.E. in Computer Science & Engineering",
    company: "Don Bosco Institute of Technology",
    period: "2021 – 2024",
    icon: GraduationCap,
    description:
      "Academic training focused on software engineering fundamentals, databases, operating systems, networking, and modern application development.",
    tech: [
      "Data Structures",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Web Technologies",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl px-4 sm:px-6 py-28"
    >
      {/* =====================
          EXPERIENCE HEADER
      ===================== */}
      <div className="mb-20 text-center">
        <h2 className="text-4xl font-semibold">Experience</h2>
        <p className="mt-3 text-muted-foreground">
          Professional experience accumulated over several years.
        </p>
      </div>

      {/* EXPERIENCE TIMELINE */}
      <Timeline items={experiences} />

      {/* GAP BETWEEN EXPERIENCE & EDUCATION */}
      <div className="h-32" />

      {/* =====================
          EDUCATION HEADER
      ===================== */}
      <div className="mb-20 text-center">
        <h3 className="text-3xl font-semibold">Education</h3>
        <p className="mt-3 text-muted-foreground">
          Academic background supporting professional practice.
        </p>
      </div>

      {/* EDUCATION TIMELINE */}
      <Timeline items={education} />
    </section>
  );
}

/* =====================
   REUSABLE TIMELINE
===================== */
function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="relative">
      {/* CENTER LINE (desktop only) */}
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 border-l border-dashed border-muted-foreground/40 md:block" />

      <div className="space-y-100">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative grid grid-cols-1 md:grid-cols-2"
          >
            {/* CENTER DOT */}
            <span className="absolute left-1/2 top-10 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-background ring-2 ring-muted-foreground/60 md:block" />

            {/* LEFT */}
            <div className="flex justify-center md:justify-end md:pr-20">
              {item.side === "left" && <ExperienceCard {...item} />}
            </div>

            {/* RIGHT */}
            <div className="flex justify-center md:justify-start md:pl-20">
              {item.side === "right" && <ExperienceCard {...item} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
