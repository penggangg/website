
<template>
   <div class="map-circum">
      <p class="map-circum-nav">周边配套</p>
       <div class="switchSearch">
        <p @click="keyword='教育', activeindex=1;" :class="[activeindex == 1 ? 'activeClass':'']">教育</p>
        <p @click="keyword='医疗', activeindex=2;" :class="[activeindex == 2 ? 'activeClass':'']">医疗</p>
        <p @click="keyword='餐厅', activeindex=3;" :class="[activeindex == 3 ? 'activeClass':'']">餐厅</p>
        <p @click="keyword='购物', activeindex=4;" :class="[activeindex == 4 ? 'activeClass':'']">购物</p>
        <p @click="keyword='交通', activeindex=5;" :class="[activeindex == 5 ? 'activeClass':'']">交通</p>
      </div>
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
    </div>
</template>

<script>

export default {
  name: 'mapCircum',
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
    }
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
    .switchSearch {
      overflow-x: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: .4rem;
      p {
        flex: 1;
        border-right: 1px solid #ddd;
        margin-right:.05rem;
        text-align: center;
      }
      p:nth-last-of-type(1) {
        border-right: none;
        margin-right: none;
      }
    }
    .bm-view {
      width: 100%;
      height: 100%;
    }
    .map-contain {
    padding: .15rem;
    height: 2rem;
    }
}
</style>
