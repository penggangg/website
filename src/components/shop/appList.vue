
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
       <div class="switch-type" >
           <p :class="[activePclass ==2 ? 'activePclass' : '']" @click="switchType(2)">出售</p>
           <p :class="[activePclass ==1 ? 'activePclass' : '']" @click="switchType(1)">出租</p>
        </div>
      <inputSearch :styleObjet=styleObjet :searchinputbg="searchinputbg" v-model="query" @fliterData="fliterRouter"></inputSearch>
    </div>

    <div class="newHouselist-list">
      <div class="newHousefliter">
        <div @click="location">
           <span class="new_house_loaction">{{!flitertext1.key  ? '位置': flitertext1.key}}</span>
           <span :class="[locationdorpdown ? 'downshanjiao' : 'upshanjiao']"></span>
        </div>
        <div @click="price">
           <span v-if="activePclass == 2" class="new_house_price">{{!flitertext2.key ? '售价': flitertext2.key}}</span>
           <span v-if="activePclass == 1" class="new_house_price">{{!flitertext2.key ? '租金': flitertext2.key}}</span>
           <span :class="[pricedorpdown ? 'downshanjiao' : 'upshanjiao']"></span>
        </div>
        <div @click="builds">
           <span class="new_house_build">{{!flitertext4.key ? '配套设施': flitertext4.key}}</span>
           <span :class="[builddorpdown ? 'downshanjiao' : 'upshanjiao']"></span>
        </div>
      </div>
    </div>

    <div class="newHouse-detail-lit">
      <apphuoseList :pagetype="'shop'" :listResult="listResult" :count="count" :activePclass="activePclass" @onPullingUp="onPullingUp" :isPullDown="isPullDown"></apphuoseList>
      <!-- <div class="huosefooter">
        <housefooter></housefooter>
      </div> -->
    </div>
    <transition name="fade">
      <filteringpop :arrlist="arrlist" :types="types" :filtertop="'1.91rem'" v-model="flitertext" v-show="filteringpopShow" @surefilter="surefilter"></filteringpop>
    </transition>
  </div>
</template>

<script>
import citydropdown from '@/components/public/appPublic/citydropdown'
import navigationpops from '@/components/public/appPublic/navigationPops'
import inputSearch from '@/components/public/appPublic/inputSearch'
import apphuoseList from '../newHouse/common/appList'
// import housefooter from '@/components/public/appPublic/footer'
import filteringpop from '@/components/public/appPublic/filteringpop'
export default {
  name: 'newHouseList',
  props: {
    listResult: Array,
    condition: Object,
    isPullDown: Boolean,
    children_query: String,
    count: Number
  },
  data () {
    return {
      activePclass: 2, // 选中的出售还是出租
      pithOne: '2',
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
      flitertext: {}, // 中转站选中的对象
      flitertext1: {key: '', value: ''}, // 位置选中的对象
      flitertext2: {key: '', value: ''}, // 价格选中的对象
      flitertext4: {key: '', value: ''}, // 配套设备选中的对象
      query: '' // 关键字查询
    }
  },
  created () {
    // 获取网址参数来判断是北京还是上海
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
        // this.arrlist = this.code === '110000' ? this.$constDatas.Beijilocationfliter : this.$constDatas.shanghailocationfliter
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
        this.arrlist = this.condition.price
      }
    },
    builds () {
      this.types = '3'
      if (!this.builddorpdown) {
        this.filteringpopShow = !this.filteringpopShow
        this.builddorpdown = !this.builddorpdown
      } else {
        this.locationdorpdown = true
        this.pricedorpdown = true
        this.builddorpdown = false
        this.filteringpopShow = true
        this.flitertext = this.flitertext4
        this.arrlist = this.condition.facilities
      }
    },
    ajaxrequsition (types) {
      // this.$units.scrollTop()
      if (types === '0') {
        this.$emit('change-condition', {district_id: this.flitertext1.value})
      } else if (types === '1') {
        this.$emit('change-condition', {min: this.flitertext2.value.split('-')[0], max: this.flitertext2.value.split('-')[1]})
      } else {
        this.$emit('change-condition', {facilities: [this.flitertext4.value]})
      }
    },
    surefilter (types) {
      this.filteringpopShow = false
      let objs = {
        '0': 'flitertext1',
        '1': 'flitertext2',
        '3': 'flitertext4'
      }
      this[objs[types]] = this.flitertext
      this.locationdorpdown = true
      this.pricedorpdown = true
      this.builddorpdown = true
      this.ajaxrequsition(types)
    },
    fliterRouter () {
      this.$emit('change-condition', {query: this.query})
    },
    switchType (index) {
      this.activePclass = index
      this.filteringpopShow = false
      this.locationdorpdown = true
      this.pricedorpdown = true
      this.builddorpdown = true
      this.query = ''
      this.flitertext = {} // 中转站选中的对象
      this.flitertext1 = {key: '', value: ''} // 位置选中的对象
      this.flitertext2 = {key: '', value: ''} // 价格选中的对象
      this.flitertext4 = {key: '', value: ''} // 配套设备选中的对象
      this.$emit('change-condition', {rent_id: index})
    },
    onPullingUp () {
      this.$emit('onPullingUp')
    }
  },
  components: {
    citydropdown,
    navigationpops,
    inputSearch,
    apphuoseList,
    filteringpop
  },
  watch: {

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
    height: .92rem;
    position: relative;
    .switch-type {
        display: flex;
        border-top: 1px solid #ddd;
        box-sizing: border-box;
        p {
            height: .4rem;
            line-height: .4rem;
            text-align: center;
            width: 50%;
            background: #fff;
        }
         p.activePclass {
            background: #5D9CF9 !important;
            color:#fff !important;
         }
    }
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
        max-height: 100%;
        overflow-y: auto;
      }
    }
  }
  .newHouse-detail-lit {
    height: calc(100% - 1.91rem);
    overflow-y: auto;
  }
  .fade-enter-active, .fade-leave{
    transition: all .3s ease;
    height: calc(100% - 1.91rem) !important;
  }
  .fade-enter, .fade-leave-active{
    transition: all .3s ease;
    height: 0rem !important;
  }
}
</style>
