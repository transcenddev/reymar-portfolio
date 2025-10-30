import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    screens: {
      sms: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      fontFamily: {
        sans: "var(--font-archivo)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "4rem",
        },
      },
      colors: {
        // Primary purple accent - same for both themes
        primary: "#5928e5",

        // Semantic color tokens for light/dark theme support
        background: {
          DEFAULT: "#ffffff", // Light theme background
          secondary: "#f5f5f4", // Light theme secondary background (stone-100)
        },
        foreground: {
          DEFAULT: "#1c1917", // Light theme text (stone-900)
          muted: "#57534e", // Light theme muted text (stone-600)
        },
        border: {
          DEFAULT: "#d6d3d1", // Light theme border (stone-300)
          muted: "#e7e5e4", // Light theme muted border (stone-200)
        },
      },
    },
  },
  plugins: [],
};

export default config;
