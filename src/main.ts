import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
