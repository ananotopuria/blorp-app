/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fafdff",
        black: "#16171a",
        blueViolet: "#430067",
        grey: "#212529",
        gainsboro: "#DEE2E6",
        red: "#7f0622",
        green: "#bfff3c",
        lightGrey: "#6C757D",
        darkGrey: "#343A40",
        lavender: "#DDD2FF",
        pink: "#ff80a4",
        yellow: "#ffd100",
        darkerGrey: "#474747",
        lighterGrey: "#CED4DA",
        blackish: "#0D0F10",
        brightLavender: "#B588F4"
      },
      fontFamily: {
        fixedsys: ["fixedsys", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
