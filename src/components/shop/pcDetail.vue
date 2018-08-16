<template>
<div>
  <div class="content">
    <div class="bread-crumbs">
      <router-link :to="{ path: '/', query: { code }}">合屋首页</router-link>>
      <router-link :to="{ path: `/${path}`, query: { code }}">{{breadCrumbs}}</router-link>>
      <a href="">{{storeDetails.title}}写字楼</a>
    </div>
    <house-content :storeDetails="storeDetails"></house-content>
    <div class="surrounding">
      <h3>Surrounding</h3>
      <div class="surrounding-cot">
        <div class="item">
          <img src="" alt="" srcset="">
          <span></span>
        </div>
      </div>
    </div>
    <map-list :width="options.width"
      :height= "options.height"
      :searchFilter="searchFilter"
      :keyword="keyword"
      :lng="storeDetails.longitude"
      :lat="storeDetails.latitude">
    </map-list>
  </div>
  <footers></footers>
</div>
</template>
<script>
import houseContent from '../public/pcPublic/detailCot'
import mapList from '@/components/public/map'
export default {
  name: 'shopDetail',
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
        newHouseDetail: 'newHouse',
        shopDetail: 'shop'
      },
      breadCrumb: {
        shopDetail: '商铺列表',
        officeBuildDetail: '写字楼列表'
      }
    }
  },
  props: {
    storeDetails: {
      type: Object
    }
  },
  components: {
    houseContent,
    mapList
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
