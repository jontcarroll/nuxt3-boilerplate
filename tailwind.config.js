/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        monoton: ['Monoton', 'sans-serif'],
        chakra: ['Chakra Petch', 'sans-serif']
      }
    }
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'coffee',
      'dracula',
      'synthwave',
      'retro',
      'night',
      'cmyk',
      'nord',
      'emerald',
      'lofi',
      'black',
      'lemonade',
      'forest',
      'aqua',
      'sunset',
      'corporate'
    ]
  }
}
