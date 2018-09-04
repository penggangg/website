export const units = {
  // 滚动到顶部
  // 只支持传class 与 id
  scrollTop: () => {
    let dom = document.getElementsByClassName('trt-scroll-content')[0]
    dom.style.transform = 'translate(0px, 0px) scale(1) translateZ(0px)'
  },
  isPoneAvailable: (str) => {
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (!myreg.test(str)) {
      return false
    } else {
      return true
    }
  }
}
