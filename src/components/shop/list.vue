<template>
  <div class="container-fluid">
    <div id="pcList" class="row hidden-xs hidden-sm header-pc">
      <pc-list @changeType="changeType" :listResult="listResult"></pc-list>
    </div>
    <div id="appList" class="visible-sm-block visible-xs-block">
      <app-list></app-list>
    </div>
  </div>
</template>

<script>
import appList from './appList'
import pcList from './pcList'
import { storeList } from '@/assets/js/api'
export default {
  name: 'shopList',
  data () {
    return {
      listType: 2,
      listResult: []
    }
  },
  mounted: function () {
    this.$nextTick(function () {

    })
  },
  methods: {
    changeType (type) {
      this.listType = type
      this.getList()
    },
    async getList () {
      let { result } = await storeList({
        city_id: this.code,
        district_id: '',
        rent_id: this.listType,
        min: '',
        max: '',
        offset: '',
        limit: '',
        query: '',
        facilities: ''
      })
      this.listResult = result
    }
  },
  components: {
    appList,
    pcList
  },
  created () {
    this.getList()
  }
}
</script>

<style>
#appList {
  height: 100%;
}
</style>
