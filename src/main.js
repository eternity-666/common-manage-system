import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css' // Add this line
import ElementUI from 'element-ui'
import '@/assets/global.css'
import '@fortawesome/fontawesome-free/css/all.css'

import service from '@/utils/interceptor.js'
import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.service = service


new Vue({
  render: h => h(App),
   router
}).$mount('#app')
