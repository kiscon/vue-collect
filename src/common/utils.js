const addEvent = (() => {
  let temp
  if (document.addEventListener) {
    temp = (el, type, func) => {
      el.addEventListener(type, e => { func.call(el, e) }, false)
    }
  } else if (document.attachEvent) {
    temp = (el, type, func) => {
      el.attachEvent('on' + type, e => { func.call(el, e) }, false)
    }
  } else {
    temp = (el, type, func) => { el['on' + type] = func }
  }
  return temp
})()

export {
  addEvent
}
