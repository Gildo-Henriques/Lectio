import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        Black: {
          "100":" #1c1c1c"
        }
      }
    }
  },

  plugins: [require("@tailwindcss/typography")]
} as Config;
