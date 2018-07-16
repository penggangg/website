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
      <inputSearch :styleObjet=styleObjet :searchinputbg="searchinputbg"></inputSearch>
    </div>

    <div class="newHouselist-list">
      <div class="newHousefliter">
        <div @click="location">
           <span class="new_house_loaction">{{flitertext1.text}}</span>
           <span :class="[locationdorpdown ? 'downshanjiao' : 'upshanjiao']"></span>
        </div>
        <div @click="price">
           <span class="new_house_price">{{flitertext2.text}}</span>
           <span :class="[pricedorpdown ? 'downshanjiao' : 'upshanjiao']"></span>
        </div>
        <div @click="builds">
           <span class="new_house_build">{{flitertext3.text}}</span>
           <span :class="[builddorpdown ? 'downshanjiao' : 'upshanjiao']"></span>
        </div>
      </div>
    </div>

    <div class="newHouse-detail-lit">
      <apphuoseList></apphuoseList>
    </div>

    <div class="huosefooter">
      <housefooter></housefooter>
    </div>
    <filteringpop :arrlist="arrlist" :types="types" v-model="flitertext" v-show="filteringpopShow" @surefilter="surefilter"></filteringpop>
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
      flitertext3: {text: '不限', id: '0'}, // 建筑类型选中的对象
      arrlist1: [ // 位置的数据
        {text: '不限', id: '0'},
        {text: '朝阳', id: '1'},
        {text: '东城', id: '2'},
        {text: '昌平', id: '3'},
        {text: '丰台', id: '4'}
      ],
      arrlist2: [ // 价格的数据
        {text: '不限', id: '0'},
        {text: '100元', id: '1'},
        {text: '200元', id: '2'},
        {text: '300元', id: '3'}
      ],
      arrlist3: [ // 价格类型选中对象
        {text: '不限', id: '0'},
        {text: '日本风', id: '1'},
        {text: '中国风', id: '2'},
        {text: '欧美风', id: '3'}
      ]
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
      if (this.types === '0') {
        this.filteringpopShow = !this.filteringpopShow
        this.locationdorpdown = !this.locationdorpdown
        this.types = ''
      } else {
        this.types = '0'
        this.locationdorpdown = false
        this.pricedorpdown = true
        this.builddorpdown = true
        this.filteringpopShow = true
        this.flitertext = this.flitertext1
        this.arrlist = this.arrlist1
      }
    },
    price () {
      if (this.types === '1') {
        this.filteringpopShow = !this.filteringpopShow
        this.pricedorpdown = !this.pricedorpdown
        this.types = ''
      } else {
        this.types = '1'
        this.locationdorpdown = true
        this.pricedorpdown = false
        this.builddorpdown = true
        this.filteringpopShow = true
        this.flitertext = this.flitertext2
        this.arrlist = this.arrlist2
      }
    },
    builds () {
      if (this.types === '2') {
        this.filteringpopShow = !this.filteringpopShow
        this.builddorpdown = !this.builddorpdown
        this.types = ''
      } else {
        this.types = '2'
        this.locationdorpdown = true
        this.pricedorpdown = true
        this.builddorpdown = false
        this.filteringpopShow = true
        this.flitertext = this.flitertext3
        this.arrlist = this.arrlist3
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
      console.log(this.flitertext1)
      console.log(this.flitertext2)
      console.log(this.flitertext3)
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
}
</style>
