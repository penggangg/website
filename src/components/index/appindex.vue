<template>
  <div>
    移动端首页111
    <navigationpops @closePops="shownavigationpops=false" @shownavigationpopsshow="shownavigationpops=true" :shownavigationpops="shownavigationpops">
    </navigationpops>
  </div>
</template>

<script>
import navigationpops from '@/components/public/appPublic/navigationPops'
export default {
  name: 'Appindex',
  data () {
    return {
      shownavigationpops: false,
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
    navigationpops
  },
  created () {
  }
}

</script>

<style>

</style>
