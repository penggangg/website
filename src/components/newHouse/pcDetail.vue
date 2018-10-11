<template>
  <div>
    <div class="bread-crumbs">
      <router-link :to="{ path: '/', query: { code }}">合屋首页</router-link>>
      <router-link :to="{ path: '/newHouse', query: { code }}">新房列表</router-link>>
      <a href="javascript:void(0);">{{houseDetails.title}}</a>
    </div>
    <div class="banner">
      <div class="filter-bg">
          <img :src="houseDetails.pic&&houseDetails.pic[0]" style="width:100%;height:100%;">
      </div>
      <div class="opacity-bg"></div>
      <template v-if="houseDetails.pic">
        <div class="banner-small" :style="{backgroundImage:`url(${houseDetails.pic[0]})`}">
          <div class="tags-cot">
            <div class="total-pic" @click="picDetailsShow=true;currentPage=1" v-if="houseDetails.pic.length>1">
              <img src="../../assets/images/icon-pic.svg" alt="" >
              <span>楼盘相册（{{houseDetails.pic && houseDetails.pic.length-1}}张）</span>
            </div>
            <div class="tag">
              <span v-for="(item,index) in houseDetails.labels" :key="index" :style="{color:item.color}">{{item.text}}</span>
            </div>
          </div>
        </div>
      </template>

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
            <span v-if="houseDetails.min_area">{{houseDetails.min_area}}-{{houseDetails.max_area}}㎡</span>
            <span v-if="!houseDetails.min_area">{{houseDetails.max_area}}㎡</span>
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
            <span>{{houseDetails.own_years}}年</span>
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
            <span class="openAskMask"  @click="askShow = true">查看详细地址</span>
          </li>
        </ul>
        <div class="hot-line">
          咨询热线：021-61131717
        </div>
      </div>
    </div>
    <div class="item-content house-pic" v-if="houseDetails.pic&&houseDetails.pic.length>1">
      <h3>楼盘相册</h3>
      <div class="gallery-thumbs-cot">
        <div class="prev btn" @click="prev">
          <img src="../../assets/images/icon-left-white.svg" alt="" srcset="">
        </div>
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
          <swiper-slide v-for="(slide, index) in houseDetails.pic" :key="index" v-if="index>0" >
            <img :src="slide" alt="" srcset="" @click="picDetailsShow=true;swiperOptionThumbs.initialSlide=index-1;swiperOptionTop1.initialSlide=index-1;currentPage=index">
          </swiper-slide>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
        <div class="next btn" @click="next">
          <img src="../../assets/images/icon-right-white.svg" alt="" srcset="">
        </div>
      </div>
    </div>
    <div class="item-content house-type">
      <h3>户型信息</h3>
      <div class="house-filter">
        <span @click="houseTypeChange()" :class="{active: !houseType}">全部户型（{{houseDetails.layout && houseDetails.layout.length}}）</span>
        <span @click="houseTypeChange(1)" :class="{active: houseType===1}" v-if="houseTypes.oneType&&houseTypes.oneType.length">1居（{{houseTypes.oneType.length}}）</span>
        <span @click="houseTypeChange(2)" :class="{active: houseType===2}" v-if="houseTypes.twoType&&houseTypes.twoType.length">2居（{{houseTypes.twoType.length}}）</span>
        <span @click="houseTypeChange(3)" :class="{active: houseType===3}" v-if="houseTypes.threeType&&houseTypes.threeType.length">3居（{{houseTypes.threeType.length}}）</span>
        <span @click="houseTypeChange(4)" :class="{active: houseType===4}" v-if="houseTypes.fourType&&houseTypes.fourType.length">4居（{{houseTypes.fourType.length}}）</span>
        <span @click="houseTypeChange(5)" :class="{active: houseType===5}" v-if="houseTypes.fiveType&&houseTypes.fiveType.length">5居及以上（{{houseTypes.fiveType.length}}）</span>
      </div>
      <div class="type-list">
        <swiper :options="swiperOptionThumbsType" class="gallery-thumbs-type" ref="swiperThumbs">
          <swiper-slide v-for="(slide, index) in houseTypeList" :key="index">
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
                <span>{{slide.sale_price/10000}}万</span>
              </li>
            </ul>
          </swiper-slide>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
      </div>
    </div>
    <map-list
      v-if="mapShow"
      :width="options.width"
      :height= "options.height"
      :searchFilter="searchFilter"
      :keyword="keyword"
      :lng="houseDetails.longitude"
      :lat="houseDetails.latitude">
    </map-list>
    <ask-mask v-model="askShow"></ask-mask>
    <picDetails :picList="houseDetails.pic" :swiperOptionThumbs="swiperOptionThumbs1" :swiperOptionTop="swiperOptionTop1"  v-if="picDetailsShow" :currentPage="currentPage" @picDetailsShowAction="picDetailsShowAction"></picDetails>
    <footers></footers>
  </div>
