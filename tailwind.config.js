/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors:{
        blackish: '#242424',
        lightGray: "#cecaef",
        darkRed: "#d43517",
      },
    },
  },
  plugins: [],
}
