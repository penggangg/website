
<template>
   <div class="map-circum">
      <p class="map-circum-nav">周边配套</p>
      <div class="map-contain">
      </div>
    </div>
</template>

<script>

export default {
  name: 'mapCircum',
  data () {
    return {
    }
  },
  mounted: function () {
    this.$nextTick(() => {
    })
  },
  methods: {
  },
  watch: {
  },
  created () {
  }
}

</script>

<style lang="scss" scoped>
.map-circum {
    .map-circum-nav {
    padding-left: .15rem;
    height: .47rem;
    font-weight: bold;
    line-height: .47rem;
    border-bottom: 1px solid #B7B7B7;
    }
    .map-contain {
    padding: .15rem;
    width:3.45rem;
    height: 2rem;
    }
}
</style>
