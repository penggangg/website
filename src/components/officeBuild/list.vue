<template>
<<<<<<< HEAD
  <div class="officeBuildList">
   <span @click="location">{{flitertext1.text==='不限'?'位置':flitertext1.text}}</span>
   <span @click="price">{{flitertext2.text==='不限'?'价格':flitertext2.text}}</span>
   <span @click="builds">{{flitertext3.text==='不限'?'建筑类型':flitertext3.text}}</span>
   <filteringpop :arrlist="arrlist" :types="types" v-model="flitertext" v-show="filteringpopShow" @surefilter="surefilter"></filteringpop>
=======
  <div class="container-fluid">
    <div id="pcList" class="row hidden-xs hidden-sm header-pc">
      <pc-list></pc-list>
    </div>
    <div id="appList" class="visible-sm-block visible-xs-block">
      <app-list></app-list>
    </div>
>>>>>>> 891ad4389db835e851c3a8218e1f976a45061f8d
  </div>
</template>

<script>
<<<<<<< HEAD
import filteringpop from '@/components/public/appPublic/filteringpop'
=======
import appList from './appList'
import pcList from './pcList'
>>>>>>> 891ad4389db835e851c3a8218e1f976a45061f8d
export default {
  name: 'officeBuildList',
  data () {
    return {
<<<<<<< HEAD
      filteringpopShow: false,
      arrlist: [],
      types: '',
      flitertext: {},
      flitertext1: {text: '不限', id: '0'},
      flitertext2: {text: '不限', id: '0'},
      flitertext3: {text: '不限', id: '0'},
      arrlist1: [
        {text: '不限', id: '0'},
        {text: '朝阳', id: '1'},
        {text: '东城', id: '2'},
        {text: '昌平', id: '3'},
        {text: '丰台', id: '4'}
      ],
      arrlist2: [
        {text: '不限', id: '0'},
        {text: '100元', id: '1'},
        {text: '200元', id: '2'},
        {text: '300元', id: '3'}
      ],
      arrlist3: [
        {text: '不限', id: '0'},
        {text: '日本风', id: '1'},
        {text: '中国风', id: '2'},
        {text: '欧美风', id: '3'}
      ]
=======
      msg: 'Welcome to Your Vue.js App'
>>>>>>> 891ad4389db835e851c3a8218e1f976a45061f8d
    }
  },
  mounted: function () {
    this.$nextTick(function () {
<<<<<<< HEAD
    })
  },
  methods: {
    location () {
      if (this.types === '0') {
        this.filteringpopShow = !this.filteringpopShow
        this.types = ''
      } else {
        this.types = '0'
        this.filteringpopShow = true
        this.flitertext = this.flitertext1
        this.arrlist = this.arrlist1
      }
    },
    price () {
      if (this.types === '1') {
        this.filteringpopShow = !this.filteringpopShow
        this.types = ''
      } else {
        this.types = '1'
        this.filteringpopShow = true
        this.flitertext = this.flitertext2
        this.arrlist = this.arrlist2
      }
    },
    builds () {
      if (this.types === '2') {
        this.filteringpopShow = !this.filteringpopShow
        this.types = ''
      } else {
        this.types = '2'
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
    filteringpop
  },
  created () {
=======

    })
  },
  methods: {
  },
  components: {
    appList,
    pcList
  },
  created () {
    console.log(this.cityCode)
>>>>>>> 891ad4389db835e851c3a8218e1f976a45061f8d
  }
}
</script>

<<<<<<< HEAD
<style lang="scss" scoped>

=======
<style>
.container-fluid {
  padding: 0;
  margin: 0;
}
>>>>>>> 891ad4389db835e851c3a8218e1f976a45061f8d
</style>
