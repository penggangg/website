<template>
  <div class="container-fluid">
    <div id="pcListdetail" class="row hidden-xs hidden-sm header-pc">
      <!-- pc端 -->
      <pc-detail :marketdetail="marketdetail"></pc-detail>
    </div>
    <div id="appListdetail" class="visible-sm-block visible-xs-block">
      <appdetail :marketdetail="marketdetail" :pithOne= "pithOne"></appdetail>
    </div>
  </div>
</template>

<script>
import appdetail from './appdetail'
import pcDetail from './pcdetail'
import { articlesDetails } from '@/assets/js/api'
export default {
  name: 'marketdetail',
  data () {
    return {
      marketdetail: {},
      pithOne: '' // 区分是市场分析还是公司介绍
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    async init () {
      let { result } = await articlesDetails({
        id: this.$route.params.id,
        city_id: this.code
      })
      this.marketdetail = result.article
    }
  },
  components: {
    appdetail,
    pcDetail
  },
  created () {
    this.pithOne = this.$route.query.pithOne
    this.init()
  }
}
</script>

<style scoped>
.container-fluid {
    height: 100%;
}
#appListdetail {
  height: 100%;
}
</style>
