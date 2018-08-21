<template>
  <div class="content">
    <div class="total-num">
      为你找到 <span>{{dataList.length}}个</span> 北京{{$route.meta.title}}
    </div>
    <div class="list" v-if="dataList.length">
      <slot name="item" v-for="item in dataList"  :item="item">{{item}}
      </slot>
    </div>
    <mo-paging :page-index="currentPage" :total="count" :page-size="pageSize" @change="pageChange"></mo-paging>
    <div class="list" v-if="!dataList.length">
      <div class="noResult">没有找到您要的内容，您可换个条件试试</div>
    </div>
  </div>
</template>
<script>
import MoPaging from './page'
export default {
  data () {
    return {
      currentPage: 1,
      count: 10,
      pageSize: 3
    }
  },
  props: {
    dataList: Array
  },
  methods: {
    pageChange () {

    }
  },
  components: {
    MoPaging
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: 0 auto;
  .total-num {
    padding-bottom: 30px;
    border-bottom: 1px solid #B7B7B7;
    font-size: 22px;
    color: #262626;
    font-weight: bold;
    span {
      color: #5A9AFC;
      font-weight: bold;
    }
  }
  .list {
    .noResult {
      padding: 80px 0;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
