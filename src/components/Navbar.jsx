// src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

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
  }, [menuItems]);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-black/70 backdrop-blur-xl shadow-lg'
          : 'py-6 bg-white/10 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <h1
          className="text-3xl font-extrabold text-white tracking-wide cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <span className="text-primary">CodeVista</span> Digital
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white text-lg font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-all ${
                activeSection === item.id ? 'text-primary font-semibold' : ''
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollToSection('services')}
          className="hidden md:inline-block bg-primary px-6 py-2 rounded-lg text-white text-lg font-semibold hover:bg-blue-700 transition"
        >
          Get Started
        </button>

        {/* Mobile Menu Toggle */}
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
          className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10"
        >
          <ul className="flex flex-col text-white text-lg px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-primary transition ${
                  activeSection === item.id ? 'text-primary font-semibold' : ''
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </li>
            ))}

            <li>
              <button
                className="w-full bg-primary py-2 rounded-md mt-2 font-semibold text-white hover:bg-blue-700 transition"
                onClick={() => scrollToSection('services')}
              >
                Get Started
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
