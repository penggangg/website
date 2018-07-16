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
  </div>
</template>

<script>
import citydropdown from '@/components/public/appPublic/citydropdown'
import navigationpops from '@/components/public/appPublic/navigationPops'
export default {
  name: 'apphuosedetail',
  data () {
    return {
      pithOne: '1',
      citylocationbg: 'rgba(0, 0, 0, .5)', // 给city切换传背景色
      shownavigationpops: false// 控制右侧弹窗的显示隐藏
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
    navigationpops
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
            width: 1.11rem;
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
}
</style>
