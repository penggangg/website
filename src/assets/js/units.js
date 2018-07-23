export const units = {
  // 滚动到顶部
  // 只支持传class 与 id
  scrollTop: (name) => {
    let rel = /^[.]/
    if (rel.test(name)) {
      let names = name.slice(1)
      let dom = document.getElementsByClassName(names)[0]
      dom.scrollTo(0, 0)
    } else {
      let names = name.slice(1)
      let dom = document.getElementById(names)
      dom.scrollTo(0, 0)
    }
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
