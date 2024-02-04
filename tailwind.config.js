/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('./src/assets/split.png')",
        bills: "url('./src/assets/bills.png')",
      },
      animation: {
        small: "bounce 1s 2",
      },
    },
  },
  plugins: [],
};
