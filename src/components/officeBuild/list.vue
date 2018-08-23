<template>
  <div class="container-fluid">
    <div id="pcList" class="row hidden-xs hidden-sm header-pc">
      <pc-list @change-condition="changeCondition" :listResult="listResult" :condition="conditionObj"></pc-list>
    </div>
    <div id="appList" class="visible-sm-block visible-xs-block">
      <app-list @change-condition="changeCondition" :listResult="listResult" :condition="conditionObj" @onPullingUp="onPullingUp" :isPullDown="isPullDown"></app-list>
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
          query: ''
        }
        this.getCondition()
      }
      this.condition = Object.assign(this.condition, obj)
      this.getList()
    },
    async getCondition () {
      let { result } = await officeConditions({city_id: this.code, rent_type: this.condition.rent_id})
      this.conditionObj = result
    },
    async getList () {
      this.condition.city_id = this.code
      let { result } = await officesList({...this.condition})
      this.listResult = result.data
    },
    onPullingUp () {
      ++this.condition.offset
      if (this.condition.offset > 3) {
        this.isPullDown = false
        return
      }
      setTimeout(_ => {
        this.listResult = [...this.listResult, ...this.listResult]
      }, 1500)
    }
  },
  components: {
    appList,
    pcList
  },
  props: {

  },
  created () {
    this.getCondition()
    this.getList()
  }
}
</script>

<style lang="scss">
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
