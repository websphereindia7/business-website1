import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import client1 from '../assets/testimonials/client1.jpg';
import client2 from '../assets/testimonials/client2.jpg';
import client3 from '../assets/testimonials/client3.jpg';
import client4 from '../assets/testimonials/client4.jpg';
import client5 from '../assets/testimonials/client5.jpg';
import client6 from '../assets/testimonials/client6.jpg';
import client7 from '../assets/testimonials/client7.jpg';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Arjun Mehra',
      company: 'Mehra Tech Solutions',
      img: client1,
      quote:
        'Amazing work! The website delivered was modern, fast, and perfectly matched our brand identity.',
    },
    {
      name: 'Sneha Patil',
      company: 'Creative Studio',
      img: client2,
      quote:
        'They are extremely talented and very professional. My landing page conversions increased by 40%!',
    },
    {
      name: 'Rahul Desai',
      company: 'Digital Builders',
      img: client3,
      quote:
        'Super responsive and completed everything before the deadline. Highly recommended for any business!',
    },
    {
      name: 'Aisha Khan',
      company: 'Glow Cosmetics',
      img: client4,
      quote:
        'Loved the branding work and the ecommerce site design. Everything was beyond expectations!',
    },
    {
      name: 'Vikram Shah',
      company: 'Shah Enterprises',
      img: client5,
      quote:
        'Their SEO service helped us rank on Google within weeks. Traffic and leads increased drastically.',
    },
    {
      name: 'Priya Nair',
      company: 'Nair Consulting',
      img: client6,
      quote:
        'Professional, quick, and extremely communicative. My business website looks absolutely stunning.',
    },
    {
      name: 'Karan Verma',
      company: 'Verma Automations',
      img: client7,
      quote:
        "Top-notch quality! Their team understands the client's vision and turns it into reality flawlessly.",
    },
  ];

  const visibleCards = 3;
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const x = useMotionValue(0);

  // Calculate card width dynamically
  const cardWidth = sliderRef.current
    ? sliderRef.current.offsetWidth / visibleCards
    : 0;

  const maxDrag = -(testimonials.length - visibleCards) * cardWidth;

  // Snap to nearest card after drag
  const handleDragEnd = (_, info) => {
    const offset = info.offset.x; // total dragged distance
    const newIndex = Math.round(-x.get() / cardWidth);
    const clampedIndex = Math.max(
      0,
      Math.min(newIndex, testimonials.length - visibleCards)
    );
    setIndex(clampedIndex);
  };

  // Update x value whenever index changes (for arrow clicks or dot clicks)
  useEffect(() => {
    x.set(-index * cardWidth);
  }, [index, cardWidth, x]);

  const prevSlide = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - visibleCards : prev - 1
    );
  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % (testimonials.length - visibleCards + 1));

  return (
    <section id="testimonials" className="pt-28 pb-32 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          What Our{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
            Clients Say
          </span>
        </motion.h2>

        {/* Slider */}
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden px-2">
          <motion.div
            ref={sliderRef}
            className="flex gap-6 cursor-grab"
            drag="x"
            dragConstraints={{ left: maxDrag || 0, right: 0 }}
            dragElastic={0.2}
            style={{ x }}
            onDragEnd={handleDragEnd}
            whileTap={{ cursor: 'grabbing' }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                className="flex-shrink-0 w-[calc(33.333%_-_1.5rem)] bg-white rounded-2xl p-6 shadow-lg min-h-[420px] hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-md"
                />
                <div className="flex justify-center mt-3 text-yellow-400">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <p className="text-gray-700 mt-4 text-base leading-relaxed">
                  {t.quote}
                </p>
                <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-900">
                  {t.name}
                </h3>
                <p className="text-gray-500">{t.company}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-[-2rem] top-1/2 -translate-y-1/2 bg-gray-800 text-white shadow-md p-3 rounded-full hover:bg-gray-700 transition z-10"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-[-2rem] top-1/2 -translate-y-1/2 bg-gray-800 text-white shadow-md p-3 rounded-full hover:bg-gray-700 transition z-10"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials
            .slice(0, testimonials.length - visibleCards + 1)
            .map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  i === index
                    ? 'bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 scale-110'
                    : 'bg-gray-300'
                }`}
              ></div>
            ))}
        </div>
      </div>
    </section>
  );
}
