/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Whitney: ["Whitney"],
        Ginto: ["Ginto"],
        GintoNord: ["GintoNord"],
        ggSans: ["ggSans"],
      },

      colors: {
        primary_blue: "#404eed",
        primary_black: "hsl(206,0,0)",
      },
    },
    screens: {
      xs: "320px",
      sm: "480px",
      md: "640px",
      lg: "768px",
      xl: "992px",
      "2xl": "1080px",
      "3xl": "1100px",
      "4xl": "1300px",
    },
  },
  plugins: [],
};
