<template>
  <div class="container-fluid">
    <div id="pcIndex" class="row hidden-xs hidden-sm header-pc">
      <Pcindex
        :houseRecs= houseRecs
        :storeRecs= storeRecs
        :officesRecs= officesRecs
        @change-condition="changeCondition"
      ></Pcindex>
    </div>
    <div id="appIndex" class="visible-sm-block visible-xs-block">
      <Appindex
        :houseRecs= houseRecs
        :storeRecs= storeRecs
        :officesRecs= officesRecs
        @change-condition="changeCondition"
      ></Appindex>
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
    changeCondition (query) {
      if (query.type === '0') { // 新房
        this.$router.push({name: 'newHouseList', query: { code: this.code }, params: {query: query.query}})
      } else if (query.type === '1') { // 商铺
        this.$router.push({name: 'shopList', query: { code: this.code }, params: {query: query.query}})
      } else if (query.type === '2') { // 写字楼
        this.$router.push({name: 'officeBuildList', query: { code: this.code }, params: {query: query.query}})
      }
    }
  },
  components: {
    Appindex,
    Pcindex
  },
  beforeRouteUpdate (to, from, next) {
    Promise.all([houseRec({ city_id: this.code }), storeRec({ city_id: this.code }), officesRec({ city_id: this.code })]).then(res => {
      console.log(res)
      this.houseRecs = res[0].result
      this.storeRecs = res[1].result
      this.officesRecs = res[2].result
    })
    next()
  },
  async created () {
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
