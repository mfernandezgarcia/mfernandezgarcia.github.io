const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        rose: colors.rose,
        sky: colors.sky,
      },
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
}
