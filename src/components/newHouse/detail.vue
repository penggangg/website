<template>
  <div class="container-fluid">
    <div id="pcListdetail" class="row hidden-xs hidden-sm header-pc">
      <!-- pc端 -->
    </div>
    <div id="appListdetail" class="visible-sm-block visible-xs-block">
      <appdetail></appdetail>
    </div>
  </div>
</template>

<script>

import appdetail from './appdetail'
export default {
  name: 'newHousedetail',
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
    appdetail
  },
  created () {
  }
}
</script>

<style>
.container-fluid {
  padding: 0;
  margin: 0;
}
</style>
