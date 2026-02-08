// src/pages/services/SEOContentMarketing.jsx
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceNavbar from '../../components/ServiceNavbar';

export default function SEOContentMarketing() {
  const navigate = useNavigate();

  const featureImg = '/images/services/seo-marketing.webp';
  const extraImg1 = '/images/services/services4/extra1.webp';
  const extraImg2 = '/images/services/services4/extra2.webp';
  const extraImg3 = '/images/services/services4/extra3.webp';

  return (
    <div className="bg-white">
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          SEO, Content & Marketing Services in Mumbai | WebSphere Digital
        </title>
        <meta
          name="description"
          content="Boost your online visibility with professional SEO, content, and digital marketing services in Mumbai, India. WebSphere Digital helps businesses rank higher, attract traffic, and increase conversions."
        />
        <meta
          name="keywords"
          content="SEO Mumbai, Content Marketing Mumbai, Digital Marketing Agency, WebSphere Digital, SEO Services India, Marketing Services Mumbai"
        />
        <link
          rel="canonical"
          href="https://business-website1.vercel.app/services/seo-content-marketing"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="SEO, Content & Marketing Services in Mumbai"
        />
        <meta
          property="og:description"
          content="Professional SEO and content marketing services to grow your online presence and conversions."
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
          content="SEO, Content & Marketing Services in Mumbai"
        />
        <meta
          name="twitter:description"
          content="SEO, content marketing, and digital growth strategies for businesses in Mumbai."
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
        <span className="font-semibold text-gray-900">
          SEO, Content & Marketing
        </span>
      </div>

      {/* ================= Hero Section ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <img
          src={featureImg}
          alt="SEO, Content and Marketing Services"
          className="w-full h-80 object-cover rounded-2xl shadow-md mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          SEO, Content & Marketing
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Visibility is everything in the digital world. Our SEO and content
          strategies help your business rank higher, attract qualified traffic,
          and convert visitors into loyal customers.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We combine technical SEO, strategic content marketing, and performance
          tracking for sustainable, long-term growth.
        </p>
      </div>

      {/* ================= Section 1 ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What We Do
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Keyword research & search intent mapping</li>
            <li>On-page & technical SEO</li>
            <li>Content strategy & blog writing</li>
            <li>Link building & authority growth</li>
            <li>Performance tracking & reporting</li>
          </ul>
        </div>
        <img
          src={extraImg1}
          alt="SEO Services"
          className="rounded-2xl shadow-md h-64 object-cover w-full"
        />
      </div>

      {/* ================= Section 2 ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={extraImg2}
          alt="Content Marketing Strategy"
          className="rounded-2xl shadow-md h-64 object-cover w-full"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Strategy
          </h2>
          <p className="text-gray-700 mb-4">
            We focus on long-term results that sustain growth, not short-term
            hacks.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Content aligned with buyer journey</li>
            <li>Search engine algorithm best practices</li>
            <li>Data-driven optimization</li>
            <li>Continuous performance improvement</li>
          </ul>
        </div>
      </div>

      {/* ================= Section 3 ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why It Works
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Higher organic traffic</li>
            <li>Better conversion rates</li>
            <li>Strong brand authority</li>
            <li>Sustainable digital growth</li>
          </ul>
        </div>
        <img
          src={extraImg3}
          alt="SEO and Marketing Results"
          className="rounded-2xl shadow-md h-64 object-cover w-full"
        />
      </div>

      {/* ================= CTA Banner ================= */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-14 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business Online?
          </h2>
          <p className="mb-6 text-white/90">
            Let’s craft a strategy that boosts your visibility, traffic, and
            conversions.
          </p>
          <button
            onClick={() => navigate('/#contact')}
            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </div>
  );
}
