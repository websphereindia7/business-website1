// src/components/Projects.jsx
import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "./FadeIn";

// Images
import PortfolioImg from "../images/portfolio.jpg";
import FoodDeliveryImg from "../images/food-delivery.jpg";
import ECommerceImg from "../images/e-commerce.jpg";
import VytalGymImg from "../images/vytalgym.jpg";
import RealEstateImg from "../images/real-estate.jpg";
import CakeShopImg from "../images/cake-shop.jpg";
import TravelImg from "../images/travel.jpg";
import YummyBitesImg from "../images/yummy-bites.jpg";

const projects = [
  {
    title: "Portfolio Website",
    link: "https://websphereindia7.github.io/Portfolio-1/",
    image: PortfolioImg,
    description:
      "A clean, modern portfolio designed to showcase skills, projects, and professional credibility.",
  },
  {
    title: "Food Delivery Website",
    link: "https://websphereindia7.github.io/food-delivery-1/",
    image: FoodDeliveryImg,
    description:
      "A responsive food delivery platform with clear menus and a user-friendly ordering experience.",
  },
  {
    title: "E-Commerce Website",
    link: "https://websphereindia7.github.io/e-commerce-petalpop/",
    image: ECommerceImg,
    description:
      "An e-commerce website featuring product listings, cart functionality, and a smooth checkout flow.",
  },
  {
    title: "Vytal Gym Website",
    link: "https://websphereindia7.github.io/vytalgym/",
    image: VytalGymImg,
    description:
      "A gym website highlighting programs, trainers, and schedules with a strong brand presence.",
  },
  {
    title: "Real Estate Website",
    link: "https://websphereindia7.github.io/real-estate-dreamkeyhomes/",
    image: RealEstateImg,
    description:
      "A real estate platform showcasing property listings for buying, selling, and renting.",
  },
  {
    title: "Cake Shop Website",
    link: "https://websphereindia7.github.io/cake-shop-sugar-bloom/",
    image: CakeShopImg,
    description:
      "A bakery website designed to display products clearly and encourage customer inquiries.",
  },
  {
    title: "Travel Website",
    link: "https://websphereindia7.github.io/travel-voyago/",
    image: TravelImg,
    description:
      "A travel agency website presenting tour packages with a clean, engaging layout.",
  },
  {
    title: "Yummy Bites Website",
    link: "https://websphereindia7.github.io/yummy-bites/",
    image: YummyBitesImg,
    description:
      "A restaurant website highlighting menus, specials, and essential business information.",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;
  const maxIndex = projects.length - cardsToShow;

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    // <section id="projects" className="relative pt-6 pb-24 scroll-mt-24">
    <section id="projects" className="relative pt-2 pb-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-8">
            <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
              Projects
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Selected Work & Web Solutions
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Showcasing projects that highlight responsive, user-focused web
              solutions.
            </p>
          </div>
        </FadeIn>

        <div className="relative mt-10">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="hidden md:flex absolute left-0 -translate-x-14 top-1/2 -translate-y-1/2 z-20
              h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg
              hover:ring-2 hover:ring-accent transition disabled:opacity-40"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="overflow-hidden min-h-[420px] touch-pan-y">
            <div
              className="flex transition-transform duration-700 ease-in-out will-change-transform"
              style={{
                transform: `translate3d(-${
                  (100 / cardsToShow) * currentIndex
                }%, 0, 0)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="w-full md:w-[50%] lg:w-[33.3333%] flex-shrink-0 px-3"
                >
                  <FadeIn delay={index * 0.1}>
                    <div className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-transform duration-300 hover:scale-105">
                      <div className="relative h-52 overflow-hidden rounded-t-2xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="eager"
                          decoding="async"
                          fetchpriority="high"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="p-5 bg-white dark:bg-gray-800">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                          <ExternalLink className="h-5 w-5 text-accent transition group-hover:text-accent-dark" />
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent-dark transition-transform transform hover:-translate-y-1"
                        >
                          View Live Project
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="hidden md:flex absolute right-0 translate-x-14 top-1/2 -translate-y-1/2 z-20
              h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg
              hover:ring-2 hover:ring-accent transition disabled:opacity-40"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-5 gap-3">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === idx
                  ? "bg-accent"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
