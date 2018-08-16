<template>
  <div class="container-fluid">
    <div id="pcListdetail" class="row hidden-xs hidden-sm header-pc">
      <!-- pc端 -->
      <pc-detail :houseDetails="houseDetails" :houseTypes="houseTypes"></pc-detail>
    </div>
    <div id="appListdetail" class="visible-sm-block visible-xs-block">
      <appdetail></appdetail>
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
      type: [
        'oneType',
        'twoType',
        'threeType',
        'fourType',
        'fiveType'
      ]
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    async getDetails () {
      let {result} = await houseDetails()
      this.houseDetails = result
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
    this.getDetails()
  }
}
</script>

<style>
#appListdetail {
  height: 100%;
}
</style>
