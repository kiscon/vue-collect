const cypress = () => import(/* webpackChunkName: "cypress" */ '@/pages/cypress/index.vue')

export default [
  {
    path: '/cypress/index',
    component: cypress,
    meta: { tag: '/cypress/index', title: 'cypress使用' }
  }
]
