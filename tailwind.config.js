/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DCCFC1",
        quinary: "#c6c6c6",
        forest: "#204045",
        navColor: "#e9e6e4",
        textColor: "#857c73",
        titleColor: "#7e9693"
      }
    },
  },
  plugins: [],
}

