// src/components/ProcessHorizontal.jsx
import FadeIn from "./FadeIn";
import { Search, Pencil, Code, Rocket } from "lucide-react";

/* Accent colors for each step card */
const stepColors = [
  {
    accent: "bg-indigo-600",
    iconBg: "bg-indigo-50 text-indigo-600",
    hoverIcon: "group-hover:bg-indigo-600 group-hover:text-white",
  },
  {
    accent: "bg-emerald-600",
    iconBg: "bg-emerald-50 text-emerald-600",
    hoverIcon: "group-hover:bg-emerald-600 group-hover:text-white",
  },
  {
    accent: "bg-pink-600",
    iconBg: "bg-pink-50 text-pink-600",
    hoverIcon: "group-hover:bg-pink-600 group-hover:text-white",
  },
  {
    accent: "bg-yellow-500",
    iconBg: "bg-yellow-50 text-yellow-500",
    hoverIcon: "group-hover:bg-yellow-500 group-hover:text-white",
  },
];

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "Gain a deep understanding of your business, goals, and audience to define the complete project scope.",
  },
  {
    icon: Pencil,
    title: "Design",
    description:
      "Develop design drafts and layouts for a modern, easy-to-use, and user-friendly interface.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Transform designs into fully functional, responsive websites with clean, maintainable code.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Deploy and monitor the website to ensure optimal performance, reliability, and user experience.",
  },
];

export default function ProcessHorizontal() {
  return (
    <section
      id="process"
      className="relative py-24 px-6 -mt-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn>
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-indigo-600">
              Process
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
              Working closely with clients to achieve results
            </h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              A structured workflow that keeps projects organized, transparent,
              and efficient from start to finish.
            </p>
          </div>
        </FadeIn>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 -mt-5">
          {steps.map((step, index) => {
            const color = stepColors[index % stepColors.length];
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Top accent stripe */}
                  <div className={`h-3 ${color.accent}`} />

                  {/* Card Content */}
                  <div className="p-7 text-center">
                    {/* Icon */}
                    <div
                      className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full ${color.iconBg} transition-all duration-300 ${color.hoverIcon} group-hover:scale-110 mx-auto`}
                    >
                      <step.icon className="h-8 w-8" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>

                    {/* Divider */}
                    <div className={`mx-auto mb-4 h-px w-12 ${color.accent}`} />

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
