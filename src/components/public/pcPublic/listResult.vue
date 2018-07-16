<template>
  <div class="content">
    <div class="total-num">
      为你找到 <span>100个</span> 北京新楼盘
    </div>
    <div class="list">
      <slot name="item" v-for="item in dataList"  :item="item">{{item}}
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataList: Array
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
  }
}
</style>
