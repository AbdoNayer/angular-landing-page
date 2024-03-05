/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      '2lg': {'max': '2000px'},
      'lg': {'max': '1100px'},
      'md': {'max': '767px'},
      'sm': {'max': '500px'}
    }
  },
  plugins: [],
}

