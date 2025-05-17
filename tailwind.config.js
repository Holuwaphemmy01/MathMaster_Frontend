// /** @type {import('tailwindcss').Config} */
// export default {
//   // ... other config
//   theme: {
//     extend: {
//       fontFamily: {
//         pacifico: ['Pacifico', 'cursive'],
//       },
//       // ... other theme extensions
//     },
//   },
//   // ... rest of config
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'], // 'cursive' is a fallback
        // ... other fonts
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-font-inter'), // If you chose this plugin
  ],
}