<template>
  <div class="mask" v-show="value">
    <div  class="ask">
        <input type="text" v-model.number="tel" placeholder="请输入您的手机号，合屋会尽快与您联系">
        <span @click="submitAsk">我要咨询</span>
        <img @click="close" class="closed" src="../../../assets/images/icon-close.svg" alt="" srcset="">
    </div>
  </div>
</template>
<script>
import { ask } from '@/assets/js/api'
export default {
  data () {
    return {
      tel: '',
      typeMap: {
        'officeBuildDetail': 3,
        'shopDetail': 2,
        'newHouseDetail': 1
      }
    }
  },
  methods: {
    close () {
      this.$emit('input', false)
    },
    submitAsk () {
      let reg = /^1[34578][0-9]{9}$/
      if (reg.test(this.tel)) {
        ask({
          city_id: this.code,
          tel: this.tel,
          type: this.typeMap[this.$route.name]
        }).then(res => {
          this.$emit('input', false)
          alert(res.errorMsg)
        })
      } else {
        alert('请输入正确的手机号')
      }
    }
  },
  props: {
    value: {
      type: Boolean
    }
  },
  created () {
    console.log(this.$route.name)
  }
}
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100001;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,.5);
  .ask {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 172px;
    position: relative;
    width: 680px;
    height: 336px;
    background: #ffffff;
    border-radius: 8px;
    input {
      display: inline-block;
      width: 410px;
      height: 58px;
      border: 1px solid #B7B7B7;
      border-radius: 8px;
      margin-bottom: 20px;
      text-indent: 16px;
    }
    span {
      display: inline-block;
      width: 410px;
      height: 58px;
      background: #5D9CF9;
      border-radius: 8px;
      color: #ffffff;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      line-height: 58px;
      cursor: pointer;
    }
    .closed {
      position: absolute;
      right: 20px;
      top: 20px;
      z-index: 100002;
      cursor: pointer;
    }
  }
}
</style>
