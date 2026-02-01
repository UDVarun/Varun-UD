"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface Props {
  title: string;
  description: string;
  image: string;
  tech?: string[]; // ✅ safe guard
  previewUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech = [],
  previewUrl,
  githubUrl,
}: Props) {
  return (
    <div className="
      group rounded-2xl border
      border-black/10 dark:border-white/10
      bg-white/70 dark:bg-black/40
      p-6 backdrop-blur-xl
      transition hover:border-black/20 dark:hover:border-white/20
    ">
      {/* IMAGE */}
      <div className="overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          width={800}
          height={450}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <h3 className="mt-5 text-lg font-semibold text-black dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-black/70 dark:text-white/70">
        {description}
      </p>

      {/* TECH */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="
              rounded-full border
              border-black/10 dark:border-white/10
              px-3 py-1 text-xs
              text-black/70 dark:text-white/70
            "
          >
            {t}
          </span>
        ))}
      </div>

      {/* ACTIONS */}
      <div className="mt-5 flex gap-4">
        {previewUrl && (
          <a
            href={previewUrl}
            target="_blank"
            className="
              flex items-center gap-2 rounded-full border
              border-black/20 dark:border-white/20
              px-4 py-2 text-sm
              text-black dark:text-white
              hover:bg-black hover:text-white
              dark:hover:bg-white dark:hover:text-black
              transition
            "
          >
            <ExternalLink size={16} />
            Preview
          </a>
        )}

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            className="
              flex items-center gap-2 rounded-full border
              border-black/20 dark:border-white/20
              px-4 py-2 text-sm
              text-black dark:text-white
              hover:bg-black hover:text-white
              dark:hover:bg-white dark:hover:text-black
              transition
            "
          >
            <Github size={16} />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
