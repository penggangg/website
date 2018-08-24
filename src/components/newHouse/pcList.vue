<template>
  <div class="wrapper">
    <search-form @changeCondition="changeCondition"></search-form>
    <div class="filter">
      <div class="all-condition">
        <dl>
          <dt>位置</dt>
          <dd>
            <span :class="{active: district_id == ''}" @click="changeCondition({district_id: ''})">不限</span>
            <span
              :class="{active: district_id == item.value }"
              v-for="(item, index) in condition.district"
              @click="changeCondition({district_id: item.value})"
              :key="index"
            >{{item.key}}</span>
          </dd>
        </dl>
        <dl>
          <dt>单价</dt>
          <dd>
            <span :class="{active: price == ''}" @click="changeCondition({price: ''})">不限</span>
            <span
              :class="{active: price == item.value }"
              v-for="(item, index) in condition.price"
              @click="changeCondition({price: item.value})"
              :key="index"
              >{{item.key}}</span>
            <span>
              <input type="text"  v-model="price_min"> -
              <input type="text"  v-model="price_max">
              <input type="button" value="确定" @click="changeCondition({price: (price_min||0) +'-'+ price_max})">
            </span>
          </dd>
        </dl>
        <dl>
          <dt>建筑类型</dt>
          <dd>
            <span :class="{active: type_id == ''}" @click="changeCondition({type_id: ''})">不限</span>
            <span
              :class="{active: type_id == item.value }"
              v-for="(item, index) in condition.type"
              @click="changeCondition({type_id: item.value})"
              :key="index"
            >{{item.key}}</span>
          </dd>
        </dl>
      </div>
    </div>
    <list-result :dataList = listResult :count="count" :limit="limit" @changePageSize="changePageSize">
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
      district_id: '',
      price: '',
      price_min: '',
      price_max: '',
      type_id: ''
    }
  },
  props: {
    listResult: Array,
    condition: Object,
    count: Number,
    limit: Number
  },
  components: {
    searchForm,
    listResult,
    listItem
  },
  methods: {
    changeCondition (value) {
      let { keys, values } = Object
      let key = keys(value)[0]
      let val = values(value)[0]
      this[key] = val
      if (key === 'price') {
        let min = val.split('-')[0]
        let max = val.split('-')[1]
        this.$emit('change-condition', {min: min, max: max})
      } else {
        this.$emit('change-condition', value)
      }
    },
    changePageSize (page) {
      this.$emit('changePageSize', page)
    }
  },
  created () {
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
    }
  }
}
</script>
