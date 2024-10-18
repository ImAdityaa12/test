/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        lg: {
          css: {
            maxWidth: 'none',
            a: {
              textDecoration: 'none',
            },
            
            '--tw-prose-bullets': theme('colors.black'),
            ul: {
              'list-style-type': 'disc',
              'list-style-position': 'inside',
              'padding-left': '1em',
            },
            'ul > li': {
              'padding-left': '0.5em',
            },
            'ul > li::marker': {
              color: 'var(--tw-prose-bullets)',
            },
            'h2': {
              fontFamily: theme('fontFamily.Fustat'),
              fontWeight: theme('fontWeight.fustat-bolder'),
              fontSize:"36px"
            },
            'h3':{
              fontFamily:theme('fontFamily.Fustat'),
              fontWeight:theme('fontWeight.fustat-bolder'),
              fontSize:"28px"
            },
            'h4':{
              fontFamily:theme('fontFamily.Fustat'),
              fontWeight:theme('fontWeight.fustat-bolder'),
              fontSize:"24px"
            },
            'h5':{
              fontFamily:theme('fontFamily.Fustat'),
              fontWeight:theme('fontWeight.fustat-bolder'),
              fontSize:"18px"
            },
            'p':{
              fontFamily:theme('fontFamily.Fustat'),
              fontWeight:theme('fontWeight.fustat-medium'),
            }
          
          },
        },
      }),
      screens: {
        "1.75xl": "1440px",
        "3xl": "1920px",
        "xs":"343px"
      },
      fontFamily: {
        jakartaSans: ["Plus Jakarta Sans", "sans-serif"],
        fustat: ["Fustat", "sans-serif"],
      },
      fontWeight: {
        "jakarta-regular": 400,
        "jakarta-medium": 500,
        "jakarta-bold": 700,
        "jakarta-bolder": 800,
        "jakarta-extrabold": 900,
        "fustat-regular": 400,
        "fustat-medium": 500,
        "fustat-bold": 700,
        "fustat-bolder": 800,
        "fustat-extrabold": 900,
      },
      colors: {
        logo: {
          primary: "#002FDF",
          secondary: "#5A46E3",
          accent: "#01E1ED",
        },
        background: {
          primary: {
            default: "#002FDF",
            hover: "#0029C5",
            active: "#0026B6",
          },
          secondary: {
            default: "#FFFFFF",
            hover: "#F1F3FD",
            active: "#E2E5FF",
          },
          disable: "#rgba(0, 0, 0, 0.1)",
          default: "#FFFFFF",
          subtle: {
            1: "#F2F2F2",
            2: "#E6E6E6",
            3: "#CCCCCC",
            4: "#B3B3B3",
          },
          inverse: "#333333",
          dark: "#5A46E3",
          tertiaryhover: "rgba(0, 0, 0, 0.05)",
          danger: {
            default: "#D00000",
            hover: "#B50808",
            active: "#B41E1E",
          },
          black: "#000000",
          neutral: {
            white: "#FFFFFF",
            5: "#F2F2F2",
            10: "#E6E6E6",
            20: "#CCCCCC",
            30: "#B3B3B3",
            54: "#757575",
            60: "#666666",
            70: "#4D4D4D",
            80: "#333333",
            black: "#000000",
          },
          text: {
            heading: "#000000",
            default: "#333333",
            subtle: "#757575",
            primary: "#002FDF",
            inverse: "#FFFFFF",
            disable: "#B3B3B3",
            danger: "#D00000",
            dark: "#01E1ED",
          },
          border: {
            disable: "rgba(0, 0, 0, 0.15)",
            primary: "#002FDF",
            subtle: "#B3B3B3",
            strong: "#333333",
            danger: "#D00000",
          },
          icon: {
            primary: "#002FDF",
            inverse: "#FFFFFF",
            disable: "#B3B3B3",
            default: "#333333",
            danger: "#D00000",
            dark: "#01E1ED",
          },
          gradient: {
            palatinateBlue: "linear-gradient(90deg, #002FDF, #4D62B0)",
            robinEggBlue: "linear-gradient(90deg, #01E1ED, #00B6C0)",
            majorelleBlue: "linear-gradient(90deg, #5A46E3, #4533BE)",
            pink: "linear-gradient(90deg, #F468AF, #D25F9A)",
            yellow: "linear-gradient(90deg, #DEA300, #FFD968)",
            blue: "linear-gradient(90deg, #5C9DFF, #375E99)",
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
