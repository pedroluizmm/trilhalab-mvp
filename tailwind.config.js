/** @type {import('tailwindcss').Config} */
const defaultConfig = require("tailwindcss/defaultConfig")

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "*.{js,ts,jsx,tsx,mdx}", "app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    ...defaultConfig.theme,
    extend: {
      colors: {
        ...defaultConfig.theme.extend.colors,
        background: "#F2F2F2",
        primary: "#003366",
        "primary-light": "#B3C7E6",
        "gray-light": "#D1D1D1",
        "gray-medium": "#999999",
        "gray-dark": "#333333",
        "warning-light": "#FFEB99",
        "error-light": "#F8B6B7",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 4px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}