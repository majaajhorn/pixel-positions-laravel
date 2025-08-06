/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue", // if you use Vue
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': "#060606"
      }
    },
  },
  plugins: [],
}