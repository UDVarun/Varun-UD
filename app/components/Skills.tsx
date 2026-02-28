"use client"

import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Linux"],
  },
  {
    title: "Cloud / DevOps",
    skills: ["Vercel", "Basic CI/CD"],
  },
]

export default function Skills() {

  return (

<section
id="skills"
className="
py-32
bg-black
relative
"
>

<div className="max-w-6xl mx-auto px-6">

{/* HEADER */}

<motion.h2
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
className="
text-4xl
md:text-5xl
font-semibold
text-center
mb-16
tracking-tight
text-white
"
>

Skills

</motion.h2>


{/* GRID */}

<div className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-8
">


{skillGroups.map((group, i) => (

<motion.div

key={group.title}

initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}

transition={{
duration: 0.6,
delay: i * 0.1,
}}

className="

rounded-3xl

border
border-white/10

bg-white/5

backdrop-blur-md

p-8

transition-all
duration-500

hover:-translate-y-2
hover:border-white/30

"

>


{/* TITLE */}

<h3 className="
text-lg
font-semibold
mb-6
text-white
">

{group.title}

</h3>



{/* SKILLS */}

<ul className="space-y-3">

{group.skills.map((skill) => (

<li

key={skill}

className="

text-white/70

transition-all
duration-300

hover:text-white
hover:translate-x-1

"

>

{skill}

</li>

))}

</ul>

</motion.div>

))}

</div>

</div>

</section>

  )

}