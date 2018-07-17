<template>
  <div class="content">
    <div class="bread-crumbs">
      <a href="">合屋首页</a>>
      <a href="">写字楼列表</a>>
      <a href="">恒大写字楼</a>
    </div>
    <house-content></house-content>
  </div>
</template>
<script>
import houseContent from '../public/pcPublic/detailCot'
export default {
  name: 'shopDetail',
  components: {
    houseContent
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
