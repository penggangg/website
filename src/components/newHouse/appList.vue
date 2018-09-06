<template>
  <div class="newHouselist" :style="{overflow:shownavigationpops ? 'hidden' : 'auto'}">
    <div class="newHouselist-header">
      <div class="newHouselist-header-left">
        <img src="../../assets/appimages/icon-lback.svg" @click="$root.goback">
        <citydropdown :bgurl="cityxialabg" v-domstyle="{color: '#333', width: '.11rem', height: '.06rem'}" ></citydropdown>
      </div>
      <div class="newHouselist-header-right">
        <navigationpops @closePops="shownavigationpops=false"
        @shownavigationpopsshow="shownavigationpops=true"
        v-model = "pithOne"
        :shownavigationpops="shownavigationpops" :menuSrc="navigationbg"></navigationpops>
      </div>
    </div>

    <div class="newHouselist-search">
      <inputSearch :styleObjet=styleObjet :searchinputbg="searchinputbg"  v-model="query" @fliterData="fliterRouter"></inputSearch>
    </div>

    <div class="newHouselist-list">
      <div class="newHousefliter">
        <div @click="location">
           <span class="new_house_loaction">{{flitertext1.key == '' ? '位置': flitertext1.key}}</span>
           <span :class="[locationdorpdown ? 'downshanjiao' : 'upshanjiao']"></span>
        </div>
        <div @click="price">
           <span class="new_house_price">{{flitertext2.key == '' ? '售价': flitertext2.key}}</span>
           <span :class="[pricedorpdown ? 'downshanjiao' : 'upshanjiao']"></span>
        </div>
        <div @click="builds">
           <span class="new_house_build">{{flitertext3.key == '' ? '建筑类型': flitertext3.key}}</span>
           <span :class="[builddorpdown ? 'downshanjiao' : 'upshanjiao']"></span>
        </div>
      </div>
    </div>

    <div class="newHouse-detail-lit">
      <apphuoseList :listResult="listResult" :count="count" @onPullingUp="onPullingUp" :isPullDown="isPullDown"></apphuoseList>
      <!-- <div class="huosefooter">
        <housefooter></housefooter>
      </div> -->
    </div>
     <transition name="fade">
      <filteringpop :arrlist="arrlist" :types="types" v-model="flitertext" v-show="filteringpopShow" @surefilter="surefilter"></filteringpop>
    </transition>
  </div>
</template>

