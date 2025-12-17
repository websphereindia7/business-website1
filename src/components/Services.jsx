// src/components/Services.jsx
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Website Development',
      descLong:
        'Modern, responsive websites to strengthen your brand and convert visitors into customers.',
      gradient: 'from-blue-400 to-blue-600',
      shadow: 'shadow-blue-400/40',
      img: '/images/services/website-development.webp',
      route: '/services/website-development',
      alt: 'Website Development Services in India',
    },
    {
      title: 'Landing Page Design',
      descLong:
        'High-converting landing pages with clean UI/UX to boost engagement and sales.',
      gradient: 'from-purple-400 to-purple-600',
      shadow: 'shadow-purple-400/40',
      img: '/images/services/landing-page-design.webp',
      route: '/services/landing-page-design',
      alt: 'Landing Page Design Services',
    },
    {
      title: 'Graphic & Branding',
      descLong:
        'Professional logos, banners, posters, and complete brand identity to stand out.',
      gradient: 'from-pink-400 to-pink-600',
      shadow: 'shadow-pink-400/40',
      img: '/images/services/graphic-branding.webp',
      route: '/services/graphic-branding',
      alt: 'Graphic Design and Branding Services',
    },
    {
      title: 'SEO, Content & Marketing',
      descLong:
        'Boost visibility, ranking, and conversions with strategic SEO, content, and marketing.',
      gradient: 'from-green-500 to-green-700',
      shadow: 'shadow-green-400/40',
      img: '/images/services/seo-marketing.webp',
      route: '/services/seo-content-marketing',
      alt: 'SEO and Digital Marketing Services',
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  };

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
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our{' '}
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
          Services
        </span>
      </motion.h2>

      {/* Services Cards */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative rounded-3xl overflow-hidden cursor-pointer bg-gradient-to-br ${service.gradient} ${service.shadow} p-1`}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
          >
            <div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center h-full min-h-[440px] shadow-lg">
              {/* Feature Image */}
              <img
                src={service.img}
                alt={service.alt}
                loading="lazy"
                decoding="async"
                width="400"
                height="160"
                className="rounded-xl mb-6 w-full h-40 object-cover shadow-md"
              />

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.descLong}
              </p>

              {/* CTA */}
              <button
                onClick={() => navigate(service.route)}
                className="mt-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full font-medium shadow-md hover:opacity-90 transition"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
