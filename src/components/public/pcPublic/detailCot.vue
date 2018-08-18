<template>
<div class="house-content">
    <div class="house-img">
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide v-for="(slide, index) in details.pic" :key="index">
          <img :src="slide" alt="" srcset="">
        </swiper-slide>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
      <div class="gallery-thumbs-cot">
        <div class="prev"></div>
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
          <swiper-slide v-for="(slide, index) in details.pic" :key="index">
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
    <div class="house-detail">
      <div class="title">{{details.title}}</div>
      <div class="prcie" v-if="details.rent_id ===2">
        <span>售价</span>
        <span>{{details.price}}</span>万元
      </div>
      <div class="prcie"  v-if="details.rent_id ===1">
        <span>租金</span>
        <span>{{details.price}}万</span>元/月
      </div>
      <ul class="details">
        <li>
          <span>建筑面积</span>
          <span>{{details.build_area}}㎡</span>
        </li>
        <li>
          <span>使用面积</span>
          <span>{{details.apply_area}}㎡</span>
        </li>
        <li>
          <span>区域</span>
          <span>{{details.district}}㎡</span>
        </li>
        <li>
          <span>地址</span>
          <span class="address">{{details.address}}</span>
          <span class="search">查看详细地址</span>
          <span class="map"> <img src="../../../assets/images/icon-location-blue .svg" > 查看地图</span>
        </li>
      </ul>
      <div class="hot-line">
        咨询热线：400-888-9950
      </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.house-content {
    height: 482px;
    .house-img {
      width: 708px;
      float: left;
      .gallery-top {
        img {
          width: 708px;
          height: 400px;
        }
      }
      .gallery-thumbs-cot {
        display: flex;
        .prev,.next {
          height: 82px;
          width: 24px;
          background: #303035;
        }
        .gallery-thumbs {
          height: 82px;
          width: 640px;
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
    .house-detail {
      float: right;
      width: 442px;
      .title {
        // border-bottom: 1px solid #B7B7B7;
        height: 60px;
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        color: #333;
        width: 442px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .prcie {
        padding: 30px 0;
        margin: 30px 0;
        font-size: 16px;
        color: #F74D3F;
        border-bottom: 1px solid #B7B7B7;
        border-top: 1px solid #B7B7B7;
        span {
          &:first-child {
            margin-right: 30px;
            color: #333;
          }
          &:last-child {
            font-size: 48px;
            font-weight: bold;
            color: #F74D3F;
          }
        }
      }
      .details {
        li {
          margin-bottom: 10px;
            font-size: 0;
          span {
            font-size: 14px;
            &:first-child {
              display: inline-block;
              width: 56px;
              margin-right: 30px;
              color: #888;
              font-size: 14px;
              vertical-align: bottom
            }
            &.address {
              display: inline-block;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              width: 104px;
              vertical-align: bottom
            }
            &.search {
              padding: 2px 10px;
              margin: 0 37px 0 30px;
              color: #5D9CF9;
              border: 1px solid #5D9CF9;
              border-radius: 4px;
              cursor: pointer;
            }
            &.map {
              color: #5D9CF9;
              cursor: pointer;
              img {
                margin-right: 6px;
              }
            }
          }
        }
      }
      .hot-line {
        margin-top: 90px;
        font-size: 22px;
        font-weight: bold;
        color: #FB6550;
      }
    }
  }
</style>
<script>
export default {
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
  props: {
    details: {
      type: Object
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
