/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      animation: {
        "first-show-intro": "1s 1 forwards first-show-intro",
        "first-show-picture": "1s 1 forwards first-show-picture",
      },
      keyframes: {
        "first-show-intro": {
          "0%": { transform: "translateX(-100px)" },
          "100%": { transform: "translateX(0)" },
        },
        "first-show-picture": {
          "0%": { transform: "translateX(100px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
}
