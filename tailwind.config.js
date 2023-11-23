/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Hasklug-medium', 'sans-serif'],
      },
    },
    colors: {
      black: "#292929",
      orange: "#FA8072",
      gray:"#474747",
      white: "#F0F4EF",
      purple: "#662E9E",
    },
  },
  plugins: [],
}

