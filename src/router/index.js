import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

const getRoutes = (context, ignore) => {
  const routes = []
  context.keys().forEach(key => {
    if (key !== ignore) {
      let data = context(key).default
      if (data && data.length) {
        routes.push(...data)
      }
    }
  })
  return routes
}

const routes = getRoutes(require.context('./', false, /\.js$/), './index.js')
console.log(routes)

const router = new VueRouter({
  routes: routes
})

export default router
