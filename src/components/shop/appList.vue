
<template>
  <div class="newHouselist">
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
           <p :class="[activePclass ==1 ? 'activePclass' : '']" @click="activePclass = 1">出售</p>
           <p :class="[activePclass ==2 ? 'activePclass' : '']" @click="activePclass = 2">出租</p>
        </div>
      <inputSearch :styleObjet=styleObjet :searchinputbg="searchinputbg"></inputSearch>
    </div>

    <div class="newHouselist-list">
      <div class="newHousefliter">
        <div @click="location">
           <span class="new_house_loaction">{{flitertext1.text == '不限' ? '位置': flitertext1.text}}</span>
           <span :class="[locationdorpdown ? 'downshanjiao' : 'upshanjiao']"></span>
        </div>
        <div @click="price">
           <span class="new_house_price">{{flitertext2.text == '不限' ? '单价': flitertext2.text}}</span>
           <span :class="[pricedorpdown ? 'downshanjiao' : 'upshanjiao']"></span>
        </div>
        <div @click="builds">
           <span class="new_house_build">{{flitertext3.text == '不限' ? '配套设施': flitertext3.text}}</span>
           <span :class="[builddorpdown ? 'downshanjiao' : 'upshanjiao']"></span>
        </div>
      </div>
    </div>

    <div class="newHouse-detail-lit">
      <apphuoseList></apphuoseList>
      <div class="huosefooter">
        <housefooter></housefooter>
      </div>
    </div>

    <filteringpop :arrlist="arrlist" :types="types" v-model="flitertext" v-show="filteringpopShow" @surefilter="surefilter"></filteringpop>
  </div>
</template>

<script>
import citydropdown from '@/components/public/appPublic/citydropdown'
import navigationpops from '@/components/public/appPublic/navigationPops'
import inputSearch from '@/components/public/appPublic/inputSearch'
import apphuoseList from '../newHouse/common/appList'
import housefooter from '@/components/public/appPublic/footer'
import filteringpop from '@/components/public/appPublic/filteringpop'
export default {
  name: 'newHouseList',
  data () {
    return {
      activePclass: 1, // 选中的出售还是出租
      pithOne: '2',
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
      builddorpdown: true, // 建筑类型的到三角

      filteringpopShow: false, // 控制选择位置、价格、建筑类型的弹窗显示隐藏
      arrlist: [], // 位置、价格、建筑类型弹窗里面的数据
      types: '', // 0,1,2分别代表位置、价格、建筑类型
      flitertext: {}, // 中转站选中的对象
      flitertext1: {text: '不限', id: '0'}, // 位置选中的对象
      flitertext2: {text: '不限', id: '0'}, // 价格选中的对象
      flitertext3: {text: '不限', id: '0'} // 建筑类型选中的对象
    }
  },
  created () {
    // 获取网址参数来判断是北京还是上海
  },
  mounted: function () {
    this.$nextTick(function () {
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
        this.arrlist = this.code === '110000' ? this.$constDatas.Beijilocationfliter : this.$constDatas.shanghailocationfliter
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
        this.arrlist = this.$constDatas.huosePrice
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
        this.arrlist = this.$constDatas.buildType
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
      console.log(this.flitertext1)
      console.log(this.flitertext2)
      console.log(this.flitertext3)
      console.log(this.types)
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
    height: .92rem;
    position: relative;
    .switch-type {
        display: flex;
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
      }
    }
  }
  .newHouse-detail-lit {
    height: calc(100% - 1.51rem);
    overflow-y: auto;
  }
}
</style>
