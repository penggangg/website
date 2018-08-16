<template>
  <div>
    <div class="banner">
      <div class="tags-cot">
        <div class="total-pic">
          <img src="../../assets/images/icon-pic.svg" alt="" >
          <span>楼盘相册（{{houseDetails.pic && houseDetails.pic.length}}张）</span>
        </div>
        <div class="tag">
          <span v-for="(item,index) in houseDetails.labels" :key="index" :style="{color:item.color}">{{item.text}}</span>
        </div>
      </div>
    </div>
    <div class="house-detail item-content">
      <h3>基本信息</h3>
      <div class="details">
        <ul>
          <li>
            <span>楼盘名称</span>
            <span>{{houseDetails.title}}</span>
          </li>
          <li>
            <span>建筑类型</span>
            <span>{{houseDetails.type}}</span>
          </li>
          <li>
            <span>建筑面积</span>
            <span>{{houseDetails.min_area}}-{{houseDetails.max_area}}㎡</span>
          </li>
          <li>
            <span>容积率</span>
            <span>{{houseDetails.volume_rate}}</span>
          </li>
          <li>
            <span>物业费</span>
            <span>{{houseDetails.property_fee}}元/m²/月</span>
          </li>
          <li>
            <span>供水方式</span>
            <span>{{houseDetails.power}}</span>
          </li>
          <li>
            <span>开发商</span>
            <span>{{houseDetails.developer}}</span>
          </li>
          <li>
            <span>物业公司</span>
            <span>{{houseDetails.property}}</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>销售状态</span>
            <span>{{houseDetails.status}}</span>
          </li>
          <li>
            <span>产权年限</span>
            <span>{{houseDetails.own_years}}</span>
          </li>
          <li>
            <span>占地面积</span>
            <span>{{houseDetails.floor_area}}㎡</span>
          </li>
          <li>
            <span>绿化率</span>
            <span>{{houseDetails.green_rate}}</span>
          </li>
          <li>
            <span>供暖方式</span>
            <span>{{houseDetails.heating}}</span>
          </li>
          <li>
            <span>供电方式</span>
            <span>{{houseDetails.power}}</span>
          </li>
          <li>
            <span>地区</span>
            <span>{{houseDetails.district}}</span>
          </li>
          <li>
            <span>地址</span>
            <span>{{houseDetails.address}}</span>
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
          <swiper-slide v-for="(slide, index) in houseDetails.pic" :key="index">
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
        <span class="active">全部户型（{{houseDetails.layout && houseDetails.layout.length}}）</span>
        <span v-if="houseTypes.oneType.length">1居（{{houseTypes.houseTypes.oneType.length}}）</span>
        <span v-if="houseTypes.twoType.length">1居（{{houseTypes.twoType.length}}）</span>
        <span v-if="houseTypes.threeType.length">1居（{{houseTypes.threeType.length}}）</span>
        <span v-if="houseTypes.fourType.length">1居（{{houseTypes.fourType.length}}）</span>
        <span v-if="houseTypes.fiveType.length">5居及以上（{{houseTypes.fiveType.length}}）</span>
      </div>
      <div class="type-list">
        <swiper :options="swiperOptionThumbsType" class="gallery-thumbs-type" ref="swiperThumbs">
          <swiper-slide v-for="(slide, index) in houseDetails.layout" :key="index">
            <img :src="slide.pic" alt="" srcset="">
            <ul class="type-detail">
              <li class="area">
                <span>
                  <template v-if="slide.bedroom">{{slide.bedroom}}室</template>
                  <template v-if="slide.hall">{{slide.hall}}厅</template>
                  <template v-if="slide.toilet">{{slide.toilet}}卫</template>
                </span>
                <span>{{slide.layout_area}}㎡</span>
              </li>
              <li class="price">
                <span>户型均价：</span>
                <span>{{slide.sale_price}}万{{houseDetails.longitude}}</span>
              </li>
            </ul>
          </swiper-slide>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
      </div>
    </div>
    <map-list
      :width="options.width"
      :height= "options.height"
      :searchFilter="searchFilter"
      :keyword="keyword"
      :lng="houseDetails.longitude"
      :lat="houseDetails.latitude">
    </map-list>
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
              font-size: 14px;
              color: #000;
              margin-right: 3px;
              &:last-child {
                font-size: 14px;
                color: #FE644A;
              }
            }
          }
        }
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
      houseTypeDetails: [],
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
  props: {
    houseDetails: Object,
    houseTypes: Object
  },
  methods: {

  },
  created () {
  },
  components: {
    mapList
  }
}
</script>
