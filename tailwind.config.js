module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing:{
        '120':'30',
        '100':'25',
        '90':'22.5rem',
        '80':'20rem',
        '75':'18.75',
        '60':'15rem',
        '25':'6.25rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
