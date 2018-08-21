<template>
<div>
  <div class="content">
    <div class="bread-crumbs">
      <router-link :to="{ path: '/', query: { code }}">合屋首页</router-link>>
      <router-link :to="{ path: `/${path}`, query: { code }}">{{breadCrumbs}}</router-link>>
      <a href="">{{officesDetails.title}}写字楼</a>
    </div>
    <house-content :details="officesDetails"></house-content>
    <map-list
      v-if="mapShow"
      :width="options.width"
      :height= "options.height"
      :searchFilter="searchFilter"
      :keyword="keyword"
      :lng="officesDetails.longitude"
      :lat="officesDetails.latitude">>
    </map-list>
  </div>
  <footers></footers>
</div>
</template>
<script>
import houseContent from '../public/pcPublic/detailCot'
import mapList from '@/components/public/map'
export default {
  name: 'officeBuild',
  data () {
    return {
      options: {
        width: '1200px',
        height: '472px'
      },
      keyword: '公交',
      searchFilter: [
        '公交', '地铁', '教育设施', '医院', '银行', '休闲娱乐', '购物', '餐饮', '运动健身'
      ],
      pathDetail: {
        officeBuildDetail: 'officeBuild',
        shopDetail: 'shop'
      },
      breadCrumb: {
        shopDetail: '商铺列表',
        officeBuildDetail: '写字楼列表'
      }
    }
  },
  components: {
    houseContent,
    mapList
  },
  props: {
    officesDetails: Object,
    mapShow: Boolean
  },
  computed: {
    path () {
      return this.pathDetail[this.$route.name]
    },
    breadCrumbs () {
      return this.breadCrumb[this.$route.name]
    }
  }
}
</script>

<style lang="scss">
.content {
  width: 1200px;
  margin: 0 auto;
  .bread-crumbs {
    padding: 30px 0;
    a {
      margin-right: 10px;
      font-size: 12px;
      color: #888C8E;
      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  }
}
</style>
