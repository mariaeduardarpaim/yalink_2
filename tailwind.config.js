/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'yealink-green': '#1fa774',
        'yealink-dark-green': '#168a5f',
        'yealink-blue': '#064e3b',
        'yealink-dark-blue': '#111827',
        'yealink-gray': '#f8f9fa',
        'yealink-text': '#374151',
        'yealink-dark-bg': '#01241a',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};