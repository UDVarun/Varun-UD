"use client";

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

const allProjects = [
  {
    title: "EC2 Cloud Cost Analyzer",
    description: "AWS cost optimization dashboard.",
    image: "/images/ec2.png",
    tech: ["TypeScript", "React", "Next.js", "AWS"],
    previewUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Online Interview Assessment System",
    description: "Secure interview and evaluation platform.",
    image: "/images/oias.png",
    tech: ["React", "Node.js", "MongoDB"],
    previewUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects.",
    image: "/images/ec2.png",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    previewUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Cloud Automation Tool",
    description: "Infrastructure automation and monitoring.",
    image: "/images/ec2.png",
    tech: ["AWS", "Node.js"],
    previewUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DevOps Monitoring Tool",
    description: "System health and uptime monitoring.",
    image: "/images/ec2.png",
    tech: ["Docker", "Linux", "Monitoring"],
    previewUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* BACK BUTTON */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-black/20 px-5 py-2 text-sm text-black transition hover:bg-black hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            ← Back to Home
          </Link>
        </div>

        {/* HEADER */}
        <h1 className="text-center text-4xl font-bold text-black dark:text-white">
          All Projects
        </h1>

        <p className="mt-3 text-center text-black/60 dark:text-white/60">
          A complete list of projects I have worked on.
        </p>

        {/* GRID → 3 PER ROW */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
