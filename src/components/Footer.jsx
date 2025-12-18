// src/components/Footer.jsx
import OptimizedImage from './OptimizedImage';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="py-8 px-6 bg-primary text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <OptimizedImage
          src="/images/logo.webp"
          alt="CodeVista Digital Logo"
          width={150}
          height={50}
          placeholder="blur"
          priority={true} // logo is above-the-fold
          className="h-auto w-auto"
        />

        {/* Social Icons */}
        <div className="flex gap-4 text-white text-xl">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-center text-sm text-white/80">
        © {new Date().getFullYear()} CodeVista Digital — All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
