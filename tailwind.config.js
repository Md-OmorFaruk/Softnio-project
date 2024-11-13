/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Add your HTML files here if you have other file types
    "./src/**/*.{html,js}", // Or your custom folder structure for components
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
