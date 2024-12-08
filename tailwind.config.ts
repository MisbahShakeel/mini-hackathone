import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        lato: ['Lato', 'sana-serif'],
      },
      screens:{
        "max-sm": { 'max': '480px' },
        "sm": "481px",
        "md":  "640px",
        "lg": "780px",
        "xl": "892px",
        "2xl": "1028px",
        "3xl": "1248px"
      }
    },
  },
  plugins: [],
} satisfies Config;
