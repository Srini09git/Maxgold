/** @type {import('tailwindcss').Config} */
module.exports = {
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
        purple: "#7b071e"
      },
      fontFamily: {
        fredoka: ['Fredoka One', 'Poppins', 'Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
