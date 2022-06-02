const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PT Sans"', ...defaultTheme.fontFamily.sans],
        heading: ['"Lunchbox"'],
      },
      colors: {
        dark: "#1A1A1A",
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
        light: {
          primary: "#f597a9", // Primary color. Required.
          // primary-focus: "", // Primary color when focused. Optional. Will be a darker tone of primary if not specified.
          // primary-content: "", // Foreground content color to use on primary color. Optional. Will be a readable tone of primary if not specified.
          secondary: "#ffce00", // Secondary color. Required.
          // secondary-focus: "", // Secondary color when focused. Optional. Will be a darker tone of secondary if not specified.
          // secondary-content: "", // Secondary content color to use on primary color. Optional. Will be a readable tone of secondary if not specified.
          accent: "#30cfdb", // Accent color. Required.
          // accent-focus: "", // Accent color when focused. Optional. Will be a darker tone of accent if not specified.
          // accent-content: "", // Accent content color to use on primary color. Optional. Will be a readable tone of accent if not specified.
          neutral: "#3a3a3c", // Neutral color. Required.
          // neutral-focus: "", // Neutral color when focused. Optional. Will be a darker tone of neutral if not specified.
          "neutral-content": "#cccccc", // Neutral content color to use on primary color. Optional. Will be a readable tone of neutral if not specified.
          "base-100": "#ffffff", // Base color of page, used for blank backgrounds. Required.
          "base-200": "#f3f6fd", // Base color, a little darker. Optional. Will be a darker tone of base-100 if not specified.
          "base-300": "#f3f6fd", // Base color, even more darker. Optional. Will be a darker tone of base-200 if not specified.
          "base-content": "#252525", // Foreground content color to use on base color. Optional. Will be a readable tone of base-100 if not specified.
          info: "#20aaf9", // Optional. Will be a default blue color if not specified.
          // info-content: "#20aaf9", // Foreground content color to use on info color. Optional. Will be a readable tone of info if not specified.
          success: "#00d084", // Optional. Will be a default green color if not specified.
          // success-content: "#20aaf9", // Foreground content color to use on success color. Optional. Will be a readable tone of success if not specified.
          warning: "#F5AB32", // Optional. Will be a default orange color if not specified.
          // warning-content: "#20aaf9", // Foreground content color to use on warning color. Optional. Will be a readable tone of warning if not specified.
          error: "#cf2e2e", // Optional. Will be a default red color if not specified.
          // error-content: "#20aaf9", // Foreground content color to use on error color. Optional. Will be a readable tone of error if not specified.
        },
      },
      {
        dark: {
          primary: "#f597a9", // Primary color. Required.
          // primary-focus: "", // Primary color when focused. Optional. Will be a darker tone of primary if not specified.
          // primary-content: "", // Foreground content color to use on primary color. Optional. Will be a readable tone of primary if not specified.
          secondary: "#ffce00", // Secondary color. Required.
          // secondary-focus: "", // Secondary color when focused. Optional. Will be a darker tone of secondary if not specified.
          // secondary-content: "", // Secondary content color to use on primary color. Optional. Will be a readable tone of secondary if not specified.
          accent: "#30cfdb", // Accent color. Required.
          // accent-focus: "", // Accent color when focused. Optional. Will be a darker tone of accent if not specified.
          // accent-content: "", // Accent content color to use on primary color. Optional. Will be a readable tone of accent if not specified.
          neutral: "#cccccc", // Neutral color. Required.
          // neutral-focus: "", // Neutral color when focused. Optional. Will be a darker tone of neutral if not specified.
          // "neutral-content": "#cccccc", // Neutral content color to use on primary color. Optional. Will be a readable tone of neutral if not specified.
          "base-100": "#1e1e20", // Base color of page, used for blank backgrounds. Required.
          "base-200": "#3a3a3c", // Base color, a little darker. Optional. Will be a darker tone of base-100 if not specified.
          // "base-300": "#f3f6fd", // Base color, even more darker. Optional. Will be a darker tone of base-200 if not specified.
          "base-content": "#ffffff", // Foreground content color to use on base color. Optional. Will be a readable tone of base-100 if not specified.
          info: "#20aaf9", // Optional. Will be a default blue color if not specified.
          // info-content: "#20aaf9", // Foreground content color to use on info color. Optional. Will be a readable tone of info if not specified.
          success: "#00d084", // Optional. Will be a default green color if not specified.
          // success-content: "#20aaf9", // Foreground content color to use on success color. Optional. Will be a readable tone of success if not specified.
          warning: "#F5AB32", // Optional. Will be a default orange color if not specified.
          // warning-content: "#20aaf9", // Foreground content color to use on warning color. Optional. Will be a readable tone of warning if not specified.
          error: "#cf2e2e", // Optional. Will be a default red color if not specified.
          // error-content: "#20aaf9", // Foreground content color to use on error color. Optional. Will be a readable tone of error if not specified.
        },
      },
    ],
  },
};
