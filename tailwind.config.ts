import type { Config } from 'tailwindcss';
const plugin=require('tailwindcss/plugin')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      lg: '1920px',
      sm: '360px',
    },
    container: {
      center: true,
      
      padding: {
        lg: '3.875rem', // 62px
        md: '2rem', // 32px
        sm: '1rem', // 16px
      },
    },
    fontFamily: {
      roboto:['Roboto', 'sans-serif'],
      segoe:'Segoe Print'
    },
    fontSize: {
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      md: '1.25rem', // 20px
      lg: '1.5rem', // 24px
      xl: '1.75rem', // 28px
      '2xl': '2rem', // 32px
      '3xl': '2.5rem', // 40px
      '4xl': '4rem', // 64px
      'small-md': '1.125rem', // 18px
      'small-lg': '1.375rem', // 22px
      'small-xl': '1.625rem', // 26px
      'small-2xl': '1.875rem', // 30px
      'small-3xl': '2.25rem', // 36px
      'small-4xl': '3rem', // 48px
    },
    colors: {
      transparent: 'transparent',
      amber: '#FFBD00',
      black: '#090909',
      white: '#FCFCFC',
      red: '#C12725',
      orange: '#F06C00',
      background: '#FFFEFC',
      'secondary-bg': '#F4E1A9',
      'blue-bg': '#9BCDCA',
      'pink-bg': '#EFBCB7',
      'black-bg': '#121313',
      'red-bg': '#F42808',
      'red-icon': '#F42808',
      'primary-text': '#121313',
      'secondary-text': '#FFFEFC',
      'accent-text': '#78807F',
      gray: {
        100: '#F5F5F5',
        200: '#DCDCDC',
        300: '#BFBFBF',
        400: '#939393',
        500: '#6F6F6F',
        600: '#5B5B5B',
        700: '#49494A',
        800: '#3C3C3E',
        900: '#323234',
        950: '#252525',
      },
    },
    transitionDuration: {
      DEFAULT: '500ms',
    },
    transitionTimingFunction: {
      DEFAULT: 'ease',
    },
    lineHeight: {
      auto: '1',
      1: '1.1',
      2: '1.2',
      3: '1.3',
      4: '1.4',
      5: '1.5',
      6: '1.6',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        medium: '3.125rem', // 50px
        large: '4.5rem', // 72px
      },
      maxWidth: {
        desktop: '1920px',
        tablet: '768px',
        mobile: '360px',
      },
      spacing: {
        4.5: '1.125rem', // 18px
        5.5: '1.375rem', // 22px
        6.5: '1.625rem', // 26px
        7.5: '1.875rem', // 30px
        8.5: '2.125rem', // 34px
        9.5: '2.375rem', // 38px
        10.5: '2.625rem', // 42px
        11.5: '2.875rem', // 46px
        12.5: '3.125rem', // 50px
      },
      gridTemplateRows: {
        lg: '90px 170px 353px ',
      },
      gridTemplateColumns: {
        lg: '500px 725px',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0px 4px 4px 0px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
export default config;
