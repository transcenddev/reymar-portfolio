import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Add dark mode
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
        primary: "#5928e5",
        "red-orange": {
          500: 'color-mix(in srgb, theme("colors.red.500") 50%, theme("colors.orange.500") 50%)', // Add dark mode colors
          dark: {
            bg: "#121212",
            text: "#ffffff",
            accent: "#2a004a",
          },
          light: {
            bg: "#ffffff",
            text: "#121212",
            accent: "#fcf4ff",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
