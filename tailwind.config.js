const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(breadcrumbs|toggle).js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#191c21", 
            foreground: "#E0E0E0", 
            primary: "#E11D48", 
            content1: "#292d33"
          },
        },
        light: {
          colors: {
            background: "#F5F5F5", 
            foreground: "#212121",
            primary: {
              DEFAULT: "#E11D48",
            }, 
            secondary: "#a01433",

          },
        },
      },
    }),
  ],
};
