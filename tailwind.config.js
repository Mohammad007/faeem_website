/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#c9ab81',
        secondary: '#262626',
      },
      fontFamily: {
        trajan: ['Trajan Pro', 'serif'],
      },
    },
  },
  plugins: [],
};