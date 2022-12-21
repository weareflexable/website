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
        partner: "url('/partner.jpeg')",
        partner_mobile: "url('/partner-mobile.jpeg')",
        restaurant: "url('/restaurant.jpg')",
        nightlife: "url('/nightlife.jpeg')",
        landing: "url('/landing.jpeg')",
        eve: "url('/event.jpeg')",
      },
      backgroundPosition: {
        "center-top": "center top",
        "center-bottom": "center bottom",
        "right-center": "right center",
        "right-bottom": "right bottom",
        "left-center": "left center",
        "left-top": "left top",
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
        lightgrey: {
          100: "#FAFAFB",
          200: "#F5F6F7",
          300: "#EEEFF2",
          400: "#E2E4E8",
          500: "#CACDD5",
          600: "#B2B7C2",
          700: "#A4A9B6",
          800: "#959CAB",
          900: "#8C93A3",
        },
      },
    },
  },
  plugins: [],
};
