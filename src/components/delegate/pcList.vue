<template>
    <div>
      <div class="banner">
      </div>
      <div class="section"></div>
      <div class="delegate-cot">
        <div class="delegate">
          <div class="formDetails">
            <div class="item">
              <span>出售</span>
              <span>出租</span>
              <span>咨询热线：400-888-9950</span>
            </div>
            <div class="item">
              <span>尊称</span>
              <input type="text" placeholder="我们怎么称呼您">
            </div>
            <div class="item">
              <span>手机号</span>
              <input type="text" placeholder="请输入您的手机号，方便我们联系您">
            </div>
            <div class="item">
              <span>需求说明</span>
              <textarea name="" placeholder="进一步描述需求，合屋将为您提供更精准的服务"></textarea>
            </div>
          </div>
          <div>提交委托</div>
          <div class="line">
            卖房全流程
          </div>
          <div class="form-footer">

          </div>
        </div>
      </div>
      <footers></footers>
    </div>
</template>
<script>
</script>

<style lang="scss" scoped>
.banner {
  min-width: 1220px;
  height: 700px;
  background: url('../../assets/images/pic-banner2.png') no-repeat;
  background-position: center center;
  background-size:cover;
}
.section {
  height: 633px;
  background: #F5F5F6;
}
.delegate-cot {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  .delegate {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 249px;
    padding-top: 100px;
    width: 1200px;
    height: 933px;
    background: #ffffff;
    .item {
      width: 600px;
      border-bottom: 1px solid #979797;
    }
  }
}
</style>
