/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        siteBackground: { light: "#f5f5f5", dark: "#212121" },
        primaryButton: { light: "#3fbac2", dark: "#3fbac2" },
        secondaryButton: { light: "#f29f05", dark: "#ffb300" },
        hoverBg: { light: "#e1e1e1", dark: "#303030" },
        primaryText: { light: "#333333", dark: "#ffffff" },
        secondaryText: { light: "#666666", dark: "#cccccc" },
        headingText: { light: "#222222", dark: "#dddddd" },
        link: { light: "#3fbac2", dark: "#3fbac2" },
        inputBorder: { light: "#bbbbbb", dark: "#999999" },
        inputFocus: { light: "#3fbac2", dark: "#3fbac2" },
        inputText: { light: "#333333", dark: "#ffffff" },
        inputBg: { light: "#f5f5f5", dark: "#333333" },
      },
      keyframes: {
        waving: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(8deg)" },
          "40%": { transform: "rotate(-8deg)" },
          "60%": { transform: "rotate(8deg)" },
          "80%": { transform: "rotate(-8deg)" },
        },
      },
      animation: {
        wave: "waving 2s linear infinite",
      },
    },
  },
  plugins: [],
};
