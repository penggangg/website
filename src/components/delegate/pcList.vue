<template>
    <div style="position:relative">
      <div class="banner">
      </div>
      <div class="section"></div>
      <div class="delegate-cot">
        <div class="delegate">
          <div class="formDetails">
            <div class="item type">
              <div>
                <span @click="condition.rent_type=2" :class="{active: condition.rent_type===2}">出售</span>
                <span @click="condition.rent_type=1" :class="{active: condition.rent_type===1}">出租</span>
              </div>
              <span class="tel">咨询热线：400-888-9950</span>
            </div>
            <div class="item userInfo">
              <span>尊称</span>
              <input type="text" v-model="condition.uname" placeholder="我们怎么称呼您">
            </div>
            <div class="item userInfo">
              <span>手机号</span>
              <input type="text" v-model.number="condition.tel" placeholder="请输入您的手机号，方便我们联系您">
            </div>
            <div class="item userInfo">
              <span>需求说明</span>
              <textarea name="" v-model="condition.desc" placeholder="进一步描述需求，合屋将为您提供更精准的服务"></textarea>
            </div>
          </div>
          <div class="submit" @click="submit">提交委托</div>
          <div class="line">
            <span class="line-left"></span>
            <span class="line-center">卖房全流程</span>
            <span class="line-right"></span>
          </div>
          <div class="form-footer">
            <div class="step">
              <img src="../../assets/images/1.svg" alt="">
              <div>
                <span>发布房源</span>
                <span>线上免费发布房源</span>
              </div>
            </div>
            <div class="step">
              <img src="../../assets/images/2.svg" alt="">
              <div>
                <span>发布房源</span>
                <span>线上免费发布房源</span>
              </div>
            </div>
            <div class="step">
              <img src="../../assets/images/3.svg" alt="">
              <div>
                <span>发布房源</span>
                <span>线上免费发布房源</span>
              </div>
            </div>
            <div class="step">
              <img src="../../assets/images/4.svg" alt="">
              <div>
                <span>发布房源</span>
                <span>线上免费发布房源</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footers></footers>
    </div>
</template>
<script>
import { depute } from '@/assets/js/api'
export default {
  data () {
    return {
      condition: {
        city_id: this.code,
        rent_type: 2,
        tel: '',
        uname: '',
        desc: ''
      }
    }
  },
  methods: {
    submit () {
      let reg = /^1[34578][0-9]{9}$/
      if (reg.test(this.tel)) {
        depute({
          ...this.condition
        }).then(_ => {
          this.$showMsg('成功提交')
        })
      } else {
        this.$showMsg('请输入正确的手机号')
      }
    }
  }
}
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
  width: 1200px;
  height: 1033px;
  left: 50%;
  top: 50%;
  z-index: 33;
  transform: translate(-50%,-50%);
  .delegate {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    // margin-top: 249px;
    padding-top: 70px;
    width: 1200px;
    height:1033px;
    background: #ffffff;
    .item {
      padding:30px 0;
      width: 600px;
      border-bottom: 1px solid #979797;
      &:first-child {
        padding-bottom:50px;
      }
      &.type {
        display:flex;
        align-items: center;
        justify-content: space-between;
        span {
          color: #333333;
          font-size: 18px;
          font-weight: bold;
          margin-right: 30px;
          cursor: pointer;
          &.active {
            color: #5D9CF9;
          }
          &.tel {
            margin-right: 0;
            font-size: 22px;
            color: #FB6550;
          }
        }
      }
      &.userInfo {
        span {
          display: inline-block;
          width: 100px;
          color: #333333;
          font-size: 18px;
          font-weight: bold;
        }
        &:last-child {
          display: flex;
          textarea {
            width: 504px;
            height: 180px;
            display: inline-block;
            padding-top: 6px;
            padding-left: 10px;
            background: #F2F5F7;
          }
        }
      }
    }
    .line {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 80px 0 60px 0;
      width: 100%;
      .line-left {
        display: inline-block;
        position: relative;
        width: 500px;
        height: 2px;
        background: #B7B7B7;
        &:after {
          content:'';
          display: inline-block;
          position: absolute;
          width: 10px;
          height: 10px;
          right: -10px;
          background: #B7B7B7;
          top: 100%;
          transform: translateY(-50%);
          border-radius: 100%;
        }
      }
      .line-center {
        font-size: 22px;
        color: #333333;
        font-weight: bold;
      }
      .line-right {
        display: inline-block;
        position: relative;
        width: 500px;
        height: 2px;
        background: #B7B7B7;
        &:after {
          content:'';
          display: inline-block;
          position: absolute;
          width: 10px;
          height: 10px;
          left: -10px;
          background: #B7B7B7;
          top: 100%;
          transform: translateY(-50%);
          border-radius: 100%;
        }
      }
    }
    .submit {
      margin-top: 100px;
      width:190px;
      height:58px;
      line-height: 58px;
      font-size:18px;
      color: #ffffff;
      background:rgba(93,156,249,1);
      border-radius:8px;
      text-align: center;
      cursor: pointer;
    }
    .form-footer {
      display: flex;
      justify-content: space-around;
      width: 100%;
      .step {
        display: flex;
        >div {
          margin-left: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          span {
            font-size: 12px;
            color: #888888;
            &:first-child {
              margin-bottom: 10px;
              color: #333333;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
</style>
