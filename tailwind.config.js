module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["halloween"],
  },
  plugins: [require("daisyui")],
}
