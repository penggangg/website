<template>
  <div class="apphuosedetail" :style="{overflow:shownavigationpops ? 'hidden' : ''}">
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
                <span class="onsale" :style="{color: item.color}" v-for="(item,index) in houseDetails.labels" :key="index">{{item.text}}</span>
            </p>
            <p>
                <img src="../../assets/appimages/icon-pic.svg" >
                <span>楼盘相册</span>
                <span>{{houseDetails.pic && houseDetails.pic.length}}</span>
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
             <span class="fontsizeoverflow" style="width:.9rem">{{houseDetails.title}}</span>
           </p>
           <p>
             <span class="colorfont-size">销售状态</span>
             <span class="fontsizeoverflow" style="width:.9rem">{{houseDetails.status}}</span>
           </p>
         </div>

        <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">建筑类型</span>
             <span class="fontsizeoverflow" style="width:.9rem">{{houseDetails.type}}</span>
           </p>
           <p>
             <span class="colorfont-size">产权年限</span>
             <span class="fontsizeoverflow" style="width:.9rem">{{houseDetails.own_years}}</span>
           </p>
         </div>

         <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">建筑面积</span>
             <span class="fontsizeoverflow" style="width:.9rem">{{houseDetails.min_area}}-{{houseDetails.max_area}}㎡</span>
           </p>
           <p>
             <span class="colorfont-size">占地面积</span>
             <span class="fontsizeoverflow" style="width:.9rem">{{houseDetails.floor_area}}</span>
           </p>
         </div>

         <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">容积率</span>
             <span class="fontsizeoverflow" style="width:.9rem">{{houseDetails.volume_rate}}</span>
           </p>
           <p>
             <span class="colorfont-size">绿化率</span>
             <span class="fontsizeoverflow" style="width:.9rem">{{houseDetails.green_rate}}</span>
           </p>
         </div>
         <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">物业费</span>
             <span class="fontsizeoverflow" style="width:.9rem">{{houseDetails.property_fee}}元/m²/月</span>
           </p>
           <p>
             <span class="colorfont-size">供暖方式</span>
             <span class="fontsizeoverflow" style="width:.9rem">{{houseDetails.heating}}</span>
           </p>
         </div>
         <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">供水方式</span>
             <span class="fontsizeoverflow">{{houseDetails.water}}</span>
           </p>
           <p>
             <span class="colorfont-size">供电方式</span>
             <span class="fontsizeoverflow" style="width:.9rem">{{houseDetails.power}}</span>
           </p>
         </div>
         <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">开发商</span>
             <span class="fontsizeoverflow" style="width:.9rem">{{houseDetails.developer}}</span>
           </p>
           <p>
             <span class="colorfont-size">城区</span>
             <span class="fontsizeoverflow" style="width:.9rem">{{houseDetails.district}}</span>
           </p>
         </div>
         <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">物业公司</span>
             <span class="fontsizeoverflow" style="width:.9rem">{{houseDetails.property}}</span>
           </p>
         </div>
         <div class="basic-information-mess-items">
           <p>
             <span class="colorfont-size">地址</span>
             <span class="fontsizeoverflow" style="width:.9rem">{{houseDetails.address}}</span>
           </p>
           <p>
             <!-- <span class="look-detail-location" @click="bigMapshow=true">查看详细地址</span> -->
             <span class="look-detail-location" @click="alertcontact=true">查看详细地址</span>
           </p>
         </div>
       </div>
     </div>

     <div class="cut-off"></div>

     <div class="houses-img">
       <div>
         <p>楼盘相册</p>
         <p>
           <span @click="pictureWindow=true" style="font-size: .12rem">查看全部</span>
           <img src="../../assets/appimages/icon-next.svg" >
         </p>
       </div>
     </div>

     <div class="huoseImg-lunbo">
       <div>
          <swiper :options="swiperOption" v-if="houseDetails.pic&&houseDetails.pic.length>0">
            <swiper-slide v-for="(item,index) in houseDetails.pic" :key="index">
                <div class="swiper-contain-div">
                    <div class="img-conten">
                        <img :src="item" >
                    </div>
                </div>
            </swiper-slide>
          </swiper>
        </div>
     </div>
     <div class="cut-off"></div>

     <div class="doormodel">
       <p class="doormodel-nav">户型信息</p>
       <div class="doormodel-tab">
         <p  @click="doormodelType=0" :style="{color: doormodelType===0? '#5D9CF9': ''}">
           全部户型 ({{houseDetails.layout && houseDetails.layout.length}})
           <span class="select-bottom" v-show="doormodelType == 0"></span>
         </p>
         <p v-if="houseTypes.oneType&&houseTypes.oneType.length>0" @click="doormodelType=1" :style="{color: doormodelType===1? '#5D9CF9': ''}">
           1居 ({{houseTypes.oneType && houseTypes.oneType.length}})
           <span class="select-bottom" v-show="doormodelType == 1"></span>
         </p>
         <p v-if="houseTypes.twoType&&houseTypes.twoType.length>0" @click="doormodelType=2" :style="{color: doormodelType===2? '#5D9CF9': ''}">
           2居 ({{houseTypes.twoType && houseTypes.twoType.length}})
           <span class="select-bottom" v-show="doormodelType == 2"></span>
         </p>
         <p v-if="houseTypes.threeType&&houseTypes.threeType.length>0" @click="doormodelType=3" :style="{color: doormodelType===3? '#5D9CF9': ''}">
            3居 ({{houseTypes.threeType && houseTypes.threeType.length}})
           <span class="select-bottom" v-show="doormodelType == 3"></span>
         </p>
         <p v-if="houseTypes.fourType&&houseTypes.fourType.length>0" @click="doormodelType=4" :style="{color: doormodelType===4? '#5D9CF9': ''}">
            4居 ({{houseTypes.fourType && houseTypes.fourType.length}})
           <span class="select-bottom" v-show="doormodelType == 4"></span>
         </p>
         <p v-if="houseTypes.fiveType&&houseTypes.fiveType.length>0" @click="doormodelType=5" :style="{color: doormodelType===5? '#5D9CF9': ''}">
            5居 ({{houseTypes.fiveType && houseTypes.fiveType.length}})
           <span class="select-bottom" v-show="doormodelType == 5"></span>
         </p>
       </div>
       <div class="doormodel-contain">
         <swiper :options="swiperOptionDoor" v-if="doormodellists&&doormodellists.length>0">
            <swiper-slide v-for="(item,index) in doormodellists" :key="index">
                <div class="swiper-contain-div">
                    <div class="img-conten">
                        <img :src="item.pic" style="width: 100%;height:100%">
                    </div>
                    <div>
                      <p>{{item.title}}</p>
                      <p>{{item.layout_area}}㎡</p>
                      <p class="fontsizeoverflow"><span style="color: #333;margin-right:2px">户型均价:</span>{{item.sale_price}}万</p>
                    </div>
                </div>
            </swiper-slide>
          </swiper>
       </div>
     </div>
    <div class="cut-off"></div>
    <mapCircum
    :lng="houseDetails.longitude"
    :lat="houseDetails.latitude">
    </mapCircum>
    <div class="cut-off"></div>
    <huosefooter></huosefooter>
    <pictureWindow v-show="pictureWindow" :doormodellist="houseDetails.pic" @closeImg="pictureWindow=false"></pictureWindow>
    <bigmap @closeBigmap="bigMapshow=false" v-if="bigMapshow"></bigmap>
    <alertcontact v-if="alertcontact" @closealertcontact="alertcontact=false"></alertcontact>
  </div>
