import { Layout, Users, Gauge } from "lucide-react";
import FadeIn from "./FadeIn";

const services = [
  {
    icon: Layout,
    title: "Business Website Development",
    description:
      "Professional websites that boost credibility, engage visitors effectively, and drive conversions.",
    gradient: "from-indigo-500 to-indigo-400",
  },
  {
    icon: Users,
    title: "User-Focused Web Experiences",
    description:
      "Intuitive layouts and smooth flows that guide users naturally and delightfully interact with them.",
    gradient: "from-emerald-500 to-emerald-400",
  },
  {
    icon: Gauge,
    title: "Performance & Optimization",
    description:
      "Speed, reliability, and security enhancements for ensuring consistently top-notch performance.",
    gradient: "from-pink-500 to-pink-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="-mt-8 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
              Services
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Innovative services for your business
            </h2>
            <p className="mt-4 mb-24 text-gray-600 max-w-2xl mx-auto">
              Explore our services, designed to deliver impact, performance, and
              growth.
            </p>
          </div>
        </FadeIn>

        {/* Vertical Cards - Moved More Up, Increased Gap & Width */}
        <div className="-mt-16 flex flex-col md:flex-row gap-12 justify-center">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div
                className={`bg-gradient-to-br ${service.gradient} text-white rounded-3xl p-8 w-full md:w-96 transform transition-all duration-500 hover:scale-105 hover:translate-y-1 shadow-2xl`}
              >
                <div className="flex items-center justify-center mb-6">
                  <service.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.5}>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-block rounded-full bg-indigo-600 px-8 py-3 text-white font-medium transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
            >
              Build a Website →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
