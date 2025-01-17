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
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		backgroundImage: {
			fondo: "url('/paqchas.jpg')",
			'blue-gradient': 'linear-gradient(90deg, rgba(6,21,85,1) 16%, rgba(0,0,0,1) 38%, rgba(1,9,24,1) 99%)',
			'conic-gradient': 'linear-gradient(to right, rgb(15, 23, 42), rgb(88, 28, 135), rgb(15, 23, 42))',
			'custom-gradient': 'linear-gradient(to bottom, #24243e, #302b63, #0f0c29)',
		},
		textShadow: {
			default: '2px 2px 4px rgba(0, 0, 0, 0.5)',
			heavy: '10px 10px 12px rgba(0, 0, 0, 0.75)',
		},
		fontFamily: {
			'Bebas-Neue': ['Sour Gummy', 'sans-serif'],
			'julius': ['Julius Sans One', 'sans-serif']
		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require('tailwindcss-textshadow')],
} satisfies Config;
