/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'aot', // 'jit'
  purge: [], // purging of classes from tailwind css
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
