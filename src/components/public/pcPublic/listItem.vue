<template>
   <div class="item">
      <img src="../../../assets/images/pic1.png" alt="" >
      <div class="house-detail">
        <h4>
          <!-- <a href="" title="鲁能格拉斯小镇">鲁能格拉斯小镇</a>  -->
          <router-link :to="{ path:'/officeBuildDetail/123', query: { code }}" target="_blank">{{item.item.name}}</router-link>
        </h4>
        <div class="loacation"><span>昌平</span>|<span>王府井大道南侧100m</span></div>
        <div>
          <!-- <span class="house-type"> <span>户型</span><i>3居</i>|<i>4居</i></span> -->
          <slot name="house-type">
            <span class="house-type"> <span>户型</span><i>3居</i>|<i>4居</i></span>
            <span class="building-type"><span>建筑类型</span> <i>酒店式公寓</i></span>
            <span class="building-area"><span>建筑面积</span> <i>100~200㎡</i></span>
          </slot>
        </div>
        <slot name="labels" :price = "item.item.price">
          <div class="labels">
            <span>在售</span>
            <span>特价房</span>
            <span>样板间可售</span>
            <span>公园地产</span>
          </div>
        </slot>
      </div>
      <slot name="house-price" :price = "item.item.price">

      </slot>
    </div>
</template>
<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style lang="scss" scoped>
.item {
  height: 174px;
  padding: 50px 0;
  box-sizing: content-box;
  border-bottom: 1px solid #b7b7b7;
  img {
    float: left;
  }
  .house-detail {
    float: left;
    margin-left: 50px;
    font-size: 16px;
    color: #333;
    h4 {
      a {
        display: inline-block;
        max-width: 680px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .loacation {
      margin: 20px 0;
      span {
        &:first-child {
          margin-right: 10px;
        }
        &:last-child {
          margin-left: 10px;
        }
      }
    }
    .labels {
      margin-top: 42px;
      &.price {
        color: #fb6550;
        font-size: 22px;
        font-weight: bold;
      }
      span {
        font-size: 12px;
        padding: 7px 10px;
        border-radius: 5px;
        background: #f2f5f7;
      }
    }
    .house-type {
      display: inline-block;
      width: 218px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      vertical-align: bottom;
      margin-right: 30px;
      span {
        // margin-right: 10px;
      }
      i {
        color: #5a9afc;
        padding: 0 10px;
      }
    }
    .building-type {
      display: inline-block;
      width: 160px;
      margin-right: 30px;
      span {
        margin-right: 6px;
      }
      i {
        color: #5a9afc;
      }
    }
  }
  .house-price {
    float: right;
    color: #fb6550;
    font-size: 22px;
    font-weight: bold;
  }
}
</style>
