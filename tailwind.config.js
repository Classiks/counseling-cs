/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // content: [
  //   "./src/**/*.{js,jsx,ts,tsx}",
  // ],
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "step": {
          DEFAULT: "#FF9800",
          "secondary": "#FF5722",
          "tertiary": "#FFC107",
          "background": "#FFFFFF",
          "text": "#2c2c2c",
          "textInverted": "#FFFFFF"
        },
        "tcm": {
          DEFAULT: "#1b51c5",
          "secondary": "#032ea3",
          "tertiary": "#6c99e7",
          "background": "#FFFFFF",
          "text": "#FFFFFF",
          "textInverted": "#000000"
        },
        "tcmgreen": {
          DEFAULT: "#54df72",
          "secondary": "#2dad4f",
          "tertiary": "#59da7b",
          "background": "#FFFFFF",
          "text": "#000000",
          "textInverted": "#FFFFFF"
        },
      }
    }
  }
}
