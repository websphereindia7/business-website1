// src/components/ServiceNavbar.jsx
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ServiceNavbar() {
  const navigate = useNavigate();

  const goTo = (hash) => {
    navigate(`/#${hash}`);
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
          onClick={() => goTo('home')}
        >
          <span className="text-white">CodeVista</span>{' '}
          <span className="text-blue-600">Digital</span>
        </h1>

        {/* Service Nav */}
        <div className="flex gap-8 text-lg font-medium">
          <button
            onClick={() => goTo('home')}
            className="text-white hover:text-gray-200"
          >
            Home
          </button>

          <button
            onClick={() => goTo('services')}
            className="text-white hover:text-gray-200"
          >
            Services
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
