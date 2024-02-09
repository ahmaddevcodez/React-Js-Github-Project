/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        BgCOlor: "#141D2F",
        NavLightHeadingColor: "#fff",
        NavDarkHeadingColor: "#2B3442",
        NavDarkParaColor: "#2B34422",
      },
    },
  },
  plugins: [],
};
