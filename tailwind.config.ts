import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: '#161616',
        epi: '#181818',
        art: '#242424',
        com: '#1C1C1C',
        button: '#F2255E'
      },
    },
  },
  plugins: [],
} satisfies Config;
