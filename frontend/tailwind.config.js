module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_cc: "#ffffffcc", A700: "#ffffff", A700_4c: "#ffffff4c" },
        black: { 900: "#000000" },
        gray: {
          100: "#f2f2f2",
          200: "#e8e8e8",
          500: "#aaadac",
          600: "#7f7f7f",
          800: "#4a4543",
          900: "#081122",
          "500_01": "#ababab",
          "500_02": "#afabab",
          "600_01": "#757575",
          "700_a5": "#616060a5",
        },
        blue_gray: {
          100: "#d9d9d9",
          400: "#8c8c8c",
          900: "#2c2c2c",
          "100_01": "#c8cace",
          "900_01": "#333333",
        },
        teal: {
          100: "#9fd8cf",
          "100_01": "#9fd7cf",
          A400: "#2ce1c6",
          "200_19": "#70d9c919",
        },
        yellow: { 900: "#d27c2c" },
        colors: "#4a4a4a",
        deep_purple: { A200: "#774eee" },
        pink: { A200: "#f82fc0" },
      },
      fontFamily: { prompt: "Prompt", lekton: "Lekton", roboto: "Roboto" },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#000000,#2ce1c6,#000000)",
        gradient1: "linear-gradient(90deg ,#9fd8cf,#2ce1c6,#333333)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
