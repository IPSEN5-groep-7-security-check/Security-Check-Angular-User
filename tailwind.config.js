const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PT Sans"', ...defaultTheme.fontFamily.sans],
        heading: ['"Lunchbox"'],
      },
      colors: {
        dark: '#1A1A1A',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          /* your theme name */ primary: '#f5a400' /* Primary color */,
          'primary-focus': '#dc9300' /* Primary color - focused */,
          'primary-content': '#ffffff' /* Foreground content color to use on primary color */,

          secondary: '#1a1a1a' /* Secondary color */,
          'secondary-focus': '#000' /* Secondary color - focused */,
          'secondary-content': '#ffffff' /* Foreground content color to use on secondary color */,

          accent: '#f5a400' /* Accent color */,
          'accent-focus': '#2aa79b' /* Accent color - focused */,
          'accent-content': '#ffffff' /* Foreground content color to use on accent color */,

          neutral: '#3d4451' /* Neutral color */,
          'neutral-focus': '#2a2e37' /* Neutral color - focused */,
          'neutral-content': '#ffffff' /* Foreground content color to use on neutral color */,

          'base-100': '#ffffff' /* Base color of page, used for blank backgrounds */,
          'base-200': '#f9fafb' /* Base color, a little darker */,
          'base-300': '#d1d5db' /* Base color, even darker */,
          'base-content': '#1f2937' /* Foreground content color to use on base color */,

          info: '#2094f3' /* Info */,
          success: '#009485' /* Success */,
          warning: '#ff9900' /* Warning */,
          error: '#ff5724' /* Error */,
        },
      },
    ],
  },
};
