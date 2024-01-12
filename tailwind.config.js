/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "step": {
          DEFAULT: "#FF9800",
          100: "#ffeacc",
          200: "#ffd699",
          300: "#ffc166",
          400: "#ffad33",
          500: "#ff9800",
          600: "#cc7a00",
          700: "#995b00",
          800: "#663d00",
          900: "#331e00",
          "secondary": "#FF5722",
          "tertiary": "#FFC107",
          "background": "#FFFFFF",
          "text": "#2c2c2c",
          "textInverted": "#FFFFFF",
          "complementary": {
              DEFAULT: "#3300ff",
              100: "#d6ccff",
              200: "#ad99ff",
              300: "#8566ff",
              400: "#5c33ff",
              500: "#3300ff",
              600: "#2900cc",
              700: "#1f0099",
              800: "#140066",
              900: "#0a0033"
          },
        },
        "tcm": {
          DEFAULT: "#1b51c5",
          100: "#d1dcf3",
          200: "#a4b9e8",
          300: "#7697dc",
          400: "#4974d1",
          500: "#1b51c5",
          600: "#16419e",
          700: "#103176",
          800: "#0b204f",
          900: "#051027",
          "secondary": "#032ea3",
          "tertiary": "#6c99e7",
          "background": "#FFFFFF",
          "text": "#FFFFFF",
          "textInverted": "#000000",
          "complementary": "#c5621b"
        },
        "tcmgreen": {
          DEFAULT: "#54df72",
          "secondary": "#2dad4f",
          "tertiary": "#59da7b",
          "background": "#FFFFFF",
          "text": "#000000",
          "textInverted": "#FFFFFF"
        },
      },
    },
  },
  plugins: [],
}

