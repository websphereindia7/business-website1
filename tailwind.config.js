/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        /* Base */
        background: "#ffffff",
        surface: "#f9fafb",

        /* Text */
        primary: "#0f172a", // main headings
        secondary: "#475569", // body text

        /* Accent (Brand color) */
        accent: {
          DEFAULT: "#6366f1", // indigo
          light: "#eef2ff",
          dark: "#4f46e5",
        },

        /* Dark sections */
        dark: {
          DEFAULT: "#0b1120",
          soft: "#111827",
        },

        /* Borders */
        border: "#e5e7eb",
      },

      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)",
        medium: "0 15px 40px rgba(15, 23, 42, 0.12)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
