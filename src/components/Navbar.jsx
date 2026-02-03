import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-[#1F2937]/90 backdrop-blur-md border-b border-gray-700">
        <nav className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="text-xl font-bold text-white tracking-tight hover:text-indigo-400 transition-colors duration-300"
            >
              WebSphere
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-6 text-sm text-white">
              {navLinks.map((item) => (
                <li key={item.label} className="group relative">
                  <a
                    href={item.href}
                    className="px-3 py-2 rounded-md font-medium text-white transition-all duration-300 hover:bg-gray-300 hover:text-gray-900 hover:font-bold"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-700"
            >
              Hire Me
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-400 p-2 text-white"
            >
              <span className="sr-only">Open menu</span>
              {open ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-gray-700 bg-[#1F2937]/95">
            <ul className="flex flex-col px-6 py-6 space-y-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-white transition-all duration-300 hover:bg-gray-300 hover:text-gray-900 hover:font-bold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              {/* Mobile CTA */}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-700"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
