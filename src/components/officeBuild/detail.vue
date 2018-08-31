<template>
  <div class="container-fluid">
    <div id="pcDetail" class="row hidden-xs hidden-sm header-pc">
      <pc-detail :mapShow="mapShow" :officesDetails="officesDetails"></pc-detail>
    </div>
    <div id="appDetail" class="visible-sm-block visible-xs-block">
      <app-detail :officesDetails="officesDetails" :houseType="houseType" :mapShow="mapShow"></app-detail>
    </div>
  </div>
</template>

<script>
import appDetail from './appDetail'
import pcDetail from './pcDetail'
import { officesDetails } from '@/assets/js/api'
export default {
  name: 'officeBuildDetail',
  data () {
    return {
      mapShow: false,
      officesDetails: {},
      id: '',
      houseType: 2
    }
  },
  mounted: function () {
    this.$nextTick(function () {

    })
  },
  methods: {
    async getDetails () {
      let {result} = await officesDetails({
        city_id: this.code,
        id: this.id
      })
      this.officesDetails = result
      this.mapShow = true
      this.houseType = result.rent_id
    }
  },
  components: {
    appDetail,
    pcDetail
  },
  created () {
    this.id = this.$route.params.id
    this.getDetails()
  }
}
</script>

<style>
#appDetail{
  height:100%;
}
</style>
