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
const dynamic = r => require.ensure([], () => r(require('@/components/dynamic/index')), 'dynamic')
// 公司介绍
const company = r => require.ensure([], () => r(require('@/components/company/index')), 'company')
// 房产委托
const delegate = r => require.ensure([], () => r(require('@/components/delegate/index')), 'delegate')
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  // linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/newHouse',
      name: 'newHouseList',
      component: newHouseList
    },
    {
      path: '/newHouseDetail/:id',
      name: 'newHouseDetail',
      component: newHouseDetail
    },
    {
      path: '/shop',
      name: 'shopList',
      component: shopList
    },
    {
      path: '/shopDetail/:id',
      name: 'shopDetail',
      component: shopDetail
    },
    {
      path: '/officeBuild',
      name: 'officeBuildList',
      component: officeBuildList
    },
    {
      path: '/officeBuildDetail/:id',
      name: 'officeBuildDetail',
      component: officeBuildDetail
    },
    {
      path: '/marketAnalysis',
      name: 'marketAnalysisList',
      component: marketAnalysisList
    },
    {
      path: '/marketAnalysisDetail/:id',
      name: 'marketAnalysisDetail',
      component: marketAnalysisDetail
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic
    },
    {
      path: '/company',
      name: 'company',
      component: company
    },
    {
      path: '/delegate',
      name: 'delegate',
      component: delegate
    }
  ]
})
