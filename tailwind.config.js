/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B1B1B',
        secondary: '#4AF626',
      },
      fontFamily: {
        primary: ['monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

