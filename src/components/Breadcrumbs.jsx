// src/components/Breadcrumbs.jsx
import { useNavigate } from 'react-router-dom';

export default function Breadcrumbs({ serviceName }) {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    navigate('/'); // Ensure Home component is loaded
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <nav className="text-gray-600 text-sm mb-6">
      <ul className="flex gap-2 flex-wrap">
        <li
          className="cursor-pointer hover:text-blue-600 transition"
          onClick={() => scrollToSection('home')}
        >
          Home
        </li>
        <span>/</span>
        <li
          className="cursor-pointer hover:text-blue-600 transition"
          onClick={() => scrollToSection('services')}
        >
          Services
        </li>
        <span>/</span>
        <li className="font-semibold text-gray-900">{serviceName}</li>
      </ul>
    </nav>
  );
}
