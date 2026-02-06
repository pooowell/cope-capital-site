import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cope: {
          green: "#00FF88",
          dark: "#0a0a0a",
          card: "#111111",
          border: "#222222",
        },
      },
    },
  },
  plugins: [],
};
export default config;
