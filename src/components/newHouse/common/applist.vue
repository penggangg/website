<template>
  <div class="apphuoseList">
    <div class="apphuoseList-header">
      <span>为你找到</span>
      <span>1000个</span>
      <span>北京新楼盘</span>
    </div>
    <div class="apphuoseList-items">
      <div class='apphuoseList-items-container' v-for="(item, index) in arrhuoselist" :key="index" @click="gohuosedetail(item)">
        <div class="apphuoseList-items-left">
          <img src="../../../assets/appimages/house1.png" alt="" srcset="">
        </div>
        <div class="apphuoseList-items-right">
          <p>长安太和</p>
          <p>
            <span>东城</span> | <span>立春元倒三角</span>
          </p>
          <p>
            <span>建筑类型</span>
            <span>住宅</span>
            <span>建筑面积</span>
            <span>100-200m*m</span>
          </p>
          <p>
            <span class="onsale">在售</span>
            <span class="special">特价</span>
            <span class="opening">即将开盘</span>
            <span class="normal">临湖</span>
          </p>
          <p>
            15000-28000元/m*m
          </p>
        </div>
      </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'apphuoseList',
  data () {
    return {
      arrhuoselist: [{id: 1}, {id: 2}]
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    gohuosedetail (item) {
      let id = item.id
      this.$router.push({path: '/newHouseDetail/' + id, query: { code: this.code }})
    }
  },
  components: {
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.apphuoseList {
  padding: 0 .15rem;
  background: #fff;
  .apphuoseList-header {
    height: .34rem;
    line-height: .44rem;
    font-size: .12rem;
    span:nth-of-type(2) {
      color: #4984FB;
    }
  }
  .apphuoseList-items-container {
    display: flex;
    padding-bottom: .15rem;
    padding-top: .15rem;
    border-bottom: 1px solid #B7B7B7;
    &:nth-last-of-type(1){
      border-bottom: none;
    }
  }
  .apphuoseList-items-left {
    width: .96rem;
    height: .96rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .apphuoseList-items-right {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: .96rem;
    margin-left: .15rem;
    flex: 1;
    font-size: .12rem;
    p:nth-of-type(1) {
      font-size: .14rem;
      font-weight: bold;
      color: #333;
    }
    p:nth-of-type(2) {
      display: flex;
      flex-wrap: wrap;
      color: #8888;
      span {
        font-size: .09rem;
        color: #888;
      }
      span:nth-of-type(1) {
        margin-right: .05rem;
      }
      span:nth-of-type(2) {
        margin-left: .05rem;
      }
    }
    p:nth-of-type(3) {
      span {
        font-size: .09rem;
        color: #888;
      }
      span:nth-of-type(2){
        color: #5D9CF9 !important;
      }
    }
    p:nth-of-type(4) {
      span {
        font-size: .09rem;
        color: #888;
        padding:.02rem;
      }
    }
    p:nth-of-type(5) {
      color: #FB6550;
    }
  }
}
</style>
