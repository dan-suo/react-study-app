import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

/** @type {import('postcss').Postcss} */
export default {
  plugins: [
    tailwind(),
    autoprefixer
  ]
}