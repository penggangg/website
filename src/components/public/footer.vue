<template>
  <footer>
    <div class="content">
      <div class="nav-cot">
        <div class="nav">
          <span>新房</span>
          <span>商铺</span>
          <span>写字楼</span>
          <span>公司介绍</span>
          <span>联系我们</span>
          <span>友情链接</span>
        </div>
        <div class="hotline">服务热线: 400-888-8888</div>
      </div>
      <div class="copyright">
        Copyright2012 l 上海屋合网络科技有限公司备案号 l 沪ICP21088888
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  position: absolute;
  width: 100%;
  height: 244px;
  background: #222;
  .content {
    width: 1200px;
    margin: 0 auto;
    .nav-cot {
      padding: 30px 0;
      border-bottom: 1px solid #888C8E;
      div {
        text-align: center;
        &.nav {
          height: 44px;
          line-height: 44px;
          margin-bottom: 10px;
          span {
            padding: 10px;
            font-size: 12px;
            background: #121212;
            color: #888C8E;
          }
        }
        &.hotline {
          color: #888C8E;
          font-size: 12px;
        }
      }
    }
    .copyright {
      padding-top: 30px;
      text-align: center;
      color: #888C8E;
      font-size: 12px;
    }
  }
}
</style>
