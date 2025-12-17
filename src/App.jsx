// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

import WebsiteDevelopment from './pages/services/WebsiteDevelopment';
import LandingPageDesign from './pages/services/LandingPageDesign';
import GraphicBranding from './pages/services/GraphicBranding';
import SEOMarketing from './pages/services/SEOMarketing';

import ScrollRestoration from './components/ScrollRestoration';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      {/* Restores scroll position correctly on route change */}
      <ScrollRestoration />

      {/* Global Navbar */}
      <Navbar />

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/services/website-development"
          element={<WebsiteDevelopment />}
        />
        <Route
          path="/services/landing-page-design"
          element={<LandingPageDesign />}
        />
        <Route
          path="/services/graphic-branding"
          element={<GraphicBranding />}
        />
        <Route
          path="/services/seo-content-marketing"
          element={<SEOMarketing />}
        />
      </Routes>

      {/* Global Footer */}
      <Footer />

      {/* Scroll-to-top floating button */}
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
