/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.twig"],
  safelist: [
    'px-3',
    'py-2',
    'bg-transparent',
    'rounded-full',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
