import Vue from 'vue'
import Router from 'vue-router'
// 首页
const Index = r => require.ensure([], () => r(require('@/components/index')), 'Index')
// 新房
const newHouseList = r => require.ensure([], () => r(require('@/components/newHouse/list')), 'newHouseList')
const newHouseDetail = r => require.ensure([], () => r(require('@/components/newHouse/detail')), 'newHouseDetail')
// 商铺
const shopList = r => require.ensure([], () => r(require('@/components/shop/list')), 'shopList')
const shopDetail = r => require.ensure([], () => r(require('@/components/shop/detail')), 'shopDetail')
// 写字楼
const officeBuildList = r => require.ensure([], () => r(require('@/components/officeBuild/list')), 'officeBuildList')
const officeBuildDetail = r => require.ensure([], () => r(require('@/components/officeBuild/detail')), 'officeBuildDetail')
//  市场分析
const marketAnalysisList = r => require.ensure([], () => r(require('@/components/marketAnalysis/list')), 'marketAnalysisList')
const marketAnalysisDetail = r => require.ensure([], () => r(require('@/components/marketAnalysis/detail')), 'marketAnalysisDetail')
// 商务合作
const business = r => require.ensure([], () => r(require('@/components/business/index')), 'business')
// 企业动态
const dynamic = r => require.ensure([], () => r(require('@/components/dynamic/list')), 'dynamic')
// 公司介绍
const company = r => require.ensure([], () => r(require('@/components/company/index')), 'company')
// 房产委托
const delegate = r => require.ensure([], () => r(require('@/components/delegate/index')), 'delegate')
Vue.use(Router)
const router = new Router({
  // linkActiveClass: 'active',
  // linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {activeClass: 'home'}
    },
    {
      path: '/newHouse',
      name: 'newHouseList',
      component: newHouseList,
      meta: {activeClass: 'newHouse'}
    },
    {
      path: '/newHouseDetail/:id',
      name: 'newHouseDetail',
      component: newHouseDetail,
      meta: {activeClass: 'newHouse'}
    },
    {
      path: '/shop',
      name: 'shopList',
      component: shopList,
      meta: {activeClass: 'shop'}
    },
    {
      path: '/shopDetail/:id',
      name: 'shopDetail',
      component: shopDetail,
      meta: {activeClass: 'shop'}
    },
    {
      path: '/officeBuild',
      name: 'officeBuildList',
      component: officeBuildList,
      meta: {activeClass: 'officeBuild'}
    },
    {
      path: '/officeBuildDetail/:id',
      name: 'officeBuildDetail',
      component: officeBuildDetail,
      meta: {activeClass: 'officeBuild'}
    },
    {
      path: '/marketAnalysis',
      name: 'marketAnalysisList',
      component: marketAnalysisList,
      meta: {activeClass: 'marketAnalysis'}
    },
    {
      path: '/marketAnalysisDetail/:id',
      name: 'marketAnalysisDetail',
      component: marketAnalysisDetail,
      meta: {activeClass: 'marketAnalysis'}
    },
    {
      path: '/business',
      name: 'business',
      component: business,
      meta: {activeClass: 'business'}
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic,
      meta: {activeClass: 'dynamic'}
    },
    {
      path: '/company',
      name: 'company',
      component: company,
      meta: {activeClass: 'company'}
    },
    {
      path: '/delegate',
      name: 'delegate',
      component: delegate,
      meta: {activeClass: 'delegate'}
    }
  ]
})
router.beforeEach((to, from, next) => {
  let { code } = to.query
  Vue.prototype.code = code || '110000'
  console.log(Vue.prototype.code)
  next()
})
export default router
