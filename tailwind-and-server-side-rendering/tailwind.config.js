// Prior to ES Module
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("@tailwindcss/forms")],
// };

export default {
  purge: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}