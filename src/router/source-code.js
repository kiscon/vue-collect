const sourceCode = () => import(/* webpackChunkName: "sourceCode" */ '@/pages/source-code/index.vue')

export default [
  {
    path: '/source-code/index',
    component: sourceCode,
    meta: { tag: '/source-code/index', title: '首页' }
  }
]
