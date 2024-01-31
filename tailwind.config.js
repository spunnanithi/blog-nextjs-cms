/** @type {import('tailwindcss').Config} */

// Available CSS variables:
// --color-dark-blue
// --color-blue
// --color-grey-blue
// --color-light-grey-blue

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./app/**/*.{js,jsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Personally added extensions
      textColor: {
        primary: {
          light: "var(--color-dark-blue)",
          dark: "var(--color-light-grey-blue)",
        },
        secondary: {
          light: "var(--color-steel-blue)",
          dark: "var(--color-grey-blue)",
        },
      },
      backgroundColor: {
        primary: {
          light: "var(--color-light-grey-blue)",
          dark: "var(--color-dark-blue)",
        },
        secondary: {
          light: "var(--color-grey-blue)",
          dark: "var(--color-blue)",
        },
      },
      fontWeight: {
        header: "900", // Nav Header
        title: "700", // Title
        subtitle: "500", // Subtitles
      },
      fontSize: {
        header: ["24px", "32px"], // [fontSize, lineHeight]
        title: ["20px", "28px"],
        subtitle: ["18px", "28px"],
      },
      colors: {
        // Personally added colors
        mySteelBlue: "var(--color-steel-blue)",
        myDarkBlue: "var(--color-dark-blue)",
        myBlue: "var(--color-blue)",
        myGreyBlue: "var(--color-grey-blue)",
        myLightGreyBlue: "var(--color-light-grey-blue)",
        myImperialBlue: "var(--color-imperial-blue)",
        myDarkGreen: "var(--color-dark-green)",

        // Shadcn UI
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
