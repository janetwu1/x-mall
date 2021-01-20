import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'
import './plugins/element.js'
import VueLazyload from 'vue-lazyload'
// 挂载axios到vue的原型,由于继承性，所有的组件都可以使用this.$http
import axios from 'axios' 

Vue.config.productionTip = false
Vue.prototype.$http=axios

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/images/error.png',
  loading: 'static/images/load.gif',
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
