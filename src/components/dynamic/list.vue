<template>
  <div class="container-fluid">
    <div id="pcList" class="row hidden-xs hidden-sm header-pc">
      <pc-list :article_list="article_list"></pc-list>
    </div>
    <div id="appList" class="visible-sm-block visible-xs-block">
      <app-list :article_list="article_list" :swiperPicList="swiperPicList"></app-list>
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
      swiperPicList: [],
      last_id: '' // 轮播接口返回得最小id
    }
  },

  async created () {
    let swiperList = await articles({
      city_id: this.code,
      cid: 1,
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
      cid: 1,
      size: 10,
      last_id: this.last_id
    })
    this.article_list = result.article_list
  },
  methods: {
  },
  components: {
    appList,
    pcList
  }
}
</script>

<style>
</style>
