/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Dark-Grayish-Blue": "hsl(227, 12%, 61%)",
        "Very-Dark-Blue": "hsl(233, 12%, 13%)",
        "Very-Pale-Red": " hsl(13, 100%, 96%)",
        "Very-Light-Gray": "hsl(0, 0%, 98%)",
        "Bright-Red": "hsl(12, 88%, 59%)",
        "Dark-Blue": "hsl(228, 39%, 23%)",
      },
      backgroundImage: {
        "simplify-desktop":
          "url('/src/assets/bg-simplify-section-desktop.svg')",
        "simplify-mobile": "url('/src/assets/bg-simplify-section-mobile.svg')",
        "tablet-bg": "url('/src/assets/bg-tablet-pattern.svg')",
      },
    },
  },
  plugins: [],
};
