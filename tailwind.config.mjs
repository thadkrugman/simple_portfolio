/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dracula: {
          ...require("daisyui/src/theming/themes")["dracula"],
          "base-100": "#F4F2EA",
          "base-content": "#3e3e3e",
          primary: "#3e3e3e",
          "primary-content": "#F4F2EA",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
