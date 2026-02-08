// src/components/Testimonials.jsx
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import OptimizedImage from './OptimizedImage';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sneha Patil',
      company: 'NextGen Digital Labs',
      img: '/images/testimonials/client1.webp',
      quote:
        'Amazing work from start to finish. The team clearly understood our business goals and delivered a modern, fast, and visually appealing website that truly represents our brand.',
    },
    {
      name: 'Arjun Mehra',
      company: 'PixelCraft Studios',
      img: '/images/testimonials/client2.webp',
      quote:
        'Highly professional and creative team. Our landing page performance improved significantly after launch, and the overall user experience is smooth, engaging, and conversion-focused.',
    },
    {
      name: 'Chetna Thakkar',
      company: 'UrbanBuild Solutions',
      img: '/images/testimonials/client3.webp',
      quote:
        'Smooth collaboration throughout the project. Communication was clear, timelines were respected, and the final website exceeded our expectations in both design and performance.',
    },
    {
      name: 'Rahul Desai',
      company: 'LuxeGlow Brands',
      img: '/images/testimonials/client4.webp',
      quote:
        'Outstanding branding and ecommerce website design. The final result looks premium, loads fast, and has helped us build a stronger and more professional online presence.',
    },
    {
      name: 'Vikram Shah',
      company: 'GrowthEdge Marketing',
      img: '/images/testimonials/client5.webp',
      quote:
        'Exceptional SEO services with measurable results. Within weeks, we noticed improvements in rankings, traffic, and lead quality. Highly recommended for serious businesses.',
    },
    {
      name: 'Karan Verma',
      company: 'VistaCore Consulting',
      img: '/images/testimonials/client6.webp',
      quote:
        'Professional and communicative. Our website now looks modern, trustworthy, and performs exceptionally well across all devices.',
    },
    {
      name: 'Priya Nair',
      company: 'SmartFlow Automation',
      img: '/images/testimonials/client7.webp',
      quote:
        'A powerful and polished website experience. The team paid attention to every detail and delivered a product that aligns perfectly with our vision.',
    },
  ];

  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);

  /* Responsive cards count */
  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;
      if (w < 768) setVisibleCards(1);
      else if (w < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  /* Calculate width safely */
  useEffect(() => {
    if (!sliderRef.current) return;
    setCardWidth(sliderRef.current.offsetWidth / visibleCards);
    setIndex(0);
  }, [visibleCards]);

  const maxIndex = testimonials.length - visibleCards;

  return (
    <section id="testimonials" className="pt-28 pb-32 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* ✅ Animated Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
            Clients Say
          </span>
        </motion.h2>

        <div className="flex items-center gap-6">
          {/* Left Arrow */}
          <button
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            disabled={index === 0}
            aria-label="Previous testimonials"
            className="p-4 rounded-full bg-gray-800 text-white disabled:opacity-30"
          >
            <FaChevronLeft />
          </button>

          {/* Slider */}
          <div ref={sliderRef} className="overflow-hidden w-full">
            <motion.div
              className="flex"
              animate={{ x: -index * cardWidth }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={t.name}
                  style={{ width: cardWidth }}
                  className="px-3 flex-shrink-0"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg min-h-[420px]">
                    <OptimizedImage
                      src={t.img}
                      alt={t.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full mx-auto object-cover"
                      placeholder="blur"
                      loading={idx < visibleCards ? 'eager' : 'lazy'}
                      priority={idx < visibleCards}
                    />

                    <div className="flex justify-center mt-3 text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    <p className="mt-4 text-gray-700 leading-relaxed">
                      {t.quote}
                    </p>

                    <h3 className="mt-4 font-semibold">{t.name}</h3>
                    <p className="text-gray-500">{t.company}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
            disabled={index === maxIndex}
            aria-label="Next testimonials"
            className="p-4 rounded-full bg-gray-800 text-white disabled:opacity-30"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition ${
                i === index
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
