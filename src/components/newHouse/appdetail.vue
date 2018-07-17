<template>
  <div class="apphuosedetail">
     <div class="apphuosedetail-header">
        <div class="apphuosedetail-header-nav">
            <div class="newHouselist-header-left">
                <img src="../../assets/appimages/back.svg" @click="$root.goback">
                <citydropdown :citylocationbg="citylocationbg" v-domstyle="{color: '#fff', width: '.11rem', height: '.06rem'}" ></citydropdown>
            </div>
            <div class="newHouselist-header-right">
                <navigationpops @closePops="shownavigationpops=false"
                @shownavigationpopsshow="shownavigationpops=true"
                v-model = "pithOne"
                :shownavigationpops="shownavigationpops" ></navigationpops>
            </div>
        </div>
        <div class="right-icon">
            <p>
                <span class="onsale">在售</span>
                <span class="special">特价房</span>
                <span class="normal">样板间可售</span>
                <span class="normal">公园地产</span>
                <span class="normal">花园洋房</span>
            </p>
            <p>
                <img src="../../assets/appimages/icon-pic.svg" >
                <span>楼盘相册</span>
                <span>(25张)</span>
            </p>
        </div>
     </div>
     <div class="basic-information">
       <div class="basic-information-nav">
         <p>基本信息</p>
         <p>
           <span>咨询热线:</span>
           <span>400-888-9950</span>
         </p>
       </div>
       <div class="basic-information-mess">
         <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">楼盘名称</span>
             <span>恒大立宫</span>
           </p>
           <p>
             <span class="colorfont-size">销售状态</span>
             <span>在售</span>
           </p>
         </div>

        <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">建筑类型</span>
             <span>恒大立宫</span>
           </p>
           <p>
             <span class="colorfont-size">产权年限</span>
             <span>在售</span>
           </p>
         </div>

         <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">建筑面积</span>
             <span>恒大立宫</span>
           </p>
           <p>
             <span class="colorfont-size">占地面积</span>
             <span>在售</span>
           </p>
         </div>

         <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">容积率</span>
             <span>恒大立宫</span>
           </p>
           <p>
             <span class="colorfont-size">绿化率</span>
             <span>在售</span>
           </p>
         </div>
         <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">物业费</span>
             <span>恒大立宫</span>
           </p>
           <p>
             <span class="colorfont-size">供暖方式</span>
             <span>在售</span>
           </p>
         </div>
         <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">供水方式</span>
             <span>恒大立宫</span>
           </p>
           <p>
             <span class="colorfont-size">供电方式</span>
             <span>在售</span>
           </p>
         </div>
         <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">开发商</span>
             <span>恒大立宫</span>
           </p>
           <p>
             <span class="colorfont-size">城区</span>
             <span>在售</span>
           </p>
         </div>
         <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">物业公司</span>
             <span>恒大立宫</span>
           </p>
         </div>
         <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">地址</span>
             <span>恒大立宫</span>
           </p>
           <p>
             <span class="look-detail-location">查看详细地址</span>
           </p>
         </div>
       </div>
     </div>

     <div class="cut-off"></div>

     <div class="houses-img">
       <div>
         <p>楼盘相册</p>
         <p>
           <span>查看全部</span>
           <img src="../../assets/appimages/icon-next.svg" >
         </p>
       </div>
     </div>

     <div class="huoseImg-lunbo">
       <div>
          <swiper :options="swiperOption" v-if="swiperdatalist.length>0">
            <swiper-slide v-for="(item,index) in swiperdatalist" :key="index">
                <div class="swiper-contain-div">
                    <div class="img-conten">
                        <img :src="item.imgurl" >
                    </div>
                </div>
            </swiper-slide>
          </swiper>
        </div>
     </div>
     <div class="cut-off"></div>
  </div>
</template>

<script>
import citydropdown from '@/components/public/appPublic/citydropdown'
import navigationpops from '@/components/public/appPublic/navigationPops'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'apphuosedetail',
  data () {
    return {
      pithOne: '1',
      citylocationbg: 'rgba(0, 0, 0, .5)', // 给city切换传背景色
      shownavigationpops: false, // 控制右侧弹窗的显示隐藏
      swiperOption: {
        loop: true,
        slidesPerView: 2.1,
        spaceBetween: 10,
        centeredSlides: true
      },
      swiperdatalist: [
        {value: '上海绿地中心1', price: '1500万起', imgurl: '../../../static/images/u153.png'},
        {value: '上海绿地中心2', price: '1500万起', imgurl: '../../../static/images/banner.png'},
        {value: '上海绿地中心3', price: '1500万起', imgurl: '../../../static/images/u153.png'},
        {value: '上海绿地中心4', price: '1500万起', imgurl: '../../../static/images/banner.png'}
      ]
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
  },
  components: {
    citydropdown,
    navigationpops,
    swiper,
    swiperSlide
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.apphuosedetail {
    .apphuosedetail-header {
        position: relative;
        width: 100%;
        height: 2.04rem;
        background: url(../../assets/appimages/huosedetailbanner.png) no-repeat center;
        background-size: 100%;
    }
    .apphuosedetail-header-nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
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
    .right-icon {
        position: absolute;
        right: 0;
        bottom: .16rem;
        padding-right: .18rem;
        p:nth-of-type(1) {
            margin-bottom: .1rem;
        }
        p:nth-of-type(2) {
            display: flex;
            float: right;
            align-items: center;
            padding: 0 .04rem 0 .02rem;
            width: 1.21rem;
            background: #000;
            opacity: .6;
            img {
                width: .15rem;
                height: .15rem;
                margin-right: .04rem;
            }
            span {
                color: #fff;
                font-size: .1rem;
            }
            span:nth-of-type(1) {
                margin-right: .05rem;
            }
        }
    }
    .basic-information {
      background: #fff;
      .basic-information-nav {
        padding: 0 .15rem;
        height: .47rem;
        border-bottom: 1px solid #B7B7B7;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p:nth-of-type(1) {
          font-size: .12rem;
          color: #333;
        }
        p:nth-of-type(2) {
          span {
            color: red;
          }
          span:nth-of-type(1) {
            margin-right: .05rem;
            font-size: .12rem;
          }
        }
      }
      .basic-information-mess {
        padding-top: .15rem;
        padding-left: .15rem;
        padding-bottom: .15rem;
        .basic-information-mess-items {
          display: flex;
          p {
            flex: 1;
          }
        }
      }
    }
    .houses-img {
      height: .47rem;
      border-bottom: 1px solid #b7b7b7;
      padding: 0 .15rem;
      &>div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .47rem;
        p:nth-of-type(2){
          span {
            color: #888;
          }
          img {
            width: .09rem;
            height: .16rem;
          }
        }
      }
    }
    .huoseImg-lunbo {
      padding: .15rem 0;
      .img-conten {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .colorfont-size {
      color: #888;
      margin-right: .15rem;
    }
    .look-detail-location {
      border: 1px solid #5D9CF9;
      padding: .04rem;
      color: #5D9CF9;
      border-radius: .06rem;
    }
    .cut-off {
      height: .1rem;
      background: #F5F5F6;
    }
}
</style>
