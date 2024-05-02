const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

const customColors = {
  primary: {
        light: '#DEA5EB',
        DEFAULT: '#561F62',
  },
   secondary: {
        light: '#FFEF9B',
        DEFAULT: '#FFC92C',
  },
   accent: {
        DEFAULT: '#E23BAA',
      },
}

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      primary: customColors.primary,
      secondary: customColors.secondary,
      accent: customColors.accent,
    },
    // extend: {
    //   backgroundImage: {
    //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //     "gradient-conic":
    //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    //   },
    // },
  },
  darkMode: "class",
  plugins: [nextui({
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      themes: {
        light: {
          colors: {
            background: colors.white, // the page background color
            foreground: colors.black, // the page text color
            primary: {
              DEFAULT: customColors.primary.DEFAULT,
              foreground: colors.white
            },
            secondary: {
              DEFAULT: customColors.secondary.DEFAULT,
              foreground: colors.black
            },
            accent: customColors.accent.DEFAULT, // custom, for contrasting olor pops
            focus: customColors.primary.DEFAULT, // used for focus state outline
            // divider: // used for divider and single line border
            // overlay: // used for modal, popover, etc.
            // content1:  // used for card, modal, popover, etc.
            // content2: 
            // content3: 
            // content4: 
          },
        },
        dark: {
          colors: {
            background: colors.black,
            foreground: colors.white,
            primary: {
              DEFAULT: customColors.secondary.DEFAULT,
              foreground: colors.black
            },
            secondary: {
              DEFAULT: customColors.primary.light,
              foreground: colors.black
            },
            focus: customColors.secondary.DEFAULT,
            accent: customColors.accent.DEFAULT
          },
        },
      lightPrimary: {
          extend: "light",
          colors: {
            background: customColors.primary.light,
            foreground: colors.black,
            primary: {
              DEFAULT: customColors.primary.DEFAULT,
              foreground: colors.white
            },
            secondary: {
              DEFAULT: customColors.secondary.DEFAULT,
              foreground: colors.black
            },
            focus: customColors.secondary.DEFAULT,
            accent: customColors.accent.DEFAULT
          },
        },
      darkPrimary: {
          extend: "dark",
          colors: {
            background: customColors.primary.DEFAULT,
            foreground: colors.white,
            primary: {
              DEFAULT: customColors.secondary.DEFAULT,
              foreground: colors.black
            },
            secondary: {
              DEFAULT: customColors.primary.light,
              foreground: colors.black
            },
            focus: customColors.secondary.DEFAULT,
            accent: customColors.accent.DEFAULT
          },
      },
      lightSecondary: {
          extend: "light",
          colors: {
            background: customColors.secondary.light,
            foreground: colors.black,
            primary: {
              DEFAULT: customColors.primary.light,
              foreground: colors.black
            },
            secondary: {
              DEFAULT: customColors.secondary.DEFAULT,
              foreground: colors.black
            },
            focus: customColors.secondary.DEFAULT,
            accent: customColors.accent.DEFAULT
          },
      },
      darkSecondary: {
          extend: "dark",
          colors: {
            background: customColors.secondary.DEFAULT,
            foreground: colors.black,
            // primary: customColors.primary.DEFAULT,
            // secondary: customColors.secondary.light,
            primary: {
              DEFAULT: customColors.primary.DEFAULT,
              foreground: colors.white
            },
            secondary: {
              DEFAULT: customColors.secondary.light,
              foreground: colors.black
            },
            focus: customColors.secondary.DEFAULT,
            accent: customColors.accent.DEFAULT
          },
      },
      },
    })],
};
