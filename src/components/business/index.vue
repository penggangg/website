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
export default {
  name: 'marketAnalysisList',
  data () {
    return {

    }
  },
  async created () {
  },
  methods: {
  },
  components: {
    appList,
    pcList
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  height: 100%;
  #appList {
    height: 100%;
  }
}
</style>
