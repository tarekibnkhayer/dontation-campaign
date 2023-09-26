/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        texture : `url("../../src/assets/Rectangle 4281.png")`,
      },
    },
  },
  plugins: [require("daisyui")],
}

