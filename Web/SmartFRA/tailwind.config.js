/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'hind-serif': 'Hind',
        'montse-serif': 'Montserrat'
      }
    },
  },
  plugins: [],
}