<script>
import citydropdown from '@/components/public/appPublic/citydropdown'
import navigationpops from '@/components/public/appPublic/navigationPops'
import inputSearch from '@/components/public/appPublic/inputSearch'
import apphuoseList from './common/appList'
import housefooter from '@/components/public/appPublic/footer'
import filteringpop from '@/components/public/appPublic/filteringpop'
export default {
  name: 'newHouseList',
  data () {
    return {
      pithOne: '1',
      shownavigationpops: false, // 控制右侧弹窗的显示隐藏
      cityxialabg: 'url(' + require('../../assets/appimages/llocation.svg') + ')', // 城市的到三角样式颜色
      navigationbg: require('../../assets/appimages/icon-lmenu.svg'), // 右侧的弹窗按钮样式
      styleObjet: { // 搜索组件的一些配置
        positionbottom: '.1rem',
        placeholder: '请输入城区/商圈/项目',
        bgse: '#fff',
        dorpdownDome: false
      },
      searchinputbg: require('../../assets/appimages/icon-lsearch.svg'), // 搜索框的放大镜的颜色
      locationdorpdown: true, // 位置的到三角
      pricedorpdown: true, // 价格的到三角
      builddorpdown: true, // 建筑类型的到三角

      filteringpopShow: false, // 控制选择位置、价格、建筑类型的弹窗显示隐藏
      arrlist: [], // 位置、价格、建筑类型弹窗里面的数据
      types: '', // 0,1,2分别代表位置、价格、建筑类型
      flitertext: {key: '', value: ''}, // 中转站选中的对象
      flitertext1: {key: '', value: ''}, // 位置选中的对象
      flitertext2: {key: '', value: ''}, // 价格选中的对象
      flitertext3: {key: '', value: ''}, // 建筑类型选中的对象
      query: '' // input输入框得关键字
    }
  },
  props: {
    condition: {
      type: Object
    },
    listResult: Array,
    isPullDown: Boolean,
    children_query: String,
    count: Number
  },
  created () {
  },
  mounted: function () {
    this.$nextTick(function () {
      this.query = this.children_query
    })
  },
  methods: {
    location () {
      this.types = '0'
      if (!this.locationdorpdown) {
        this.filteringpopShow = !this.filteringpopShow
        this.locationdorpdown = !this.locationdorpdown
      } else {
        this.locationdorpdown = false
        this.pricedorpdown = true
        this.builddorpdown = true
        this.filteringpopShow = true
        this.flitertext = this.flitertext1
        // this.arrlist = this.code === '2' ? this.$constDatas.Beijilocationfliter : this.$constDatas.shanghailocationfliter
        this.arrlist = this.condition.district
      }
    },
    price () {
      this.types = '1'
      if (!this.pricedorpdown) {
        this.filteringpopShow = !this.filteringpopShow
        this.pricedorpdown = !this.pricedorpdown
      } else {
        this.locationdorpdown = true
        this.pricedorpdown = false
        this.builddorpdown = true
        this.filteringpopShow = true
        this.flitertext = this.flitertext2
        // this.arrlist = this.$constDatas.huosePrice
        this.arrlist = this.condition.price
      }
    },
    builds () {
      this.types = '2'
      if (!this.builddorpdown) {
        this.filteringpopShow = !this.filteringpopShow
        this.builddorpdown = !this.builddorpdown
      } else {
        this.locationdorpdown = true
        this.pricedorpdown = true
        this.builddorpdown = false
        this.filteringpopShow = true
        this.flitertext = this.flitertext3
        // this.arrlist = this.$constDatas.buildType
        this.arrlist = this.condition.type
      }
    },
    surefilter (types) {
      this.filteringpopShow = false
      let objs = {
        '0': 'flitertext1',
        '1': 'flitertext2',
        '2': 'flitertext3'
      }
      this[objs[types]] = this.flitertext
      this.locationdorpdown = true
      this.pricedorpdown = true
      this.builddorpdown = true
    },
    fliterRouter () {
      this.$units.scrollTop('.newHouse-detail-lit')
      let objTypes = {
        city_id: this.code,
        district_id: this.flitertext1.value,
        min: this.flitertext2.value.split('-')[0],
        max: this.flitertext2.value.split('-')[1],
        type_id: this.flitertext3.value,
        query: this.query
      }
      this.$emit('fliterDatas', objTypes)
    },
    onPullingUp () {
      this.$emit('onPullingUp')
    }
  },
  watch: {
    flitertext1: function (newvalue, oldvalue) {
      this.fliterRouter()
    },
    flitertext2: function (newvalue, oldvalue) {
      this.fliterRouter()
    },
    flitertext3: function (newvalue, oldvalue) {
      this.fliterRouter()
    }
  },
  components: {
    citydropdown,
    navigationpops,
    inputSearch,
    apphuoseList,
    filteringpop,
    housefooter
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
      .new_house_loaction {
        font-size: .12rem;
      }
      .new_house_price {
        font-size: .12rem;
      }
      .new_house_build {
        font-size: .12rem;
      }
    }
  }
  .newHouse-detail-lit {
    height: calc(100% - 1.51rem);
    overflow-y: auto;
  }
  .fade-enter-active, .fade-leave{
    transition: all .3s ease;
    height: calc(100% - 1.51rem) !important;
  }
  .fade-enter, .fade-leave-active{
    transition: all .3s ease;
    height: 0rem !important;
  }
}
</style>
