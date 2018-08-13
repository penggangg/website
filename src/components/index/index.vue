<template>
  <div class="container-fluid">
    <div id="pcIndex" class="row hidden-xs hidden-sm header-pc">
      <Pcindex
        :houseRecs= houseRecs
        :storeRecs= storeRecs
        :officesRecs= officesRecs
      ></Pcindex>
    </div>
    <div id="appIndex" class="visible-sm-block visible-xs-block">
      <Appindex></Appindex>
    </div>
  </div>
</template>

<script>
import Appindex from './appIndex'
import Pcindex from './pcIndex'
import { houseRec, storeRec, officesRec } from '@/assets/js/api'
export default {
  name: 'Index',
  data () {
    return {
      houseRecs: [],
      storeRecs: [],
      officesRecs: []
    }
  },
  mounted: function () {
    this.$nextTick(function () {

    })
  },
  methods: {
  },
  components: {
    Appindex,
    Pcindex
  },
  async created () {
    // let houseRecs = houseRec({ city_id: this.code })
    // let storeRecs = storeRec({ city_id: this.code })
    // let officesRecs = officesRec({ city_id: this.code })
    // console.log(houseRecs)
    // this.houseRecs = houseRecs.result
    // this.storeRecs = storeRecs.result
    // this.officesRecs = officesRecs.result
    Promise.all([houseRec({ city_id: this.code }), storeRec({ city_id: this.code }), officesRec({ city_id: this.code })]).then(res => {
      console.log(res)
      this.houseRecs = res[0].result
      this.storeRecs = res[1].result
      this.officesRecs = res[2].result
    })
  }
}
</script>

<style>
.container-fluid {
  padding: 0;
  margin: 0;
}
</style>
