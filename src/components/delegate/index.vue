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
  name: 'delegate',
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
    appList,
    pcList
  },
  created () {
  }
}
</script>

<style>
</style>
