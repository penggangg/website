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
import { officesList } from '@/assets/js/api'
export default {
  name: 'officeBuildList',
  data () {
    return {
      listResult: [],
      listType: '2'
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
      let { result } = await officesList({
        city_id: this.code,
        district_id: '',
        rent_id: this.listType,
        min: '',
        max: '',
        offset: '',
        limit: '',
        query: ''
      })
      this.listResult = result
    }
  },
  components: {
    appList,
    pcList
  },
  props: {

  },
  created () {
    this.getList()
  }
}
</script>

<style>
.container-fluid {
  padding: 0;
  margin: 0;
}
</style>
