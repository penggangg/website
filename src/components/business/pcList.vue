<template>
    <div style="background:#F5F5F6">
      <div class="banner">

      </div>
      <!-- <div class="ower-cot">
          <div class="ower">
            - 商务合作 -
          </div>
          <div class="desc">
            合屋是专注于房地产全链条服务运营及管理平台，业务涵盖地产前期策划、产品计划、营销方案策划与执行、地产数据分析、资产管理运营等，企业秉承诚信专业、创新服务为主旨，致力于做一家被尊重且优秀的地产服务商！
          </div>
      </div> -->
      <!-- <div class="center-baner">
        合屋出品，必属精品
      </div> -->
      <div class="section">
        <div class="section-cot">
          <div class="advantage-cot">
            <div class="advantage">- 商务合作 -</div>
          </div>
          <div class="item-cot">
            <div class="item">
              <div class="item-desc">
                <span>• 产品定位方案 </span>
                <span>• 产品深化方案</span>
                <span>• 营销策划方案</span>
                <span>• 资管运营方案</span>
              </div>
              <div class="item-img">
                <img src="../../assets/images/business3.png" alt="" srcset="">
                <div class="item-text">
                  策划方案
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-img">
                <img src="../../assets/images/business4.png" alt="" srcset="">
                <div class="item-text">
                  营销资管
                </div>
              </div>
              <div class="item-desc">
                <span>• 商业地产</span>
                <span>• 高端住宅</span>
                <span>• 招商代理</span>
                <span>• 运营管理</span>
              </div>
            </div>
            <div class="item">
              <div class="item-desc">
                <span>• 住宅业态合作</span>
                <span>• 商业业态合作</span>
                <span>• 招商业态合作</span>
                <span>• 运营业态合作</span>
              </div>
              <div class="item-img">
                <img src="../../assets/images/business5.png" alt="" srcset="">
                <div class="item-text">
                  渠道合作
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footers></footers>
    </div>
</template>
<style lang="scss" scoped>
.banner {
  min-width: 1220px;
  height: 400px;
  background: url('../../assets/images/business.png') no-repeat;
  background-position: center center;
  background-size:cover;
}
.center-baner {
  min-width: 1220px;
  height: 400px;
  background: url('../../assets/images/business2.png') no-repeat;
  background-position: center center;
  background-size:cover;
  text-align: center;
  line-height: 400px;
  font-size: 70px;
  color: #ffffff;
}
.ower-cot {
  margin: 0 auto;
  padding: 100px 0;
  width: 833px;
  .ower {
    margin-bottom: 30px;
    font-size: 48px;
    color: #333;
    font-weight: bold;
    text-align: center;
  }
  .desc {
    font-size: 18px;
    color: #888;
    text-align: center;
  }
}
.section {
  position: relative;
  margin: 0 auto;
  padding: 0 30px;
  width: 1200px;
  height: 1300px;
  .section-cot {
    position: absolute;
    left: 0;
    top: -50px;
    width: 1200px;
    background: #fff;
  }
  .advantage-cot {
    .advantage {
      margin-top: 50px;
      margin-bottom: 100px;
      font-size: 48px;
      color: #333;
      font-weight: bold;
      text-align: center;
    }
  }
  .item-cot {
    .item {
      display: flex;
      margin-bottom: 30px;
      .item-desc {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex: 1;
        span {
          display: inline-block;
          // min-width: 264px;
          font-size: 24px;
          color: #333;
          &:first-child {
            // font-size: 36px;
            // color: #333;
          }
        }
      }
      .item-img {
        position: relative;
        .item-text {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          font-size: 48px;
          width: 2em;
          color: #fff;
        }
      }
    }
  }
}
</style>
