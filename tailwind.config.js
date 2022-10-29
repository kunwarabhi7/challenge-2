/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '375px',
        // => @media (min-width: 992px) { ... }
        'desktop' : '1440px'
    },
  },
  },
  plugins: [],
}
