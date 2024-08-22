/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      ["primary-light"]: "var(--color-primary-light)",
      black: "var(--color-black)",
      white: "var(--color-white)",
      ["dark-gray"]: "var(--color-dark-gray)",
      ["light-gray"]: "var(--color-light-gray)",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
