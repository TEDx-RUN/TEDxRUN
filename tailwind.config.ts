import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "4rem",
      },
    },
    fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-montserrat)", "serif"],
    },
    screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
    },
    extend: {
      backgroundImage:{
        event:"url('/assets/eventImage.jpg')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
