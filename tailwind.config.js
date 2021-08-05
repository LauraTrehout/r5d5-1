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
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
