/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'hind-serif': 'Hind',
        'montse-serif': 'Montserrat'
      },
      backgroundImage: theme => ({
        'background-login-large': "url('src/assets/img/wallpapers/login-wall-lg.png')",
        'background-login-small': "url('src/assets/img/wallpapers/login-wall-sm.png')",
      })
    },
    colors: {
      'primary-orange-color': '#F89A1D',
      'secondary-blue-color': '#05364D',
      'complementary-white-color': '#EEE9E4',
      'complementary-gray-light-color': '#D9D9D9',
      'white-pure-color': '#FFFFFF'
    },
    screens: {
      'xsm': '200px',
      // => @media (min-width: 200px) { ... }
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
      'md': '960px',
      // => @media (min-width: 960px) { ... }
      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    textColor: {
      'primary-orange': '#F89A1D',
      'secondary-blue': '#05364D',
      'complementary-white': '#EEE9E4',
      'complementary-gray-light': '#D9D9D9',
      'white-pure': '#FFFFFF'
      }
  },
  plugins: [],
}