import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)


Vue.config.productionTip = false

new Vue({
  VueCookies,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
