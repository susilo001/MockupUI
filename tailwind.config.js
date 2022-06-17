module.exports = {
  content: [
    "./src/*.html",
    "./src/components/*.ts"
  ],
  daisyui: {
    styled: true,
    themes: ["emerald", "dracula"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dracula",
    lightTheme: "emerald",
  },
  theme: {
    fontFamily: {
      'content': ['Roboto', 'sans-serif', 'Regular-400'],
      'title': ['Lato', 'sans-serif', 'Bold-700'],

    },
    extend: {
      spacing: {
        '100': '37rem'
      }
    },
  },
  plugins: [require("daisyui"), require("autoprefixer")],
}
