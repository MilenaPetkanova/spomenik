import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3
      },
      dark: {
        primary: colors.deepPurple.lighten3,
        secondary: colors.purple.lighten2,
        background: colors.shades.black,
        accent: colors.deepPurple.accent3,
        error: colors.red.darken1
      }
    },
    dark: true
  }
})
