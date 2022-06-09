module.exports = {
  content: [
    "./components/*.html",
    "./*.html",
    "./templates/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("autoprefixer")],
}
