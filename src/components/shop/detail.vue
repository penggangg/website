<template>
  <div class="container-fluid">
    <div id="pcDetail" class="row hidden-xs hidden-sm header-pc">
      <pc-detail :storeDetails="storeDetails" :mapShow="mapShow"></pc-detail>
    </div>
    <div id="appDetail" class="visible-sm-block visible-xs-block">
      <app-detail :storeDetails="storeDetails" :houseType="houseType" :mapShow="mapShow"></app-detail>
    </div>
  </div>
</template>

<script>
import appDetail from './appDetail'
import pcDetail from './pcDetail'
import { storeDetails } from '@/assets/js/api'
export default {
  name: 'shopDetail',
  data () {
    return {
      storeDetails: {},
      mapShow: false,
      id: '',
      houseType: 2 // 用来区分是出售还是出租
    }
  },
  mounted: function () {
    this.$nextTick(function () {

    })
  },
  methods: {
  },
  components: {
    appDetail,
    pcDetail
  },
  async created () {
    this.id = this.$route.params.id
    let { result } = await storeDetails({
      city_id: this.code,
      id: this.id
    })
    this.storeDetails = result
    this.houseType = result.rent_id
    this.mapShow = true
  }
}
</script>

<style>
.container-fluid {
  padding: 0;
  margin: 0;
}
#appDetail{
  height: 100%;
}
</style>
