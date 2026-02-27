"use client";

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

const homeProjects = [
  {
    title: "EC2 Cloud Cost Analyzer",
    description:
      "AWS EC2 cost analysis tool to monitor and optimize cloud infrastructure costs.",

    image: "/images/ec2.png",

    video: "/videos/ec2.mp4",

    tech: ["TypeScript", "React", "Next.js", "AWS"],

    previewUrl: "#",

    githubUrl: "#",
  },

  {
    title: "Online Interview Assessment System",

    description:
      "Secure real-time interview and evaluation platform.",

    image: "/images/oias.png",

    video: "/videos/oias.mp4",

    tech: ["React", "Node.js", "MongoDB"],

    previewUrl: "#",

    githubUrl: "#",
  },

  {
    title: "Portfolio Website",

    description:
      "Personal portfolio showcasing projects and professional experience.",

    image: "/images/ec2.png",

    video: "/videos/portfolio.mp4",

    tech: ["Next.js", "Tailwind", "TypeScript"],

    previewUrl: "#",

    githubUrl: "#",
  },

  {
    title: "Cloud Automation Tool",

    description:
      "Automation tool for cloud resource monitoring and infrastructure control.",

    image: "/images/ec2.png",

    video: "/videos/cloud.mp4",

    tech: ["AWS", "Node.js", "Automation"],

    previewUrl: "#",

    githubUrl: "#",
  },
];


export default function Projects() {

  return (

    <section

      id="projects"

      className="
      py-32
      px-6
      relative
      "

    >

      <div className="mx-auto max-w-7xl">


        {/* HEADER */}

        <div className="text-center">

          <h2

            className="
            text-4xl
            md:text-6xl
            font-semibold
            tracking-tight
            text-black
            dark:text-white
            "

          >

            Featured Projects

          </h2>


          <p

            className="
            mt-5
            max-w-xl
            mx-auto
            text-black/60
            dark:text-white/60
            leading-relaxed
            "

          >

            Selected projects demonstrating cloud engineering,
            full-stack development and automation.

          </p>

        </div>



        {/* GRID */}

        <div

          className="
          mt-20
          grid
          gap-10
          md:grid-cols-2
          "

        >

          {homeProjects.map((project) => (

            <ProjectCard

              key={project.title}

              {...project}

            />

          ))}

        </div>



        {/* VIEW MORE BUTTON */}

        <div className="mt-20 flex justify-center">

          <Link

            href="/projects"

            className="

            px-8
            py-4

            rounded-full

            border

            border-black/20
            dark:border-white/20

            text-black
            dark:text-white

            transition-all
            duration-300

            hover:bg-black
            hover:text-white

            dark:hover:bg-white
            dark:hover:text-black

            "

          >

            View All Projects →

          </Link>

        </div>


      </div>

    </section>

  );

}