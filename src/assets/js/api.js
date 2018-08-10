import { fetch } from './http'

// 获取抽奖的奖品数据
export const getList = params => fetch('/api/index.php?r=customers/ask&city_id=3&type=3&tel=13488856234', { ...params })
