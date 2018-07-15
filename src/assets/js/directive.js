/**
 * 封装一个修改组件里面dom的样式自定
 */
let vuedirective = {}
function domStyle (el, binding) {
  debugger
  let domspan1 = el.getElementsByClassName('downcity')[0]
  let domspan2 = el.getElementsByClassName('downIcon')[0]
  domspan1.style.color = binding.value.color
  domspan2.style.width = binding.value.width
  domspan2.style.height = binding.value.height
}

vuedirective.install = function (Vue) {
  Vue.directive('domstyle', domStyle)
}

export default vuedirective
