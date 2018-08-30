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
         <div class="messconten"
         style="position: absolute;top:1.03rem;width: calc(100% - .3rem);
         left: 50%;transform: translateX(-50%);background: #fff;">
            <p class="messconten_title" style="height:.16rem;">
                <span>-</span>
                <span style="font-size: .14rem;font-weight: bold;">商务合作</span>
                <span>-</span>
            </p>
        </div>
        <div class="shangwuhezuo">
        <div class="messconten_conten">
            <div class="buss_conten">
                <div>
                    <ul>
                        <Li>• 产品定位方案</Li>
                        <Li>• 产品深化方案</Li>
                        <Li>• 营销策划方案</Li>
                        <Li>• 资管运营方案</Li>
                    </ul>
                </div>
                <div style="position: relative">
                    <img src="../../assets/appimages/buss1.png" >
                    <div class="conten_items">
                        <p>策划</p>
                        <p>方案</p>
                    </div>
                </div>
            </div>
            <div class="buss_conten">
                <div style="position: relative">
                    <img src="../../assets/appimages/buss2.png" >
                    <div class="conten_items">
                        <p>营销</p>
                        <p>资管</p>
                    </div>
                </div>
                <div>
                    <ul>
                        <Li>• 商业地产</Li>
                        <Li>• 高端住宅</Li>
                        <Li>• 招商代理</Li>
                        <Li>• 运营管理</Li>
                    </ul>
                </div>
            </div>
            <div class="buss_conten" style="padding-bottom: .4rem">
                <div>
                    <ul>
                        <Li>• 住宅业态合作</Li>
                        <Li>• 商业业态合作</Li>
                        <Li>• 招商业态合作</Li>
                        <Li>• 运营业态合作</Li>
                    </ul>
                </div>
                <div style="position: relative">
                    <img src="../../assets/appimages/buss3.png" >
                    <div class="conten_items">
                        <p>渠道</p>
                        <p>合作</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <huosefooter ></huosefooter>
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
    background: #F5F5F6;
    .businessList_header {
        height: 2.04rem;
        background: url(../../assets/appimages/appbanner1.png) no-repeat center;
        background-size: 100% 100%;
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
        padding-top: .4rem;
        background: #fff;
        text-align: center;
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
            height: 100%;
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
    .shangwuhezuo {
        width: 100%;
        padding: 0 .15rem;
        position: relative;
        top: -.49rem;
        z-index: 8;
        min-height: calc(100vh - 2.99rem);
    }
    .buss_conten {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.03rem;
        padding-bottom: .25rem;
        background: #fff;
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height:.88rem;
            img{
                width: 90%;
                height:100%;
            }
            ul {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                li{
                    font-size: .12rem;
                    color: #333;
                }
            }
        }
    }
    .conten_items {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        height: .4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p{
            font-size: .15rem;
            color: #fff;
            font-weight: bold;
        }
    }
}
</style>
