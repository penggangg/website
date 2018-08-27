import vue from 'vue'
import toastComponent from './msgBox.vue'
const ToastConstructor = vue.extend(toastComponent)
// 挂载组件
const toastDom = new ToastConstructor({
  el: document.createElement('div'),
  data () {
    return {
      text: '',
      msg: 'default',
      showWrap: false // 是否显示组件
    }
  },
  methods: {
    show () {
      this.showWrap = true
    },
    hide () {
      this.showWrap = false
    }
  }
})
document.body.appendChild(toastDom.$el)
function showMsg (msg) {
  toastDom.msg = msg
  toastDom.show()
}
// function hideMsg () {
//   toastDom.hide()
// }
export default showMsg
