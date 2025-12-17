// src/components/Hero.jsx
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      {/* Optimized Background Image */}
      <img
        src="/images/hero.webp"
        alt="CodeVista Digital hero background"
        width="1920"
        height="1080"
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 h-screen max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Elevate Your Business with <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            CodeVista Digital
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-2xl text-gray-200 mt-6 md:mt-8 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9 }}
        >
          We build fast, modern, and responsive websites <br />
          that convert visitors into customers, <br />
          using cutting-edge technology and design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="#services"
            className="px-10 py-4 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            Get Started
          </a>
          <a
            href="#projects"
            className="px-10 py-4 text-lg font-semibold bg-white text-black rounded-lg shadow-md hover:bg-gray-200 transition-all"
          >
            View Projects
          </a>
        </motion.div>

        {/* Floating Shapes (unchanged) */}
        <motion.div
          className="absolute w-40 h-40 bg-blue-400/30 rounded-full top-20 left-10 blur-3xl"
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-60 h-60 bg-purple-400/30 rounded-full bottom-20 right-10 blur-3xl"
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
}
