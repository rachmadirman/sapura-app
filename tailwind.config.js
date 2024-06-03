/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "izeno-main" : "#10133E",
        "izeno-red" : "#FF1628",
        "izeno-white" : "#F6F6F6",
        "izeno-black" : "#333333",
        "izeno-light-gray" : "#eeeded",
        "light-white" : "rgb(255,255,255,0.18)",
        "izeno-gradien-2" : "#b5c6e0",
        "izeno-gradien-1" : "#ebf4f5"
      }
    },
  },
  plugins: [],
}

