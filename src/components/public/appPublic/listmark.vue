<template>
  <div class="mark-list">
      <p class="mark-list-nav">
          推荐
      </p>
      <div style="height:calc(100% - .47rem)">
         <div class="tuijian" style="padding: 0 .15rem;">
            <span>为你推荐</span><span style="color: #4984FB;">{{count}}</span><span>篇文章</span>
        </div>
        <vue-better-scroll
        class="wrapper"
        :data='article_list'
        :options='scrollOptions'
        @pulling-up='onPullingUp'
        ref="Scroll" >
        <div class="list-items" v-for="(item,index) in article_list" :key="index" @click="godetail(item)">
            <div>
                <img :src="item.pic" alt="" srcset="">
            </div>
            <div>
                <p class="fontsizeoverflow">{{item.title}}</p>
                <p class="fontsizeoverflow">{{item.desc}}</p>
                <p><span>作者:</span> <span>{{item.author}}</span></p>
                <p style="display: flex" class="fontsizeoverflow">
                    <span class="icoen_item" v-for="(ite,index) in item.labels" :key="index" :style="{background: ite.color}"> {{ite.text}}</span>
                </p>
            </div>
        </div>
        <div style="height:.6rem;line-height:.6rem;text-align: center;font-size:.18rem;" v-if="article_list.length === 0">
          暂时没有文章
        </div>
        </vue-better-scroll>
      </div>
  </div>
</template>

<script>
import VueBetterScroll from '../../scrollPage/TrtScroll'
export default {
  name: 'marklist',
  props: {
    article_list: Array,
    count: [Number, String],
    pithOne: String, // 区分是市场分析还是公司介绍
    isPullDown: Boolean
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
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    /**
         * 上拉加载更多数据
         * @function onPullingUp
        */
    onPullingUp () {
      this.$emit('onPullingUp')
    },
    godetail (item) {
      if (this.pithOne === '5') {
        this.$router.push({name: 'marketAnalysisDetail', params: { id: item.id }, query: {code: this.code, pithOne: this.pithOne}})
      } else if (this.pithOne === '7') {
        this.$router.push({name: 'dynamicDetail', params: { id: item.id }, query: {code: this.code, pithOne: this.pithOne}})
      }
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
.mark-list {
    height: calc(100% - 2.04rem);
    min-height: calc(100% - 2.99rem);
    .wrapper {
        height: calc(100% - .34rem);
        & .trt-scroll-content {
        height: 100%
        }
    }
    .mark-list-nav {
        height: .47rem;
        border-bottom: 1px solid #B7B7B7;
        padding-left: .15rem;
        line-height: .47rem;
        font-size: .14rem;
        font-weight: bold;
        color:#333;
    }
    .list-items:nth-of-type(1) {
        border-top: none;
    }
    .list-items {
        border-top: 1px solid #B7B7B7;
        padding: .15rem 0;
        display: flex;
        div:nth-of-type(1) {
            width: .96rem;
            height: .54rem;
            min-width: .96rem;
            margin-right: .15rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        div:nth-of-type(2) {
            width: calc(100% - 1.11rem);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p:nth-of-type(1){
                font-size: .15rem;
                color: #333;
                height: .2rem;
                line-height: .2rem;
            }
            p:nth-of-type(2) {
                font-size: .12rem;
                width: 125%;
                color: #888;
                transform: translateX(-10%) scale(.8);
            }
            p:nth-of-type(3){
                font-size: .12rem;
                width: 125%;
                transform: translateX(-10%) scale(.8);
                span {
                    font-size: .09rem;
                    color: #888;
                }
                span:nth-of-type(1){
                    margin-right: .05rem;
                }
            }
             p:nth-of-type(4) {
                padding: .02rem 0;
                text-align: center;
                color: #5D9CF9;
                font-size: .12rem;
            }
        }
    }
    .icoen_item{
        padding: 2px;
        margin-right: 2px;
    }
    .icoen_item:last-child {
        margin-right: 0
    }
    .tuijian {
        height: .34rem;
        line-height: .44rem;
        font-size: .12rem;
    }
    & /deep/ .trt-scroll-list-wrapper {
        padding: 0 .15rem;
        min-height: calc(100vh - 4.34rem);
    }
}
</style>
