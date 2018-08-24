<template>
<div class="bigImg" style="display:block;">
  <div class="bigImgs">
    <div class="prev">
      <img src="../../assets/images/icon-left-big.svg" alt="" srcset="">
    </div>
    <div class="bigImg_cot">
        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
          <swiper-slide v-for="(slide, index) in picList" :key="index">
            <img :src="slide" alt="" srcset="">
          </swiper-slide>
        </swiper>
        <span class="total">3/25</span>
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
          <swiper-slide v-for="(slide, index) in picList" :key="index">
            <img :src="slide" alt="" srcset="">
          </swiper-slide>
          <swiper-slide>
          </swiper-slide>
          <swiper-slide>
          </swiper-slide>
          <swiper-slide>
          </swiper-slide>
          <swiper-slide>
          </swiper-slide>
          <swiper-slide>
          </swiper-slide>
          <swiper-slide>
          </swiper-slide>
        </swiper>
        <!-- 四个按钮的自定义 -->
        <div class="big_close"></div>
    </div>
    <div class="prev">
      <img src="../../assets/images/icon-right-big.svg" alt="" srcset="">
    </div>
  </div>
</div>
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
        loopedSlides: 3, // looped slides should be the same
        initialSlide: 0, // 设定初始化时slide的索引。
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionTop: {
        spaceBetween: 10,
        loop: false,
        loopedSlides: 3, // looped slides should be the same
        initialSlide: 0, // 设定初始化时slide的索引。
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 1200px;
    height: 694px;
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
        }
      }
    }
  }
}
</style>
