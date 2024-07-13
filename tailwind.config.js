/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        'neutralSilver' : '#F5F7FA',
        'neutralDGrey' : '#4D4D3D',
        'brandPrimary' : '#c5572f',
        'neutralGrey' : '#717171',
        'gray900' : '#18191F',
        'backgroundWhite': '#FFFFFF',
        'backgroundLightGray': '#F7FAFC', // Tailwind `gray-100`
        'backgroundLightBlue': '#EBF8FF', // Tailwind `blue-100`
        'backgroundLightGreen': '#F0FFF4', // Tailwind `green-100`
        'textGray900': '#1A202C', // Tailwind `gray-900`
        'textGray800': '#2D3748', // Tailwind `gray-800`
        'textBlack': '#000000',
        primary: {
          2: "#F3B345",
          1: "#FAE6BB",
          3: "#E0AF7F",
        },
        secondary: {
          1: "#4C221A",
          2: "#7F401C",
        },
      },
    },
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    animation: {
      fade: "fadeIn .5s ease-in-out",
    },

    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss", flowbite.plugin()],
};
