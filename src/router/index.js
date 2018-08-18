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
      meta: {activeClass: 'home', titleName: '合屋'}
    },
    {
      path: '/newHouse',
      name: 'newHouseList',
      component: newHouseList,
      meta: {activeClass: 'newHouse', title: '新楼盘', titleName: '新房列表'}
    },
    {
      path: '/newHouseDetail/:id',
      name: 'newHouseDetail',
      component: newHouseDetail,
      meta: {activeClass: 'newHouse', titleName: '新房详情'}
    },
    {
      path: '/shop',
      name: 'shopList',
      component: shopList,
      meta: {activeClass: 'shop', title: '商铺', titleName: '商铺列表'}
    },
    {
      path: '/shopDetail/:id',
      name: 'shopDetail',
      component: shopDetail,
      meta: {activeClass: 'shop', titleName: '商铺详情'}
    },
    {
      path: '/shopDetailrent/:id',
      name: 'shopDetailrent',
      component: shopDetail,
      meta: {activeClass: 'shop'}
    },
    {
      path: '/officeBuild',
      name: 'officeBuildList',
      component: officeBuildList,
      meta: {activeClass: 'officeBuild', title: '写字楼', titleName: '写字楼列表'}
    },
    {
      path: '/officeBuildDetail/:id',
      name: 'officeBuildDetail',
      component: officeBuildDetail,
      meta: {activeClass: 'officeBuild', titleName: '写字楼详情'}
    },
    {
      path: '/officeBuildDetailrent/:id',
      name: 'officeBuildDetailrent',
      component: officeBuildDetail,
      meta: {activeClass: 'officeBuild'}
    },
    {
      path: '/marketAnalysis',
      name: 'marketAnalysisList',
      component: marketAnalysisList,
      meta: {activeClass: 'marketAnalysis', titleName: '市场分析列表'}
    },
    {
      path: '/marketAnalysisDetail/:id',
      name: 'marketAnalysisDetail',
      component: marketAnalysisDetail,
      meta: {activeClass: 'marketAnalysis', titleName: '市场分析详情'}
    },
    {
      path: '/business',
      name: 'business',
      component: business,
      meta: {activeClass: 'business', titleName: '商务合作'}
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic,
      meta: {activeClass: 'dynamic', titleName: '企业动态'}
    },
    {
      path: '/company',
      name: 'company',
      component: company,
      meta: {activeClass: 'company', titleName: '公司介绍'}
    },
    {
      path: '/delegate',
      name: 'delegate',
      component: delegate,
      meta: {activeClass: 'delegate', titleName: '房产委托'}
    }
  ]
})
router.beforeEach((to, from, next) => {
  let { code } = to.query
  Vue.prototype.code = code || '2'
  document.title = to.meta.titleName
  console.log(Vue.prototype.code)
  next()
})
export default router
