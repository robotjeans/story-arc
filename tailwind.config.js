/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "sa-black": "#1b1b21",
      "sa-slate": "#383849",
      "sa-gray": "#4D4D5E",
      "sa-white": "#E8E9EA",
      "sa-green": "#6cdec9",
      "sa-purple": "#5d45b4",
    },
    extend: {},
  },
  plugins: [],
};
