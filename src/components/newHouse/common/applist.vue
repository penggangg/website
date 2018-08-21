<template>
  <div class="apphuoseList">
    <div class="apphuoseList-header">
      <span>为你找到</span>
      <span>{{listResult.length}}个</span>
      <span>{{this.code === '2'? '北京': '上海'}}新楼盘</span>
    </div>
    <!-- 新房 -->
      <div class="apphuoseList-items" v-if="pagetype=='newhuose'" style="height: calc(100% - .34rem)">
      <vue-better-scroll
        class="wrapper"
        :data='listResult'
        :options='scrollOptions'
        @pulling-up='onPullingUp'
        ref="Scroll" v-show="listResult.length>0">
        <div class='apphuoseList-items-container' v-for="(item, index) in listResult" :key="index" @click="gohuosedetail(item)" >
          <div class="apphuoseList-items-left">
            <img :src="item.pic" alt="" srcset="">
          </div>
          <div class="apphuoseList-items-right">
            <p class="fontsizeoverflow">{{item.title}}</p>
            <p>
              <span>{{item.district}}</span> | <span class="fontsizeoverflow" style="max-width:1.6rem">{{item.address}}</span>
            </p>
            <p class="fontsizeoverflow">
              <span>建筑类型</span>
              <span>{{item.type}}</span>
              <span>建筑面积</span>
              <span>{{item.min_area}}~{{item.max_area}}㎡</span>
            </p>
            <p class="fontsizeoverflow">
              <span class="onsale" :style="{color: item.color}"
              v-for="(its,index) in item.labels" :key="index"
              v-if="index<3">{{its.text}}</span>
            </p>
            <p>
              {{item.min_price}}-{{item.max_area}}元/㎡
            </p>
          </div>
        </div>
         </vue-better-scroll>
      </div>
    <!-- 商铺 -->
    <div class="apphuoseList-items" v-if="pagetype=='shop'">
      <div class='apphuoseList-items-container' v-for="(item, index) in listResult" :key="index" @click="gohuosedetail(item)" >
        <div class="apphuoseList-items-left">
          <img :src="item.pic" alt="" srcset="">
        </div>
        <div class="apphuoseList-items-right">
          <p class="fontsizeoverflow">{{item.title}}</p>
          <p>
            <span>{{item.district}}</span> | <span>{{item.address}}</span>
          </p>
          <p class="fontsizeoverflow">
            <span>建筑面积</span>
            <span style="color: #888 !important">{{item.build_area}}㎡</span>
            <span>使用面积</span>
            <span>{{item.apply_area}}㎡</span>
          </p>
          <p class="fontsizeoverflow">
            <span class="normal" v-for="(its,index) in item.facilities" :key="index">{{its.name}}</span>
          </p>
          <p>
           {{item.price}}万元
          </p>
        </div>
      </div>
    </div>
    <!-- 写字楼 -->
    <div class="apphuoseList-items" v-if="pagetype=='office'">
      <div class='apphuoseList-items-container' v-for="(item, index) in listResult" :key="index" @click="gohuosedetail(item)" >
        <div class="apphuoseList-items-left">
          <img :src="item.pic" alt="" srcset="">
        </div>
        <div class="apphuoseList-items-right">
          <p class="fontsizeoverflow">{{item.title}}</p>
          <p class="fontsizeoverflow" style="flex-wrap: nowrap;">
            <span>{{item.district}}</span> | <span>{{item.address}}</span>
          </p>
          <p class="fontsizeoverflow" style="flex-wrap: nowrap;">
            <span>建筑面积</span>
            <span style="color: #888 !important">{{item.build_area}}㎡</span>
            <span>使用面积</span>
            <span>{{item.apply_area}}㎡</span>
          </p>
          <p style="color: #FB6550;font-size: .12rem;">
          {{item.price}}万元
          </p>
        </div>
      </div>
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
    listResult: Array
  },
  data () {
    return {
      isPullDown: true // 是不是继续可以上拉加载
    }
  },
  computed: {
    scrollOptions () { // 配置文件
      return {
        pullUpLoad: this.pullUpLoadObj,
        click: 'true'
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
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    gohuosedetail (item) {
      let id = item.id
      if (this.pagetype === 'newhuose') {
        this.$router.push({path: '/newHouseDetail/' + id, query: { code: this.code }})
      } else if (this.pagetype === 'shop') {
        this.$router.push({path: '/shopDetail/' + id, query: { code: this.code }})
      } else if (this.pagetype === 'office') {
        this.$router.push({path: '/officeBuildDetail/' + id, query: { code: this.code }})
      }
    },
    /**
         * 上拉加载更多数据
         * @function onPullingUp
        */
    onPullingUp () {
      setTimeout(_ => {
        this.listResult = [this.listResult, ...this.listResult]
      }, 1500)
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
  padding: 0 .15rem;
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
    line-height: .44rem;
    font-size: .12rem;
    span:nth-of-type(2) {
      color: #4984FB;
    }
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
    height: .96rem;
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
    height: .96rem;
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
  }
  .onsale:last-child, .normal:last-child {
    margin-right:0 !important
  }
}
</style>
