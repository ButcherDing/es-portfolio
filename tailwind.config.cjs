/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/bg2.jpg')",
      },
      fontFamily: {
        montserrat: ["montserrat"],
        roboto: ["roboto"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
