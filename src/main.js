import Vue from 'vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false

Vue.use(VueParticles);

new Vue({
  router,
  store,
  vuetify,
  VueParticles,
  render: h => h(App)
}).$mount('#app')
