const sourceCode = () => import(/* webpackChunkName: "source-code" */ '@/pages/source-code/index.vue')

export default [
  {
    path: '/source-code/index',
    component: sourceCode,
    meta: { tag: '/source-code/index', title: '源码解析' }
  }
]
