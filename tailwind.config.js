module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      lightside: {
        light: "#85d7ff",
        DEFAULT: "#f39819",
        dark: "#009eeb",
      },
      darkside: {
        light: "#85d7ff",
        DEFAULT: "#2a1d31",
        dark: "#009eeb",
      },
      pinka: {
        light: "#EACBF9",
        DEFAULT: "#DAA2F4",
        dark: "#8415B7",
      },
      graypurple: {
        light: "#393E41",
        DEFAULT: "#393e41",
        dark: "#000000",
      },
      purple: {
        light: "#B8A2BE",
        DEFAULT: "#91709b",
        dark: "#49364E",
      },
      orange: {
        light: "#F6AF4C",
        DEFAULT: "#f39819",
        dark: "#CA7A0B",
      },
      gray: {
        light: "#F6AF4C",
        DEFAULT: "#d3d0cb",
        dark: "#B7B3AB",
      },
      lightgray: {
        light: "#ECEBE6",
        DEFAULT: "#e7e5df",
        dark: "#BDB8A8",
      },
      error: {
        light: "#FF5B5B",
        DEFAULT: "#ff0000",
        dark: "#920000",
      },
    },

    extend: {
      animation: {
        "color-change": "color-change-x2 2.5s linear infinite alternate both",
        scale: "scale 5s linear infinite",
      },
      keyframes: {
        "color-change-x2": {
          "0%": { color: "#EACBF9" },
          "100%": { color: "#8415B7" },
        },
        scale: {
          0: { transform: "scale(0.75)" },
          "50%": { transform: "scale(1.25)" },
          100: { transform: "scale(0.75)" },
        },
      },
      backgroundImage: (theme) => ({
        "hello-there": "url('/src/assets/hello-there.png')",
        accueil: "url('/src/assets/accueil.png')",
      }),
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
