/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#11171C",
        gold: {
          100: "#fff4d4",
          200: "#ffeaa9",
          300: "#ffdf7e",
          400: "#ffd553",
          500: "#ffca28",
          600: "#cca220",
          700: "#997918",
          800: "#665110",
          900: "#332808",
        },
        blue: {
          100: "#d4dcff",
          200: "#a9b9ff",
          300: "#7f95ff",
          400: "#5472ff",
          500: "#294fff",
          600: "#213fcc",
          700: "#192f99",
          800: "#102066",
          900: "#081033",
        },
        white: {
          100: "#f6f6f6",
          200: "#ededed",
          300: "#e5e5e5",
          400: "#dcdcdc",
          500: "#d3d3d3",
          600: "#a9a9a9",
          700: "#7f7f7f",
          800: "#545454",
          900: "#2a2a2a",
        },
        black: "#212121",
      },
    },
    fontFamily: {
      bree: "Bree, Times New Roman, Times, serif",
    },
    backgroundImage: {
      "img-memoji": "url('../public/assets/memoji/MEMOJI_GROUP.png",
    },
  },
  screens: {
    xs: "400px",
    "3xl": "1680px",
    "4xl": "2200px",
  },
  maxWidth: {
    "10xl": "1512px",
  },
  borderRadius: {
    "5xl": "40px",
  },
  plugins: [],
};
