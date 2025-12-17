// src/components/ScrollToTop.jsx
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 
        bg-gray-800 text-white p-3 rounded-full shadow-lg
        transition-all duration-300
        hover:bg-gray-700 hover:scale-110
        ${showScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      <FaArrowUp size={18} />
    </button>
  );
}
