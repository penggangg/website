
<template>
  <div class="alertcontact">
      <div class="alertcontact-conten">
          <div>
              <p>
                  <input type="text" placeholder="请输入您的手机号,合屋会尽快与您联系" v-model="telphone">
              </p>
              <p @click="saveTelphone">我要咨询</p>
          </div>
          <div>
              <img src="../../../assets/appimages/close.svg" @click="closealertcontact">
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'alertcontact',
  data () {
    return {
      telphone: ''
    }
  },
  methods: {
    saveTelphone () {
      let istelphone = this.$units.isPoneAvailable(this.telphone)
      if (!istelphone) {
        alert('请您输入正确的手机号码')
        return
      }
      this.$emit('closealertcontact')
    },
    closealertcontact () {
      this.$emit('closealertcontact')
    }
  },
  watch: {
  },
  created () {
  }
}

</script>

<style lang="scss" scoped>
.alertcontact {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0, .5);
    .alertcontact-conten {
        position: absolute;
        top: 30%;
        width: 100%;
        padding:0 5%;
        div:nth-of-type(1) {
            width: 100%;
            height: 1.2rem;
            background: #fff;
            padding: .15rem .35rem;
            border-radius: .05rem;
            margin-bottom: .3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            p {
                width: 100%;
                height: .35rem;
                input {
                    width: 100%;
                    text-indent: .1rem;
                    line-height: .35rem;
                    border: 1px solid #ddd;
                    border-radius: .05rem;
                }
            }
            p:nth-of-type(2) {
                width: 100%;
                margin-top: .05rem;
                height: .35rem;
                line-height: .35rem;
                color: #fff;
                font-size: .14rem;
                text-align: center;
                background: #5D9CF9;
                border-radius: .05rem;
            }
        }
        div:nth-of-type(2) {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: .25rem;
                height: .25rem;
            }
        }
    }
}
</style>
