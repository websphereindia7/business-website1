// src/components/Services.jsx
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaChartLine,
} from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      title: 'Website Development',
      descLong:
        'We create modern, fast, responsive websites that strengthen your brand and help convert more visitors into customers.',
      icon: <FaLaptopCode size={45} />,
      gradient: 'from-blue-400 to-blue-600',
      shadow: 'shadow-blue-400/30',
    },
    {
      title: 'Landing Page Design',
      descLong:
        'High-converting landing pages designed with clean UI/UX to boost engagement, sign-ups, and product sales.',
      icon: <FaMobileAlt size={45} />,
      gradient: 'from-purple-400 to-purple-600',
      shadow: 'shadow-purple-400/30',
    },
    {
      title: 'Graphic & Branding',
      descLong:
        'Professional logos, banners, posters, and complete brand identity design to make your business stand out.',
      icon: <FaPaintBrush size={45} />,
      gradient: 'from-pink-400 to-pink-600',
      shadow: 'shadow-pink-400/30',
    },
    {
      title: 'SEO & Marketing',
      descLong:
        'Boost your visibility, ranking, and conversions with strategic SEO and digital marketing solutions.',
      icon: <FaChartLine size={45} />,
      gradient: 'from-green-400 to-green-600',
      shadow: 'shadow-green-400/30',
    },
  ];

  return (
    <section
      id="services"
      className="py-28 px-6 bg-white relative overflow-hidden"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Our{' '}
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
          Services
        </span>
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative rounded-3xl overflow-hidden cursor-pointer bg-gradient-to-br ${service.gradient} ${service.shadow} p-1`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            }}
          >
            <div className="bg-white rounded-3xl p-8 h-full min-h-[460px] flex flex-col text-center">
              {/* Icon */}
              <motion.div
                className="mb-5 text-gray-900 flex justify-center"
                whileHover={{ scale: 1.15 }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {service.title}
              </h3>

              {/* Extended Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.descLong}
              </p>

              {/* CTA Button */}
              <button className="mt-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
