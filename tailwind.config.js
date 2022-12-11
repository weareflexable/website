/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      figtree: ["Figtree"],
    },
    extend: {
      backgroundImage: {
        landing: "url('/club.jpeg')",
        restaurant: "url('/restaurant.jpeg')",
        nightlife: "url('/nightlife.jpeg')",
      },
      colors: {
        primary: {
          300: "#494753",
          400: "#373637",
          500: "#373641",
          600: "#232323",
        },
        accent: {
          100: "#17FFA6",
          200: "#29B27E",
        },
      },
    },
  },
  plugins: [],
};
