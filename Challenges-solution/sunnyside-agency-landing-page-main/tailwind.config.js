/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    screens: {
      xsm: "375px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        // Primary
        softRed: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        darkDesaturatedCyan: "hsl(167, 40%, 24%)",
        darkBlue: "hsl(198, 62%, 26%)",
        darkModerateCyan: "hsl(168, 34%, 41%)",
        // Neutral
        veryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
        veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        grayishBlue: "hsl(210, 4%, 67%)",
        grayWhite: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Barlow: "Barlow",
        Fraunces: "Fraunces",
      },
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
    },
  },
  plugins: [],
};
