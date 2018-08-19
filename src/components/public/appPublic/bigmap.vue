
<template>
   <div class="big-map-circum">
      <p class="map-circum-nav">
           <img src="../../../assets/appimages/back.svg" @click="closeBigmap">
           <span>周边配套</span>
      </p>

      <div class="map-contain" ref="bmview">
         <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready='handler' :scroll-wheel-zoom="true" >
          <!-- <bm-overlay
            pane="labelPane"
            :class="{sample: true, active}"
            @draw="draw"
            @mouseover.native="active = true"
            @mouseleave.native="active = false">
            <div>翠屏山庄</div>
          </bm-overlay> -->
          <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
            <!-- <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/> -->
          </bm-marker>
          <bm-local-search  :keyword="keyword" :nearby="nearby" :auto-viewport="true" :panel="false" :selectFirstResult="true" @searchcomplete='searchcomplete' ></bm-local-search>
        </baidu-map>
      </div>
      <div class="switchSearch">
        <p @click="keyword='教育', activeindex=1;" :class="[activeindex == 1 ? 'activeClass':'']" >教育</p>
        <p @click="keyword='医疗', activeindex=2;" :class="[activeindex == 2 ? 'activeClass':'']">医疗</p>
        <p @click="keyword='地铁', activeindex=3;" :class="[activeindex == 3 ? 'activeClass':'']">地铁</p>
        <p @click="keyword='公交', activeindex=4;" :class="[activeindex == 4 ? 'activeClass':'']">公交</p>
        <p @click="keyword='休闲', activeindex=5;" :class="[activeindex == 5 ? 'activeClass':'']">休闲</p>
        <p @click="keyword='购物', activeindex=6;" :class="[activeindex == 6 ? 'activeClass':'']">购物</p>
        <p @click="keyword='美食', activeindex=7;" :class="[activeindex == 7 ? 'activeClass':'']">美食</p>
        <p @click="keyword='健身', activeindex=8;" :class="[activeindex == 8 ? 'activeClass':'']">健身</p>
      </div>
    </div>
</template>

<script>

export default {
  name: 'mapCircum',
  props: {
    lng: Number,
    lat: Number
  },
  data () {
    return {
      center: {lng: 116.181954, lat: 39.951313},
      zoom: 10,
      active: false,
      nearby: {
        center: {lng: 116.181954, lat: 39.951313},
        radius: 2000
      },
      keyword: '',
      activeindex: -1
    }
  },
  mounted: function () {
    this.$nextTick(() => {
    })
  },
  methods: {
    handler ({BMap, map}) {
      // console.log(this.$refs)
    },
    searchcomplete (res) {
      console.log(res)
    },
    closeBigmap () {
      this.$emit('closeBigmap')
    }
  },
  watch: {
    lng () {
      this.center.lng = this.lng
      this.center.lat = this.lat
      this.nearby.center.lng = this.lng
      this.nearby.center.lat = this.lat
      console.log(this.center)
      console.log(this.nearby)
    }
  },
  created () {
  }
}

</script>

<style lang="scss" scoped>
.big-map-circum {
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  background: #000;
  .map-circum-nav {
      display: flex;
      align-items: center;
      height: .52rem;
      padding-left: .15rem;
    img {
        width: .14rem;
        height: .24rem;
        margin-right: .1rem;
    }
    span{
        display: inline-block;
        margin: 0 auto;
        color: #fff;
        font-size: .16rem;
        transform: translateX(-.12rem)
    }
  }
  .map-contain{
      flex: 1;
      .bm-view {
          width: 100%;
          height: 100%;
      }
  }
  .switchSearch {
    display: flex;
    align-items: center;
    width: 100%;
    height: .52rem;
    overflow-x: auto;
    p {
        width: 25%;
        min-width: 25%;
        color: #fff;
        line-height: .52rem;
        text-align: center;
    }
  }
}
</style>
