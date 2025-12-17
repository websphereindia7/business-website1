// src/components/Navbar.jsx
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // ⛔ prevent scroll-spy during programmatic scroll
  const isProgrammaticScroll = useRef(false);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Features', id: 'features' },
    { name: 'Projects', id: 'projects' },
    { name: 'Testimonials', id: 'testimonials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      let current = 'home';
      const scrollPos = window.scrollY + 200;

      for (const item of menuItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          current = item.id;
          break;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    isProgrammaticScroll.current = true;

    if (id === 'home') {
      // 🔥 CLEAR HASH COMPLETELY
      window.history.pushState({}, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    } else {
      window.history.pushState({}, '', `/#${id}`);
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }

    setOpen(false);

    // ✅ allow scroll spy after animation finishes
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 700);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 bg-primary py-3 shadow-lg"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <h1
          className="text-3xl font-extrabold cursor-pointer"
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
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer ${
                activeSection === item.id
                  ? 'text-black font-semibold'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollToSection('contact')}
          className="hidden md:inline-block bg-blue-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-500"
        >
          Contact Us
        </button>
      </nav>
    </motion.header>
  );
}
