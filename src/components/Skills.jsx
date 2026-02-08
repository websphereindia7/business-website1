// src/components/Skills.jsx
import FadeIn from "./FadeIn";

const skillColors = [
  {
    accent: "bg-indigo-600",
  },
  {
    accent: "bg-emerald-600",
  },
  {
    accent: "bg-pink-600",
  },
];

const skills = [
  {
    name: "Frontend Technologies",
    level: "88%",
    description:
      "HTML, CSS, JavaScript, React, and Tailwind CSS for creating responsive, interactive, and engaging interfaces.",
  },
  {
    name: "Backend & Databases",
    level: "70%",
    description:
      "Node.js, Express, and MongoDB for building efficient APIs and managing data effectively.",
  },
  {
    name: "UI / UX & Development Techniques",
    level: "85%",
    description:
      "Responsive design, accessibility, performance optimization, and clean, maintainable coding standards.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-white pt-12 pb-32 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:items-center">
            {/* Left Content */}
            <div className="max-w-xl flex flex-col justify-center h-full">
              <span className="text-sm uppercase tracking-widest text-secondary">
                Skills
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-primary leading-tight">
                Crafting reliable and scalable
                <br />
                web applications
              </h2>

              <p className="mt-6 text-lg text-secondary leading-relaxed">
                Every service is supported by a strong technical foundation
                built with modern web technologies and best practices.
              </p>

              <p className="mt-4 text-lg text-secondary leading-relaxed">
                Focus is placed on clean, scalable code and interfaces that are
                fast, accessible, and easy to maintain.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition hover:bg-accent-dark w-max"
              >
                Let’s Work Together
              </a>
            </div>

            {/* Right Skills List */}
            <div className="space-y-8">
              {skills.map((skill, index) => {
                const color = skillColors[index % skillColors.length];
                return (
                  <FadeIn key={skill.name} delay={index * 0.1}>
                    <div className="bg-white border border-border rounded-xl overflow-hidden transition hover:shadow-md">
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-base font-semibold text-primary">
                            {skill.name}
                          </h3>
                          <span className="text-sm text-secondary">
                            {skill.level}
                          </span>
                        </div>

                        <p className="mt-2 text-sm text-secondary leading-relaxed">
                          {skill.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="mt-4 h-4 w-full rounded-full bg-gray-200">
                          <div
                            className={`h-4 rounded-full transition-all duration-500 ${color.accent}`}
                            style={{ width: skill.level }}
                          />
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
