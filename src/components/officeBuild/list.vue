<template>
  <div class="officeBuildList">
   <span @click="location">{{flitertext1.text==='不限'?'位置':flitertext1.text}}</span>
   <span @click="price">{{flitertext2.text==='不限'?'价格':flitertext2.text}}</span>
   <span @click="builds">{{flitertext3.text==='不限'?'建筑类型':flitertext3.text}}</span>
   <filteringpop :arrlist="arrlist" :types="types" v-model="flitertext" v-show="filteringpopShow" @surefilter="surefilter"></filteringpop>
  </div>
</template>

<script>
import filteringpop from '@/components/public/appPublic/filteringpop'
export default {
  name: 'officeBuildList',
  data () {
    return {
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
    }
  },
  mounted: function () {
    this.$nextTick(function () {
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
  }
}
</script>

<style lang="scss" scoped>

</style>
