<template>
  <div class="apphuoseList">
    <div class="apphuoseList-header">
      <span>为你找到</span>
      <span>{{count}}个</span>
      <span v-if="pagetype=='newhuose'">{{this.code === '2'? '北京': '上海'}}</span>
      <span>{{mession}}</span>
    </div>
    <!-- 新房 -->
      <div class="apphuoseList-items newhouselist" v-if="pagetype=='newhuose'" style="height: calc(100% - .34rem)">
      <vue-better-scroll
        class="wrapper"
        :data='listResult'
        :options='scrollOptions'
        @pulling-up='onPullingUp'
        ref="Scroll">
        <div class='apphuoseList-items-container' v-for="(item, index) in listResult" :key="index" @click="gohuosedetail(item)" >
          <div class="apphuoseList-items-left">
            <img :src="item.pic" alt="" srcset="">
          </div>
          <div class="apphuoseList-items-right">
            <p class="fontsizeoverflow">{{item.title}}</p>
            <p class="alignItemP">
              <span style="font-size:.09rem">{{item.district}}</span> | <span class="fontsizeoverflow" style="max-width:.8rem;font-size:.09rem">{{item.address}}</span>
              <span  class="fontsizeoverflow align_span">总价{{item.min_price/10000}}万／套起</span>
            </p>
            <p class="fontsizeoverflow">
              <span>建筑类型</span>
              <span>{{item.type}}</span>
              <span>建筑面积</span>
              <span v-if="item.min_area">{{item.min_area}}~{{item.max_area}}㎡</span>
              <span v-if="!item.min_area">{{item.max_area}}㎡</span>
            </p>
            <!-- <p class="fontsizeoverflow">
              <span class="onsale" :style="{color: item.color}"
              v-for="(its,index) in item.labels" :key="index"
              v-if="index<3">{{its.text}}</span>
            </p> -->
            <!-- <p>
              {{item.min_price}}-{{item.max_area}}万/㎡
            </p> -->
          </div>
        </div>
        <div style="height:.6rem;line-height:.6rem;text-align: center;font-size:.18rem;" v-if="listResult.length===0">
          暂时没有找到对应的楼盘
        </div>
         </vue-better-scroll>
      </div>
    <!-- 商铺 -->
    <div class="apphuoseList-items shoplist" v-if="pagetype=='shop'" style="height: calc(100% - .34rem)">
       <vue-better-scroll
        class="wrapper"
        :data='listResult'
        :options='scrollOptions'
        @pulling-up='onPullingUp'
        ref="Scroll">
      <div class='apphuoseList-items-container' v-for="(item, index) in listResult" :key="index" @click="gohuosedetail(item)" >
        <div class="apphuoseList-items-left">
          <img :src="item.pic" alt="" srcset="">
        </div>
        <div class="apphuoseList-items-right">
          <p class="fontsizeoverflow">{{item.title}}</p>
          <p class="alignItemP">
            <span style="font-size:.09rem">{{item.district}}</span> | <span  class="fontsizeoverflow" style="max-width:1rem;font-size:.09rem">{{item.address}}</span>
            <span  class="fontsizeoverflow align_span">{{activePclass === 1? `${item.price}元/㎡·天`: `${item.price/10000}万`}}</span>
          </p>
          <p class="fontsizeoverflow">
            <span>建筑面积</span>
            <span style="color: #888 !important">{{item.build_area}}㎡</span>
            <span>使用面积</span>
            <span>{{item.apply_area}}㎡</span>
          </p>
          <!-- <p class="fontsizeoverflow">
            <span class="normal" v-for="(its,index) in item.facilities" :key="index">{{its}}</span>
          </p>
          <p>
           {{item.price}} {{activePclass === 1? '万/月': '万'}}
          </p> -->
        </div>
      </div>
       <div style="height:.6rem;line-height:.6rem;text-align: center;font-size:.18rem;" v-if="listResult.length===0">
          暂时没有找到对应的商铺
      </div>
      </vue-better-scroll>
    </div>
    <!-- 写字楼 -->
    <div class="apphuoseList-items officelist" v-if="pagetype=='office'" style="height: calc(100% - .34rem)">
      <vue-better-scroll
        class="wrapper"
        :data='listResult'
        :options='scrollOptions'
        @pulling-up='onPullingUp'
        ref="Scroll">
      <div class='apphuoseList-items-container' v-for="(item, index) in listResult" :key="index" @click="gohuosedetail(item)" >
        <div class="apphuoseList-items-left">
          <img :src="item.pic" alt="" srcset="">
        </div>
        <div class="apphuoseList-items-right">
          <p class="fontsizeoverflow">{{item.title}}</p>
          <p class="fontsizeoverflow alignItemP" >
            <span style="font-size:.09rem">{{item.district}}</span> | <span class="fontsizeoverflow" style="max-width:1rem;font-size:.09rem">{{item.address}}</span>
            <span  class="fontsizeoverflow align_span">{{activePclass === 1? `${item.price}元/㎡·天`: `${item.price/10000}万`}}</span>
          </p>
          <p class="fontsizeoverflow" style="flex-wrap: nowrap;">
            <span>建筑面积</span>
            <span style="color: #888 !important">{{item.build_area}}㎡</span>
            <span>使用面积</span>
            <span>{{item.apply_area}}㎡</span>
          </p>
          <!-- <p style="color: #FB6550;font-size: .12rem;">
          {{item.price}} {{activePclass === 1? '万/月': '万'}}
          </p> -->
        </div>
      </div>
      <div style="height:.6rem;line-height:.6rem;text-align: center;font-size:.18rem;" v-if="listResult.length===0">
          暂时没有找到对应的写字楼
      </div>
      </vue-better-scroll>
    </div>
  </div>
