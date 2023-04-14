/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

module.exports = withMT({
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "sa-transparent": "transparent",
      "sa-black": "#17191e",
      "sa-slate": "#383849",
      "sa-gray": "#4D4D5E",
      "sa-white": "#E8E9EA",
      "sa-green": "#6cdec9",
      "sa-purple": "#5d45b4",
      ...colors,
    },
    extend: {},
  },
  plugins: [],
});
