module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "1xl": "1024px",
        "0xl": "1210px",
      },
    },
  },
  plugins: [],
};
