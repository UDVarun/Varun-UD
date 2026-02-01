"use client";

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

const homeProjects = [
  {
    title: "EC2 Cloud Cost Analyzer",
    description:
      "AWS EC2 cost analysis tool to monitor and optimize cloud infrastructure costs.",
    image: "/images/ec2.png",
    tech: ["TypeScript", "React", "Next.js", "AWS"],
    previewUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Online Interview Assessment System",
    description: "Secure real-time interview and evaluation platform.",
    image: "/images/oias.png",
    tech: ["React", "Node.js", "MongoDB"],
    previewUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and experience.",
    image: "/images/ec2.png",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    previewUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Cloud Automation Tool",
    description: "Automation tool for cloud resource monitoring.",
    image: "/images/ec2.png",
    tech: ["AWS", "Node.js", "Automation"],
    previewUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* HEADER */}
        <h2 className="text-center text-4xl font-bold text-black dark:text-white">
          My Projects
        </h2>

        <p className="mt-3 text-center text-black/60 dark:text-white/60">
          Selected projects I’ve worked on.
        </p>

        {/* GRID → 2 PER ROW */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {homeProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/projects"
            className="
              rounded-full border
              border-black/20 dark:border-white/20
              px-8 py-3
              text-black dark:text-white
              transition
              hover:bg-black hover:text-white
              dark:hover:bg-white dark:hover:text-black
            "
          >
            View More Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
