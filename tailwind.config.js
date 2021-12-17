module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '18xl': '18rem',
        '20xl': '20rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3/4',
        '22/17': '22/17',
      },
      scale: {
        97: '.97',
        98: '.98',
        99: '.99',
        101: '1.01',
        102: '1.02',
        103: '1.03',
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
      },
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      egg: '#F3F4F6',
      blue: {
        light: 'rgb(204, 238, 255)',
        // DEFAULT: "rgba(102, 204, 255, 1)",
        DEFAULT: 'rgb(56, 204, 255)',
        dark: 'rgb(0, 81, 116)',
      },
      // peach: "rgba(237, 105, 112, 1)",   //#ED6969
      peach: {
        light: '#FFD9D3',
        DEFAULT: 'rgb(255, 94, 100)',
      },
      yellow: 'rgb(250, 216, 105)', //#F5D77A
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
      cream: 'rgb(243, 244, 246) ', //#EFE8F2
    },

    stroke: (theme) => theme('colors'),
    fill: (theme) => theme('colors'),
    fill: {
      current: 'currentColor',
      none: 'none',
    },

    fontFamily: {
      pbheading: 'Gilroy, Poppins, sans-serif',
      body: 'Poppins, sans-serif',
    },
  },

  variants: {
    extend: {
      stroke: ['hover', 'focus'],
      fill: ['hover', 'focus'],
      skew: ['group-hover', 'active'],
      scale: ['group-hover', 'active'],
      backgroundColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
