<template>
  <div>
    <div class="banner">
      <div class="tags-cot">
        <div class="total-pic">
          <img src="../../assets/images/icon-pic.svg" alt="" >
          <span>楼盘相册（25张）</span>
        </div>
        <div class="tag">
          <span>在售</span>
          <span>特价房</span>
          <span>样板间可售</span>
        </div>
      </div>
    </div>
    <div class="house-detail item-content">
      <h3>基本信息</h3>
      <div class="details">
        <ul>
          <li>
            <span>楼盘名称</span>
            <span>恒大丽宫</span>
          </li>
          <li>
            <span>建筑类型</span>
            <span>住宅</span>
          </li>
          <li>
            <span>建筑面积</span>
            <span>2000㎡</span>
          </li>
          <li>
            <span>容积率</span>
            <span>2.50</span>
          </li>
          <li>
            <span>物业费</span>
            <span>6.77元/m²/月</span>
          </li>
          <li>
            <span>供水方式</span>
            <span>民电</span>
          </li>
          <li>
            <span>开发商</span>
            <span>恒大集团</span>
          </li>
          <li>
            <span>物业公司</span>
            <span>恒大集团</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>楼盘名称</span>
            <span>恒大丽宫</span>
          </li>
          <li>
            <span>建筑类型</span>
            <span>住宅</span>
          </li>
          <li>
            <span>建筑面积</span>
            <span>2000㎡</span>
          </li>
          <li>
            <span>容积率</span>
            <span>2.50</span>
          </li>
          <li>
            <span>物业费</span>
            <span>6.77元/m²/月</span>
          </li>
          <li>
            <span>供水方式</span>
            <span>民电</span>
          </li>
          <li>
            <span>开发商</span>
            <span>恒大集团</span>
          </li>
          <li>
            <span>物业公司</span>
            <span>恒大集团</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="item-content  house-pic">
      <h3>楼盘相册</h3>
      <div></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  position: relative;
  height: 524px;
  background: url('../../assets/images/pic-house.png') no-repeat;
  background-size:cover;
  background-position: center center;
  .tags-cot {
    position: absolute;
    bottom: 40px;
    left: calc((100% - 1200px)/2);
    width: 1200px;
    margin: 0 auto;
    .total-pic {
      display: flex;
      float: left;
      padding: 6px 10px;
      background: rgba(0, 0, 0, .6);
      cursor: pointer;
      img {
        margin-right: 10px;
      }
      span {
        color: #fff;
      }
    }
    .tag {
      float: right;
      font-size: 0;
      span {
        margin-right: 10px;
        padding: 7px 10px;
        font-size: 12px;
        background: #E6F0FE;
        border-radius: 4px;
      }
    }
  }
}
</style>
