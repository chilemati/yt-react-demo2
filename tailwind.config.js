/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#0000ff',
        green: '#00ff00',
      },
      fontFamily: {
        bungee: "Bungee Tint",
        poppines: "Poppins",
        edu: "Edu VIC WA NT Beginner"
      }
    },
  },
  plugins: [],
}