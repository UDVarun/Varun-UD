"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiVuedotjs,
  SiD3Dotjs,
  SiThreedotjs,
  SiDjango,
  SiFlask,
  SiFirebase,
  SiSupabase,
  SiAuth0,
  SiClerk,
  SiShopify,
  SiFigma,
  SiVercel,
  SiNetlify,
  SiPostman,
} from "react-icons/si";

import { TbLayoutGrid } from "react-icons/tb";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Redux", icon: SiRedux },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "shadcn/ui", icon: TbLayoutGrid },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Figma", icon: SiFigma },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Firebase", icon: SiFirebase },
  { name: "Supabase", icon: SiSupabase },
  { name: "Auth0", icon: SiAuth0 },
  { name: "Clerk", icon: SiClerk },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "GitLab", icon: SiGitlab },
  { name: "Postman", icon: SiPostman },
  { name: "Vercel", icon: SiVercel },
  { name: "Netlify", icon: SiNetlify },
  { name: "Shopify", icon: SiShopify },
  { name: "Three.js", icon: SiThreedotjs },
  { name: "D3.js", icon: SiD3Dotjs },
];

export default function SkillsMarquee() {
  return (
    <div className="mt-20">
      {/* VIEWPORT WINDOW */}
      <div className="relative mx-auto max-w-6xl overflow-hidden">
        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        {/* MARQUEE TRACK (INTENTIONALLY WIDER THAN PARENT) */}
        <motion.div
          className="flex items-center gap-8 py-6"
          style={{
            width: "200%", // 👈 THIS IS THE KEY
          }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35,
          }}
        >
          {[...skills, ...skills].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative flex items-center justify-center"
              >
                <Icon className="h-9 w-9 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />

                {/* Tooltip */}
                <span className="pointer-events-none absolute -top-8 scale-0 rounded-md bg-foreground px-2 py-1 text-xs text-background transition-all duration-200 group-hover:scale-100">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
