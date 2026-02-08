// src/components/ScrollRestoration.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRestoration() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Hash scroll (/#services)
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Page navigation scroll
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}
