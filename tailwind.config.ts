import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#09090b",
          dark: "#050507",
          card: "#111116",
          cardHover: "#171720",
          elevated: "#1c1c26",
        },
        ivory: {
          DEFAULT: "#f5f2eb",
          light: "#faf8f4",
          muted: "#c8c4b7",
          subtle: "#8e8a7e",
        },
        champagne: {
          50: "#faf7ee",
          100: "#f3ecd4",
          200: "#e8d8aa",
          300: "#dcc17b",
          400: "#d4af37", // Primary Champagne Gold
          500: "#b89428",
          600: "#91701e",
          700: "#6d5218",
          800: "#493613",
          900: "#2a1e0b",
        },
        bronze: {
          DEFAULT: "#c5a880",
          light: "#dfcaa8",
          dark: "#8c7851",
          deep: "#54442b",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "gold-glow": "0 0 35px -5px rgba(212, 175, 55, 0.18)",
        "gold-glow-lg": "0 0 60px -10px rgba(212, 175, 55, 0.28)",
        "card-subtle": "0 4px 20px -2px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at center, var(--tw-gradient-stops))",
        "gold-shimmer": "linear-gradient(135deg, #f3ecd4 0%, #d4af37 50%, #c5a880 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(30px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
