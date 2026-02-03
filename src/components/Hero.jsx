import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        pt-20
      "
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-1/3 -left-1/4 h-[720px] w-[720px] rounded-full bg-indigo-200/40 blur-[180px]" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[620px] w-[620px] rounded-full bg-indigo-300/30 blur-[160px]" />
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 w-full items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15] text-gray-900">
            Design
            <span className="block text-indigo-600">high-impact websites</span>
            that grow your business
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-xl text-xl font-medium text-gray-600 leading-relaxed">
            I create clean, modern websites that build trust, engage users, and
            help businesses convert visitors into customers.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-indigo-600
                px-8
                py-3
                text-sm
                font-medium
                text-white
                shadow-lg
                transition-all
                hover:-translate-y-0.5
                hover:bg-indigo-700
              "
            >
              Build My Website
            </a>

            <a
              href="#projects"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-indigo-600/40
                px-8
                py-3
                text-sm
                font-medium
                text-indigo-600
                transition-all
                hover:border-indigo-600
                hover:bg-indigo-50
              "
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="hidden lg:flex items-center justify-center"
        >
          <motion.div
            className="relative rounded-2xl bg-white p-6 shadow-xl"
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/coding.svg"
              alt="Web development illustration"
              className="w-full max-w-md object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
