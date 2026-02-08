import FadeIn from "./FadeIn";

const statColors = [
  { accent: "bg-indigo-600" },
  { accent: "bg-emerald-600" },
  { accent: "bg-pink-600" },
];

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "100%", label: "Client-Focused Approach" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col lg:flex-row items-center bg-white min-h-screen overflow-hidden pt-20 pb-32"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[620px] rounded-full bg-accent-light blur-[160px] -z-10" />

      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start -mt-10 lg:-mt-16 relative">
        {/* Left: Illustration + Button */}
        <FadeIn>
          <div className="flex flex-col items-center lg:items-start gap-8 lg:absolute lg:top-1/2 lg:-translate-y-1/2">
            <div className="relative rounded-2xl bg-surface p-8 shadow-soft">
              <img
                src="/illustrations/about-illustration.svg"
                alt="About illustration"
                className="w-full max-w-md object-contain"
              />
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
            >
              Let's Connect
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </FadeIn>

        {/* Right: Content */}
        <FadeIn>
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <span className="text-sm uppercase tracking-widest text-secondary">
              About Me
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-primary leading-tight">
              Creating digital experiences that drive results
            </h2>

            <p className="mt-6 text-lg text-secondary leading-relaxed">
              I help businesses and startups build modern, reliable websites
              that look professional, load fast, and convert visitors into
              customers.
            </p>

            <p className="mt-4 text-lg text-secondary leading-relaxed">
              I craft intuitive, scalable websites with clean design and modern
              frontend development, delivering maintainable solutions that drive
              results with long-term value.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const color = statColors[index % statColors.length];

                return (
                  <FadeIn key={stat.label} delay={index * 0.1}>
                    <div className="group bg-white border border-border rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                      <div className={`h-3 w-full ${color.accent}`} />
                      <div className="p-6 text-center">
                        <h3 className="text-2xl font-bold text-primary">
                          {stat.value}
                        </h3>
                        <p className="mt-1 text-sm text-secondary">
                          {stat.label}
                        </p>
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
