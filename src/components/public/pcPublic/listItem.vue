<template>
   <div class="item">
      <router-link :to="{ path:`/${detailPath}/${item.item.id}`, query: { code }}" target="_blank"> <img :src="item.item.pic" alt="" ></router-link>
      <div class="house-detail">
        <h4>
          <router-link :to="{ path:`/${detailPath}/${item.item.id}`, query: { code }}" target="_blank" :title="item.item.title">{{item.item.title}}</router-link>
        </h4>
        <div class="loacation"><span>{{item.item.district}}</span>|<span>{{item.item.address}}</span></div>
        <div>
          <!-- <span class="house-type"> <span>户型</span><i>3居</i>|<i>4居</i></span> -->
          <slot name="house-type" v-if="$route.name=='newHouseList'">
            <span class="house-type">
              <span>户型</span>
              <i v-for="(item,index) in item.item.bedroom" :key="index">
                {{item}}居
              </i>
            </span>
            <span class="building-type"><span>建筑类型</span> <i>{{item.item.type}}</i></span>
            <span class="building-area" v-if="item.item.min_area"><span>建筑面积</span> <i>{{item.item.min_area}}~{{item.item.max_area}}㎡</i></span>
            <span class="building-area" v-if="!item.item.min_area"><span>建筑面积</span> <i>{{item.item.max_area}}㎡</i></span>
          </slot>
          <slot name="house-type" v-if="$route.name!=='newHouseList'">
            <span class="building-type"><span>建筑面积</span> <i>{{item.item.build_area}}㎡</i></span>
            <span class="building-area"><span>使用面积</span> <i>{{item.item.apply_area}}㎡</i></span>
          </slot>
        </div>
        <slot name="labels" :price = "item.item.price"  v-if="$route.name=='newHouseList'">
          <div class="labels">
            <span v-for="(item,index) in item.item.labels" :key="index" :style="{color:item.color}">{{item.text}}</span>
          </div>
        </slot>
        <slot name="labels" :price = "item.item.price" v-if="$route.name=='shopList'">
          <div class="labels">
            <span v-for="(item,index) in item.item.facilities" :key="index" :style="{color:item.color}">{{item}}</span>
          </div>
        </slot>
        <slot name="labels" :price = "item.item.price" v-if="$route.name=='officeBuildList'">
        </slot>
      </div>
      <slot name="house-price" :priceShop="item.item.price" :price = "(item.item.min_price+'-'+item.item.price)|capitalize">

      </slot>
    </div>
</template>
<script>
export default {
  data () {
    return {
      detailPaths: {
        newHouse: 'newHouseDetail',
        shop: 'shopDetail',
        officeBuild: 'officeBuildDetail'
      }
    }
  },
  filters: {
    capitalize: function (price) {
      price = price.split('-')
      return {minPrice: price[0], price: price[1]}
    }
  },
  props: {
    item: Object
  },
  computed: {
    detailPath () {
      // return this.detailPaths[this.$route.path.replace('/', '')] + this.listType
      return this.detailPaths[this.$route.path.replace('/', '')]
    }
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
    width: 309px;
    height: 174px;
  }
  .house-detail {
    float: left;
    margin-left: 50px;
    font-size: 16px;
    color: #333;
    h4 {
      a {
        display: inline-block;
        max-width: 572px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: bold;
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
        margin-right: 10px;
        border-radius: 5px;
        background: #f2f5f7;
      }
    }
    .house-type {
      display: inline-block;
      // width: 218px;
      width: 190px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      vertical-align: bottom;
      margin-right: 30px;
      span {
        // margin-right: 10px;
      }
      i {
        position: relative;
        color: #5a9afc;
        padding: 0 10px;
        &:after {
          content: '';
          display: inline-block;
          position: absolute;
          top: 50%;
          right: 5%;
          transform: translateY(-50%);
          width: 1px;
          height: 70%;
          background: #5a9afc;
        }
        &:last-child {
          &:after {
            content: '';
            display: none;
          }

        }
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
