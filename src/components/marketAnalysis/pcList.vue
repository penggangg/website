<template>
    <div>
      <div class="banner">
      </div>
      <div class="marketAnalysis-list">
        <h3>推荐</h3>
        <div class="item" v-for="(item,index) in 5" :key="index">
          <img src="../../assets/images/pic-house.png" alt="">
          <div class="right-cot">
            <span class="title">我们用500万买下四环以里的房子！</span>
            <span class="details">20世纪70年代的日本，用12%的经济增长率创造了日本经济增长的光辉历20世纪70年代的日本，用12%的经济增长率创造了日本经济增长的光辉历</span>
            <span class="author">作者：知乎匿名作者</span>
            <div class="tags">
              <span>看房心得</span>
              <span>北漂买房</span>
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
  height: 700px;
  background: url('../../assets/images/pic-banner2.png') no-repeat;
  background-position: center center;
  background-size:cover;
}
.marketAnalysis-list {
  width: 1200px;
  margin:  0 auto;
  h3 {
    margin-top: 50px;
    font-size: 22px;
  }
  .item {
    padding: 50px 0;
    border-bottom: 1px solid #B7B7B7;
    img {
      margin-right: 50px;
      width: 324px;
      height: 188px;
    }
    .right-cot {
      display: inline-flex;
      flex-direction: column;
      width: 820px;
      height: 188px;
      vertical-align: bottom;
      .title {
        font-size: 18px;
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .details {
        margin: 20px 0;
        height: 64px;
        color: #888;
      }
      .author {
        margin-bottom: 17px;
        color: #888;
      }
      .tags {
        span {
          padding: 2px 10px;
          margin-right: 7px;
          color: #5D9CF9;
          border: 1px solid #5D9CF9;
          border-radius: 4px;
        }
      }
    }
  }

}
</style>
