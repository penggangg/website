<template>
  <footer>
    <div class="content">
      <div class="nav-cot">
        <div class="nav">
          <router-link to="/newHouse" tag="span">新房</router-link>
          <router-link to="/shop" tag="span">商铺</router-link>
          <router-link to="/officeBuild" tag="span">写字楼</router-link>
          <router-link to="/company" tag="span">公司介绍</router-link>
          <!-- <span>联系我们</span> -->
          <!-- <span>友情链接</span> -->
        </div>
        <div class="hotline">服务热线: 400-888-8888</div>
      </div>
      <div class="copyright">
        Copyright2012 l 上海屋合网络科技有限公司备案号 l 沪ICP21088888
      </div>
    </div>
    <div class="maodian" v-show="backTopShow">
      <div class="ask" @click="askShow = true">
        <img src="../../assets/images/icon-consult.png" alt="" srcset="">
      </div>
      <div class="top" @click="backTop()">
        <img src="../../assets/images/icon-top.svg" alt="" srcset="">
      </div>
    </div>
    <ask-mask v-model="askShow"></ask-mask>
  </footer>
</template>
<script>
import askMask from '@/components/public/pcPublic/askMask'
export default {
  data () {
    return {
      backTopShow: false,
      askShow: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  components: {
    askMask
  },
  methods: {
    backTop () {
      let back = setInterval(() => {
        if (document.body.scrollTop || document.documentElement.scrollTop) {
          document.body.scrollTop -= 100
          document.documentElement.scrollTop -= 100
        } else {
          clearInterval(back)
        }
      })
    },
    handleScroll () {
      // if (document.documentElement.scrollTop + document.body.scrollTop > document.body.scrollHeight - 700) {
      //   this.backTopShow = true
      // } else {
      //   this.backTopShow = false
      // }
      if (document.documentElement.scrollTop > 500 || document.body.scrollTop > 500) {
        this.backTopShow = true
      } else {
        this.backTopShow = false
      }
    }
  }
}
</script>

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
            cursor: pointer;
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
  .maodian {
    position: fixed;
    right: calc((100% - 1180px)/ 2);
    bottom: 100px;
    z-index: 1000000;
    cursor: pointer;
    .ask {
      margin-bottom: 20px;
      width: 100px;
      height: 100px;
      background: #5D9CF9;
      border-radius: 100%;
    }
  }
}
</style>
