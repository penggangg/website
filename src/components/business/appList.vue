<template>
    <div class="businessList" :style="{overflow:shownavigationpops ? 'hidden' : ''}">
        <div class="businessList_header">
            <div class="apphuosedetail-header-nav">
                <div class="newHouselist-header-left">
                    <img src="../../assets/images/icon-left.svg" @click="$root.goback">
                    <citydropdown :citylocationbg="citylocationbg" v-domstyle="{color: '#fff', width: '.11rem', height: '.06rem'}" ></citydropdown>
                </div>
                <div class="newHouselist-header-right">
                    <navigationpops @closePops="shownavigationpops=false"
                    @shownavigationpopsshow="shownavigationpops=true"
                    v-model = "pithOne"
                    :shownavigationpops="shownavigationpops" ></navigationpops>
                </div>
            </div>
        </div>
        <div class="messconten">
            <p class="messconten_title">
                <span>-</span>
                <span>我们的产品</span>
                <span>-</span>
            </p>
            <p class="messconten_conten">
                20世纪70年代的日本，用12%的经济增长率创造了日本经济增长的光辉历史，同时也开启了日本地价暴涨的疯狂时代，据统计，在地价涨幅最大的1988年，全国平均上涨了21.7%，其中三大都市圈上涨了43.8%，东京圈的涨幅更高达65.3%价涨幅最大的1988年价涨
            </p>
        </div>

        <div class="app_banner">
            <img src="../../assets/appimages/pic-banner2.png" alt="" srcset="">
            <span class="color_font">做被尊重的地产服务商</span>
        </div>

         <div class="product_img">
             <p class="messconten_title" style="margin-bottom: .25rem">
                <span>-</span>
                <span>我们的产品</span>
                <span>-</span>
            </p>
         </div>

         <div class="produnct_img_conten">
             <div>
                 <img src="../../assets/appimages/integrity.png" alt="" srcset="">
                 <p>诚信</p>
                 <p>精品商铺写字楼全覆盖</p>
             </div>
             <div>
                 <img src="../../assets/appimages/major.png" alt="" srcset="">
                 <p>专业</p>
                 <p>精品商铺写字楼全覆盖</p>
             </div>
             <div>
                 <img src="../../assets/appimages/safety.png" alt="" srcset="">
                 <p>安全</p>
                 <p>精品商铺写字楼全覆盖</p>
             </div>
             <div>
                 <img src="../../assets/appimages/rich.png" alt="" srcset="">
                 <p>丰富</p>
                 <p>精品商铺写字楼全覆盖</p>
             </div>
         </div>

        <huosefooter></huosefooter>
    </div>
</template>

<script>
import citydropdown from '@/components/public/appPublic/citydropdown'
import navigationpops from '@/components/public/appPublic/navigationPops'
import huosefooter from '@/components/public/appPublic/footer'
export default {
  name: 'appmarketdetail',
  props: {
  },
  data () {
    return {
      pithOne: '4',
      citylocationbg: 'rgba(0, 0, 0, .5)', // 给city切换传背景色
      shownavigationpops: false // 控制右侧弹窗的显示隐藏
    }
  },
  computed: {

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
    huosefooter
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.businessList {
    height:100%;
    .businessList_header {
        height: 2.04rem;
        background: url(../../assets/appimages/appbanner.png) no-repeat center;
        background-size: 100%;
        .apphuosedetail-header-nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: .52rem;
            padding: 0 .15rem;
            .newHouselist-header-left {
                display: flex;
                align-items: center;
                img{
                    width: .14rem;
                    height: .24rem;
                    margin-right: .1rem;
                }
            }
        }
    }
    .messconten_title {
        text-align: center;
        margin-top:.25rem;
        margin-bottom: .12rem;
        span{
            font-size:.14rem;
            font-weight: bold;
        }
    }
    .messconten_conten {
        margin-bottom: .25rem;
        text-align: center;
        padding: 0 .15rem;
        font-size: .12rem;
        color: #888;
    }
    .app_banner {
        height: .79rem;
        position: relative;
        .color_font {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            font-size: .14rem;
            color: #fff;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
    .produnct_img_conten {
        padding: 0 .15rem;
        display: flex;
        justify-content: space-between;
        &>div {
            width: 25%;
            margin-right: .2rem;
            margin-bottom: .5rem;
            img {
                width: 100%;
                border-radius: 50%;
                margin-bottom: .15rem;
            }
            p:nth-of-type(1) {
                font-size: .12rem;
                text-align: center;
                margin-bottom: .06rem;
            }
            p:nth-of-type(2) {
                text-align: center;
                color: #888;
                font-size: .1rem;
            }
        }
        &>div:last-child {
            margin-right: 0;
        }
    }
}
</style>
