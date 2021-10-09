const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src//index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        teal: colors.teal,
        cyan: colors.cyan,
        orange: colors.orange,
        tan: "#D9C2b3",
      },
      backgroundImage: {
        // +         'footer-texture': "url('/img/footer-texture.png')",
                }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
