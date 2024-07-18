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
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5rem" }],
        sm: ["0.875rem", { lineHeight: "1.5rem" }],
        base: ["1rem", { lineHeight: "1.75rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "2rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "3.5rem" }],
        "6xl": ["3.75rem", { lineHeight: "1.2" }],
        "7xl": ["4.5rem", { lineHeight: "1.2" }],
        "8xl": ["6rem", { lineHeight: "1.2" }],
        "9xl": ["8rem", { lineHeight: "1.2" }],
      },
    },
  },
  plugins: [],
};
