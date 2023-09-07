/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: "#FFFFFF",
        btncolor: "#OF121E",
        sidebarcolor: "#111727",
        textlight: "#EFF4F8",
        textdark: "#313131",
        tabhover: "#37465C",
      }
    },
  },
  plugins: [],
}