/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-10": "#ffc451"
      },
      fontFamily: {
        "VasirBold": ["Vasir Bold"]
      },
      screens: {
        mid: "992px"
      }
    },
  },
  plugins: [
    function ({addVariant}) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
    }
  ],
}

