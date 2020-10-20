module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1920px'
      },
      spacing:{
        '120':'30rem',
        '100':'25rem',
        '90':'22.5rem',
        '80':'20rem',
        '75':'18.75rem',
        '70': '17rem',
        '60':'15rem',
        '25':'6.25rem'
      },
      opacity:{
        '90':'.9'
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    fontWeight: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [],
}
