/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      '3xl': '0 2px 2px 2px rgba(250, 250, 250, 0.3)',
    }
  },
  plugins: [],
}
