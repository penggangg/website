<template>
  <div class="container-fluid">
    <div id="pcList" class="row hidden-xs hidden-sm header-pc">
      <pc-list :listResult="listResult" :count="count"  :limit="condition.limit" @changePageSize="changePageSize"  @change-condition="changeCondition" :condition="conditionObj"></pc-list>
    </div>
    <div id="appList" class="visible-sm-block visible-xs-block">
      <app-list :listResult="applistResult" :count="count" :children_query="children_query" :condition="conditionObj" @change-condition="changeCondition"  @onPullingUp="onPullingUp" :isPullDown="isPullDown"></app-list>
    </div>
  </div>
</template>

<script>
import appList from './appList'
import pcList from './pcList'
import { storeList, storeConditions } from '@/assets/js/api'
export default {
  name: 'shopList',
  data () {
    return {
      listResult: [],
      applistResult: [],
      conditionObj: {},
      condition: {
        city_id: '',
        district_id: '',
        rent_id: 2,
        min: '',
        max: '',
        offset: 1,
        limit: 10,
        query: '',
        facilities: []
      },
      count: 0,
      isPullDown: true,
      children_query: ''
    }
  },
  mounted: function () {
    this.$nextTick(function () {

    })
  },
  methods: {
    changeCondition (obj) {
      if (Object.keys(obj)[0] === 'rent_id') {
        this.condition = {
          city_id: this.code,
          district_id: '',
          rent_id: Object.values(obj)[0],
          min: '',
          max: '',
          offset: 1,
          limit: 10,
          query: '',
          facilities: []
        }
        this.getCondition()
      }
      this.condition = Object.assign(this.condition, obj)
      console.log(this.condition)
      this.getList(1)
    },
    changePageSize (page) {
      this.condition.offset = page
    },
    async getCondition () {
      let { result } = await storeConditions({city_id: this.code,rent_type: this.rent_id})
      this.conditionObj = result
    },
    async getList (a) {
      if (a === 1) {
        this.condition.offset = 1
      }
      this.condition.city_id = this.code
      let { result } = await storeList({...this.condition})
      this.listResult = result.data
      this.count = result.count
      if (a === 1) { // 这个为查询
        this.applistResult = [...[], ...this.listResult]
      } else { // 这个为正常分页
        this.applistResult = [...this.applistResult, ...this.listResult]
      }
      if (this.listResult.length < 10) {
        this.isPullDown = false
      } else {
        this.isPullDown = true
      }
    },
    onPullingUp () {
      ++this.condition.offset
      this.getList()
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
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  height: 100%;
}
#appList {
  height: 100%;
}
#pcList {
  &.row {
    margin-right: -0;
    margin-left: 0;
  }
  .wrapper {
    position: relative;
    padding-bottom: 244px;
    height: 100%;
  }
}
</style>
