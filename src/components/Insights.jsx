// src/components/Insights.jsx
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

const insights = [
  {
    title: "Why Every Business Needs a Website",
    excerpt:
      "A strong website builds trust, improves visibility, and supports long-term growth.",
    href: "/insights/business-website",
    color: "bg-indigo-600",
  },
  {
    title: "Website vs Social Media for Business",
    excerpt:
      "Social platforms help reach users, but a website gives full control and credibility.",
    href: "/insights/website-vs-social-media",
    color: "bg-emerald-600",
  },
  {
    title: "What Makes a Website Look Professional",
    excerpt:
      "Clear layout, good spacing, fast speed, and clarity shape strong impressions.",
    href: "/insights/professional-website",
    color: "bg-pink-600",
  },
  {
    title: "How Websites Help You Get Clients",
    excerpt:
      "A website works continuously to turn visitors into real enquiries.",
    href: "/insights/website-clients",
    color: "bg-yellow-500",
  },
  {
    title: "Mistakes That Hurt Website Credibility",
    excerpt: "Design and content mistakes can silently push customers away.",
    href: "/insights/website-mistakes",
    color: "bg-cyan-600",
  },
  {
    title: "Why First Impressions Matter Online",
    excerpt: "Users decide trust within seconds of landing on your website.",
    href: "/insights/first-impression",
    color: "bg-violet-600",
  },
];

export default function Insights() {
  return (
    <section className="relative py-14 -mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <span className="text-sm uppercase tracking-wider font-medium text-indigo-600">
              Insights
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Smart ideas for modern businesses
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-gray-600">
              Practical knowledge crafted to help you build trust and grow
              online.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((item, index) => (
            <FadeIn key={index} delay={index * 0.07}>
              <a
                href={item.href}
                className="group block rounded-2xl border border-gray-200 bg-white overflow-hidden
                           transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className={`h-3 w-full ${item.color}`} />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-1 text-[15px] font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">
                    Explore insight
                    <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
