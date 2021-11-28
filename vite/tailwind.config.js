module.exports = {
  purge: ["./src//index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'xclass'
  theme: {
    extend: {
      fontSize: {
        "18xl": "18rem",
        "20xl": "20rem",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      egg: "#F3F4F6",
      blue: {
        light: "rgb(204, 238, 255)",
        // DEFAULT: "rgba(102, 204, 255, 1)",
        DEFAULT: "rgb(56, 204, 255)",
        dark: "rgb(0, 81, 116)",
      },
      // peach: "rgba(237, 105, 112, 1)",   //#ED6969
      peach: {
        light: "#FFD9D3",
        DEFAULT: "rgb(255, 94, 100)",
      },
      yellow: "rgb(250, 216, 105)", //#F5D77A
      pink: {
        light: "rgb(241, 231, 243)",
        DEFAULT: "rgb(255, 163, 204)", //#F2A8CA
      },
      wine: {
        100: "rgb(210, 207, 218)",
        200: "rgb(182, 180, 190)",
        300: "rgb(155, 153, 163)",
        400: "rgb(129, 127, 137)",
        500: "rgb(104, 102, 111)",
        DEFAULT: "rgb(80, 78, 87)", //#504E57
      },
      cream: "rgb(243, 244, 246) ", //#EFE8F2
    },

    stroke: (theme) => theme("colors"),
    fill: (theme) => theme("colors"),
    fill: {
      current: "currentColor",
      none: "none",
    },

    fontFamily: {
      pbheading: "Gilroy, Poppins, sans-serif",
      body: "Poppins, sans-serif",
    },
  },

  variants: {
    extend: {
      stroke: ["hover", "focus"],
      fill: ["hover", "focus"],
      skew: ["group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
