<template>
  <div>
      <div class="container-fluid">
        <div class="row hidden-xs hidden-sm header-pc">
          <div class="col-md-2 citySwicth">
            <span class="active">北京</span>
            <span>|</span>
            <span>上海</span>
          </div>
          <ul class="row col-md-8 nav" >
            <router-link to='/' tag="li" exact>首页</router-link>
            <router-link to="/newHouse" tag="li">新房</router-link>
            <router-link to="/shop" tag="li">商铺</router-link>
            <router-link to="/officeBuild" tag="li">写字楼</router-link>
            <router-link to="/business" tag="li">商务合作</router-link>
            <router-link to="/marketAnalysis" tag="li">市场分析</router-link>
            <router-link to="/delegate" tag="li">房产委托</router-link>
            <router-link to="/dynamic" tag="li">企业动态</router-link>
            <router-link to="/company" tag="li">公司介绍</router-link>
          </ul>
          <div class="col-md-2 text-right">服务热线： 400-888-8888</div>
        </div>
        <div class="visible-sm-block visible-xs-block">
        </div>
      </div>
  </div>
</template>
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
