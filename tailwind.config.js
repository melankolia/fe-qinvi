/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-10": "#1D4956",
        "blue-05": "#8EABB4",
        "brown-90": "#B5A088",
        "brown-80": "#896640",
        "brown-70": "#55391C",
        "brown-60": "#704F22",
        "brown-50": "#98744D",
        "brown-40": "#C39F79",
        "brown-30": "#DBC184",
        "brown-20": "#EFE8DE",
        "brown-10": "#F8F7F3",
        "green-20": "#788C75",
        "green-10": "#EFF9ED",
        "grey-10": "#ABABAB",
      },
    },
  },
  plugins: [],
};
