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
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        tablet: "2.5rem",
      },
    },
    screens: {
      tablet: "768px",
      desktop: "1190px",
    },
    fontSize: {
      h1: ["3rem", { lineHeight: "1", letterSpacing: "0", fontWeight: "500" }],
      ["h1-sm"]: [
        "2rem",
        { lineHeight: "1.125", letterSpacing: "0", fontWeight: "500" },
      ],
      h2: [
        "2.5rem",
        { lineHeight: "1.2", letterSpacing: "2px", fontWeight: "500" },
      ],
      ["h2-sm"]: [
        "1.75rem",
        { lineHeight: "1.285714", letterSpacing: "1.4px", fontWeight: "500" },
      ],
      h3: [
        "1.25rem",
        { lineHeight: "1.3", letterSpacing: "5px", fontWeight: "500" },
      ],
      body: [
        "1rem",
        { lineHeight: "1.625", letterSpacing: "0", fontWeight: "400" },
      ],
      ["body-sm"]: [
        "0.9375rem",
        { lineHeight: "1.666667", letterSpacing: "0", fontWeight: "400" },
      ],
      btn: [
        "0.9375rem",
        { lineHeight: "1.466667", letterSpacing: "1px", fontWeight: "500" },
      ],
      contact: [
        "2.5rem",
        { lineHeight: "1", letterSpacing: "0", fontWeight: "500" },
      ],
      nav: [
        "0.875rem",
        { lineHeight: "1", letterSpacing: "2px", fontWeight: "400" },
      ],
      error: ["0.75rem", { lineHeight: "2.166667", letterSpacing: "0" }],
      input: [
        "0.9375rem",
        { lineHeight: "1.733333", letterSpacing: "0", fontWeight: "500" },
      ],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
