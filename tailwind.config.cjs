/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        frankrl: ["'Frank Ruhl Libre'", "sans-serif"],
        notosansJP: ["'Noto Sans JP'", "sans-serif"],
        muili: ["'Mulish'", "sans-serif"],
      },
      colors: {
        neutral: {
          DEFAULT: "#343535",
          50: "#f6f7f7",
          100: "#e3e4e4",
          200: "#c7c8c8",
          300: "#a3a5a5",
          400: "#7f8281",
          500: "#656767",
          600: "#505151",
          700: "#424343",
          800: "#343535",
          900: "#303131",
        },
        "brand-blue": {
          DEFAULT: "#4fb1c1",
          50: "#f0fafb",
          100: "#d9f1f4",
          200: "#b8e4e9",
          300: "#87cfd9",
          400: "#4fb1c1",
          500: "#3395a7",
          600: "#2d798d",
          700: "#2a6474",
          800: "#2a5360",
          900: "#274652",
        },
        jade: {
          DEFAULT: "#5f9ea2",
          50: "#f4f9f9",
          100: "#daeded",
          200: "#b5dada",
          300: "#88bfc0",
          400: "#5f9ea2",
          500: "#458186",
          600: "#36656b",
          700: "#2e5257",
          800: "#284347",
          900: "#25393c",
        },
        current: "currentColor",
        brown: "#604643",
        lightpink: "#FAE7E0",
        offwhite: "#FFF8EF",
        green: "#7F8A81",
        transparent: "transparent",
      },
      typography: {
        DEFAULT: {
          css: {
            mark: {
              backgroundColor: "#343535",
              color: "#f6f7f75",
            },
            pre: {
              backgroundColor: "#343535",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
