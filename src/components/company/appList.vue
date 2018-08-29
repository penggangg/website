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

         <div class="position_div">
            <div class="product_img">
                <p class="messconten_title" style="margin-bottom: .25rem;padding-top:.25rem;">
                    <span>-</span>
                    <span>我们的产品</span>
                    <span>-</span>
                </p>
            </div>
                <div class="produnct_img_conten">
                    <div class="produnct_img_conten_item">
                        <div>
                            <p>诚信</p>
                            <p>精品商铺写字楼</p>
                            <p>全覆盖</p>
                        </div>
                        <div>
                            <img src="../../assets/appimages/chengxin1.png" alt="" srcset="">
                        </div>
                    </div>
                    <div class="produnct_img_conten_item">
                        <div>
                            <img src="../../assets/appimages/zhuanye1.png" alt="" srcset="">
                        </div>
                        <div>
                            <p>诚信</p>
                            <p>精品商铺写字楼</p>
                            <p>全覆盖</p>
                        </div>
                    </div>
                    <div class="produnct_img_conten_item">
                        <div>
                            <p>诚信</p>
                            <p>精品商铺写字楼</p>
                            <p>全覆盖</p>
                        </div>
                        <div>
                            <img src="../../assets/appimages/anquan1.png" alt="" srcset="">
                        </div>
                    </div>
                    <div class="produnct_img_conten_item">
                        <div>
                            <img src="../../assets/appimages/fenghu1.png" alt="" srcset="">
                        </div>
                        <div>
                            <p>诚信</p>
                            <p>精品商铺写字楼</p>
                            <p>全覆盖</p>
                        </div>
                    </div>
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
      pithOne: '8',
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
        background: url(../../assets/appimages/appbanner.png) no-repeat center;
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
    .position_div {
        background: #fff;
        width: 90%;
        position: relative;
        top: -.46rem;
        z-index: 99;
        margin: 0 auto;
        padding-bottom: .2rem;
    }
    .produnct_img_conten {
        .produnct_img_conten_item {
            padding: 0 .15rem;
            display: flex;
            justify-content: space-between;
            margin-bottom: .1rem;
            &>div {
                width: 50%;
                height: .88rem;
                img {
                    width: 100%;
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
        .produnct_img_conten_item:nth-of-type(1),.produnct_img_conten_item:nth-of-type(3) {
            div:nth-of-type(1) {
                p {
                    text-align: left;
                    text-indent: .4rem;
                    margin-top: .06rem;
                }
                p:nth-of-type(1) {
                    font-size: .12rem;
                    margin-bottom: .04rem;
                }
                p:nth-of-type(2),p:nth-of-type(3) {
                    font-size: .1rem;
                    color: #888;
                    margin: 0;
                }
            }
        }
        .produnct_img_conten_item:nth-of-type(2),.produnct_img_conten_item:nth-of-type(4) {
            div:nth-of-type(2) {
                p {
                    text-align: left;
                    text-indent: .35rem;
                    margin-top: .06rem;
                }
                p:nth-of-type(1) {
                    font-size: .12rem;
                    margin-bottom: .04rem;
                }
                p:nth-of-type(2),p:nth-of-type(3) {
                    font-size: .1rem;
                    color: #888;
                    margin: 0;
                }
            }
        }
    }
}
</style>
