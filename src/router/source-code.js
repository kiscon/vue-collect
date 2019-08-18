const sourceCode = () => import(/* webpackChunkName: "sourceCode" */ '@/pages/source-code/index.vue')
const vuexInfo = () => import(/* webpackChunkName: "sourceCode" */ '@/pages/source-code/vuex-info.vue')

export default [
  {
    path: '/',
    component: sourceCode,
    meta: { tag: '/source-code/index', title: '源码解析' }
  },
  {
    path: '/source-code/index',
    component: sourceCode,
    meta: { tag: '/source-code/index', title: '源码解析' }
  },
  {
    path: '/source-code/vuex-info',
    component: vuexInfo,
    meta: { tag: '/source-code/index', title: 'vuex知识' }
  }
]
