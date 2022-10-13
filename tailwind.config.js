module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      cream: 'rgb(239, 232, 242)', //#EFE8F2},
      white: '#ffffff',
      egg: 'rgb(243, 244, 246)',
      blue: {
        light: 'rgb(204, 238, 255)',
        DEFAULT: 'rgb(56, 204, 255)',
        dark: 'rgb(0, 81, 116)',
      },
      peach: {
        light: '#FFD9D3',
        DEFAULT: 'rgb(255, 94, 100)',
      },
      error: '#ff0033',
      yellow: 'rgb(250, 216, 105)',
      pink: {
        extralight: '#FFEFFF',
        light: 'rgb(241, 231, 243)',
        DEFAULT: 'rgb(255, 163, 204)', //#F2A8CA
      },
      wine: {
        100: 'rgb(210, 207, 218)',
        200: 'rgb(182, 180, 190)',
        300: 'rgb(155, 153, 163)',
        400: 'rgb(129, 127, 137)',
        500: 'rgb(104, 102, 111)',
        DEFAULT: 'rgb(80, 78, 87)', //#504E57
      },
      current: 'currentColor',
      none: 'none',
    },

    stroke: (theme) => theme('colors'),
    fill: (theme) => theme('colors'),

    fontFamily: {
      pbheading: 'Gilroy, Poppins, sans-serif',
      body: 'Poppins, sans-serif',
    },
    extend: {
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
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
