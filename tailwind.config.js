/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        aque: '#292929',
        baque: '#0f172a',
        verde:'#3d8554',
        new:'#0f192c',
    }
  },
  fontFamily: {
    Montserrat: ["Montserrat", "sans-serif"],
   },
  plugins: []
}}
