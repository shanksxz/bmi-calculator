/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_green: "#e0ddaa",
        primary_red: "#ff5f5f"
      },
      backgroundColor: {
        primary_green: "#e0ddaa",
        primary_gray: "#141e27",
        secondary_gray : "#203239",
        primary_red: "#ff5f5f"
      },
      borderColor: {
        primary_green: "#0cd174"
      }
    },
  },
  plugins: [],
}

