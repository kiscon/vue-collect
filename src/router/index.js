import Vue from 'vue'
import Router from 'vue-router'

const Products = (resolve) => {
  import('@/components/products').then((module) => {
    resolve(module)
  })
}
const Movie = (resolve) => {
  import('@/components/movie').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    }
  ]
})
