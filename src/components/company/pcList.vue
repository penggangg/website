<template>
    <div style="background:#F5F5F6">
      <div class="banner">

      </div>
      <div class="ower-cot">
          <div class="ower">
            - 我们的产品 -
          </div>
          <div class="desc">
            20世纪70年代的日本，用12%的经济增长率创造了日本经济增长的光辉历史，同时也开启了日本地价暴涨的疯狂时代，据统计，在地价涨幅最大的1988年，全国平均上涨了21.7%，其中三大都市圈上涨了43.8%，东京圈的涨幅更高达65.3%价涨幅最大的1988年价涨
          </div>
      </div>
      <div class="center-baner">
        做被尊重的地产服务商
      </div>
      <div class="section">
        <div class="section-cot">
          <div class="advantage-cot">
            <div class="advantage">- 我们的优势 -</div>
          </div>
          <div class="item-cot">
            <div class="item">
              <div class="item-desc">
                <span>诚信</span>
                <span>精品商铺写字楼全覆盖</span>
              </div>
              <div class="item-img">
                <img src="../../assets/images/company1.png" alt="" srcset="">
              </div>
            </div>
            <div class="item">
              <div class="item-img">
                <img src="../../assets/images/company2.png" alt="" srcset="">
              </div>
              <div class="item-desc">
                <span>专业</span>
                <span>精品商铺写字楼全覆盖</span>
              </div>
            </div>
            <div class="item">
              <div class="item-desc">
                <span>诚信</span>
                <span>精品商铺写字楼全覆盖</span>
              </div>
              <div class="item-img">
                <img src="../../assets/images/company3.png" alt="" srcset="">
              </div>
            </div>
            <div class="item">
              <div class="item-img">
                <img src="../../assets/images/company4.png" alt="" srcset="">
              </div>
              <div class="item-desc">
                <span>丰富</span>
                <span>精品商铺写字楼全覆盖</span>
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
  height: 1650px;
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
          font-size: 24px;
          color: #888;
          &:first-child {
            font-size: 36px;
            color: #333;
          }
        }
      }
    }
  }
}
</style>
