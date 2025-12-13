// src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Features', id: 'features' },
    { name: 'Projects', id: 'projects' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      const scrollPos = window.scrollY + 150;

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop - 200;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            current = item.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setOpen(false);
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-primary py-3 shadow-lg"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <h1
          className="text-3xl font-extrabold tracking-wide cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <span className="text-white">CodeVista</span>{' '}
          <span className="text-blue-600">Digital</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="relative cursor-pointer pb-1 transition-all"
              onClick={() => scrollToSection(item.id)}
            >
              <span
                className={`transition-all ${
                  activeSection === item.id
                    ? 'text-black font-semibold after:w-full'
                    : 'text-white hover:text-gray-200 after:w-0'
                } after:content-[""] after:block after:h-0.5 after:bg-black after:transition-all`}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <button
          onClick={() => scrollToSection('services')}
          className="hidden md:inline-block bg-blue-600 px-6 py-2 rounded-lg text-white text-lg font-semibold hover:bg-blue-500 transition"
        >
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? '✖' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-primary border-t border-blue-700"
        >
          <ul className="flex flex-col text-lg px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="relative cursor-pointer pb-1 transition-all"
                onClick={() => scrollToSection(item.id)}
              >
                <span
                  className={`transition-all ${
                    activeSection === item.id
                      ? 'text-black font-semibold after:w-full'
                      : 'text-white hover:text-gray-200 after:w-0'
                  } after:content-[""] after:block after:h-0.5 after:bg-black after:transition-all`}
                >
                  {item.name}
                </span>
              </li>
            ))}

            {/* Mobile CTA */}
            <button
              className="w-full bg-blue-600 py-2 rounded-md mt-2 font-semibold text-white hover:bg-blue-500 transition"
              onClick={() => scrollToSection('services')}
            >
              Get Started
            </button>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
