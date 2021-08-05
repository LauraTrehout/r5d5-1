module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hello-there': "url('/src/assets/hello-there.png')",
        'accueil': "url('/src/assets/accueil.png')",
      })
    },
    colors: {
      gray: {
        dark: '#2a1d31',
        light: '#d3d0cb',
      },
      yellow: {
        default: '#e7bb41',
      },
    },

  variants: {
    extend: {},
  },
  plugins: [],
}
}

