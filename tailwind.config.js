/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        "about-b-color": "rgb(147, 51, 234)",
        "projects-b-color": "rgb(192, 132, 252)",
      },
    },
    fontFamily: {
      "hero-font": "Sriracha",
    },
  },
  plugins: [],
};

