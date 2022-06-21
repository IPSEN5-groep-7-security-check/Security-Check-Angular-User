const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
        heading: ['"Geometos Rounded"', ...defaultTheme.fontFamily.sans],
        geometos: ['"Geometos Rounded"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: "#1A1A1A",
      },
      screens: {
        xs: "480px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tw-elements/dist/plugin"),
  ],
  daisyui: {
    themes: [
      {
        getBigMarketingTheme: {
          primary: "#f597a9",
          secondary: "#ffce00",
          accent: "#30cfdb",
          neutral: "#3a3a3c",
          "neutral-content": "#cccccc",
          "base-100": "#ffffff",
          "base-200": "#f3f6fd",
          "base-content": "#6e6e6e", // #252525 for headings
          info: "#20aaf9",
          success: "#00d084",
          warning: "#F5AB32",
          error: "#cf2e2e",
        },
      },
    ],
  },
};
