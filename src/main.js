import Vue from 'vue'
import {
  MdButton, MdToolbar, MdContent, MdTable, MdCard,
} from 'vue-material/dist/components'

import App from './App.vue'
import store from './store'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.use(MdButton)
Vue.use(MdToolbar)
Vue.use(MdContent)
Vue.use(MdTable)
Vue.use(MdCard)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
