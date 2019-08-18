import Vue from 'vue'
import { addEvent } from '../utils'

const nodeList = []
const ctx = 'outsideContext'

let startClick
let seed = 0

addEvent(document, 'mousedown', e => (startClick = e))
addEvent(document, 'mouseup', e => {
  nodeList.forEach(node => {
    if (node[ctx] && node[ctx].documentHandler) {
      node[ctx].documentHandler(e, startClick)
    }
  })
 })


function createDocumentHandler(el, binding, vnode) {
  return function (mouseup = {}, mousedown = {}) {
    if (!vnode ||
      !vnode.context ||
      !mouseup.target ||
      !mousedown.target ||
      el.contains(mouseup.target) ||
      el.contains(mousedown.target) ||
      el === mouseup.target) return

    if (binding.expression &&
      el[ctx].methodName &&
      vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]()
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn()
    }
  }
}

// https://cn.vuejs.org/v2/guide/custom-directive.html

Vue.directive('outsideclick', {
  bind(el, binding, vnode) {
    console.log(el, binding, vnode)
    nodeList.push(el)
    const id = seed++
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    }
    console.log(el[ctx])
  },
  update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode)
    el[ctx].methodName = binding.expression
    el[ctx].bindingFn = binding.value
  },
  unbind(el) {
    let len = nodeList.length
    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1)
        break
      }
    }
    delete el[ctx]
  }
})
