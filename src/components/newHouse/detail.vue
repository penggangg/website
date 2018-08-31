<template>
  <div class="container-fluid">
    <div id="pcListdetail" class="row hidden-xs hidden-sm header-pc">
      <!-- pc端 -->
      <pc-detail :houseDetails="houseDetails" :houseTypes="houseTypes" :mapShow="mapShow"></pc-detail>
    </div>
    <div id="appListdetail" class="visible-sm-block visible-xs-block">
      <appdetail :houseDetails="houseDetails" :houseTypes="houseTypes" :mapShow="mapShow"></appdetail>
    </div>
  </div>
</template>

<script>
import appdetail from './appdetail'
import pcDetail from './pcDetail'
import { houseDetails } from '@/assets/js/api'
export default {
  name: 'newHousedetail',
  data () {
    return {
      houseDetails: {},
      houseTypes: {
        oneType: [],
        twoType: [],
        threeType: [],
        fourType: [],
        fiveType: []
      },
      id: '',
      type: [
        'oneType',
        'twoType',
        'threeType',
        'fourType',
        'fiveType'
      ],
      mapShow: false
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    async getDetails () {
      let {result} = await houseDetails({
        city_id: this.code,
        id: this.id
      })
      this.houseDetails = result
      this.mapShow = true
      this.houseType(this.houseDetails.layout)
    },
    houseType (houseTypeDetails) {
      this.houseTypes.oneType = houseTypeDetails.filter(item => (item.bedroom === 1))
      this.houseTypes.twoType = houseTypeDetails.filter(item => (item.bedroom === 2))
      this.houseTypes.threeType = houseTypeDetails.filter(item => (item.bedroom === 3))
      this.houseTypes.fourType = houseTypeDetails.filter(item => (item.bedroom === 4))
      this.houseTypes.fiveType = houseTypeDetails.filter(item => (item.bedroom >= 5))
    }
  },
  components: {
    appdetail,
    pcDetail
  },
  created () {
    this.id = this.$route.params.id
    this.getDetails()
  }
}
</script>

<style>
#appListdetail {
  height: 100%;
}
</style>
