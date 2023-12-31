/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    ".node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'almostWhite': 'hsl(0, 0%, 98%)',
        'mediumGray': 'hsl(0, 0%, 41%)',
        'almostBlack': 'hsl(0, 0%, 8%)'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

