import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

// Images
import PortfolioImg from "../images/portfolio.jpg";
import FoodDeliveryImg from "../images/food-delivery.jpg";
import ECommerceImg from "../images/e-commerce.jpg";
import VytalGymImg from "../images/vytalgym.jpg";
import RealEstateImg from "../images/real-estate.jpg";
import CakeShopImg from "../images/cake-shop.jpg";
import TravelImg from "../images/travel.jpg";
import YummyBitesImg from "../images/yummy-bites.jpg";

/* 🎨 Category Color Logic */
const categoryStyles = {
  "Personal Branding": {
    accent: "bg-indigo-600",
    button: "bg-indigo-600 hover:bg-indigo-700",
  },
  "Web Application": {
    accent: "bg-emerald-600",
    button: "bg-emerald-600 hover:bg-emerald-700",
  },
  "E-Commerce": {
    accent: "bg-pink-600",
    button: "bg-pink-600 hover:bg-pink-700",
  },
  "Business Website": {
    accent: "bg-blue-600",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  "Real Estate": {
    accent: "bg-amber-600",
    button: "bg-amber-600 hover:bg-amber-700",
  },
  "Local Business": {
    accent: "bg-teal-600",
    button: "bg-teal-600 hover:bg-teal-700",
  },
  "Travel & Tourism": {
    accent: "bg-cyan-600",
    button: "bg-cyan-600 hover:bg-cyan-700",
  },
  Restaurant: { accent: "bg-red-600", button: "bg-red-600 hover:bg-red-700" },
};

const projects = [
  {
    title: "Portfolio Website",
    link: "https://websphereindia7.github.io/Portfolio-1/",
    image: PortfolioImg,
    category: "Personal Branding",
    description:
      "A clean, modern portfolio designed to showcase skills and professional credibility.",
  },
  {
    title: "Food Delivery Website",
    link: "https://websphereindia7.github.io/food-delivery-1/",
    image: FoodDeliveryImg,
    category: "Web Application",
    description:
      "A responsive food delivery platform with a user-friendly ordering experience.",
  },
  {
    title: "E-Commerce Website",
    link: "https://websphereindia7.github.io/e-commerce-petalpop/",
    image: ECommerceImg,
    category: "E-Commerce",
    description:
      "An e-commerce website with product listings, cart flow, and checkout.",
  },
  {
    title: "Vytal Gym Website",
    link: "https://websphereindia7.github.io/vytalgym/",
    image: VytalGymImg,
    category: "Business Website",
    description:
      "A gym website highlighting programs, trainers, and schedules.",
  },
  {
    title: "Real Estate Website",
    link: "https://websphereindia7.github.io/real-estate-dreamkeyhomes/",
    image: RealEstateImg,
    category: "Real Estate",
    description:
      "A real estate platform showcasing properties for buying and renting.",
  },
  {
    title: "Cake Shop Website",
    link: "https://websphereindia7.github.io/cake-shop-sugar-bloom/",
    image: CakeShopImg,
    category: "Local Business",
    description: "A bakery website designed to display products clearly.",
  },
  {
    title: "Travel Website",
    link: "https://websphereindia7.github.io/travel-voyago/",
    image: TravelImg,
    category: "Travel & Tourism",
    description: "A travel agency website presenting tour packages.",
  },
  {
    title: "Yummy Bites Website",
    link: "https://websphereindia7.github.io/yummy-bites/",
    image: YummyBitesImg,
    category: "Restaurant",
    description: "A restaurant website highlighting menus and specials.",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const cardsToShow = 3;
  const maxIndex = projects.length - cardsToShow;

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };
  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section id="projects" className="relative pt-28 pb-24 overflow-hidden">
      {/* Background Glow (Optional subtle floating circles) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-1/3 -left-1/4 h-[720px] w-[720px] rounded-full bg-indigo-200/20 blur-[180px] animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[620px] w-[620px] rounded-full bg-indigo-300/15 blur-[160px] animate-[float_12s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Recent Projects
        </h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          Real-world projects demonstrating design quality and development
          expertise.
        </p>

        {/* ===== MOBILE GRID ===== */}
        <div className="grid gap-6 mt-12 md:hidden">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              style={categoryStyles[project.category]}
            />
          ))}
        </div>

        {/* ===== DESKTOP CAROUSEL ===== */}
        <div className="relative mt-10 hidden md:block">
          {/* Arrows */}
          <button
            onClick={prev}
            disabled={index === 0}
            className={`absolute -left-14 top-1/2 -translate-y-1/2 z-10
              h-12 w-12 rounded-full bg-white shadow-lg transition
              ${index === 0 ? "opacity-40 cursor-not-allowed" : "hover:shadow-xl"}`}
          >
            <ChevronLeft className="mx-auto" />
          </button>

          <button
            onClick={next}
            disabled={index === maxIndex}
            className={`absolute -right-14 top-1/2 -translate-y-1/2 z-10
              h-12 w-12 rounded-full bg-white shadow-lg transition
              ${index === maxIndex ? "opacity-40 cursor-not-allowed" : "hover:shadow-xl"}`}
          >
            <ChevronRight className="mx-auto" />
          </button>

          {/* Carousel Wrapper */}
          <div className="overflow-hidden min-h-[380px]">
            <motion.div
              className="flex will-change-transform"
              animate={{ x: `-${index * (100 / cardsToShow)}%` }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="basis-1/3 px-4 flex-shrink-0 w-full"
                >
                  <ProjectCard
                    project={project}
                    style={categoryStyles[project.category]}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition
                  ${i === index ? "bg-gray-900" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 🔹 Premium Hover Project Card */
function ProjectCard({ project, style }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden
                 transition-all duration-300 hover:shadow-2xl"
    >
      {/* Accent Bar */}
      <div
        className={`h-24 ${style.accent} transition-all duration-300 group-hover:brightness-110`}
      />

      {/* Image with subtle floating animation */}
      <div className="relative -mt-14 px-6">
        <motion.div
          className="rounded-xl bg-white p-1 shadow-md overflow-hidden"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-44 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-5 inline-flex items-center gap-2 px-6 py-2 rounded-full
            text-white text-sm font-medium transition-all duration-300 hover:scale-110 ${style.button}`}
        >
          Live Site
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}
