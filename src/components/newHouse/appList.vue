<template>
  <div class="newHouselist">
    <div class="newHouselist-header">
      <div class="newHouselist-header-left">
        <img src="../../assets/appimages/icon-lback.svg" >
        <citydropdown :checkCity="pithcity" :bgurl="cityxialabg" v-domstyle="{color: '#333', width: '.11rem', height: '.06rem'}" @switchcity="switchcity"></citydropdown>
      </div>
      <div class="newHouselist-header-right">
        <navigationpops @closePops="shownavigationpops=false"
        @shownavigationpopsshow="shownavigationpops=true"
        v-model = "pithOne"
        :shownavigationpops="shownavigationpops" :menuSrc="navigationbg"></navigationpops>
      </div>
    </div>

    <div class="newHouselist-search">
      <inputSearch :styleObjet=styleObjet :searchinputbg="searchinputbg"></inputSearch>
    </div>

    <div class="newHouselist-list">
      <div class="newHousefliter">
        <div @click="locationdorpdown=!locationdorpdown">
           <span>位置</span>
           <span :class="[locationdorpdown ? 'downshanjiao' : 'upshanjiao']"></span>
        </div>
        <div @click="pricedorpdown=!pricedorpdown">
           <span>单价</span>
           <span :class="[pricedorpdown ? 'downshanjiao' : 'upshanjiao']"></span>
        </div>
        <div @click="builddorpdown=!builddorpdown">
           <span>建筑类型</span>
           <span :class="[builddorpdown ? 'downshanjiao' : 'upshanjiao']"></span>
        </div>
      </div>
    </div>

    <div class="newHouse-detail-lit">
      <apphuoseList></apphuoseList>
    </div>
  </div>
</template>

<script>
import citydropdown from '@/components/public/appPublic/citydropdown'
import navigationpops from '@/components/public/appPublic/navigationPops'
import inputSearch from '@/components/public/appPublic/inputSearch'
import apphuoseList from './common/appList'

export default {
  name: 'newHouseList',
  data () {
    return {
      pithOne: '1',
      pithcity: 0,
      shownavigationpops: false, // 控制右侧弹窗的显示隐藏
      cityxialabg: 'url(' + require('../../assets/appimages/llocation.svg') + ')', // 城市的到三角样式颜色
      navigationbg: require('../../assets/appimages/icon-lmenu.svg'), // 右侧的弹窗按钮样式
      styleObjet: { // 搜索组件的一些配置
        positionbottom: '.1rem',
        placeholder: '请输入城区/商圈/胡同',
        bgse: '#fff',
        dorpdownDome: false
      },
      searchinputbg: require('../../assets/appimages/icon-lsearch.svg'), // 搜索框的放大镜的颜色
      locationdorpdown: true, // 位置的到三角
      pricedorpdown: true, // 价格的到三角
      builddorpdown: true // 建筑类型的到三角
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    switchcity (itemObject) {
      this.pithcity = itemObject.index
    }
  },
  components: {
    citydropdown,
    navigationpops,
    inputSearch,
    apphuoseList
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.newHouselist {
  height: 100%;
  background: #F5F5F6;
  .newHouselist-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: .52rem;
    background: #fff;
    padding: 0 .29rem;
    .newHouselist-header-left {
      display: flex;
      img {
        width: .14rem;
        height: .24rem;
        margin-right: .1rem;
      }
    }
  }
  .newHouselist-search {
    height: .52rem;
    position: relative;
  }

  .newHouselist-list {
    .newHousefliter{
      height: .47rem;
      background: #fff;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #B7B7B7;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        height: .47rem;
        &>span:nth-of-type(1) {
          margin-right: .05rem;
        }
      }
    }
  }
}
</style>
