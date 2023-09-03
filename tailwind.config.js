/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBackground: "var(--color-background)",
        secondaryBackground: "var(--color-secondary-background)",
        cardBackground: "var(--color-card-background)",
        headlineColor: "var(--color-headline)",
        paragraphColor: "var(--color-paragraph)",
        primaryButtonBackground: "var(--color-primary-button)",
        primaryButtonText: "var(--color-primary-button-text)",
        tertiaryColor: "var(--color-tertiary)",
        tertiaryColorBackground: "var(--color-tertiary-background)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
