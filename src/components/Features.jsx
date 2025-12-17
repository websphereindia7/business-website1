// src/components/Features.jsx
import { motion } from 'framer-motion';
import { FaBolt, FaUsersCog, FaDollarSign, FaHeadset } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      title: 'Fast Delivery',
      desc: 'We deliver all projects on time with optimized workflows and an efficient development process.',
      icon: <FaBolt size={30} className="text-blue-500" />,
    },
    {
      title: 'Expert Team',
      desc: 'Our skilled developers, designers, and strategists bring years of proven experience.',
      icon: <FaUsersCog size={30} className="text-purple-500" />,
    },
    {
      title: 'Affordable Pricing',
      desc: 'Premium quality services at budget-friendly prices tailored to every business size.',
      icon: <FaDollarSign size={30} className="text-green-500" />,
    },
    {
      title: '24/7 Support',
      desc: 'We stay connected with you around the clock for your updates, fixes, or new ideas.',
      icon: <FaHeadset size={30} className="text-pink-500" />,
    },
  ];

  return (
    <section id="features" className="py-28 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="/images/features-banner.webp"
            alt="Why Choose Us"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Why{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Choose Us?
            </span>
          </h2>

          <p className="text-gray-600 text-lg mb-10 max-w-xl">
            We provide high-quality digital solutions crafted with passion,
            creativity, and years of professional experience.
          </p>

          <div className="space-y-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="p-4 rounded-xl bg-gray-100 shadow-md">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
