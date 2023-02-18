/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './design-system/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      'primary-light': 'var(--color-primary-light)',
      'primary-dark': 'var(--color-primary-dark)',
      secondary: 'var(--color-secondary)',
      'secondary-light': 'var(--color-secondary-light)',
      'secondary-dark': 'var(--color-secondary-dark)',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-raleway)'],
        serif: ['var(--font-lora)'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
