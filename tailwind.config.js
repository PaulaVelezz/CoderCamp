/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['Space Grotesk', 'sans-serif'],
        'drukTrial': ['Druk Trial', 'sans-serif'],
        'drukTrialWide': ['Druk Wide Trial', 'sans-serif']
      },
    },
  },
  plugins: [],
}