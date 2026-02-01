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
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border rounded-2xl p-6 bg-background hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2 text-muted">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="hover:text-primary transition"
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
