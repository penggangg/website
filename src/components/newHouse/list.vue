<template>
  <div class="container-fluid">
    <div id="pcList" class="row hidden-xs hidden-sm header-pc">
      <pc-list :listResult=listResult :count="count" :limit="condition.limit" @changePageSize="changePageSize" :condition="conditionObj" @change-condition="changeCondition" ></pc-list>
    </div>
    <div id="appList" class="visible-sm-block visible-xs-block">
      <app-list :condition="conditionObj" :children_query="children_query" :count="count" :listResult="applistResult"  @fliterDatas="fliterDatas" @onPullingUp="onPullingUp" :isPullDown="isPullDown"></app-list>
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
      applistResult: [],
      conditionObj: {},
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
      count: 0,
      isPullDown: true,
      children_query: '' // 用来传到子组件里面显示的关键字
    }
  },
  mounted: function () {
    this.$nextTick(function () {

    })
  },
  methods: {
    changeCondition (obj) {
      this.condition.offset = 1
      this.condition = Object.assign(this.condition, obj)
      this.getHouseList()
    },
    async getCondition () {
      let { result } = await houseConditions({city_id: this.code})
      console.log(result)
      this.conditionObj = result
    },
    changePageSize (page) {
      this.condition.offset = page
      this.getHouseList()
    },
    // 分页得时候调取
    async getHouseList () {
      this.condition.city_id = this.code
      let { result } = await houseList({...this.condition})
      this.listResult = result.data
      this.count = result.count
      this.applistResult = [...this.applistResult, ...this.listResult]
      if (this.applistResult.length === this.count) {
        this.isPullDown = false
      } else {
        this.isPullDown = true
      }
    },
    // 查询得时候调取
    async fliterDatas (obj) {
      this.condition.offset = 1
      this.condition = Object.assign(this.condition, obj)
      let { result } = await houseList(this.condition)
      this.listResult = result.data
      this.count = result.count
      this.applistResult = [...[], ...this.listResult]
      if (this.applistResult.length === this.count) {
        this.isPullDown = false
      } else {
        this.isPullDown = true
      }
    },
    onPullingUp () {
      ++this.condition.offset
      this.getHouseList()
    }
  },
  components: {
    appList,
    pcList
  },
  created () {
    // 先判断是不是从首页通过查询跳转过来的
    if (this.$route.params.query) {
      this.condition.query = this.$route.params.query
      this.children_query = this.$route.params.query
    }
    this.getCondition()
    this.getHouseList()
  }
}
</script>

<style lang="scss">
#appList {
  height: 100%;
}
.container-fluid {
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
