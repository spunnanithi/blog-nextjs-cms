/** @type {import('tailwindcss').Config} */

// Available CSS variables:
// --color-dark-blue
// --color-blue
// --color-grey-blue
// --color-light-grey-blue

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {},
    extend: {
      textColor: {
        primary: {
          light: "var(--color-dark-blue)",
          dark: "var(--color-light-grey-blue)",
        },
      },
      backgroundColor: {
        primary: {
          light: "var(--color-light-grey-blue)",
          dark: "var(--color-dark-blue)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
