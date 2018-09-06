
<template>
  <div class="footer-common">
   <div>
      <p>
          <span class="footertab">新房</span>
          <span class="footertab">商铺</span>
          <span class="footertab">写字楼</span>
          <span class="footertab">公司介绍</span>
          <!-- <span class="footertab">联系我们</span> -->
          <span class="footertab" style="margin-right: 0">友情链接</span>
      </p>
      <p>服务热线：400-888-8888</p>
   </div>
   <div>
       Copyright2012 l 上海屋合网络科技有限公司备案号 l 沪ICP21088888
   </div>
  </div>
</template>

<script>

export default {
  name: 'footervue',
  props: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  watch: {
  },
  created () {
  }
}

</script>

<style lang="scss" scoped>
@import '../../../assets/css/mixin';
.footer-common {
    background: #222222;
    height: .95rem;
    &>div:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: .61rem;
        border-bottom: 1px solid #888C8E;
        p:nth-of-type(1) {
            margin-bottom: .05rem;
        }
        p:nth-of-type(2) {
            margin-bottom: .15rem;
            color:#888C8E;
            text-align: center;
            font-size: .14rem;
            width: 200%;
            transform: scale(.5);
        }
    }
    &>div:nth-of-type(2) {
        height: .34rem;
        line-height: .34rem;
        color:#888C8E;
        text-align: center;
        @include font-size-min(.14rem, 100%);
    }
    .footertab {
        display: inline-block;
        padding: .06rem;
        background: #121212;
        color: #888C8E;
        font-size:.12rem;
        transform: translate(0, .08rem) scale(.7);

    }
}
</style>
