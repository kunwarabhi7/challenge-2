/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '375px',
        // => @media (min-width: 375px) { ... }
        'desktop' : '1440px'
        // => @media (min-width: 1440px) { ... }
    },
  },
  },
  plugins: [],
}
