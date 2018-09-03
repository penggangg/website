<template>
  <div class="recommended-list">
    <div class="recommended-list-nav">
        <p class="recommended-list-title">{{title}}</p>
        <div class="more-huose">
          <span style="color:#3886F8" @click="goRouter">{{movetitle}}</span>
          <img src="../../../assets/appimages/icon-next.svg" >
        </div>
    </div>
    <div class="swiper-conten" v-if="swiperdatalist.length>0">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in swiperdatalist" :key="index" >
            <div class="swiper-contain-div">
                <div class="img-conten">
                    <img :src="item.pic" @click="goRouterId(item)">
                </div>
                <div class="text-mess">
                    <span style="width:2.08rem" class="fontsizeoverflow">{{item.title}}</span>
                    <span  v-if="title == '新房推荐'">{{item.price}}元/㎡</span>
                    <span  v-if="title != '新房推荐'">{{item.price/10000}}万</span>
                </div>
            </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'recommended',
  props: {
    swiperdatalist: {
      type: Array,
      required: true
    },
    movetitle: String,
    title: String
  },
  data () {
    return {
      swiperOption: {
        observeParents: true,
        slidesPerView: 1.12,
        spaceBetween: 20,
        centeredSlides: false
      }
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    goRouter () {
      if (this.movetitle === '更多新房') {
        this.$router.push({name: 'newHouseList', query: { code: this.code }})
      } else if (this.movetitle === '更多商铺') {
        this.$router.push({name: 'shopList', query: { code: this.code }})
      } else if (this.movetitle === '更多写字楼') {
        this.$router.push({name: 'officeBuildList', query: { code: this.code }})
      }
    },
    goRouterId (item) {
      if (this.movetitle === '更多新房') {
        this.$router.push({name: 'newHouseDetail', query: { code: this.code }, params: {id: item.id}})
      } else if (this.movetitle === '更多商铺') {
        this.$router.push({name: 'shopDetail', query: { code: this.code }, params: {id: item.id}})
      } else if (this.movetitle === '更多写字楼') {
        this.$router.push({name: 'officeBuildDetail', query: { code: this.code }, params: {id: item.id}})
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.recommended-list {
    margin-bottom: .1rem;
    height: 3.07rem;
    background: #fff;
    font-size: .12rem;
    .recommended-list-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .15rem;
        height: .47rem;
        border-bottom: 1px solid #B7B7B7;
        .recommended-list-title {
            color: #333;
            font-weight: bold;
        }
        .more-huose {
            span {
                color: #888 !important;
                font-size: .12rem;
                margin-right: .05rem;
            }
            img {
                width: .05rem;
                height: .09rem;
            }
        }
    }
    .swiper-conten {
        padding-left: .15rem;
        padding-top: .15rem;
        .img-conten {
            img {
                width: 100%;
                height: 2rem;
            }
        }
        .text-mess {
            display: flex;
            justify-content: space-between;
            height: .45rem;
            line-height: .45rem;
            span:nth-of-type(1) {
                font-size: .16rem;
                color: #333;
            }
            span:nth-of-type(2) {
                font-size: .16rem;
                color: #FA5741;
            }
        }
    }
}
</style>
