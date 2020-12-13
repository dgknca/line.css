import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Snippet from './components/_Snippet.vue'
Vue.component('Snippet', Snippet)

import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
