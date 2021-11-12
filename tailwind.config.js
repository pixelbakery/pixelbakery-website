

module.exports = {
  purge: ['./src//index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'xclass'
  theme: {
    extend: {
      fontSize: {
        '18xl': '18rem',
      },
      
      
    },
    colors: {
      white: "#ffffff",
      egg: "#F3F4F6",
      blue: {
        light: "rgb(204, 238, 255)",
        // DEFAULT: "rgba(102, 204, 255, 1)",
        DEFAULT: "rgb(56, 204, 255)",
        dark: "rgb(0, 81, 116)",
      },
      // peach: "rgba(237, 105, 112, 1)",        //#ED6969
      peach: "rgb(255, 94, 100)", 
      yellow: "rgb(250, 216, 105)",       //#F5D77A
      pink:{ 
        light: "rgb(241, 231, 243)",					 
        DEFAULT: "rgb(255, 163, 204)",         //#F2A8CA
      },
      wine: "rgb(80, 78, 87)",            //#504E57
      cream: "rgb(243, 244, 246) ",     //#EFE8F2
    },
    fontFamily: {
      pbheading: "Gilroy, Poppins, sans-serif",
      body: "Poppins, sans-serif",
    },
    
    
    fill: {
             current: 'currentColor',
           },
           fill: theme => ({
            pink:{ 
              light:  theme('colors.pink-light'),	 
              DEFAULT: "rgba(255, 163, 204, 1)",         //#F2A8CA
            },
            blue: {
              light: theme('colors.blue-light'),
              DEFAULT: theme('colors.blue'),
              dark: theme('colors.blue-dark'),
            },
             'wine': theme('colors.wine'),
             'cream': theme('colors.cream'),
             'yellow': theme('colors.yellow'),
             'peach': theme('colors.peach'),

             
          })
    
  },

  variants: {
    extend: {
      backgroundColor: ["active"]
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
