// src/components/Insights.jsx
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

/* Accent colors inspired by Services section */
const insightColors = [
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

const insights = [
  {
    title: "Why Every Business Needs a Website",
    excerpt:
      "A professional website builds trust, improves visibility, and helps customers take your business seriously in today’s digital-first world.",
    href: "/insights/business-website",
  },
  {
    title: "Website vs Social Media for Business",
    excerpt:
      "Many businesses rely only on social media. Learn why a website gives you more control, credibility, and long-term growth.",
    href: "/insights/website-vs-social-media",
  },
  {
    title: "What Makes a Website Look Professional",
    excerpt:
      "From layout and typography to speed and clarity, discover the key elements that shape a strong first impression online.",
    href: "/insights/professional-website",
  },
];

export default function Insights() {
  return (
    <section className="relative py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mt-6 md:mt-10 relative z-10">
        {/* Section Header */}
        <FadeIn>
          <div className="max-w-2xl mb-12 text-center mx-auto">
            <span className="text-sm font-medium uppercase tracking-wider text-indigo-600">
              Insights
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
              Practical insights for growing online
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Clear, business-focused insights to help you understand the value
              of building a strong and trustworthy online presence.
            </p>
          </div>
        </FadeIn>

        {/* Insights Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 -mt-4">
          {insights.map((item, index) => {
            const color = insightColors[index % insightColors.length];

            return (
              <FadeIn key={index} delay={index * 0.1}>
                <article className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Top accent stripe */}
                  <div className={`h-3 ${color.accent}`} />

                  {/* Top Image / Visual */}
                  <a
                    href={item.href}
                    className="flex h-44 items-center justify-center bg-gray-50"
                  >
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${color.iconBg} transition-all duration-300 ${color.hoverIcon} group-hover:scale-110`}
                    >
                      <ArrowUpRight className="h-6 w-6" />
                    </div>
                  </a>

                  {/* Content */}
                  <div className="p-7 text-center">
                    <h3 className="mb-3 text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>

                    {/* Divider */}
                    <div className={`mx-auto mb-4 h-px w-12 ${color.accent}`} />

                    {/* Clickable Subtext */}
                    <a
                      href={item.href}
                      className="inline-flex items-start gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      <span>{item.excerpt}</span>
                      <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    </a>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* Load More CTA */}
        <FadeIn delay={0.4}>
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600"
            >
              Load More
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
