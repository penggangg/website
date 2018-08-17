<template>
  <div>
    <div class="list-type-cot">
      <div class="list-type">
        <span @click="changeType(2)" :class="{active: listType===2}" >出售</span>
        <span @click="changeType(1)" :class="{active: listType===1}">出租</span>
      </div>
    </div>
    <search-form></search-form>
    <div class="filter">
      <div class="all-condition">
        <dl>
          <dt>位置</dt>
          <dd>
            <span>不限</span>
            <span>朝阳</span>
            <span>昌平</span>
            <span>顺义</span>
            <span>东城</span>
          </dd>
        </dl>
        <dl>
          <dt>单价</dt>
          <dd>
            <span>不限</span>
            <span>1000万以下</span>
            <span>1000-1500万</span>
            <span>1000-1500万</span>
            <span>1000-1500万</span>
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
            <span>不限</span>
            <span>住宅</span>
            <span>酒店式公寓</span>
          </dd>
        </dl>
      </div>
    </div>
    <list-result :dataList = listResult >
      <template  slot="item" slot-scope="item">
        <list-item :item = item :listType=listType>
          <template slot="labels" slot-scope="price">
            <div class="price labels">
              {{price.price}}万元
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
      dataList: [
        {
          price: '150000~28000万元',
          name: '鲁能格拉斯小镇17'
        },
        {
          price: '150000~28000万元',
          name: '鲁能格拉斯小镇27'
        },
        {
          price: '150000~28000万元',
          name: '鲁能格拉斯小镇37'
        }
      ],
      listType: ''
    }
  },
  props: {
    listResult: Array
  },
  methods: {
    changeType (type) {
      this.listType = type
      this.dataList[0].name = '鲁能格拉斯小镇2222229999'
    }
  },
  components: {
    searchForm,
    listResult,
    listItem
  }
}
</script>
