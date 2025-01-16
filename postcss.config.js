/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import-ext-glob': {},
    'postcss-import': {},
    'autoprefixer': {},
    'postcss-nested': {},
    'tailwindcss': {},
  }
}

module.exports = config