// This was before we looked into doing server side rendering with esm (ES Module)
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

// Accoridng to https://stackoverflow.com/questions/66402879/in-vite2-how-to-import-an-esmodule-in-tailwind-config-js
// This is what I must do to fix the error I'm getting locally when trying to run `npm run build:client`
// [vite:css] Failed to load PostCSS config (searchPath: /Users/blaketaylor/Library/Code/blake-complete-react-v8/src): [ReferenceError] module is not defined in ES module scope
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindConfig from './tailwind.config.js'

export default {
  plugins: [tailwind(tailwindConfig), autoprefixer],
}