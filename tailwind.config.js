import {heroui} from "@heroui/theme"

/** @type {import(&apostailwindcss&apos).Config} */
const config = {
  content: [
    &apos./components/**/*.{js,ts,jsx,tsx,mdx}&apos,
    &apos./app/**/*.{js,ts,jsx,tsx,mdx}&apos,
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;