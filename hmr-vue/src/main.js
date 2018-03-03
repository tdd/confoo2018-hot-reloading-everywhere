import Vue from 'vue'
import Meta from 'vue-meta'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Meta)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
