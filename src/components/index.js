import pageHead from '@/components/page-head/index.vue'

const components = [
  pageHead
]

const install = Vue => {
  components.filter(item => typeof item !== 'function').forEach(v => Vue.component(v.name, v))
}

export default install
