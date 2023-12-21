import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      darkred: "#512426",
      darkgreen: "#2D3A3A",
      white: "#ffffff",
      black: "#000000",
      blue: "#1F7AD4",
      fa: "#faf9f8",
      darkblack: "#1F1F1F",
      grey: "#202129",
      red: "#ff0000",
      green: "#598E8D",
      lightblue: "#C7E0F4",
      yellow: "#FAB600",
      lightgrey: "#aaaaaa",
      hovergrey: "#f3f3f3",
      hoverdarkgrey: "#333333",
      hoverblue: "#26304C",
      textGrey: "rgba(23,23,23,0.5)",
      tGrey: "rgba(20,20,20,0.05)",
      tLightGrey: "rgba(20,20,20,0.01)",
      transparent: "rgba(0,0,0,0)",
      lightRed: "rgba(250, 65, 0, 0.2)",
      charcoal: "#292929",
      veryLightGrey: "#E1DFDD",
      backgroundLightGrey: "rgba(237, 237, 237, 0.3",
      glassyModal: "#1e2c53bf",
      borderLightGrey: "#f1f1f1",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
