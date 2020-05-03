<template>
  <v-app>
    <app-navigation></app-navigation>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/Shared/AppNavigation.vue'

export default {
  components: {
    AppNavigation
  }
}
</script>

<style lang="sass">
  // TODO: Check what that means:
  $color-pack: false

  @import './assets/sass/variables.scss'
  @import './assets/sass/utils.scss'

  @import '~vuetify/src/styles/main.sass'
  @import './assets/sass/vuetify-overwrites.scss'
</style>

<style scoper>
main {
  height: 100vh;
}
</style>
