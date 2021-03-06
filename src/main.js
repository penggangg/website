// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import $ from 'jquery'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '@/assets/css/normalize.scss'
import '@/assets/css/common.scss'
import headers from '@/components/public/header'
import footers from '@/components/public/footer'
import {constData} from '@/assets/js/constData'
import {units} from '@/assets/js/units'
import DOmstyle from '@/assets/js/directive'
import BaiduMap from 'vue-baidu-map'
import 'babel-polyfill'
import showMsg from '@/components/public/pcPublic/msgbox/msgBox.js'
import appshowMsg from '@/components/public/appPublic/msgbox/msgBox.js'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '34Mz9s70dkoTC8gO8CMXgDaWZETHHNPF'
})
Vue.use(DOmstyle)
Vue.use(VueAwesomeSwiper)
console.log($)
Vue.config.productionTip = false
Vue.component('headers', headers)
Vue.component('footers', footers)
Vue.prototype.$constDatas = constData
Vue.prototype.$showMsg = showMsg
Vue.prototype.$appshowMsg = appshowMsg
Vue.prototype.$units = units
Vue.prototype.$ = $
Vue.prototype.code = '3'
// axios.defaults.baseURL = 'http://172.18.3.124:8081'
// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
console.log(axios)
// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods: {
    goback () {
      router.go(-1)
    }
  }
})
