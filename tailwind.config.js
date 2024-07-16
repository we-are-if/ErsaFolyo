/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./slices/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f1fafa",
          100: "#dbf0f2",
          200: "#bce0e5",
          300: "#8dcad3",
          400: "#58aab8",
          500: "#3c8e9e",
          600: "#357485",
          700: "#326372",
          800: "#2e505c",
          900: "#2a444f",
          950: "#182b34",
        },
      },
    },
  },
  plugins: [],
};
