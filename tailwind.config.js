/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-10": "#6D829B",
        "blue-05": "#E8ECED",
        "brown-10": "#83603F",
        "brown-20": "#F4EAE1",
        "brown-30": "#55391C",
        "green-40": "#333F24",
        "green-30": "#768C6E",
        "green-20": "#788C75",
        "green-10": "#EFF9ED",
        "grey-10": "#ABABAB",
        "yellow-10": "#FAFFD8",
        "yellow-20": "#E5D9B6",
        "gold-10": "#D1B28A",
      },
    },
  },
  plugins: [],
};
