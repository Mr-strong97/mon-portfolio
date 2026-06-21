/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        'primary-dark': '#1D4ED8',
        'primary-light': '#3B82F6',
        'primary-bg': '#EFF6FF',
        dark: '#0A0A0A',
        'dark-secondary': '#1A1A1A',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        fira: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}
