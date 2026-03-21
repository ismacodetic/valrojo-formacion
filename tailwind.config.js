/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5e6e1",
          100: "#e8cfc4",
          500: "#a83119",
          600: "#941f0f",
          700: "#7a1605",
          900: "#4a0a00",
        },
        accent: {
          500: "#f97316",
          600: "#ea580c",
        },
      },
    },
  },
  plugins: [],
}
