/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "500px",
      },
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
          "background": "#FFFFFF",
          "text": "#2c2c2c",
          "textInverted": "#FFFFFF",
        },
        "tcm": {
          DEFAULT: "#19a527",
          100: "#d1edd4",
          200: "#a3dba9",
          300: "#75c97d",
          400: "#47b752",
          500: "#19a527",
          600: "#14841f",
          700: "#0f6317",
          800: "#0a4210",
          900: "#052108",
          // DEFAULT: "#1b51c5",
          // 100: "#d1dcf3",
          // 200: "#a4b9e8",
          // 300: "#7697dc",
          // 400: "#4974d1",
          // 500: "#1b51c5",
          // 600: "#16419e",
          // 700: "#103176",
          // 800: "#0b204f",
          // 900: "#051027",
          "background": "#FFFFFF",
          "text": "#FFFFFF",
          "textInverted": "#000000",
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

