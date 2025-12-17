// src/pages/services/GraphicBranding.jsx
import { useNavigate } from 'react-router-dom';
import ServiceNavbar from '../../components/ServiceNavbar';

export default function GraphicBranding() {
  const navigate = useNavigate();

  const featureImg = '/images/services/graphic-branding.webp';
  const extraImg1 = '/images/services/services3/extra1.webp';
  const extraImg2 = '/images/services/services3/extra2.webp';
  const extraImg3 = '/images/services/services3/extra3.webp';

  return (
    <div className="bg-white">
      <ServiceNavbar />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-600">
        <span
          onClick={() => navigate('/#home')}
          className="cursor-pointer hover:underline"
        >
          Home
        </span>
        {' / '}
        <span
          onClick={() => navigate('/#services')}
          className="cursor-pointer hover:underline"
        >
          Services
        </span>
        {' / '}
        <span className="font-semibold">Graphic & Branding</span>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <img
          src={featureImg}
          className="w-full h-80 object-cover rounded-xl mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Graphic & Branding
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          Your brand is more than just a logo. It’s how your audience feels when
          they interact with your business.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We design visually compelling brand identities that communicate trust,
          professionalism, and consistency across all platforms.
        </p>
      </div>

      {/* Section 1 */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Brand Assets We Create
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Logo design & brand marks</li>
            <li>Color palettes & typography systems</li>
            <li>Social media creatives</li>
            <li>Marketing banners & posters</li>
            <li>Business cards & stationery</li>
          </ul>
        </div>
        <img
          src={extraImg1}
          className="rounded-xl shadow-md h-64 object-cover w-full"
        />
      </div>

      {/* Section 2 */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
        <img
          src={extraImg2}
          className="rounded-xl shadow-md h-64 object-cover w-full"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Branding Approach</h2>
          <p className="text-gray-700 mb-4">
            We combine strategy with creativity to ensure your brand stands out
            and stays memorable.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Brand discovery & competitor analysis</li>
            <li>Concept exploration & mood boards</li>
            <li>Design refinement & consistency</li>
            <li>Multi-platform brand alignment</li>
          </ul>
        </div>
      </div>

      {/* Section 3 */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Strong Branding Matters
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Builds trust and credibility</li>
            <li>Improves brand recall</li>
            <li>Creates emotional connection</li>
            <li>Boosts marketing effectiveness</li>
          </ul>
        </div>
        <img
          src={extraImg3}
          className="rounded-xl shadow-md h-64 object-cover w-full"
        />
      </div>

      {/* CTA */}
      <div className="text-center py-12">
        <button
          onClick={() => navigate('/#contact')}
          className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-500 transition"
        >
          Build My Brand Identity
        </button>
      </div>
    </div>
  );
}
