<template>
  <div class="recommended-list">
    <div class="recommended-list-nav">
        <p class="recommended-list-title">新房推荐</p>
        <div class="more-huose">
          <span>更多新房</span>
          <img src="../../../assets/appimages/icon-next.svg" >
        </div>
    </div>
    <div class="swiper-conten" v-if="swiperdatalist.length>0">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in swiperdatalist" :key="index">
            <div class="swiper-contain-div">
                <div class="img-conten">
                    <img :src="item.imgurl" >
                </div>
                <div class="text-mess">
                    <span>{{item.value}}</span>
                    <span>{{item.price}}</span>
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
    }
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        observeParents: true
      }
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
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
                color: #888;
                margin-right: .05rem;
            }
            img {
                width: .05rem;
                height: .09rem;
            }
        }
    }
    .swiper-conten {
        .swiper-contain-div{
            padding: 0 .15rem;
        }
        padding-top: .15rem;
        .img-conten {
            img {
                width: 100%;
            }
        }
        .text-mess {
            display: flex;
            justify-content: space-between;
            height: .45rem;
            line-height: .45rem;
            span:nth-of-type(1) {
                font-size: .15rem;
                color: #333;
            }
            span:nth-of-type(2) {
                font-size: .15rem;
                color: #FA5741;
            }
        }
    }
}
</style>
