import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1628",
        yellow: "#F5C500"
      },
      boxShadow: {
        glow: "0 0 20px rgba(245, 197, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
