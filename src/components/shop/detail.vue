<template>
  <div class="container-fluid">
    <div id="pcDetail" class="row hidden-xs hidden-sm header-pc">
      <pc-detail></pc-detail>
    </div>
    <div id="appDetail" class="visible-sm-block visible-xs-block">
      <app-detail></app-detail>
    </div>
  </div>
</template>

<script>
import appDetail from './appDetail'
import pcDetail from './pcDetail'
export default {
  name: 'officeBuildDetail',
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
    appDetail,
    pcDetail
  },
  created () {
    console.log(this.cityCode)
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
