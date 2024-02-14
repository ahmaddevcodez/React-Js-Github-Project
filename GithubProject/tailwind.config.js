/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        UniversalParaColor: "#fff",
        UniversalHeadingColor: "#fff",
        UniversalLinkColor: "#136DFF",
        UniversalBtnTextColor: "#fff",
        UniversalBtnBgColor: "#0079FF",
        BgCOlor: "#141D2F",
        NavLightHeadingColor: "#fff",
        NavDarkHeadingColor: "#2B3442",
        NavDarkParaColor: "#697C9A",
        SeacrhBarDarkBgColor: "#1E2A47",
        SeacrhBarLightBgColor: "#FEFEFE",
        HeroDarkBgColor: "#1E2A47",
        HeroLightBgColor: "#FEFEFE",
        HeroSmallSectionDarkBgColor: "#141D2F",
        HeroSmallSectionLightBgColor: "#F6F8FF",
        HeroSectionUnavaibleTextColor: "#F6F8FF",
      },
    },
  },
  plugins: [],
};
