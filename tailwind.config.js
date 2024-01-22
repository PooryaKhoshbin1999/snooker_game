/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    boxShadow : {
      md: ' 10px 25px 50px -12px rgb(0 , 0 ,0)'
    },
    extend: {
      fontFamily: {
        logo : "Logo",
        link : "common",
        common : "common2"
      },
    },
  },
  plugins: [],
};
