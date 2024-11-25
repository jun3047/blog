import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            hr: { borderColor: "#fafafa" }, // zinc-50
            "ul > li::marker": { color: "#fafafa" }, // zinc-50
            pre: { backgroundColor: "#18181b" }, // zinc-900
          },
        },
      },
      fontFamily: {
        suite: ["var(--font-suite)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
