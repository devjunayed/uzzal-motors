import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: ["class"],
  theme: {
    colors: {
      ...colors,
      black: "#000000",
      primary: {
        DEFAULT: "#FF0000"
      },
      selective_yellow: {
        DEFAULT: "#ffb508",
        100: "#352500",
        200: "#6a4a00",
        300: "#9f6f00",
        400: "#d49500",
        500: "#ffb508",
        600: "#ffc43b",
        700: "#ffd36c",
        800: "#ffe29d",
        900: "#fff0ce",
      },
      federal_blue: {
        DEFAULT: "#07004d",
        100: "#01000f",
        200: "#03001f",
        300: "#04002e",
        400: "#05003d",
        500: "#07004d",
        600: "#0e00a3",
        700: "#1500fa",
        800: "#6052ff",
        900: "#b0a8ff",
      },
      steel_blue: {
        DEFAULT: "#2d82b7",
        100: "#091a25",
        200: "#12344a",
        300: "#1b4f6f",
        400: "#246994",
        500: "#2d82b7",
        600: "#4a9fd3",
        700: "#78b7de",
        800: "#a5cfe9",
        900: "#d2e7f4",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
