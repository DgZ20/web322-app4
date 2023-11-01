/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [`./views/**/*.ejs`],
//   theme: {
//     extend: {},
//   },
//   plugins: [require('@tailwindcss/typography'), require('daisyui')],
// }

module.exports = {
  content: [],
    daisyui: {
      themes: ["light", "dark", "valentine"],
  },
  plugins: [],
  purge: ['./**/*.ejs'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

