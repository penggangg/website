<template>
  <div class="container-fluid">
    <div id="pcList" class="row hidden-xs hidden-sm header-pc">
      <pc-list></pc-list>
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
      msg: 'Welcome to Your Vue.js App'
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
  created () {
    houseList({
      city_id: this.code,
      district_id: '',
      type_id: '',
      min: '',
      max: '',
      offset: '',
      limit: '',
      query: ''
    }).then(res => {
      console.log(res)
    })
  }
}
</script>

<style>
#appList {
  height: 100%;
}

</style>
