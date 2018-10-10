<template>
  <div class="wrapper">
    <div class="list-type-cot">
      <div class="list-type">
        <span @click="changeCondition({rent_id: 2})" :class="{active: rent_id===2}" >出售</span>
        <span @click="changeCondition({rent_id: 1})" :class="{active: rent_id===1}">出租</span>
      </div>
    </div>
    <search-form @changeCondition="changeCondition"></search-form>
    <div class="filter">
      <div class="all-condition">
        <dl>
          <dt>位置</dt>
          <dd>
            <span
              :class="{active: district_id == ''}"
              @click="changeCondition({district_id: ''})"
            >不限</span>
            <span
              :class="{active: district_id == item.value }"
              v-for="(item, index) in condition.district"
              :key="index"
              @click="changeCondition({district_id: item.value})"
            >{{item.key}}</span>
          </dd>
        </dl>
        <dl>
          <dt v-if="rent_id==2">售价</dt>
          <dt v-if="rent_id==1">租金</dt>
          <dd>
           <span
              :class="{active: price == ''}"
              @click="changeCondition({price: ''})"
            >不限</span>
            <span
              :class="{active: price == item.value}"
              v-for="(item, index) in condition.price"
              :key="index"
              @click="changeCondition({price: item.value})"
            >{{item.key}}</span>
            <span>
              <input type="text" v-model="price_min"> -
              <input type="text" v-model="price_max"> 万
              <input type="button" value="确定" @click="changeCondition({price: (price_min*10000||0) +'-'+ price_max*10000})">
            </span>
          </dd>
        </dl>
        <dl>
          <dt>配套设施</dt>
          <dd>
            <div v-for="(item, index) in condition.facilities" :key="index" style="display:inline-flex;margin-right:24px;align-items:center;">
              <input type="checkbox"  :value="item.value" v-model="facilitiesarr" style="margin:8px;">
              {{item.key}}
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <list-result :dataList = listResult :count="count" :limit="limit" @changePageSize="changePageSize">
      <template  slot="item" slot-scope="item">
        <list-item :item = item >
          <template  slot="house-type">
            <span class="building-type"><span>建筑面积</span> <i>{{item.item.build_area}}㎡</i></span>
            <span class="building-area"><span>使用面积</span> <i>{{item.item.apply_area}}㎡</i></span>
          </template>
          <template slot="house-price" slot-scope="priceShop">
            <div class="house-price" v-if="rent_id==2">
              {{priceShop.priceShop/10000}}万
            </div>
            <div class="house-price" v-if="rent_id==1">
              {{priceShop.priceShop/10000}}万/月
            </div>
          </template>
        </list-item>
      </template>
    </list-result>
    <footers></footers>
  </div>
</template>
<style lang="scss" scoped>
.list-type-cot {
  background: #F5F5F6;
  padding-top: 50px;
  .list-type {
    width: 1200px;
    margin: 0 auto;
    span {
      margin-right: 20px;
      font-size:18px;
      color: #333;
      font-weight: bold;
      cursor: pointer;
      &.active {
        color: #5D9CF9;
      }
    }
  }
}
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
            width: 54px;
            height: 18px;
            font-size: 12px;
            border: 1px solid #B7B7B7;
            &[type = button] {
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
      rent_id: 2,
      district_id: '',
      price: '',
      price_min: '',
      price_max: '',
      facilitiesarr: []
    }
  },
  props: {
    listResult: Array,
    condition: Object,
    count: Number,
    limit: Number
  },
  methods: {
    changeCondition (value) {
      let { keys, values } = Object
      let key = keys(value)[0]
      let val = values(value)[0]
      this[key] = val
      console.log(this)
      if (key === 'price') {
        let min = val.split('-')[0]
        let max = val.split('-')[1]
        this.$emit('change-condition', {min: min, max: max})
      } else if (key === 'rent_id') {
        this.district_id = ''
        this.price = ''
        this.$emit('change-condition', value)
      } else {
        this.$emit('change-condition', value)
      }
    },
    changePageSize (page) {
      this.$emit('changePageSize', page)
    }
  },
  watch: {
    price (newValue) {
      let index = this.condition.price.findIndex((item) => {
        return item.value === newValue
      })
      if (index > -1) {
        this.price_min = ''
        this.price_max = ''
      }
    },
    facilitiesarr (newValue) {
      this.$emit('change-condition', {facilities: [...newValue]})
    }
  },
  components: {
    searchForm,
    listResult,
    listItem
  }
}
</script>
