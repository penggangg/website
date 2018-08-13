<template>
  <div class="container-fluid">
    <div id="pcList" class="row hidden-xs hidden-sm header-pc">
      <pc-list :listResult=listResult></pc-list>
    </div>
    <div id="appList" class="visible-sm-block visible-xs-block">
      <app-list></app-list>
    </div>
  </div>
</template>

<script>
import appList from './appList'
import pcList from './pcList'
import { houseList } from '@/assets/js/api'
export default {
  name: 'newHouseList',
  data () {
    return {
      listResult: []
    }
  },
  mounted: function () {
    this.$nextTick(function () {

    })
  },
  methods: {
  },
  components: {
    appList,
    pcList
  },
  async created () {
    let { result } = await houseList({
      city_id: this.code,
      district_id: '',
      type_id: '',
      min: '',
      max: '',
      offset: '',
      limit: '',
      query: ''
    })
    this.listResult = result
  }
}
</script>

<style>
#appList {
  height: 100%;
}

</style>
