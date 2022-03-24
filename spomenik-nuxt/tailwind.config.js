module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'purple-custom-600': '#6D22BD',
        'purple-custom-400': '#A353CE',
        'blue-custom-600': '#40B0D5',
        'blue-custom-400': '#5DFFE8',
        'black-custom-600': '#1b1c1e',
      },
      fontFamily: {
        'montserrat': ['montserrat', 'sans-serif'],
        'nunito': ['nunito', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '60px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
