//tailwind.config.js
const colors  = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
      borderWidth: {
        '3': '3px',
      },
    },
    fontFamily: {
    'sans': ['Noto Sans', 'sans-serif'],
    'serif': ['Noto Serif', 'ui-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}