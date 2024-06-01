/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ["Montserrat", "sans-serif"],
        'anton': ["Anton", "sans-serif"]
      },
      colors: {
       ttPrimaryBg: '#F9F9F9',
       ttPrimary: '#061A3A',
       ttSecondary: '#ff7c5b',
       ttTerTiary: '#808080'

      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

