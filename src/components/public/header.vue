<template>
  <div>
      <div class="container-fluid">
        <div class="row hidden-xs hidden-sm header-pc">
          <div class="col-md-2 text-right" style="font-size:48px;font-weight:bold;color:#fff;">LOGO</div>
          <div class="col-md-1 citySwicth ">
            <img src="../../assets/images/icon-location.svg" alt="" srcset="">
            <router-link  :to="{ path: '/', query: { code: 310000 }}" :class="{ active: $route.query.code === 310000 }" tag="span">上海</router-link>
            <span>|</span>
            <router-link  :to="{ path: '/', query: { code: 110000 }}"  :class="{ active: $route.query.code === 110000 || !$route.query.code }"   tag="span">北京</router-link>
          </div>
          <ul class="row col-md-7 nav" >
            <router-link v-for="(item, index) in arrPath" :key="index" :class="{ active: $route.path === `/${item.path}` ||  $route.path === item.path}" :to="{ path: item.path, query: { code }}" tag="li" >{{item.name}}</router-link>
          </ul>
          <div class="col-md-2 text-right tel">服务热线： 400-888-8888</div>
        </div>
        <div class="visible-sm-block visible-xs-block">
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      arrPath: [
        {
          path: '/',
          name: '首页'
        },
        {
          path: 'newHouse',
          name: '新房'
        },
        {
          path: 'shop',
          name: '商铺'
        },
        {
          path: 'officeBuild',
          name: '写字楼'
        },
        {
          path: 'business',
          name: '商务合作'
        },
        {
          path: '/marketAnalysis',
          name: '市场分析'
        },
        {
          path: 'delegate',
          name: '房产委托'
        },
        {
          path: 'dynamic',
          name: '企业动态'
        },
        {
          path: 'company',
          name: '公司介绍'
        }
      ]
    }
  },
  created () {
    console.log(this.$router)
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/mixin';
.header-pc{
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: calc( 100% + 15px);
  @include line-hei(50px, 50px);
  // 城市切换
  .citySwicth{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
    width: 92px;
    height: 27px;
    border: 1px solid #fff;
    border-radius: 22px;
    span {
      @include sc(12px, rgba(255,255,255,0.5));
      margin: 0 2px;
      font-weight: bold;
    }
    cursor: pointer;
    .active{
      color: #fff;
    }
  }
  // 导航
  .nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 20px;
    li{
      cursor: pointer;
      @include sc(18px, rgba(255,255,255,0.5));
      font-weight: bold;
      &.active{
        color: #fff;
      }
    }
  }
  .tel {
    @include sc(14px, rgba(255,255,255,0.5));
  }
}

</style>
