/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/**/*.js",
    // Add more file types if needed
  ],
  darkMode: "media", // or 'class'

  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
        Montserrat: ["Montserrat"],
      },
    },
  },
  variants: {},
  plugins: [require("tailwind-scrollbar")],
};
