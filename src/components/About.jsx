// src/components/About.jsx
import {
  AcademicCapIcon,
  EyeIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import aboutImage from '../assets/about-image.jpg';
import { motion } from 'framer-motion';

export default function About() {
  const cards = [
    {
      title: 'Mission',
      icon: AcademicCapIcon,
      desc: 'Deliver innovative digital solutions that empower businesses.',
      gradient: 'from-blue-400 to-blue-600',
      shadow: 'shadow-blue-400/30',
    },
    {
      title: 'Vision',
      icon: EyeIcon,
      desc: 'Be the leading digital partner for businesses worldwide.',
      gradient: 'from-purple-400 to-purple-600',
      shadow: 'shadow-purple-400/30',
    },
    {
      title: 'Values',
      icon: ShieldCheckIcon,
      desc: 'Quality, transparency, and client satisfaction above all.',
      gradient: 'from-green-400 to-green-600',
      shadow: 'shadow-green-400/30',
    },
  ];

  return (
    <section
      id="about"
      className="relative pt-28 pb-10 px-6 bg-gray-50 overflow-hidden"
    >
      {/* Floating Background Shapes */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-blue-300/20 top-10 left-20 filter blur-3xl"
        animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-purple-300/20 bottom-10 right-20 filter blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Image Section */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImage}
            alt="About CodeVista Digital"
            className="rounded-3xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-green-400">
              CodeVista Digital
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-700 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We create <span className="font-semibold">fast</span>,{' '}
            <span className="font-semibold">beautiful</span>, and{' '}
            <span className="font-semibold">responsive websites</span> using
            React, Vite, and Tailwind CSS.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Our goal is to empower businesses with{' '}
            <span className="text-blue-600 font-medium">
              innovative digital solutions
            </span>{' '}
            while prioritizing quality, transparency, and user experience.
          </motion.p>

          {/* Gradient Hover Cards */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-8">
            {cards.map((item, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left p-8 rounded-3xl bg-gradient-to-br ${item.gradient} ${item.shadow} cursor-pointer transition-transform`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.08,
                  y: -5,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                }}
              >
                <motion.div
                  className="mb-4 text-white"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <item.icon className="h-12 w-12" />
                </motion.div>

                <h4 className="font-semibold text-xl mb-3 text-white">
                  {item.title}
                </h4>
                <p className="text-white/90 text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
