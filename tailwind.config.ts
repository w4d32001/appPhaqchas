import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: {
          "50": "#fefae8",
          "100": "#fef3c3",
          "200": "#fee48a",
          "300": "#fecd46",
          "400": "#fbb514",
          "500": "#eb9b07",
          "600": "#cb7503",
          "700": "#984d06",
          "800": "#85410e",
          "900": "#713512",
          "950": "#421a06",
        },
        malachite: {
          "50": "#f0fde8",
          "100": "#ddfacd",
          "200": "#bcf6a0",
          "300": "#92ed69",
          "400": "#61dd2c",
          "500": "#4dc51d",
          "600": "#389d13",
          "700": "#2b7813",
          "800": "#275f15",
          "900": "#235116",
          "950": "#0e2c07",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        fondo: "url('/paqchas.webp')",
        "blue-gradient":
          "linear-gradient(90deg, rgba(6,21,85,1) 16%, rgba(0,0,0,1) 38%, rgba(1,9,24,1) 99%)",
        "conic-gradient":
          "linear-gradient(to right, rgb(15, 23, 42), rgb(88, 28, 135), rgb(15, 23, 42))",
        "custom-gradient":
          "linear-gradient(to bottom, #24243e, #302b63, #0f0c29)",
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        heavy: "10px 10px 12px rgba(0, 0, 0, 0.75)",
        neutro: "10px 10px 12px rgba(255, 255, 255, 1)",
      },
      fontFamily: {
        "Bebas-Neue": ["Sour Gummy", "sans-serif"],
        julius: ["Julius Sans One", "sans-serif"],
        nunito: ["Nunito"],
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-textshadow")],
} satisfies Config;
