/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in the src folder with these extensions
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
// tailwind.config.js
module.exports = {
  darkMode: 'class', // enables class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ensures all files in the src folder are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
