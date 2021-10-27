

module.exports = {
  purge: ['./src//index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'xclass'
  theme: {
    colors: {
      white: "#ffffff",
      egg: "#F3F4F6",
      blue: {
        light: "rgba(204, 238, 255,1)",
        DEFAULT: "rgba(102, 204, 255, 1)",
        dark: "rgba(4, 81, 113, 1)",
      },
      peach: "rgba(237, 105, 112, 1)",        //#ED6969
      yellow: "rgba(245, 215, 122, 1)",       //#F5D77A
      pink:{ 
        light: "RGBA(255, 224, 255,1)",					 
        DEFAULT: "rgba(242, 168, 202, 1)",         //#F2A8CA
      },
      wine: "rgba(80, 78, 87, 1)",            //#504E57
      cream: "rgba(239, 232, 242, 1) ",     //#EFE8F2
    },
    fontFamily: {
      pbheading: "Gilroy, Poppins, sans-serif",
      body: "Poppins, sans-serif",
    },
    
  },
    extend: {
      
      
      
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
