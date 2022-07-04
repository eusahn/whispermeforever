/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headings: ["Playfair Display", "serif"],
        mono: ["Bebas Neue", "sans-serif"],
        body: ["Aleo", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.60rem",
      },
    },
  },
  plugins: [],
};
