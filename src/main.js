import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faChevronRight, faChevronLeft, faChevronDown, faAward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faSearch)
library.add(faChevronRight)
library.add(faChevronLeft)
library.add(faChevronDown)
library.add(faAward)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import './plugins/bootstrap-vue'
import './plugins/axios'

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
