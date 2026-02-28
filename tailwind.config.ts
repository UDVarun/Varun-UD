import type { Config } from "tailwindcss"

const config: Config = {

  darkMode: "class",

  content: [
    "./app/**/*.{ts,tsx}",
    "./app/components/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],

  theme: {

    extend: {

      colors: {

        background: "hsl(var(--background))",

        foreground: "hsl(var(--foreground))",

        muted: "hsl(var(--muted))",

        primary: "hsl(var(--primary))",

        border: "hsl(var(--border))",

      },

    },

  },

  plugins: [],

}

export default config