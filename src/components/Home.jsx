// src/components/Home.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Hero from './Hero';
import About from './About';
import Services from './Services';
import Features from './Features';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const section = document.getElementById(id);
      if (section) {
        requestAnimationFrame(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        });
      }
    } else {
      // ⚡ Instant scroll to top for better LCP
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <>
      {/* 🔍 SEO + PERFORMANCE HEAD TAGS */}
      <Helmet>
        {/* Primary SEO */}
        <title>
          WebSphere Digital | Website Development, Branding & SEO Services
        </title>

        <meta
          name="description"
          content="WebSphere Digital helps businesses grow with high-performance websites, landing pages, branding, and SEO marketing. Transform your online presence today."
        />

        <meta
          name="keywords"
          content="WebSphere Digital, website development company, landing page design, branding agency, SEO services India"
        />

        {/* Open Graph */}
        <meta property="og:title" content="WebSphere Digital" />
        <meta
          property="og:description"
          content="High-performance websites, branding & SEO services to grow your business online."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://business-website1.vercel.app/"
        />

        {/* 🚀 HERO IMAGE PRELOAD (CRITICAL FOR SPEED) */}
        <link
          rel="preload"
          as="image"
          href="/images/hero.webp"
          fetchpriority="high"
        />

        {/* Fonts optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* 📊 LocalBusiness JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'WebSphere Digital',
            image: 'https://business-website1.vercel.app/images/logo.webp',
            '@id': 'https://business-website1.vercel.app/',
            url: 'https://business-website1.vercel.app/',
            telephone: '+91-XXXXXXXXXX',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Mumbai',
              addressRegion: 'Maharashtra',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '19.0760',
              longitude: '72.8777',
            },
            priceRange: '₹₹',
            description:
              'WebSphere Digital is a professional digital agency in Mumbai offering Website Development, Landing Page Design, Branding, SEO & Marketing services.',
            sameAs: ['https://www.instagram.com/', 'https://www.linkedin.com/'],
          })}
        </script>
      </Helmet>

      {/* PAGE CONTENT */}
      <main>
        <section id="home">
          <Hero />
        </section>

        <About />
        <Services />
        <Features />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
