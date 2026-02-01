import SkillsMarquee from "./SkillsMarquee";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-4xl px-6 py-24 text-center"
    >
      <h2 className="mb-8 text-4xl font-semibold">About</h2>

      <div className="space-y-6 text-muted-foreground leading-relaxed text-[15.5px] sm:text-base">
        <p>
          
          I’m <span className="font-medium text-foreground">Varun UD</span>, a highly motivated engineer driven by curiosity and innovation, focused on building scalable, reliable digital products that solve real problems.
        </p>

        <p>
          As a Full-Stack Software Engineer, I work across frontend, backend, and infrastructure to design and deliver end-to-end solutions, with a strong focus on performance, reliability, and long-term maintainability.
        </p>

        <p>
          
I’ve worked with APIs, cloud platforms, and DevOps workflows to ship production-ready systems, focusing on reliability, performance, and smooth delivery across environments.
I focus on building reliable software that performs well in real-world environments, collaborating with teams to analyze complex problems and deliver scalable, production-ready systems.


        </p>
      </div>

      {/* SKILLS MARQUEE */}
      <SkillsMarquee />
    </section>
  );
}

// I’m Varun UD, a highly motivated engineer driven by curiosity and innovation, focused on building scalable, reliable digital products that solve real problems.
// As a Full-Stack Software Engineer, I work across frontend, backend, and infrastructure to design and deliver end-to-end solutions, with a strong focus on performance, reliability, and long-term maintainability.
// I’ve worked with APIs, cloud platforms, and DevOps workflows to ship production-ready systems, focusing on reliability, performance, and smooth delivery across environments.
// I focus on building reliable software that performs well in real-world environments, collaborating with teams to analyze complex problems and deliver scalable, production-ready systems.