import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#F7941D",
          light: "#FFC857",
          dark: "#D97706",
        },
        navy: { DEFAULT: "#0F172A", 900: "#0B1222", 800: "#1E293B", 700: "#334155" },
        mist: "#F8FAFC",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: { "4xl": "2rem" },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(15, 23, 42, 0.15)",
        card: "0 20px 60px -20px rgba(15, 23, 42, 0.25)",
        glow: "0 0 0 1px rgba(247,148,29,.3), 0 10px 40px -8px rgba(247,148,29,.55)",
        "glow-lg": "0 0 0 1px rgba(247,148,29,.4), 0 20px 70px -10px rgba(247,148,29,.7)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #F7941D 0%, #FFC857 100%)",
        "navy-gradient": "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        shimmer: { "100%": { transform: "translateX(100%)" } },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        marquee: { to: { transform: "translateX(-50%)" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 1.5s infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        shimmer: "shimmer 2.2s infinite",
        "pulse-ring": "pulseRing 1.8s cubic-bezier(.2,.6,.4,1) infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
