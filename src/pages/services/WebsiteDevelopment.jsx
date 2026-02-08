// src/pages/services/WebsiteDevelopment.jsx
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceNavbar from '../../components/ServiceNavbar';

export default function WebsiteDevelopment() {
  const navigate = useNavigate();

  const featureImg = '/images/services/website-development.webp';
  const extraImg1 = '/images/services/services1/extra1.webp';
  const extraImg2 = '/images/services/services1/extra2.webp';

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Website Development Company in Mumbai | WebSphere Digital</title>

        <meta
          name="description"
          content="WebSphere Digital is a professional website development company in Mumbai offering fast, responsive, SEO-friendly websites for businesses. Get a free quote today."
        />

        <link
          rel="canonical"
          href="https://business-website1.vercel.app/services/website-development"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Website Development Company in Mumbai"
        />
        <meta
          property="og:description"
          content="Custom website development services in Mumbai focused on performance, SEO, and conversions."
        />
        <meta
          property="og:url"
          content="https://business-website1.vercel.app/services/website-development"
        />
        <meta property="og:type" content="website" />

        {/* Local SEO */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="language" content="en-IN" />
      </Helmet>

      {/* ================= SERVICE NAVBAR ================= */}
      <ServiceNavbar />

      {/* ================= BREADCRUMBS ================= */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-600 flex gap-1">
        <span
          className="cursor-pointer hover:underline"
          onClick={() => navigate('/#home')}
        >
          Home
        </span>
        <span>/</span>
        <span
          className="cursor-pointer hover:underline"
          onClick={() => navigate('/#services')}
        >
          Services
        </span>
        <span>/</span>
        <span className="font-semibold text-gray-800">Website Development</span>
      </div>

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          src={featureImg}
          alt="Website Development Services in Mumbai"
          className="w-full h-80 object-cover rounded-2xl shadow-md mb-10"
        />

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
        >
          Website Development Services in{' '}
          <span className="text-purple-600">Mumbai</span>
        </motion.h1>

        <p className="text-gray-700 leading-relaxed max-w-4xl mb-4">
          At <strong>WebSphere Digital</strong>, we build modern, scalable, and
          conversion-focused websites that help Mumbai-based businesses stand
          out online. Our websites are fast, mobile-friendly, and engineered for
          growth.
        </p>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Whether you need a corporate website, portfolio, or a high-performing
          business website — we deliver solutions that blend design,
          performance, and SEO.
        </p>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Our Website Development Process
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We follow a structured, transparent development workflow to ensure
            quality and performance.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Business & requirement analysis</li>
            <li>UI/UX wireframing & design</li>
            <li>Responsive front-end development</li>
            <li>Backend & CMS integration</li>
            <li>SEO & speed optimization</li>
          </ul>
        </div>

        <img
          src={extraImg1}
          alt="Website development process"
          className="rounded-2xl shadow-md w-full h-64 object-cover"
        />
      </section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={extraImg2}
          alt="Website development features"
          className="rounded-2xl shadow-md w-full h-64 object-cover"
        />

        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Features Included in Every Website
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Mobile-first responsive design</li>
            <li>Fast loading & optimized assets</li>
            <li>SEO-ready structure</li>
            <li>CMS integration (WordPress / Headless)</li>
            <li>Contact forms & lead tracking</li>
            <li>Analytics & performance monitoring</li>
          </ul>

          <p className="text-gray-700">
            Our goal is to create websites that are visually impressive,
            technically strong, and aligned with your business objectives.
          </p>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build a High-Performance Website?
          </h2>

          <p className="mb-8 text-lg opacity-90">
            Get a professionally designed website for your Mumbai-based
            business.
          </p>

          <button
            onClick={() => navigate('/#contact')}
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition"
          >
            Get a Free Quote
          </button>
        </div>
      </section>
    </>
  );
}
