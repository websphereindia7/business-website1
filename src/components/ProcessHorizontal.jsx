// src/components/ProcessHorizontal.jsx
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { Search, Pencil, Code, Rocket } from "lucide-react";

const stepColors = [
  {
    accent: "bg-indigo-600",
    iconBg: "bg-indigo-100 text-indigo-600",
    hoverIcon: "group-hover:bg-indigo-600 group-hover:text-white",
    hoverCard: "hover:bg-indigo-50 dark:hover:bg-indigo-900",
  },
  {
    accent: "bg-emerald-600",
    iconBg: "bg-emerald-100 text-emerald-600",
    hoverIcon: "group-hover:bg-emerald-600 group-hover:text-white",
    hoverCard: "hover:bg-emerald-50 dark:hover:bg-emerald-900",
  },
  {
    accent: "bg-pink-600",
    iconBg: "bg-pink-100 text-pink-600",
    hoverIcon: "group-hover:bg-pink-600 group-hover:text-white",
    hoverCard: "hover:bg-pink-50 dark:hover:bg-pink-900",
  },
  {
    accent: "bg-yellow-500",
    iconBg: "bg-yellow-100 text-yellow-500",
    hoverIcon: "group-hover:bg-yellow-500 group-hover:text-white",
    hoverCard: "hover:bg-yellow-50 dark:hover:bg-yellow-900",
  },
];

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "Understand your business, goals, and audience to define the project scope.",
  },
  {
    icon: Pencil,
    title: "Design",
    description:
      "Create thoughtful and innovative design drafts for a modern, user-friendly interface.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Turn designs into fully functional, responsive websites with clean code.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Deploy and carefully monitor the website for optimal performance and reliability.",
  },
];

export default function ProcessHorizontal() {
  return (
    <section id="process" className="pt-20 -mt-4 px-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-sm font-medium uppercase tracking-wider text-indigo-600">
          Process
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Our Process Journey
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
          A creative workflow designed for seamless project delivery and client
          success.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const color = stepColors[index % stepColors.length];

          return (
            <FadeIn key={index} delay={index * 0.1}>
              <article
                className={`group relative bg-white dark:bg-black rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-105 ${color.hoverCard}`}
              >
                {/* Top Color Bar */}
                <div
                  className={`absolute top-0 left-0 w-full h-4 ${color.accent}`}
                />

                {/* Top Icon Section */}
                <div className="flex h-32 items-center justify-center bg-white dark:bg-black">
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${color.iconBg} transition-all duration-300 ${color.hoverIcon} group-hover:scale-110`}
                  >
                    <step.icon className="h-7 w-7" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 text-center">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                    {step.title}
                  </h3>
                  <div className={`mx-auto mb-3 h-px w-10 ${color.accent}`} />
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  <a
                    className="inline-flex items-center mt-3 text-indigo-600 hover:text-indigo-800 transition-all gap-1 text-sm"
                    href="#"
                  >
                    Learn More <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
