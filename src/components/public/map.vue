<template>
  <div class="map-detail">
      <h3>周边配套</h3>
      <div class="map-filter">
        <span  v-for="(item, index) in searchFilter" :key=index :class="{active: keywords === item}" @click="keywords = item">{{item}}</span>
      </div>
    <div class="bmview" ref="bmview">
      <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready='handler' :scroll-wheel-zoom="false" >
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
        <bm-local-search  :keyword="keywords" :nearby="nearby" :auto-viewport="true" :panel="false" :selectFirstResult="true" @searchcomplete='searchcomplete' ></bm-local-search>
      </baidu-map>
      <div v-if = showPanel class="panels">
        <div class="title">
          {{keywords}}
        </div>
        <div class="aroundList">
          <ul class="itemBox">
            <li v-for="(item, index) in arrList" :key="index" @click="mark(index)">
              <div class="fromCharCode">{{String.fromCharCode(64 + parseInt(index+1))}}</div>
              <div>
                <span>{{item.title}}</span>
                <span>{{item.address}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      center: {lng: '', lat: ''},
      zoom: 16,
      active: false,
      nearby: {
        center: {lng: '', lat: ''},
        radius: 2000
      },
      arrList: [],
      keywords: ''
    }
  },
  created () {
    this.keywords = this.keyword
    this.$nextTick(function () {
      this.$refs.bmview.style.width = this.width
      this.$refs.bmview.style.height = this.height
    })
  },
  methods: {
    handler ({BMap, map}) {
      this.center = {
        lng: this.lng,
        lat: this.lat
      }
      this.nearby.center.lng = this.center.lng
      this.nearby.center.lat = this.center.lat
    },
    draw ({el, BMap, map}) {
      const pixel = map.pointToOverlayPixel(new BMap.Point(116.181954, 39.951313))
      console.log(el.offsetWidth, el.offsetHeight)
      el.style.left = pixel.x - el.offsetWidth / 2 + 'px'
      el.style.top = pixel.y - el.offsetHeight / 2 + 'px'
    },
    searchcomplete (res) {
      this.arrList = res.Br
    },
    search (keyword) {
      this.keywords = keyword
    },
    mark (index) {
      this.$('.BMap_Marker.BMap_noprint').eq(index + 1).click()
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
    },
    showPanel: {
      type: Boolean,
      default: true
    },
    searchFilter: {
      type: Array
    },
    lng: {
      required: true
    },
    lat: {
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.bmview {
  position: relative;
}
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
.map-detail {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 50px;
  h3 {
    margin-bottom: 30px;
  }
  .map-filter {
    margin-bottom: 35px;
    span {
      font-size: 14px;
      padding: 5px 10px;
      margin-right: 20px;
      cursor: pointer;
      &.active {
        color: #fff;
        background: #5D9CF9;
      }
    }
  }
}
.panels {
  position: absolute;
  right: 130px;
  top: 77px;
  z-index: 100000;
  width: 310px;
  background: #fff;
  .title {
    height: 38px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    line-height: 38px;
    background: #5D9CF9;
  }
  .aroundList {
    height: 280px;
    overflow-y: scroll;
    .itemBox {
      li {
        display: flex;
        border-bottom: 1px solid #B7B7B7;
        padding: 20px 35px 20px 20px;
        cursor: pointer;
        div {
          &.fromCharCode {
            width: 26px;
            height: 28px;
            text-align: center;
            line-height: 23px;
            margin-right: 36px;
            color: #fff;
            font-weight: bold;
            background: url('../../assets/images/icon-location-red.svg') no-repeat;
          }
          &:last-child {
            width: 206px;
            span {
              display: block;
              &:first-child {
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 10px;
              }
              &:last-child {
                font-size: 12px;
                color: #888;
              }
            }
          }
        }
      }
    }
  }
}
</style>