</template>
<style lang="scss" scoped>
.bread-crumbs {
    margin: 0 auto;
    padding: 30px 0;
    width: 1200px;
    a {
      margin-right: 10px;
      font-size: 12px;
      color: #888C8E;
      &:not(:first-child) {
        margin-left: 10px;
      }
    }
}
.banner {
  width: 100%;
  height: 675px;
  position: relative;
  // background-repeat:no-repeat;
  // background-size:cover;
  // background-position: center center;
  .banner-small {
    position: relative;
    margin: 0 auto;
    width: 1200px;
    height: 675px;
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center center;
    .tags-cot {
      position: absolute;
      bottom: 30px;
      left:0;
      width: 100%;
      padding-left: 22px;
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
  .opacity-bg {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
    background-color: #000;
    opacity: .4;
  }
  .filter-bg {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    -moz-filter: blur(8px);
    -webkit-filter: blur(8px);
    background-position: center 0;
    background-repeat: no-repeat;
    background-size: cover;
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius="3");
    filter: blur(8px);
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
          &.openAskMask {
            margin-left:10px;
            padding: 2px 4px;
            color: #5D9CF9;
            border:1px solid #5D9CF9;
            border-radius: 4px;
            cursor: pointer;
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
        width: 369px;
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
      .swiper-button-prev, .swiper-button-next {
        top:35%;
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
import askMask from '@/components/public/pcPublic/askMask'
import picDetails from '@/components/newHouse/picDetails'

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
        spaceBetween: 20,
        slidesPerView: 3,
        slidesPerGroup: 3,
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
      swiperOptionThumbs1: {
        spaceBetween: 10,
        slidesPerView: 7,
        touchRatio: 0.2,
        loop: false,
        loopedSlides: 7, // looped slides should be the same
        initialSlide: 0, // 设定初始化时slide的索引。
        slideToClickedSlide: true
      },
      swiperOptionTop1: {
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
        }
      },
      askShow: false,
      picDetailsShow: false,
      houseType: '',
      currentPage: 1
    }
  },
  props: {
    houseDetails: Object,
    houseTypes: {
      type: Object,
      default: () => {}
    },
    mapShow: Boolean
  },
  methods: {
    houseTypeChange (type) {
      this.houseType = type
    },
    prev () {
      this.$('.house-pic .swiper-button-prev').click()
    },
    next () {
      this.$('.house-pic .swiper-button-next').click()
    },
    picDetailsShowAction () {
      this.picDetailsShow = false
    }
  },
  computed: {
    houseTypeList (newValue) {
      if (!this.houseType) return this.houseDetails.layout
      if (this.houseType === 1) return this.houseTypes.oneType
      if (this.houseType === 2) return this.houseTypes.twoType
      if (this.houseType === 3) return this.houseTypes.threeType
      if (this.houseType === 4) return this.houseTypes.fourType
      if (this.houseType === 5) return this.houseTypes.fiveType
    }
  },
  components: {
    mapList,
    askMask,
    picDetails
  }
}
</script>
