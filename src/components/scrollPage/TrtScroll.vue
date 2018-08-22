<template>
<div ref="wrapper" class="trt-scroll-wrapper">
  <div class="trt-scroll-content">
    <div ref="listWrapper" class="trt-scroll-list-wrapper">
      <slot>
      </slot>
    </div>
    <slot name="pullup" :pullUpLoad="pullUpLoad" :isPullUpLoad="isPullUpLoad">
      <div class="trt-pullup-wrapper" v-if="pullUpLoad">
        <div class="before-trigger" v-if="!isPullUpLoad">
          <span>{{ pullUpTxt }}</span>
        </div>
        <div class="after-trigger" v-else>
          <loading></loading>
          <span>加载中...</span>
        </div>
      </div>
      <div class="trt-pullup-wrapper" v-if="!pullUpLoad">
        <div class="before-trigger">
            <span>没有更多的数据了</span>
        </div>
      </div>
    </slot>
    <div class="huosefooter" style="height: .95rem">
      <housefooter></housefooter>
    </div>
  </div>
  <slot name="pulldown" :pullDownRefresh="pullDownRefresh" :pullDownStyle="pullDownStyle" :beforePullDown="beforePullDown" :isPullingDown="isPullingDown" :bubbleY="bubbleY">
    <div class="trt-pulldown-wrapper" :style="pullDownStyle" v-if="pullDownRefresh">
      <div class="before-trigger" v-if="beforePullDown">
        <bubble :y="bubbleY"></bubble>
      </div>
      <div class="after-trigger" v-else>
        <div v-if="isPullingDown" class="scrollloading" style="display: flex;align-items: center;justify-content: center;">
          <loading ></loading>
          <span style="margin-left: .2rem;">加载中...</span>
        </div>
        <div v-else><span>{{ refreshTxt }}</span></div>
      </div>
    </div>
  </slot>
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import Loading from './TrtLoading.vue'
import Bubble from './Bubble.vue'
import housefooter from '@/components/public/appPublic/footer'
const DEFAULT_REFRESH_TXT = 'Refresh success' // 如果没传成功后的显示则显示这个
const PULL_DOWN_ELEMENT_INITIAL_HEIGHT = -50 // 配置向下拉多少距离后刷新

