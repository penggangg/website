<template>
  <div>
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
    <list-result :dataList = dataList>
      <template  slot="item" slot-scope="item">
        <list-item :item = item>
          <template  slot="house-type">
            <span class="building-type"><span>建筑面积</span> <i>100~200㎡</i></span>
            <span class="building-area"><span>使用面积</span> <i>100~200㎡</i></span>
          </template>
          <template slot="house-price" slot-scope="price">
            <div class="house-price">
              {{price.price}}
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
          price: '28000万元',
          name: '鲁能格拉斯小镇11'
        },
        {
          price: '28000万元',
          name: '鲁能格拉斯小镇12'
        },
        {
          price: '28000万元',
          name: '鲁能格拉斯小镇13'
        }
      ]
    }
  },
  components: {
    searchForm,
    listResult,
    listItem
  }
}
</script>
