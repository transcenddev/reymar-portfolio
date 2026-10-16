import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      screens: {
        sms: "375px",
        md: "768px",
        lg: "1200px",
      },
      fontFamily: {
        sans: "var(--font-inter)",
        display: "var(--font-display)",
        mono: "ui-monospace, SFMono-Regular, Monaco, 'JetBrains Mono', Menlo, monospace",
      },
      fontSize: {
        display: [
          "clamp(2.75rem, 10vw, 8.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.04em" },
        ],
        statement: [
          "clamp(2rem, 5.5vw, 4.75rem)",
          { lineHeight: "1.02", letterSpacing: "-0.03em" },
        ],
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
