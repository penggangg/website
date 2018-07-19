<template>
  <div>
    <div class="banner">
      <div class="tags-cot">
        <div class="total-pic">
          <img src="../../assets/images/icon-pic.svg" alt="" >
          <span>楼盘相册（25张）</span>
        </div>
        <div class="tag">
          <span>在售</span>
          <span>特价房</span>
          <span>样板间可售</span>
        </div>
      </div>
    </div>
    <div class="house-detail item-content">
      <h3>基本信息</h3>
      <div class="details">
        <ul>
          <li>
            <span>楼盘名称</span>
            <span>恒大丽宫</span>
          </li>
          <li>
            <span>建筑类型</span>
            <span>住宅</span>
          </li>
          <li>
            <span>建筑面积</span>
            <span>2000㎡</span>
          </li>
          <li>
            <span>容积率</span>
            <span>2.50</span>
          </li>
          <li>
            <span>物业费</span>
            <span>6.77元/m²/月</span>
          </li>
          <li>
            <span>供水方式</span>
            <span>民电</span>
          </li>
          <li>
            <span>开发商</span>
            <span>恒大集团</span>
          </li>
          <li>
            <span>物业公司</span>
            <span>恒大集团</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>楼盘名称</span>
            <span>恒大丽宫</span>
          </li>
          <li>
            <span>建筑类型</span>
            <span>住宅</span>
          </li>
          <li>
            <span>建筑面积</span>
            <span>2000㎡</span>
          </li>
          <li>
            <span>容积率</span>
            <span>2.50</span>
          </li>
          <li>
            <span>物业费</span>
            <span>6.77元/m²/月</span>
          </li>
          <li>
            <span>供水方式</span>
            <span>民电</span>
          </li>
          <li>
            <span>开发商</span>
            <span>恒大集团</span>
          </li>
          <li>
            <span>物业公司</span>
            <span>恒大集团</span>
          </li>
        </ul>
        <div class="hot-line">
          咨询热线：400-888-9950
        </div>
      </div>
    </div>
    <div class="item-content  house-pic">
      <h3>楼盘相册</h3>
      <div class="gallery-thumbs-cot">
        <div class="prev btn">
          <img src="../../assets/images/icon-left-white.svg" alt="" srcset="">
        </div>
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
          <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <img :src="slide" alt="" srcset="">
          </swiper-slide>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
        <div class="next btn">
          <img src="../../assets/images/icon-right-white.svg" alt="" srcset="">
        </div>
      </div>
    </div>
    <div class="item-content house-type">
      <h3>户型信息</h3>
      <div class="house-filter">
        <span class="active">全部户型（12）</span>
        <span>4居（7）</span>
        <span>5居及以上（5）</span>
      </div>
      <div class="type-list">
        <swiper :options="swiperOptionThumbsType" class="gallery-thumbs-type" ref="swiperThumbs">
          <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <img :src="slide" alt="" srcset="">
            <ul class="type-detail">
              <li class="area">
                <span>地上3层/地下1层</span>
                <span>300㎡</span>
              </li>
              <li class="price">
                <span>1000万-2000万</span>
              </li>
            </ul>
          </swiper-slide>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
      </div>
    </div>
    <div class="item-content map-detail">
      <h3>周边配套</h3>
      <div class="map-filter">
        <span  v-for="(item, index) in searchFilter" :key=index :class="{active: keyword === item}" @click="keyword = item">{{item}}</span>
        <!-- <span :class="{active: keyword === '地铁'}" @click="keyword ='地铁'">地铁</span>
        <span :class="{active: keyword === '教育设施'}" @click="keyword ='教育设施'">教育设施</span> -->
      </div>
      <map-list :width="options.width" :height= "options.height" :keyword="keyword">

      </map-list>
    </div>
    <footers></footers>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  position: relative;
  height: 524px;
  background: url('../../assets/images/pic-house.png') no-repeat;
  background-size:cover;
  background-position: center center;
  .tags-cot {
    position: absolute;
    bottom: 40px;
    left: calc((100% - 1200px)/2);
    width: 1200px;
    margin: 0 auto;
    .total-pic {
      display: flex;
      float: left;
      padding: 6px 10px;
      background: rgba(0, 0, 0, .6);
      cursor: pointer;
      img {
        margin-right: 10px;
      }
      span {
        color: #fff;
      }
    }
    .tag {
      float: right;
      font-size: 0;
      span {
        margin-right: 10px;
        padding: 7px 10px;
        font-size: 12px;
        background: #E6F0FE;
        border-radius: 4px;
      }
    }
  }
}
.item-content {
  width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  h3 {
    margin-bottom: 50px;
    font-size: 16px;
    font-weight: bold;
  }
}
.house-detail {
  .details {
    position: relative;
    padding-top: 25px;
    border-top: 1px solid #B7B7B7;
    ul {
      display: inline-block;
      width: 48%;
      li {
        margin-top: 10px;
        span {
          font-size: 14px;
          &:first-child {
            display: inline-block;
            margin-right: 30px;
            width: 56px;
            color: #888;
          }
        }
      }
    }
    .hot-line {
      position: absolute;
      right: 0;
      top: 30px;
      color: #FB6550;
      font-size: 22px;
      font-weight: bold;
    }
  }
}
.house-pic {
  .gallery-thumbs-cot {
    position: relative;
    display: flex;
    .btn {
      position: absolute;
      top: 0;
      text-align: center;
      height: 208px;
      line-height: 208px;
      width: 50px;
      background: #303035;
    }
    .prev {
      left: 0;
      z-index: 2;
    }
    .next {
      right: 0;
      z-index: 1;
    }
    .gallery-thumbs {
      height: 208px;
      width: 1200px;
      // background: red;
      img {
        width: 270px;
        height: 208px;
      }
      .swiper-button-white {
        display: none;
      }
    }
  }
}
.house-type {
  h3 {
    margin-bottom: 30px;
  }
  .house-filter {
    padding-bottom: 28px;
    margin-bottom: 30px;
    border-bottom: 1px solid #B7B7B7;
    span {
      cursor: pointer;
      font-size: 14px;
      &.active {
        color: #5D9CF9;
      }
    }
  }
  .type-list {
    height: 352px;
    .gallery-thumbs-type {
      img {
        width: 224px;
        height: 267px;
      }
      .type-detail {
        padding: 14px 10px;
        height: 84px;
        li {
          font-size: 0;
          &.area {
            margin-bottom: 16px;
            span {
              font-size: 14px;
              &:first-child {
                vertical-align: bottom;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                max-width: 60%;
              }
              &:last-child {
                float: right;
              }
            }
          }
          &.price {
            span {
              font-size: 16px;
              color: #FE644A;
            }
          }
        }
      }
    }
  }
}
.map-detail {
  margin-bottom: 50px;
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
</style>
<script>
import mapList from '@/components/public/map'
export default {
  data () {
    return {
      options: {
        width: '1200px',
        height: '472px'
      },
      keyword: '公交',
      searchFilter: [
        '公交', '地铁', '教育设施', '医院', '银行', '休闲娱乐', '购物', '餐饮', '运动健身'
      ],
      swiperOptionThumbs: {
        spaceBetween: 30,
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop: false,
        loopFillGroupWithBlank: true,
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbsType: {
        spaceBetween: 20,
        slidesPerView: 5,
        slidesPerGroup: 5,
        loop: false,
        loopFillGroupWithBlank: true,
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperSlides: ['../../../static/pic1_test.png', '../../../static/pic1_test.png', '../../../static/pic1_test.png', '../../../static/pic1_test.png', '../../../static/pic1_test.png', '../../../static/pic1_test.png', '../../../static/pic1_test.png']
    }
  },
  components: {
    mapList
  }
}
</script>
