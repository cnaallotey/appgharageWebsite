import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import 'animate.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
