// src/pages/services/LandingPageDesign.jsx
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceNavbar from '../../components/ServiceNavbar';

export default function LandingPageDesign() {
  const navigate = useNavigate();

  const featureImg = '/images/services/landing-page-design.webp';
  const extraImg1 = '/images/services/services2/extra1.webp';
  const extraImg2 = '/images/services/services2/extra2.webp';
  const extraImg3 = '/images/services/services2/extra3.webp';

  return (
    <div className="bg-white">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Landing Page Design Services in Mumbai | WebSphere Digital
        </title>
        <meta
          name="description"
          content="High-converting landing page design services in Mumbai, India. WebSphere Digital creates fast, mobile-friendly, conversion-focused landing pages for ads, lead generation, and product launches."
        />
        <meta
          name="keywords"
          content="Landing Page Design Mumbai, Landing Page Designer India, Conversion Focused Landing Pages, Lead Generation Pages, WebSphere Digital"
        />
        <link
          rel="canonical"
          href="https://business-website1.vercel.app/services/landing-page-design"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Landing Page Design Services in Mumbai"
        />
        <meta
          property="og:description"
          content="Conversion-optimized landing pages designed to turn visitors into leads and customers."
        />
        <meta property="og:image" content={featureImg} />
        <meta
          property="og:url"
          content="https://business-website1.vercel.app"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Landing Page Design Services in Mumbai"
        />
        <meta
          name="twitter:description"
          content="High-performance landing page design for ads, funnels, and campaigns."
        />
        <meta name="twitter:image" content={featureImg} />
      </Helmet>

      {/* ================= Service Navbar ================= */}
      <ServiceNavbar />

      {/* ================= Breadcrumbs ================= */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-600 flex gap-1">
        <span
          onClick={() => navigate('/#home')}
          className="cursor-pointer hover:underline"
        >
          Home
        </span>
        <span>/</span>
        <span
          onClick={() => navigate('/#services')}
          className="cursor-pointer hover:underline"
        >
          Services
        </span>
        <span>/</span>
        <span className="font-semibold text-gray-900">Landing Page Design</span>
      </div>

      {/* ================= Hero Section ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <img
          src={featureImg}
          alt="Landing Page Design Services"
          className="w-full h-80 object-cover rounded-2xl shadow-md mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Landing Page Design Services
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          At <strong>WebSphere Digital</strong>, we design high-converting
          landing pages that focus on one goal — turning visitors into leads or
          customers. Every section, headline, and CTA is crafted with conversion
          psychology in mind.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Whether you are running paid ads, launching a product, or building a
          lead generation funnel, our landing pages are fast, mobile-friendly,
          SEO-ready, and built to perform.
        </p>
      </div>

      {/* ================= Section 1 ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What Makes Our Landing Pages Convert Better?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Strong value proposition above the fold</li>
            <li>Clear call-to-action with minimal distractions</li>
            <li>Mobile-first, responsive design</li>
            <li>User-psychology driven layouts</li>
            <li>Optimized loading speed for better ad performance</li>
          </ul>
        </div>
        <img
          src={extraImg1}
          alt="High Converting Landing Pages"
          className="rounded-2xl shadow-md h-64 object-cover w-full"
        />
      </div>

      {/* ================= Section 2 ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={extraImg2}
          alt="Landing Page Design Process"
          className="rounded-2xl shadow-md h-64 object-cover w-full"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Design & Optimization Process
          </h2>
          <p className="text-gray-700 mb-4">
            We follow a proven process to ensure your landing page delivers
            measurable business results.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Audience & intent research</li>
            <li>Wireframing and layout planning</li>
            <li>Copy placement and CTA optimization</li>
            <li>Conversion tracking setup</li>
            <li>A/B testing readiness</li>
          </ul>
        </div>
      </div>

      {/* ================= Section 3 ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ideal Use Cases
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Paid advertising campaigns</li>
            <li>Lead generation funnels</li>
            <li>Product launches</li>
            <li>Webinars & event registrations</li>
            <li>Email marketing campaigns</li>
          </ul>
        </div>
        <img
          src={extraImg3}
          alt="Landing Page Use Cases"
          className="rounded-2xl shadow-md h-64 object-cover w-full"
        />
      </div>

      {/* ================= CTA Banner ================= */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-14 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want a High-Converting Landing Page?
          </h2>
          <p className="mb-6 text-white/90">
            Get a professionally designed landing page tailored for your
            campaign goals.
          </p>
          <button
            onClick={() => navigate('/#contact')}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </div>
  );
}
