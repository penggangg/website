<template>
  <div>
      <div class="container-fluid">
        <div class="row hidden-xs hidden-sm header-pc">
          <div class="col-md-2 citySwicth">
            <router-link  :to="{ path: '/', query: { code: '110000' }}">北京</router-link>
            <span>|</span>
            <router-link  :to="{ path: '/', query: { code: '310000' }}">上海</router-link>
          </div>
          <ul class="row col-md-8 nav" >
            <router-link :class="{ active: $route.path ==='/'}" :to="{ path: '/', query: { code }}" tag="li" exact>首页</router-link>
            <router-link :class="{ active: $route.path ==='/newHouse'}" :to="{ path: 'newHouse', query: { code }}" tag="li">新房</router-link>
            <router-link :class="{ active: $route.path ==='/shop'}" :to="{ path: 'shop', query: { code }}" tag="li">商铺</router-link>
            <router-link :class="{ active: $route.path ==='/officeBuild'}" :to="{ path: 'officeBuild', query: { code }}" tag="li">写字楼</router-link>
            <router-link :class="{ active: $route.path ==='/business'}" :to="{ path: 'business', query: { code }}" tag="li">商务合作</router-link>
            <router-link :class="{ active: $route.path ==='/marketAnalysis'}" :to="{ path: 'marketAnalysis', query: { code }}" tag="li">市场分析</router-link>
            <router-link :class="{ active: $route.path ==='/delegate'}" :to="{ path: 'delegate', query: { code }}" tag="li">房产委托</router-link>
            <router-link :class="{ active: $route.path ==='/dynamic'}" :to="{ path: 'dynamic', query: { code }}" tag="li">企业动态</router-link>
            <router-link :class="{ active: $route.path ==='/company'}" :to="{ path: 'company', query: { code }}" tag="li">公司介绍</router-link>
          </ul>
          <div class="col-md-2 text-right">服务热线： 400-888-8888</div>
        </div>
        <div class="visible-sm-block visible-xs-block">
        </div>
      </div>
  </div>
</template>
<script>
export default {
  created () {
    console.log(this.$router)
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
.header-pc{
  background: #CECECE;
  @include line-hei(50px, 50px);
  // 城市切换
  .citySwicth{
    @include sc(16px, #fff);
    cursor: pointer;
    .active{
      color: #000000;
    }
  }
  // 导航
  .nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    li{
      cursor: pointer;
      @include sc(16px, #fff);
      &.active{
        color: #000000;
      }
    }
  }
}

</style>
