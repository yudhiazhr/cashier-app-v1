/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        primary: '#EBA83A',
        secondary: '#BB371A',
        tertiary: '#FFF8D9',
        quaternary: '#D5DBB3'
      }
    },
  },
  plugins: [],
}