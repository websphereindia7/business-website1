// src/components/Hero.jsx
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage'; // make sure this path is correct

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* ✅ HERO IMAGE (CRITICAL: fast first paint) */}
      <OptimizedImage
        src="/images/hero.webp"
        alt="CodeVista Digital – modern web development solutions"
        width={1920}
        height={1080}
        priority // ensures it loads first
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* ✅ Gradient Overlay (cheap & GPU friendly) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60" />

      {/* ✅ Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center md:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl font-extrabold leading-tight text-white drop-shadow-xl sm:text-5xl md:text-7xl"
        >
          Elevate Your Business with <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            CodeVista Digital
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          className="mt-6 max-w-2xl text-base text-gray-200 sm:text-lg md:text-2xl"
        >
          We build fast, modern, and responsive websites
          <br className="hidden sm:block" />
          that turn visitors into customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#services"
            className="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Get Started
          </a>

          <a
            href="#projects"
            className="rounded-lg bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