</template>

<script>
import citydropdown from '@/components/public/appPublic/citydropdown'
import navigationpops from '@/components/public/appPublic/navigationPops'
import pictureWindow from '@/components/public/appPublic/pictureWindows'
import mapCircum from '@/components/public/appPublic/mapCircum'
import bigmap from '@/components/public/appPublic/bigmap'
import huosefooter from '@/components/public/appPublic/footer'
import alertcontact from '@/components/public/appPublic/aletcontact'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'apphuosedetail',
  props: {
    houseDetails: Object,
    houseTypes: Object
  },
  data () {
    return {
      pithOne: '1',
      citylocationbg: 'rgba(0, 0, 0, .5)', // 给city切换传背景色
      shownavigationpops: false, // 控制右侧弹窗的显示隐藏
      pictureWindow: false, // 控制图片的弹窗
      bigMapshow: false,
      alertcontact: false,
      swiperOption: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        centeredSlides: false
      },
      swiperOptionDoor: { // 户口类型
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: false
      },
      doormodelType: 0
    }
  },
  computed: {
    doormodellists (newValue) {
      if (this.doormodelType === 0) return this.houseDetails.layout
      if (this.doormodelType === 1) return this.houseTypes.oneType
      if (this.doormodelType === 2) return this.houseTypes.twoType
      if (this.doormodelType === 3) return this.houseTypes.threeType
      if (this.doormodelType === 4) return this.houseTypes.fourType
      if (this.doormodelType === 5) return this.houseTypes.fiveType
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
    swiperSlide,
    mapCircum,
    huosefooter,
    pictureWindow,
    bigmap,
    alertcontact
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.apphuosedetail {
    height: 100%;
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
          font-size: .14rem;
          font-weight: bold;
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
          margin-bottom: 5px;
          p {
            flex: 1;
            display: flex;
            align-items: center
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
        p:nth-of-type(1) {
          font-size: .14rem;
          font-weight: bold;
        }
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
      padding-left: .15rem;
      .img-conten {
        width:1.6rem;
        height:1.11rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .colorfont-size {
      font-size: .1rem;
      display: inline-block;
      width: .57rem;
      text-align: left;
      color: #888;
      margin-right: .15rem;
    }
    .fontsizeoverflow {
      font-size: .1rem;
      display: inline-block;
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
    .doormodel {
      .doormodel-nav {
        padding: 0 .15rem;
        height: .4rem;
        line-height: .4rem;
        font-weight: bold;
      }
      .img-conten {
        width: 1.12rem;
        height: 1.34rem;
      }
      .doormodel-tab {
        padding-left: .15rem;
        height: .3rem;
        border-bottom: 1px solid #B7B7B7;
        p {
          position: relative;
          margin-right: .25rem;
          font-size: .1rem;
          height: .3rem;
          float: left;
          span {
            position: absolute;
            display: block;
            width: 100%;
            height: 2px;
            background: #5D9CF9;
            bottom: -1px;
          }
        }
        p:nth-last-of-type(1) {
          margin-right: none;
        }
      }
      .doormodel-contain {
        padding: .15rem 0 .15rem .15rem;
        div:nth-of-type(2) {
          p {
            font-size: .12rem;
            height: .2rem;
            line-height: .2rem;
          }
          p:nth-last-of-type(1) {
            color: #FE644A;
            height: .2rem;
            line-height: .2rem;
          }
        }
      }
  }
  .onsale {
      margin-right:2px;
      font-size: .12rem;
      padding: 0 2px;
    }
    .onsale:last-child {
      margin-right:0 !important
    }
}
</style>
