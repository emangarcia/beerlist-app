import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        blue: {
          "50": "#f1fafa",
          "100": "#dcf1f1",
          "200": "#bde3e4",
          "300": "#90cfd0",
          "400": "#5fb3b7",
          "500": "#3f959b",
          "600": "#377b83",
          "700": "#32646c",
          "800": "#30545a",
          "900": "#2b474e",
          "950": "#192e33",
        },
        dark: '#0F0F0F',
      },
    },
  },
};
