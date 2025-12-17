// scripts/generate-sitemap.js
import fs from 'fs';
import { create } from 'xmlbuilder2';

// Base URL of your website
const BASE_URL = 'https://business-website1.vercel.app';

// List of routes and anchor sections to include
const routes = [
  { path: '/' }, // Home
  { path: '/#home' },
  { path: '/#services' },
  { path: '/#about' },
  { path: '/#features' },
  { path: '/#projects' },
  { path: '/#testimonials' },
  { path: '/#contact' },
  { path: '/services/website-development' },
  { path: '/services/landing-page-design' },
  { path: '/services/graphic-branding' },
  { path: '/services/seo-content-marketing' },
];

// Generate sitemap XML
const sitemapObj = {
  urlset: {
    '@xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
    url: routes.map((route) => ({
      loc: `${BASE_URL}${route.path}`,
      changefreq: 'weekly',
      priority: route.path === '/' ? 1.0 : 0.8,
    })),
  },
};

// Convert to XML string
const xml = create(sitemapObj).end({ prettyPrint: true });

// Write to public/sitemap.xml
fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
console.log('✅ sitemap.xml generated successfully!');
