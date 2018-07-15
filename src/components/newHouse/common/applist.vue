<template>
  <div class="apphuoseList">
    <div class="apphuoseList-header">
      <span>为你找到</span>
      <span>1000个</span>
      <span>北京新楼盘</span>
    </div>
    <div class="apphuoseList-items">
      <div class='apphuoseList-items-container'>
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
            <span>建筑类型多少卡电话</span>
            <span>住宅</span>
            <span>建筑面积</span>
            <span>100-200m*m</span>
          </p>
          <p>
            <span>在售</span>
            <span>特价</span>
            <span>即将开盘</span>
            <span>临湖</span>
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
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
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
    height: .44rem;
    line-height: .44rem;
    font-size: .12rem;
    span:nth-of-type(2) {
      color: #4984FB;
    }
  }
  .apphuoseList-items-container {
    display: flex;
    padding-bottom: .15rem;
    border-bottom: 1px solid #B7B7B7
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
    margin-left: .15rem;
    flex: 1;
    font-size: .12rem;
    p:nth-of-type(1) {
      font-size: .14rem;
      font-weight: bold;
    }
    p:nth-of-type(3) {
      width: 200%;
      transform:translateX(-25%) scale(0.5);
      display: flex;
      flex-wrap: wrap;
      span {
        display: block;
        font-size: .18rem;
        padding: .06rem;
        margin-right: .06rem;
        background: #ccc;
        margin-bottom: .08rem;
      }
      span:nth-last-of-type(1){
        margin-right: 0;
      }
    }
  }
}
</style>
