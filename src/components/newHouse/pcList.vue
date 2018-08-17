<template>
  <div>
    <search-form @gotoUrl="gotoUrl"></search-form>
    <div class="filter">
      <div class="all-condition">
        <dl>
          <dt>位置</dt>
          <dd>
            <span :class="{active: $route.query.districtId == ''}" @click="gotoUrl({'districtId': ''})">不限</span>
            <span :class="{active: $route.query.districtId == item.value}" @click="gotoUrl({'districtId': item.value})" v-for="(item,index) in condition.district" :key="index">{{item.key}}</span>
          </dd>
        </dl>
        <dl>
          <dt>单价</dt>
          <dd>
            <span :class="{active: $route.query.price == ''}"  @click="gotoUrl({'price': ''})">不限</span>
            <span :class="{active: $route.query.price == item.value}"  @click="gotoUrl({'price': item.value})" v-for="(item,index) in condition.price" :key="index">{{item.key}}</span>
            <span>
              <input type="text"> -
              <input type="text">
              <input type="button" value="确定">
            </span>
          </dd>
        </dl>
        <dl>
          <dt>建筑类型</dt>
          <dd>
            <span :class="{active: $route.query.typeId == ''}"  @click="gotoUrl({'typeId': ''})">不限</span>
            <span :class="{active: $route.query.typeId == item.value}" @click="gotoUrl({'typeId': item.value})" v-for="(item,index) in condition.type" :key="index">{{item.key}}</span>
          </dd>
        </dl>
      </div>
    </div>
    <list-result :dataList = listResult>
      <template  slot="item" slot-scope="item">
        <list-item :item = item>
          <template slot="house-price" slot-scope="price">
            <div class="house-price" style="position:relative">
              {{price.price.minPrice}}元/㎡(均价)
              <div class="total" style="font-size:16px;color:#333;position:absolute;right:0;">总价{{price.price.price}}万/套起</div>
            </div>
          </template>
        </list-item>
      </template>
    </list-result>
    <footers></footers>
  </div>
</template>
<style lang="scss" scoped>
.filter {
  padding: 30px 0;
  .all-condition {
    width: 1200px;
    height: 137px;
    margin: 0 auto;
    padding: 30px 20px 0;
    background: #F5F5F6;
    dl {
      margin-bottom: 10px;
      dt {
        display: inline-block;
        color: #333;
        font-weight: bold;
        font-size: 14px;
        margin-right: 30px;
      }
      dd {
        display: inline-block;
        span {
          margin-right: 30px;
          color: #333;
          cursor: pointer;
          &.active {
            font-weight: bold;
          }
          input {
            width: 36px;
            height: 18px;
            font-size: 12px;
            border: 1px solid #B7B7B7;
            &[type = button] {
              color: #3886F8;
              color: #3886F8;
              background: none;
            }
          }
        }
      }
    }
  }
}
</style>

<script>
import searchForm from '../public/pcPublic/searchForm'
import listResult from '../public/pcPublic/listResult'
import listItem from '../public/pcPublic/listItem'
export default {
  data () {
    return {
      listType: '',
      objType: ''
    }
  },
  props: {
    listResult: Array,
    condition: Object
  },
  components: {
    searchForm,
    listResult,
    listItem
  },
  methods: {
    gotoUrl (obj) {
      let objTypes = {}
      if (Object.keys(obj)[0] === 'query') {
        objTypes = Object.assign({}, obj)
      } else {
        objTypes = Object.assign(this.objType, obj)
      }
      this.$router.push({path: 'newHouse', query: objTypes})
    }
  },
  created () {
    this.objType = {...this.$route.query}
  }
}
</script>
