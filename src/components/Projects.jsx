// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';

export default function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      shortDesc: 'Modern personal portfolio design',
      image: '/images/projects/1-portfolio-website.webp',
      link: 'https://websphereindia7.github.io/Portfolio-1/',
    },
    {
      title: 'Food Delivery Website',
      shortDesc: 'Online food ordering platform',
      image: '/images/projects/2-food-delivery-website.webp',
      link: 'https://websphereindia7.github.io/food-delivery-1/',
    },
    {
      title: 'Yummy Bites Website',
      shortDesc: 'Restaurant & food brand website',
      image: '/images/projects/3-yummy-bites-website.webp',
      link: 'https://websphereindia7.github.io/yummy-bites/',
    },
    {
      title: 'E-Commerce Website',
      shortDesc: 'Complete e-commerce shopping experience',
      image: '/images/projects/4-e-commerce-website.webp',
      link: 'https://websphereindia7.github.io/e-commerce-petalpop/',
    },
    {
      title: 'Real Estate Website',
      shortDesc: 'Property listings & real estate platform',
      image: '/images/projects/5-real-estate-website.webp',
      link: 'https://websphereindia7.github.io/real-estate-dreamkeyhomes/',
    },
    {
      title: 'Cake Shop Website',
      shortDesc: 'Bakery & cake shop website',
      image: '/images/projects/6-cake-shop.webp',
      link: 'https://websphereindia7.github.io/cake-shop-sugar-bloom/',
    },
    {
      title: 'FlyHigh Travel Website',
      shortDesc: 'Travel agency & tour booking site',
      image: '/images/projects/7-travel-website.webp',
      link: 'https://websphereindia7.github.io/travel-voyago/',
    },
    {
      title: 'Vytal Gym Website',
      shortDesc: 'Fitness & gym business website',
      image: '/images/projects/8-gym-website.webp',
      link: 'https://websphereindia7.github.io/vytalgym/',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  /* Responsive cards per view */
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - cardsPerView : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - cardsPerView ? 0 : prev + 1
    );
  };

  const goToDot = (index) => setCurrentIndex(index);
  const totalDots = projects.length - cardsPerView + 1;

  return (
    <section
      id="projects"
      className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Our{' '}
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto flex items-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          aria-label="Previous projects"
        >
          ⬅️
        </button>

        {/* Cards */}
        <div className="flex overflow-hidden w-full gap-6">
          {projects
            .slice(currentIndex, currentIndex + cardsPerView)
            .map((project, idx) => (
              <motion.div
                key={currentIndex + idx}
                className={`flex-shrink-0 w-full ${
                  cardsPerView === 1
                    ? ''
                    : cardsPerView === 2
                    ? 'md:w-1/2'
                    : 'lg:w-1/3'
                }`}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-full flex flex-col">
                  {/* Optimized Image */}
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                    placeholder="blur"
                    loading={idx < cardsPerView ? 'eager' : 'lazy'}
                    priority={idx < cardsPerView} // above-the-fold priority
                  />

                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.shortDesc}</p>

                    <div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition text-sm"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          aria-label="Next projects"
        >
          ➡️
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalDots }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToDot(idx)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to projects group ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
