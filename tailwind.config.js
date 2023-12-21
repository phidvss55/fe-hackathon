/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        blue: {
          50: "#eaf6ff",
          100: "#bfe2ff",
          200: "#a0d4ff",
          300: "#75c1ff",
          400: "#5ab5ff",
          500: "#31a2ff",
          600: "#2d93e8",
          700: "#2373b5",
          800: "#1b598c",
          900: "#15446b",
        },
        green: "#00E272",
      },
      secondary: {
        green: {
          400: "#04F17C",
          500: "#00B75C",
          600: "#00AC8C",
          700: "#0091A8",
        },
      },
      neutral: {
        gray: {
          200: "#C0C0C0",
          300: "#C7CBD1",
        },
      },
    },
    extend: {
      animation: {
        "sideview-left": "sideviewInLeft .5s forwards",
        "sideview-right": "sideviewSlideInRight .5s  forwards",
        "sideview-slide-out-left": "sideviewSlideOutLeft .5s ",
        "sideview-slide-out-right": "sideviewSlideOutRight .5s ",
      },
      colors: {
        "nav-bar": "#0140C1",
        "nav-bar-item-selected": "#367AFF",
        "nav-bar-item-choosed": "#083DA7",
        "white-50": "#FEFEFF",
      },
      fontFamily: {
        primary: ["Inter"],
      },
      boxShadow: {
        s: "-2px 12px 30px -4px rgba(215, 221, 232, 0.50), 0px 0px 2px 0px rgba(215, 221, 232, 0.70)",
        sideview: "4px 6px 20px 4px rgba(215, 221, 232, 0.50)",
      },
      borderRadius: {
        circle: "45px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  variants: {
    backgroundColor: ["group-hover"],
  },
});
