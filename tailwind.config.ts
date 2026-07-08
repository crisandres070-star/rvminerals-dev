import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0F14",
          900: "#0A0F14",
          800: "#0D1117",
          700: "#12181F",
        },
        navy: "#0F1B2E",
        graphite: "#1A1B1D",
        copper: {
          DEFAULT: "#D97A3D",
          light: "#E08A3E",
        },
        cream: "#F5F3EF",
        paper: "#F5F5F5",
        muted: "#9CA3AF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(100deg, rgba(10,15,20,0.92) 0%, rgba(10,15,20,0.55) 38%, rgba(10,15,20,0.12) 68%, rgba(10,15,20,0.02) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
