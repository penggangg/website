<template>
  <div class="apphuosedetail" :style="{overflow:shownavigationpops ? 'hidden' : ''}">
     <div class="apphuosedetail-header">
        <div class="apphuosedetail-header-nav">
            <div class="newHouselist-header-left">
                <citydropdown :citylocationbg="citylocationbg" v-domstyle="{color: '#fff', width: '.11rem', height: '.06rem'}" ></citydropdown>
            </div>
            <div class="newHouselist-header-right">
                <navigationpops @closePops="shownavigationpops=false"
                @shownavigationpopsshow="shownavigationpops=true"
                v-model = "pithOne"
                :shownavigationpops="shownavigationpops" ></navigationpops>
            </div>
        </div>
        <div v-if="swiperPicList.length>1" class="market-Swiper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item, index) in swiperPicList" :key="index">
                    <img :src="item.pic" alt="" srcset="" @click="gotoDetail(item.id)">
                    <div class="position_div">
                        <p class="fontsizeoverflow">{{item.title}}</p>
                        <p class="fontsizeoverflow">{{item.desc}}</p>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination" ></div>
            </swiper>
        </div>
        <div v-if="swiperPicList.length==1" style="height:2.04rem" class="market-Swiper">
             <img :src="swiperPicList[0].pic" alt="" style="width:100%;height:100%;" @click="gotoDetail(swiperPicList[0].id)">
             <div class="position_div">
                <p class="fontsizeoverflow">{{swiperPicList[0].title}}</p>
                <p class="fontsizeoverflow">{{swiperPicList[0].desc}}</p>
            </div>
        </div>
     </div>
    <listmark :article_list="article_list" :count="count" :pithOne= "pithOne" @onPullingUp="onPullingUp" :isPullDown="isPullDown"></listmark>
    <!-- <huosefooter></huosefooter> -->

  </div>
</template>

<script>
import citydropdown from '@/components/public/appPublic/citydropdown'
import navigationpops from '@/components/public/appPublic/navigationPops'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import listmark from '@/components/public/appPublic/listmark'
// import huosefooter from '@/components/public/appPublic/footer'
export default {
  name: 'marketAnalysisList',
  props: {
    article_list: Array,
    swiperPicList: Array,
    isPullDown: Boolean,
    count: [Number, String]
  },
  data () {
    return {
      pithOne: '5',
      citylocationbg: 'rgba(0, 0, 0, .5)', // 给city切换传背景色
      shownavigationpops: false, // 控制右侧弹窗的显示隐藏
      swiperOption: {
        loop: true,
        autoplay: true,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    onPullingUp () {
      this.$emit('onPullingUp')
    },
    gotoDetail (id) {
      this.$router.push({name: 'marketAnalysisDetail', params: { id: id }, query: {code: this.code, pithOne: this.pithOne}})
    }
  },
  computed: {
    rootHg () {
      return this.$rootHg
    }
  },
  components: {
    citydropdown,
    navigationpops,
    swiper,
    swiperSlide,
    listmark
    // huosefooter
  },
  created () {
  }
}
</script>
<style>
.market-Swiper .swiper-pagination-bullet {
    width: .1rem;
    height: .04rem;
    background: #D8D8D8;
    border-radius: .02rem;
}
.market-Swiper .swiper-pagination-bullet-active {
    width: .25rem;
    background: #000;
}
</style>

<style lang="scss" scoped>
.apphuosedetail {
    height: 100%;
    .apphuosedetail-header {
        position: relative;
        width: 100%;
        height: 2.04rem;
        .swiper-slide {
            height: 2.04rem;
            width: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .apphuosedetail-header-nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        z-index:99;
        height: .52rem;
        padding: 0 .15rem;
        .newHouselist-header-left {
            display: flex;
            img {
                width: .14rem;
                height: .24rem;
                margin-right: .1rem;
            }
        }
    }
    .cut-off {
      height: .1rem;
      background: #F5F5F6;
    }
    .market-Swiper {
        position: relative;
    }
    .position_div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        height:.48rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p:nth-of-type(1) {
            font-size: .18rem;
            font-weight: bold;
            color: #fff;
            width: 90%;
            text-align: center;
            margin:0 auto;
        }
        p:nth-of-type(2) {
            font-size:.14rem;
            color: #fff;
            width: 90%;
            text-align: center;
            margin:0 auto;
        }
    }
}
</style>
