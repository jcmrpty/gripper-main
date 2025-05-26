import type { Config } from "tailwindcss"
import defaultConfig from "tailwindcss/defaultConfig"

const config: Config = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content!,
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
}

export default config
