<template>
  <div class="container-fluid">
    <div id="pcList" class="row hidden-xs hidden-sm header-pc">
      <pc-list :article_list="article_list" :swiperPicList="swiperPicList"></pc-list>
    </div>
    <div id="appList" class="visible-sm-block visible-xs-block">
      <app-list :article_list="apparticle_list" :count="count" :swiperPicList="swiperPicList" @onPullingUp="onPullingUp" :isPullDown="isPullDown"></app-list>
    </div>
  </div>
</template>

<script>
import appList from './appList'
import pcList from './pcList'
import { articlesList, articles } from '@/assets/js/api'
export default {
  name: 'dynamic',
  data () {
    return {
      article_list: [],
      apparticle_list: [],
      swiperPicList: [],
      isPullDown: true,
      offset: 1, // 分页
      count: 0,
      last_id: '' // 轮播接口返回得最小id
    }
  },

  async created () {
    let swiperList = await articles({
      city_id: this.code,
      cid: 2,
      size: 3
    })
    this.swiperPicList = swiperList.result
    this.swiperPicList.map((item, index) => {
      if (index === 0) {
        this.last_id = item.id
      } else {
        if (this.last_id > item.id) {
          this.last_id = item.id
        }
      }
    })
    let { result } = await articlesList({
      city_id: this.code,
      cid: 2,
      offset: 1,
      limit: 10,
      last_id: this.last_id
    })
    this.article_list = result.article_list
    this.apparticle_list = result.article_list
    this.count = result.count
    console.log(this.count)
    if (this.apparticle_list.length < 10) {
      this.isPullDown = false
    } else {
      this.isPullDown = true
    }
  },
  methods: {
    async getData (page) { // 分页时候调取的接口 pc端传个page
      if (page) {
        this.offset = page
      }
      let { result } = await articlesList({
        city_id: this.code,
        cid: 1,
        offset: this.offset,
        limit: 10,
        last_id: this.last_id
      })
      this.article_list = result.article_list
      this.apparticle_list = result.article_list
      this.count = result.count
      if (this.apparticle_list.length < 10) {
        this.isPullDown = false
      } else {
        this.isPullDown = true
      }
    },
    onPullingUp () {
      ++this.offset
      this.getData()
    }
  },
  components: {
    appList,
    pcList
  }
}
</script>

<style>
.container-fluid {
  height: 100%;
}
</style>
