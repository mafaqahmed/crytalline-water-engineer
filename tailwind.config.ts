import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(234, 88, 12)",
        secondary: "#002952",
        ternary: "#B91C1C",
        positive: "#fbbc04",
        negative: "#21BA45",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "mobile-sm": "380px",
        "sm-lg": "940px",
        featuresc: "1080px",
      },
    },
  },
  plugins: [],
};
export default config;
