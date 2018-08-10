import { fetch } from './http'

// 客源咨询
export const getList = params => fetch('/api/index.php?r=customers/ask&city_id=3&type=3&tel=13488856234', { ...params })
// 客源委托
export const depute = params => fetch('/api/index.php?r=customers/depute&city_id=3&rent_type=1&tel=13488856234&uname=测试&d测试&desc=测试', { ...params })
// 城市接口
export const city = params => fetch('/api/index.php?r=config/index', { ...params })
// 新房筛选条件
export const houseConditions = params => fetch('/api/index.php?r=config/house&city_id=3', { ...params })
// 商铺筛选条件（rent_type 1 出租， 2 出售）
export const storeConditions = params => fetch('/api/index.php?r=config/store&city_id=3&rent_type=1', { ...params })
// 写字楼筛选条件
export const officeConditions = params => fetch('/api/index.php?r=config/office&city_id=3&rent_type=1', { ...params })
// 文章推荐 cid 1 市场分析 2 企业动态
export const articles = params => fetch('/api/index.php?r=articles/rec&city_id=2&cid=1&size=3', { ...params })
// 文章列表 cid 1 市场分析 2 企业动态
export const articlesList = params => fetch('/apiindex.php?r=articles/index&city_id=2&cid=1&size=3&last_id=0', { ...params })
// 文章详情
export const articlesDetails = params => fetch('/api/index.php?r=articles/detail&id=3', { ...params })
