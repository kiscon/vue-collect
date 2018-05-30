import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/products'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    }
  ]
})
