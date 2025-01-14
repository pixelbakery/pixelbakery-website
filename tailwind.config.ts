import type { Config,  } from 'tailwindcss'

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['var(--font-poppins)', 'sans-serif'],
      dempsey: ['var(--font-dempsey)', 'sans-serif'],
      geologica: ['var(--font-geologica)', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      cream: 'rgb(239, 232, 242)',
      white: 'rgb(255,255,255)',
      egg: 'rgb(243, 244, 246)',
      blue: {
        light: 'rgb(204, 238, 255)',
        DEFAULT: 'rgb(56, 204, 255)',
        dark: 'rgb(0, 81, 116)',
        darker: 'rgb(0, 25, 36)',
      },
      peach: 'rgb(255, 94, 100)',
      error: 'rgb(255,0,51)',
      yellow: 'rgb(250, 216, 105)',
      pink: 'rgb(255, 163, 204)',
      'pink-lighter': 'rgb(241, 224, 237)',
      'pink-light': 'rgb(255, 224, 255)',
      pinkLight: 'rgb(255, 224, 255)',
      wine: {
        100: 'rgb(210, 207, 218)',
        200: 'rgb(182, 180, 190)',
        300: 'rgb(155, 153, 163)',
        400: 'rgb(129, 127, 137)',
        500: 'rgb(104, 102, 111)',
        DEFAULT: 'rgb(80, 78, 87)',
      },
      current: 'currentColor',
      none: 'none',
    },
  stroke: ({ theme }:any) => theme('colors'), //Sloppy, I know :(
  fill: ({ theme}: any) => theme('colors'),

    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        bob: 'bob 5s ease-in infinite',
        pulse: 'pulse var(--duration) ease-out infinite',
        'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
      },
      keyframes: {
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)',
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)',
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)',
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)',
          },
        },
        'shimmer-slide': {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
        bob: {
          '0%, 100%': { transform: 'rotate(-.3deg) translateY(4px)' },
          '50%': { transform: 'rotate(.3deg) translateY(-4px)' },
        },
        pulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 var(--pulse-color)' },
          '50%': { boxShadow: '0 0 0 8px var(--pulse-color)' },
        },
      },
      screens: {
        '3xl': '1792px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
      },
      fontSize: {
        '18xl': '18rem',
        '20xl': '20rem',
      },
      margin: {
        100: '100rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3/4',
        '22/17': '22/17',
        '1/1': '1/1',
        '1/2': '1/2',
        '16/9': '16/9',
      },
      scale: {
        25: '.25',
        97: '.97',
        98: '.98',
        99: '.99',
        101: '1.01',
        102: '1.02',
        103: '1.03',
        175: '1.75',
        200: '2.00',
      },
      strokeWidth: {
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        10: '10px',
      },
      borderWidth: {
        5: '5px',
        6: '6px',
        12: '12px',
        14: '14px',
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px',
      },
    },
  },
  variants: {
    extend: {
      stroke: ['hover', 'focus'],
      fill: ['hover', 'focus'],
      skew: ['group-hover', 'active'],
      scale: ['group-hover', 'active'],
      backgroundColor: ['active'],
      height: {
        'screen-3/4': '75vh',
        'screen-2/3': '66vh',
        'screen-1/2': '50vh',
        'screen-1/3': '33vh',
        'screen-1/4': '25vh',
      },
      maxHeight: {
        'screen-3/4': '75vh',
        'screen-2/3': '66vh',
        'screen-1/2': '50vh',
        'screen-1/3': '33vh',
        'screen-1/4': '25vh',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
  safelist: [
    {
      pattern: /(bg|text|border)-pink-(light|lighter)/,
    },
    {
      pattern: /text-(pink|blue)-(light|DEFAULT)/,
    },
    {
      pattern: /text-(pink|cream|egg|blue|peach|wine|white|yellow)/,
    },
    {
      pattern: /text-(blue)-(dark|DEFAULT)/,
    },
  ],
}
