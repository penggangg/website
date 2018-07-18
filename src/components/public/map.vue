<template>
  <div>
    <div class="bmview" ref="bmview">
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
  data () {
    return {
      center: {lng: 116.181954, lat: 39.951313},
      zoom: 10,
      active: false,
      nearby: {
        center: {lng: 116.181954, lat: 39.951313},
        radius: 2000
      }
    }
  },
  created () {
    this.$nextTick(function () {
      this.$refs.bmview.style.width = this.width
      this.$refs.bmview.style.height = this.height
    })
  },
  methods: {
    handler ({BMap, map}) {
      // console.log(this.$refs)
    },
    draw ({el, BMap, map}) {
      const pixel = map.pointToOverlayPixel(new BMap.Point(116.181954, 39.951313))
      console.log(el.offsetWidth, el.offsetHeight)
      el.style.left = pixel.x - el.offsetWidth / 2 + 'px'
      el.style.top = pixel.y - el.offsetHeight / 2 + 'px'
    },
    searchcomplete (res) {
      console.log(res)
    },
    search (keyword) {
      this.keyword = keyword
    }
  },
  props: {
    width: {
      default: '500px'
    },
    height: {
      default: '500px'
    },
    keyword: {
      type: String
    }
  }
}
</script>
<style scoped>
.bm-view {
  width: 100%;
  height: 100%;
}
.sample {
  background: rgba(0,0,0,0.5);
  overflow: hidden;
  box-shadow: 0 0 5px #000;
  color: #fff;
  text-align: center;
  padding: 8px;
  position: absolute;
  white-space: nowrap;
}
.sample.active {
  background: rgba(0,0,0,0.75);
  color: #fff;
}
</style>
