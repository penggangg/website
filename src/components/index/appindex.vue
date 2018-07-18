<template>
  <div class="appindex" :style="{overflow:shownavigationpops ? 'hidden' : 'auto',height:shownavigationpops ? '100vh' : '100%'}">
    <div class="header-img">
      <div class="header-nav">
        <div>
          <citydropdown :citylocationbg="citylocationbg"></citydropdown>
        </div>
        <navigationpops
        @closePops="shownavigationpops=false"
        @shownavigationpopsshow="shownavigationpops=true"
        v-model = "pithOne"
        :shownavigationpops="shownavigationpops">
        </navigationpops>
      </div>
      <inputSearch :styleObjet=styleObjet></inputSearch>
    </div>

    <div class="us-house">
      <div>
        <p>一 选择合屋 一</p>
        <p>合屋选址 称心如意</p>
      </div>
      <div >
        <div class="us-house-conten">
          <p class="houseSvg"></p>
          <p>房源全面</p>
          <p>精品商铺写字楼全覆盖</p>
        </div>
        <div class="us-house-conten">
          <p class="realSvg"></p>
          <p>真实可信</p>
          <p>实地核验真实房源</p>
        </div>
        <div class="us-house-conten">
          <p class="serviceSvg"></p>
          <p>专业服务</p>
          <p>一站式选址专业省心</p>
        </div>
      </div>
    </div>

    <div>
      <recommendedList :swiperdatalist="swiperdatalist"></recommendedList>
    </div>
    <div>
      <recommendedList :swiperdatalist="swiperdatalist"></recommendedList>
    </div>
    <div>
      <recommendedList :swiperdatalist="swiperdatalist"></recommendedList>
    </div>

    <footercommon></footercommon>
  </div>
</template>

<script>
import navigationpops from '@/components/public/appPublic/navigationPops'
import citydropdown from '@/components/public/appPublic/citydropdown'
import inputSearch from '@/components/public/appPublic/inputSearch'
import recommendedList from './common/recommendedList'
import footercommon from '@/components/public/appPublic/footer'

export default {
  name: 'Appindex',
  data () {
    return {
      pithOne: '0',
      indexObje: {},
      shownavigationpops: false,
      styleObjet: { // inputsearch组件的一些配置
        positionbottom: '.31rem',
        placeholder: '请输入城区/商圈/胡同',
        bgse: '#3886F8',
        dorpdownDome: true
      },
      citylocationbg: 'rgba(0, 0, 0, .5)', // 给city切换传背景色
      swiperdatalist: [
        {value: '上海绿地中心', price: '1500万起', imgurl: '../../../../static/images/u153.png'},
        {value: '上海绿地中心', price: '1500万起', imgurl: '../../../../static/images/banner.png'},
        {value: '上海绿地中心', price: '1500万起', imgurl: '../../../../static/images/u153.png'},
        {value: '上海绿地中心', price: '1500万起', imgurl: '../../../../static/images/banner.png'}
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
    navigationpops,
    citydropdown,
    inputSearch,
    recommendedList,
    footercommon
  },
  created () {
  }
}

</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
.appindex{
  height: 100%;
  background: #F5F5F6;
  .header-img {
    position: relative;
    width: 100%;
    height:2.04rem;
    padding: .15rem;
    background: url(../../assets/appimages/banner.png) no-repeat;
    background-size: contain;
    .header-nav {
      display: flex;
      justify-content: space-between;
    }
  }

  .us-house{
    height: 1.66rem;
    background: #fff;
    padding-top: .2rem;
    margin-bottom: .1rem;
    &>div:nth-of-type(1) {
      margin-bottom: .2rem;
      p:nth-of-type(1) {
        height: .2rem;
        line-height: .2rem;
        text-align: center;
        color: #333;
        font-size: .14rem;
        font-weight: bold;
        margin-bottom: .05rem;
      }
      p:nth-of-type(2) {
        height: .13rem;
        line-height: .13rem;
        font-size: .09rem;
        color: #888;
        text-align: center;
      }
    }
    &>div:nth-of-type(2) {
      padding: 0 .38rem;
      display: flex;
      justify-content: space-between;
      .us-house-conten {
        flex: 1;
      }
      .us-house-conten p:nth-of-type(1) {
        margin: 0 auto;
        width: .33rem;
        height: .33rem;
        background-size: contain;
      }
      .us-house-conten p:nth-of-type(2){
        margin-top: .05rem;
        margin-bottom: .05rem;
        height: .16rem;
        line-height: .16rem;
        color: #333;
        text-align: center;
      }
      .us-house-conten p:nth-of-type(3){
        line-height: .12rem;
        color: #888;
        text-align: center;
        @include font-size-min(.14rem, 100%);
      }
      .houseSvg {
        background: url(../../assets/appimages/icon-house.svg) no-repeat;
      }
      .realSvg {
        background: url(../../assets/appimages/icon-real.svg) no-repeat;
      }
      .serviceSvg {
        background: url(../../assets/appimages/icon-service.svg) no-repeat;
      }
    }
  }
}
</style>
