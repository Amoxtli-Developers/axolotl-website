import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4A9B98",
        secondary: "#89C28C",
        tertiary: "#587542",
        white: "#EFEFEF",
      },
      fontFamily: {
        transformamixExtralight: "var(--font-transformamix-extralight)",
        transformamixLight: "var(--font-transformamix-light)",
        transformamixMedium: "var(--font-transformamix-medium)",
        transformamixRegular: "var(--font-transformamix-regular)",
        transformamixSemibold: "var(--font-transformamix-semibold)",
        transformasansBlack: "var(--font-transformasans-black)",
        transformasansExtrabold: "var(--font-transformasans-extrabold)",
        transformasansBold: "var(--font-transformasans-bold)",
        transformasansMedium: "var(--font-transformasans-medium)",
        transformasansRegular: "var(--font-transformasans-regular)",
        transformascriptExtralight: "var(--font-transformascript-extralight)",
        transformascriptLight: "var(--font-transformascript-light)",
        transformascriptMedium: "var(--font-transformascript-medium)",
        transformascriptRegular: "var(--font-transformascript-regular)",
      },
    },
  },
  plugins: [],
} satisfies Config;
