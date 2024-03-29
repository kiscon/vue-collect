import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Components from './components/index'
import '@/common/directives/v-outsideclick.js'
import '@/assets/sass/index.scss'

Vue.use(Components)

Vue.config.productionTip = false // 阻止启动生产消息，常用作指令
Vue.config.silent = false // 默认false，设置为true时，取消Vue所有的日志和警告

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
