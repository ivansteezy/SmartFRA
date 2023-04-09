/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true,
  },
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'hind-serif': 'Hind',
        'montse-serif': 'Montserrat'
      },
      backgroundImage: theme => ({
        'background-login-large': "url('src/assets/img/wallpapers/login-wall-lg.png')",
        'background-login-small': "url('src/assets/img/wallpapers/login-wall-sm.png')",
        'background-dashboard-large': "url('src/assets/img/wallpapers/dashboard-large.png')",
        'background-login-resident-large': "url('src/assets/img/wallpapers/login-register-wall-lg-06.svg')",
        'background-login-resident-small': "url('src/assets/img/wallpapers/login-wall-sm.png')",
        
      }),
      // that is animation class
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
    colors: {
      'primary-orange-color': '#F89A1D',
      'secondary-blue-color': '#05364D',
      'complementary-white-color': '#EEE9E4',
      'complementary-gray-light-color': '#D9D9D9',
      'white-pure-color': '#FFFFFF',
      'white-pure': '#FFFFFF',
      'red-alert': '#FF6363'
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
      'xlg': '1700px',
      // => @media (min-width: 1700px) { ... }
    },
    textColor: {
      'primary-orange': '#F89A1D',
      'secondary-blue': '#05364D',
      'complementary-white': '#EEE9E4',
      'complementary-gray-light': '#D9D9D9',
      'white-pure': '#FFFFFF',
      'red-alert': '#FF6363'
      }
  },
  plugins: [require('preline/plugin')],
}