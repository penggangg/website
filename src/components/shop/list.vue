<template>
  <div class="container-fluid">
    <div id="pcList" class="row hidden-xs hidden-sm header-pc">
      <pc-list :listResult="listResult"  @change-condition="changeCondition" :condition="conditionObj"></pc-list>
    </div>
    <div id="appList" class="visible-sm-block visible-xs-block">
      <app-list></app-list>
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
        facilities: [7, 8, 9, 0, 10]
      }
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
      this.getList()
    },
    async getCondition () {
      let { result } = await storeConditions({city_id: this.code})
      this.conditionObj = result
    },
    async getList () {
      this.condition.city_id = this.code
      let { result } = await storeList({...this.condition})
      this.listResult = result
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
