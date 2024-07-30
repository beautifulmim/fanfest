/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
import delays from 'tailwindcss-animation-delay'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [ animations, delays ],
}