<template>
  <div class="container-fluid">
    <div id="pcList" class="row hidden-xs hidden-sm header-pc">
      <pc-list @change-condition="changeCondition"  :count="count"  :limit="condition.limit" @changePageSize="changePageSize"  :listResult="listResult" :condition="conditionObj"></pc-list>
    </div>
    <div id="appList" class="visible-sm-block visible-xs-block">
      <app-list @change-condition="changeCondition" :count="count" :children_query="children_query" :listResult="applistResult" :condition="conditionObj" @onPullingUp="onPullingUp" :isPullDown="isPullDown"></app-list>
    </div>
  </div>
</template>

<script>
import appList from './appList'
import pcList from './pcList'
import { officesList, officeConditions } from '@/assets/js/api'
export default {
  name: 'officeBuildList',
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
        query: ''
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
          query: ''
        }
        this.getCondition()
      }
      this.condition = Object.assign(this.condition, obj)
      this.getList(1)
    },
    changePageSize (page) {
      this.condition.offset = page
      this.getList()
    },
    async getCondition () {
      let { result } = await officeConditions({city_id: this.code, rent_type: this.condition.rent_id})
      this.conditionObj = result
    },
    async getList (a) {
      this.condition.city_id = this.code
      if (a === 1) {
        this.condition.offset = 1
      }
      let { result } = await officesList({...this.condition})
      this.listResult = result.data
      this.count = result.count
      if (a === 1) {
        this.applistResult = [...[], ...this.listResult]
      } else {
        this.applistResult = [...this.applistResult, ...this.listResult]
      }
      if (this.applistResult.length === this.count) {
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
  props: {

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
