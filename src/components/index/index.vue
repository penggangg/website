<template>
  <div class="container-fluid">
    <div id="pcIndex" class="row hidden-xs hidden-sm header-pc">
      <Pcindex></Pcindex>
    </div>
    <div id="appIndex" class="visible-sm-block visible-xs-block">
      <Appindex></Appindex>
    </div>
  </div>
</template>

<script>
import Appindex from './appIndex'
import Pcindex from './pcIndex'
export default {
  name: 'Index',
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
    Appindex,
    Pcindex
  },
  created () {
  }
}
</script>

<style>

</style>
