<template>
  <div>
      <div class="container-fluid">
        <div class="row hidden-xs hidden-sm header-pc">
          <div class="col-md-2 citySwicth">
            <router-link  :to="{ path: '/', query: { code: 110000 }}"  :class="{ active: $route.query.code === 110000 || !$route.query.code }"   tag="span">北京</router-link>
            <span>|</span>
            <router-link  :to="{ path: '/', query: { code: 310000 }}" :class="{ active: $route.query.code === 310000 }" tag="span">上海</router-link>
          </div>
          <ul class="row col-md-8 nav" >
            <router-link v-for="(item, index) in arrPath" :key="index" :class="{ active: $route.path === `/${item.path}` ||  $route.path === item.path}" :to="{ path: item.path, query: { code }}" tag="li" >{{item.name}}</router-link>
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
  background: #CECECE;
  @include line-hei(50px, 50px);
  // 城市切换
  .citySwicth{
    span {
      @include sc(16px, #fff);
    }
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
