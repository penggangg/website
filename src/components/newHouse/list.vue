<template>
  <div class="container-fluid">
    <div id="pcList" class="row hidden-xs hidden-sm header-pc">
      <pc-list :listResult=listResult :condition="conditionObj" @getHouseList="getHouseList"></pc-list>
    </div>
    <div id="appList" class="visible-sm-block visible-xs-block">
      <app-list :condition="conditionObj" :listResult=listResult @fliterDatas="fliterDatas" @onPullingUp="onPullingUp" :isPullDown="isPullDown"></app-list>
    </div>
  </div>
</template>

<script>
import appList from './appList'
import pcList from './pcList'
import { houseList, houseConditions } from '@/assets/js/api'
export default {
  name: 'newHouseList',
  data () {
    return {
      listResult: [],
      conditionObj: {},
      objType: {},
      condition: {
        city_id: '',
        district_id: '',
        type_id: '',
        min: '',
        max: '',
        offset: 1,
        limit: 10,
        query: ''
      },
      isPullDown: true
    }
  },
  mounted: function () {
    this.$nextTick(function () {

    })
  },
  methods: {
    async getCondition () {
      let { result } = await houseConditions({city_id: this.code})
      console.log(result)
      this.conditionObj = result
    },
    // 分页得时候调取
    async getHouseList () {
      this.condition.city_id = this.code
      let { result } = await houseList({...this.condition})
      this.listResult = result
      if (this.listResult.length < 10) {
        this.isPullDown = false
      }
    },
    // 查询得时候调取
    async fliterDatas (obj) {
      this.condition.offset = 1
      this.condition = Object.assign(this.condition, obj)
      let { result } = await houseList(this.condition)
      this.listResult = result
      if (this.listResult.length < 10) {
        this.isPullDown = false
      }
    },
    checkUrl (obj) {
      this.objType = {...obj}
      let {districtId, price, typeId, query} = this.objType
      if (price) {
        this.condition.min = price.split('-')[0]
        this.condition.max = price.split('-')[1]
        console.log(this.condition)
      }
      this.condition.district_id = districtId
      this.condition.type_id = typeId
      this.condition.query = query
    },
    onPullingUp () {
      ++this.condition.offset
      // this.getHouseList()
      // if (this.condition.offset > 3) {
      //   this.isPullDown = false
      //   return
      // }
      // setTimeout(_ => {
      //   this.listResult = [...this.listResult, ...this.listResult]
      // }, 1500)
      this.getHouseList()
    }
  },
  components: {
    appList,
    pcList
  },
  created () {
    this.getCondition()
    this.checkUrl(this.$route.query)
    this.getHouseList()
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    let obj = to.query
    this.checkUrl(obj)
    this.getHouseList()
    next()
  }
}
</script>

<style lang="scss">
#appList {
  height: 100%;
}
#pcList {
  .wrapper {
    position: relative;
    padding-bottom: 244px;
    height: 100%;
  }
}
</style>
