<template>
  <div class="content">
    <div class="bread-crumbs">
      <a href="">合屋首页</a>>
      <a href="">写字楼列表</a>>
      <a href="">恒大写字楼</a>
    </div>
    <div class="house-content">
      <div class="house-img">
        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
          <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <img :src="slide" alt="" srcset="">
          </swiper-slide>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
        <div class="gallery-thumbs-cot">
          <div class="prev"></div>
          <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
            <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
              <img :src="slide" alt="" srcset="">
            </swiper-slide>
            <swiper-slide >
            </swiper-slide>
            <swiper-slide>
            </swiper-slide>
            <swiper-slide>
            </swiper-slide>
            <swiper-slide>
            </swiper-slide>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
          </swiper>
          <div class="next"></div>
        </div>
      </div>
      <div class="house-detail"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: false,
        slidesPerView: 5,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperSlides: ['../../../static/pic1_test.png', '../../../static/pic1_test.png', '../../../static/pic1_test.png', '../../../static/pic1_test.png', '../../../static/pic1_test.png', '../../../static/pic1_test.png', '../../../static/pic1_test.png']
    }
  },
  mounted () {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style lang="scss">
.content {
  width: 1200px;
  margin: 0 auto;
  .bread-crumbs {
    a {
      margin-right: 10px;
      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  }
  .house-content {
    .house-img {
      width: 708px;
      .gallery-thumbs-cot {
        .prev,.next {
          height: 82px;
          width: 24px;
          background: #303035;
        }
        .gallery-thumbs {
          height: 82px;
          width: 660px;
          img {
            width: 120px;
            height: 82px;
          }
          .swiper-button-white {
            display: none;
          }
        }
      }
    }
  }
}
</style>
