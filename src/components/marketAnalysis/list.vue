<template>
  <div class="container-fluid">
    <div id="pcList" class="row hidden-xs hidden-sm header-pc">
      <pc-list :article_list="article_list"></pc-list>
    </div>
    <div id="appList" class="visible-sm-block visible-xs-block">
      <app-list :article_list="article_list"></app-list>
    </div>
  </div>
</template>

<script>
import appList from './appList'
import pcList from './pcList'
import { articlesList } from '@/assets/js/api'
export default {
  name: 'marketAnalysisList',
  data () {
    return {
      article_list: []
    }
  },
  async created () {
    let { result } = await articlesList({
      city_id: this.code,
      cid: 1,
      size: 3,
      last_id: 0
    })
    this.article_list = result.article_list
  },
  components: {
    appList,
    pcList
  }
}
</script>

<style>
</style>
