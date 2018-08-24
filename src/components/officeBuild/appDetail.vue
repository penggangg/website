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
                <img src="../../assets/appimages/icon-pic.svg" >
                <span>楼盘相册</span>
                <span>({{officesDetails.pic&&officesDetails.pic.length}}张)</span>
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
           <p class="basic-information-mess-header">
             {{officesDetails.title}}
           </p>
         </div>

        <div class="basic-information-mess-items" style="margin-bottom: .05rem;">
           <p>
             <span class="colorfont-size">建筑面积</span>
             <span style="font-size: .12rem">{{officesDetails.build_area}}㎡</span>
           </p>
         </div>
         <div class="basic-information-mess-items" style="margin-bottom: .05rem;">
           <p>
             <span class="colorfont-size">使用面积</span>
             <span style="font-size: .12rem">{{officesDetails.apply_area}}㎡</span>
           </p>
         </div>

         <div class="basic-information-mess-items" style="margin-bottom: .05rem;">
           <p>
             <span class="colorfont-size">区域</span>
             <span style="font-size: .12rem">{{officesDetails.district}}</span>
           </p>
         </div>
         <div class="basic-information-mess-items" style="margin-bottom: .05rem;">
            <p style="flex:3;flex-wrap: nowrap;display: flex;align-items: center;">
             <span class="colorfont-size">地址</span>
             <span style="font-size: .12rem;display: inline-block;width: .9rem" class="fontsizeoverflow">{{officesDetails.address}}</span>
           </p>
           <p style="margin-left: .15rem;flex:2">
             <span class="look-detail-location" @click="alertcontact=true">查看详细地址</span>
           </p>
         </div>
         <div class="basic-information-mess-items" style="margin-top: .05rem;">
           <p>
             <span class="colorfont-size">售价</span>
             <span style="font-size: .12rem"><b style="font-size: .22rem;color:#F74D3F">{{officesDetails.price}}</b><b style="color:#F74D3F">万元</b></span>
           </p>
         </div>
       </div>
       <div class="basic-information-mess-items">
           <p class="map-button" @click="bigMapshow=true">
            查看地图
           </p>
        </div>
     </div>

     <div class="cut-off"></div>

    <mapCircum
    :lng="officesDetails.longitude"
    :lat="officesDetails.latitude"
    ></mapCircum>
    <div class="cut-off"></div>
    <huosefooter></huosefooter>
    <bigmap
    :lng="officesDetails.longitude"
    :lat="officesDetails.latitude"
    @closeBigmap="bigMapshow=false" v-if="bigMapshow"></bigmap>
    <alertcontact v-if="alertcontact" @closealertcontact="alertcontact=false"></alertcontact>
  </div>
</template>

<script>
import citydropdown from '@/components/public/appPublic/citydropdown'
import navigationpops from '@/components/public/appPublic/navigationPops'
import mapCircum from '@/components/public/appPublic/mapCircum'
import bigmap from '@/components/public/appPublic/bigmap'
import huosefooter from '@/components/public/appPublic/footer'
import alertcontact from '@/components/public/appPublic/aletcontact'
export default {
  name: 'officeBuildDetail',
  props: {
    officesDetails: Object
  },
  data () {
    return {
      pithOne: '3',
      citylocationbg: 'rgba(0, 0, 0, .5)', // 给city切换传背景色
      shownavigationpops: false, // 控制右侧弹窗的显示隐藏
      bigMapshow: false,
      alertcontact: false
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
    mapCircum,
    huosefooter,
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
      padding-top: .15rem;
      .huoseImg-lunbo-conten {
          display: flex;
          flex-wrap: wrap;
          .huoseImg-lunbo-items {
              width: 20%;
              margin-bottom: .15rem;
              p {
                  text-align: center;
                  font-size: .12rem;
              }
          }
      }
    }
    .colorfont-size {
      display: inline-block;
      width: .57rem;
      font-size: .1rem;
      text-align: left;
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
    .doormodel {
      .doormodel-nav {
        padding: 0 .15rem;
        height: .4rem;
        line-height: .4rem;
        font-weight: bold;
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
    .basic-information-mess-header {
        margin-bottom: .1rem;
        font-size: .15rem;
        font-weight: bold;
        color: #333;
    }
    .map-button {
        height: .36rem;
        line-height: .36rem;
        font-size: .16rem;
        background: #5D9CF9;
        color: #fff;
        text-align: center;
    }
}
</style>