</template>

<script>
import VueBetterScroll from '../../scrollPage/TrtScroll'

export default {
  name: 'apphuoseList',
  props: {
    pagetype: {
      type: String,
      default: 'newhuose'
    },
    listResult: Array,
    isPullDown: Boolean, // 是不是继续可以上拉加载
    count: Number,
    activePclass: Number // 判断是出售还是出租 1是出租
  },
  data () {
    return {

    }
  },
  computed: {
    scrollOptions () { // 配置文件
      return {
        pullUpLoad: this.pullUpLoadObj,
        click: 'true'
        // bounce: {
        //   top: false,
        //   bottom: false
        // }
      }
    },
    pullUpLoadObj () {
      return this.isPullDown ? {
        threshold: 100,
        txt: {
          more: '上拉加载更多',
          noMore: '没有更多数据了'
        }
      } : false
    },
    mession () {
      if (this.pagetype === 'newhuose') return '新楼盘'
      if (this.pagetype === 'shop') return '商铺'
      if (this.pagetype === 'office') return '写子楼'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      console.log(this.count)
    })
  },
  methods: {
    gohuosedetail (item) {
      let id = item.id
      if (this.pagetype === 'newhuose') {
        this.$router.push({path: '/newHouseDetail/' + id, query: { code: this.code }})
      } else if (this.pagetype === 'shop') {
        this.$router.push({path: '/shopDetail/' + id, query: { code: this.code, houseType: this.activePclass }})
      } else if (this.pagetype === 'office') {
        this.$router.push({path: '/officeBuildDetail/' + id, query: { code: this.code, houseType: this.activePclass }})
      }
    },
    /**
         * 上拉加载更多数据
         * @function onPullingUp
        */
    onPullingUp () {
      this.$emit('onPullingUp')
    }
  },
  components: {
    VueBetterScroll
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.apphuoseList {
  // padding: 0 .15rem;
  background: #fff;
  height: 100%;
  .wrapper {
    height: 100%;
    & .trt-scroll-content {
      height: 100%
    }
  }
  .apphuoseList-header {
    height: .34rem;
    padding: 0 .15rem;
    line-height: .44rem;
    font-size: .12rem;
    span:nth-of-type(2) {
      color: #4984FB;
    }
  }
  & /deep/ .trt-scroll-list-wrapper {
    padding: 0 .15rem;
  }
  .newhouselist /deep/ .trt-scroll-list-wrapper {
    min-height: calc(100vh - 3.34rem)
  }
  .shoplist /deep/ .trt-scroll-list-wrapper {
    min-height: calc(100vh - 3.74rem)
  }
  .officelist /deep/ .trt-scroll-list-wrapper {
    min-height: calc(100vh - 3.74rem)
  }
  .apphuoseList-items-container {
    display: flex;
    padding-bottom: .15rem;
    padding-top: .15rem;
    border-bottom: 1px solid #B7B7B7;
    &:nth-last-of-type(1){
      border-bottom: none;
    }
  }
  .apphuoseList-items-left {
    width: .96rem;
    height: .54rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .apphuoseList-items-right {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: .54rem;
    margin-left: .15rem;
    width: calc(100% - 1.11rem);
    font-size: .12rem;
    p:nth-of-type(1) {
      font-size: .14rem;
      font-weight: bold;
      color: #333;
    }
    p:nth-of-type(2) {
      display: flex;
      flex-wrap: wrap;
      color: #8888;
      span {
        font-size: .09rem;
        color: #888;
      }
      span:nth-of-type(1) {
        margin-right: .05rem;
      }
      span:nth-of-type(2) {
        margin-left: .05rem;
      }
    }
    p:nth-of-type(3) {
      span {
        font-size: .09rem;
        color: #888;
      }
      span:nth-of-type(2){
        color: #5D9CF9 !important;
      }
    }
    p:nth-of-type(4) {
      span {
        font-size: .09rem;
        color: #888;
        padding:.02rem;
      }
    }
    p:nth-of-type(5) {
      color: #FB6550;
    }
  }
  .onsale,.normal {
    margin-right:2px;
    font-size: .09rem;
  }
  .onsale:last-child, .normal:last-child {
    margin-right:0 !important;
  }
  .alignItemP {
    align-items: center;
    flex-wrap: nowrap;
    font-size:.09rem;
    color: #888;
    position: relative;
  }
  .align_span {
    color: #FB6550 !important;
    font-size:.09rem;
    position: absolute;
    right:0;
    z-index:8;
  }
}
</style>
