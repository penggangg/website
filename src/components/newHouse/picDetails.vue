<template>
<transition name="msgbox-fade">
<div class="bigImg" v-show="value">
  <div class="bigImgs">
    <div class="prev" @click="prev">
      <img src="../../assets/images/icon-left-big.svg" alt="" srcset="">
    </div>
    <div class="bigImg_cot">
        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
          <swiper-slide v-for="(slide, index) in picList" :key="index">
            <img :src="slide" alt="" srcset="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination" style="display:none"></div>
          <div class="swiper-button-prev" slot="button-prev" style="display:none"></div>
          <div class="swiper-button-next" slot="button-next" style="display:none"></div>
        </swiper>
        <span class="total">{{currentPage}}/{{picList.length}}</span>
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
          <swiper-slide v-for="(slide, index) in picList" :key="index">
            <img :src="slide" alt="" srcset="">
          </swiper-slide>
          <swiper-slide v-for="item in 6" :key="item" v-if="picList.length<7">
          </swiper-slide>
        </swiper>
        <!-- 四个按钮的自定义 -->
        <div class="big_close"></div>
    </div>
    <div class="next" @click="next">
      <img src="../../assets/images/icon-right-big.svg" alt="" srcset="">
    </div>
    <div class="closes" @click="close">
      <img src="../../assets/images/icon-close.png" alt="" srcset="">
    </div>
  </div>
</div>
</transition>
</template>
<script>
export default {
  data () {
    return {
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 7,
        touchRatio: 0.2,
        loop: false,
        loopedSlides: 7, // looped slides should be the same
        initialSlide: 0, // 设定初始化时slide的索引。
        slideToClickedSlide: true
      },
      swiperOptionTop: {
        spaceBetween: 10,
        loop: false,
        loopedSlides: 7, // looped slides should be the same
        initialSlide: 0, // 设定初始化时slide的索引。
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        on: {
          slideChange: _ => {
            console.log(this.$('.swiper-pagination-current').html())
            let current = this.$('.swiper-pagination-current').html()
            this.currentPage = current
          }
        }
      },
      currentPage: 1
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.picList.lenght < 7) {
        this.swiperOptionThumbs.loopedSlides = 3
        this.swiperOptionTop.loopedSlides = 3
        this.swiperOptionThumbs.loop = false
        this.swiperOptionTop.loop = false
      } else {
        this.swiperOptionThumbs.loop = true
        this.swiperOptionTop.loop = true
      }
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  },
  props: {
    picList: {
      type: Array,
      default: () => []
    },
    value: {
      default: Boolean
    }
  },
  methods: {
    prev () {
      this.$('.swiper-button-prev').click()
    },
    next () {
      this.$('.swiper-button-next').click()
    },
    close () {
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.bigImg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .6);
  z-index: 100003;
  .bigImgs {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-top: 130px;
    width: 1200px;
    height: 694px;
    .prev,.next {
      cursor: pointer;
    }
    .bigImg_cot {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 856px;
      .gallery-top {
        width: 856px;
        img {
          width: 856px;
          height: 596px;
        }
      }
      .gallery-thumbs {
        width: 406px;
        img {
          width: 48px;
          height: 36px;
          cursor: pointer;
        }
      }
      .total {
        margin: 20px 0;
        font-size: 15px;
        color: #ffffff;
      }
    }
    .closes {
      position: absolute;
      right: 0;
      top: 50px;
      cursor: pointer;
    }
  }
}
.msgbox-fade-enter-active {
    -webkit-animation: msgbox-fade-in .3s;
    animation: msgbox-fade-in .3s
}

.msgbox-fade-leave-active {
    -webkit-animation: msgbox-fade-out .3s;
    animation: msgbox-fade-out .3s
}

@-webkit-keyframes msgbox-fade-in {
    0% {
        -webkit-transform: translate3d(0,-20px,0);
        transform: translate3d(0,-20px,0);
        opacity: 0
    }

    100% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        opacity: 1
    }
}

@keyframes msgbox-fade-in {
    0% {
        -webkit-transform: translate3d(0,-20px,0);
        transform: translate3d(0,-20px,0);
        opacity: 0
    }

    100% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        opacity: 1
    }
}

@-webkit-keyframes msgbox-fade-out {
    0% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        opacity: 1
    }

    100% {
        -webkit-transform: translate3d(0,-20px,0);
        transform: translate3d(0,-20px,0);
        opacity: 0
    }
}

@keyframes msgbox-fade-out {
    0% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        opacity: 1
    }

    100% {
        -webkit-transform: translate3d(0,-20px,0);
        transform: translate3d(0,-20px,0);
        opacity: 0
    }
}
</style>
