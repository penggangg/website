<template>
  <div class="container-fluid">
    <div id="pcList" class="row hidden-xs hidden-sm header-pc">
      <pc-list :listResult="listResult"  @change-condition="changeCondition" :condition="conditionObj"></pc-list>
    </div>
    <div id="appList" class="visible-sm-block visible-xs-block">
      <app-list :listResult="listResult" :condition="conditionObj" @change-condition="changeCondition"  @onPullingUp="onPullingUp" :isPullDown="isPullDown"></app-list>
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
      isPullDown: true
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
      this.getList()
    },
    async getCondition () {
      let { result } = await storeConditions({city_id: this.code})
      this.conditionObj = result
    },
    async getList () {
      this.condition.city_id = this.code
      let { result } = await storeList({...this.condition})
      this.listResult = result.data
      debugger
      if (this.listResult.length < 10) {
        this.isPullDown = false
      } else {
        this.isPullDown = true
      }
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
      this.getList()
    }

  },
  components: {
    appList,
    pcList
  },
  created () {
    this.getCondition()
    this.getList()
  }
}
</script>

<style lang="scss">
#appList {
  height: 100%;
}
#pcList {
  height: 100%;
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
