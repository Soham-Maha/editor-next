/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        "work-sans": ["Work Sans", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-100": "var(--color-primary-100)",
        secondary: "var(--color-secondary)",
        "black-100": "var(--color-black-100)",
        "black-200": "var(--color-black-200)",
        "black-300": "var(--color-black-300)",
        "white-100": "var(--color-white-100)",
      },
    },
  },
  plugins: [typography, animate],
};