export default {
  name: 'trt-scroll',
  props: {
    options: {
      type: Object,
      default () {
        return {}
      }
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      beforePullDown: true,
      isPullingDown: false,
      isPullUpLoad: false,
      pullUpDirty: true,
      bubbleY: 0,
      pullDownStyle: ''
    }
  },
  computed: {
    pullDownRefresh () { // 加载成功后的数据刷新成功!的提示
      return this.options.pullDownRefresh
    },
    pullUpLoad () { // 上拉加载的一些配置
      return this.options.pullUpLoad
    },
    pullUpTxt () {
      const pullUpLoad = this.pullUpLoad
      const txt = pullUpLoad && pullUpLoad.txt
      const moreTxt = (txt && txt.more) || ''
      const noMoreTxt = (txt && txt.noMore) || ''

      return this.pullUpDirty ? moreTxt : noMoreTxt
    },
    refreshTxt () {
      const pullDownRefresh = this.pullDownRefresh
      return (pullDownRefresh && pullDownRefresh.txt) || DEFAULT_REFRESH_TXT
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.forceUpdate(true)
      }, this.refreshDelay)
    },
    pullDownRefresh: {
      handler (newVal, oldVal) {
        if (newVal) {
          this.scroll.openPullDown(newVal)
          if (!oldVal) {
            this._onPullDownRefresh()
            this._calculateMinHeight()
          }
        }

        if (!newVal && oldVal) {
          this.scroll.closePullDown()
          this._offPullDownRefresh()
          this._calculateMinHeight()
        }
      },
      deep: true
    },
    pullUpLoad: {
      handler (newVal, oldVal) {
        if (newVal) {
          this.scroll.openPullUp(newVal)
          if (!oldVal) {
            this._onPullUpLoad()
            this._calculateMinHeight()
          }
        }

        if (!newVal && oldVal) {
          this.scroll.closePullUp()
          this._offPullUpLoad()
          this._calculateMinHeight()
        }
      },
      deep: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  methods: {
    initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      this._calculateMinHeight()
      this.scroll = new BScroll(this.$refs.wrapper, this.options)

      if (this.pullDownRefresh) {
        this._onPullDownRefresh()
      }

      if (this.pullUpLoad) {
        this._onPullUpLoad()
      }
    },
    refresh () {
      this._calculateMinHeight()
      this.scroll && this.scroll.refresh()
    },
    forceUpdate (dirty = false) {
      // debugger;
      if (this.pullDownRefresh && this.isPullingDown) { // 下拉刷新后一些回调
        this.isPullingDown = false
        this._reboundPullDown().then(() => {
          this._afterPullDown(dirty)
        })
      } else if (this.pullUpLoad && this.isPullUpLoad) { // 上拉刷新后一些回调
        this.isPullUpLoad = false
        this.scroll.finishPullUp()
        this.pullUpDirty = dirty
        dirty && this.refresh()
      } else {
        dirty && this.refresh()
      }
    },
    _scrollTo () { // 滚动到指定的位置
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    resetPullUpTxt () {
      this.pullUpDirty = true
    },
    _calculateMinHeight () {
      // 下面注释代码的功能是可以让如果页面里的列表高度没有屏幕高的时候也是可以拉动的。
      // if (this.$refs.listWrapper) {
      //     this.$refs.listWrapper.style.minHeight = this.pullDownRefresh || this.pullUpLoad ? `${this.$utils.getRect(this.$refs.wrapper).height + 1}px` : 0;
      // }
    },
    _onPullDownRefresh () {
      this.scroll.on('pullingDown', this._pullDownHandle)
      this.scroll.on('scroll', this._pullDownScrollHandle)
    },
    _offPullDownRefresh () {
      this.scroll.off('pullingDown', this._pullDownHandle)
      this.scroll.off('scroll', this._pullDownScrollHandle)
    },
    _pullDownHandle () {
      if (this.resetPullDownTimer) {
        clearTimeout(this.resetPullDownTimer)
      }
      this.beforePullDown = false
      this.isPullingDown = true
      this.$emit('pulling-down')
    },
    _pullDownScrollHandle (pos) {
      if (this.beforePullDown) {
        this.bubbleY = Math.max(0, pos.y + PULL_DOWN_ELEMENT_INITIAL_HEIGHT)
        this.pullDownStyle = `top:${Math.min(pos.y + PULL_DOWN_ELEMENT_INITIAL_HEIGHT, 10)}px`
      } else {
        this.bubbleY = 0
        this.pullDownStyle = `top:${Math.min(pos.y - 30, 10)}px`
      }
    },
    _onPullUpLoad () {
      this.scroll.on('pullingUp', this._pullUpHandle)
    },
    _offPullUpLoad () {
      this.scroll.off('pullingUp', this._pullUpHandle)
    },
    _pullUpHandle () {
      this.isPullUpLoad = true
      this.$emit('pulling-up')
    },
    _reboundPullDown () {
      const {
        stopTime = 600
      } = this.pullDownRefresh
      return new Promise((resolve) => {
        setTimeout(() => {
          this.scroll.finishPullDown()
          resolve()
        }, stopTime)
      })
    },
    _afterPullDown (dirty) {
      this.resetPullDownTimer = setTimeout(() => {
        this.pullDownStyle = `top:${PULL_DOWN_ELEMENT_INITIAL_HEIGHT}px`
        this.beforePullDown = true
        dirty && this.refresh()
      }, 300)
    }
  },
  components: {
    Loading,
    Bubble,
    housefooter
  }
}
</script>

<style lang="scss" scoped >
.trt-scroll-wrapper {
    position: relative;
    height: 100%;
    overflow: hidden;
}
.trt-pulldown-wrapper {
    position: absolute;
    width: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all;
    .after-trigger {
        margin-top: 5px;
    }
}
.trt-pullup-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: .54rem;
    .before-trigger {
        padding: 22px 0;
        min-height: 1em;
    }
    .after-trigger {
        padding: 19px 0;
        display: flex;
        align-items: center;
        >span{
          margin-left: .2rem;
        }
    }
}
.trt-scroll-content {
    position: relative;
    z-index: 1;
    .trt-scroll-item {
        height: 60px;
        line-height: 60px;
        font-size: 24px;
        padding-left: 20px;
    }
}
</style>
