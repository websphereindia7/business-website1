import { Layout, Users, Gauge } from "lucide-react";
import FadeIn from "./FadeIn";

/* Accent colors for each service card */
const serviceColors = [
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
];

const services = [
  {
    icon: Layout,
    title: "Business Website Development",
    description:
      "Professional, responsive websites that build credibility, support your brand, and convert visitors into leads.",
  },
  {
    icon: Users,
    title: "User-Focused Web Experiences",
    description:
      "Clean layouts and intuitive user flows that guide visitors naturally and make your website easy and enjoyable to use.",
  },
  {
    icon: Gauge,
    title: "Performance & Website Optimization",
    description:
      "Speed optimization, responsiveness improvements, and maintenance to keep your website fast, secure, and reliable.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-4  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <FadeIn>
          <div className="max-w-2xl mb-12 text-center mx-auto">
            <span className="text-sm font-medium uppercase tracking-wider text-indigo-600">
              Services
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
              Empowering businesses to succeed online
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Creating websites that build trust, engage users, and drive
              growth.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 -mt-5">
          {services.map((service, index) => {
            const color = serviceColors[index % serviceColors.length];

            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Top accent stripe */}
                  <div className={`h-3 ${color.accent}`} />

                  {/* Card content */}
                  <div className="p-7 text-center">
                    {/* Icon */}
                    <div
                      className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full ${color.iconBg} transition-all duration-300 ${color.hoverIcon} group-hover:scale-110 mx-auto`}
                    >
                      <service.icon className="h-8 w-8" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>

                    {/* Divider */}
                    <div className={`mx-auto mb-4 h-px w-12 ${color.accent}`} />

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
            >
              Build a Website
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
