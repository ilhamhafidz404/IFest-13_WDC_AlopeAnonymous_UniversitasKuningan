/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["'poppins'", "sans-serif"],
        sekunder: ["'Water Brush'", "cursive"],
      },
      colors: {
        primary: "#A6752E",
        secondary: "#fafafa",
      },
    },
  },
  plugins: [],
};
