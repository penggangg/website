/**
  右侧导航弹窗
*/
<template>
  <div class="navigation-pops">
    <slot></slot>
    <div v-if = "theCustom">
        <img class="menu-button" :src="menuSrc" @click="shownavigationpopsshow">
    </div>
    <div class="fixed-pops"  v-show="shownavigationpops">
      <div class="fixed-pops-conten" :class="[showProps ? 'outclass' : 'inclass' ]">
        <div class="fixed-pops-left">
           <ul>
             <li class="checkfont" :class="{pithOne: value === item.id}" v-for="(item,index) in $constDatas.navigationTab" :key="index" @click="switchtab(item)">{{item.text}}</li>
           </ul>
        </div>
        <div class="fixed-pops-right">
           <img src="../../../assets/appimages/icon-next.svg" @click="closePops">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navigation',
  props: {
    // 选中
    value: {
      type: String,
      default: '0'
    },
    // 控制显示隐藏
    shownavigationpops: {
      type: Boolean,
      default: false
    },
    // theCustom为true代表自定义按钮样式
    theCustom: {
      type: Boolean,
      default: true
    },
    menuSrc: {
      type: String,
      default: require('../../../assets/appimages/menu.svg')
    }
  },
  data () {
    return {
      showProps: false
    }
  },
  mounted: function () {
    this.$nextTick(() => {
    })
  },
  methods: {
    shownavigationpopsshow () {
      this.$emit('shownavigationpopsshow')
    },
    closePops () {
      this.showProps = false
      setTimeout(() => {
        if (!this.showProps) {
          this.$emit('closePops')
        }
      }, 500)
    },
    switchtab (item) {
      // this.$emit('input', item.id)
      // 调取后台接口地址
      let objrouter = {
        '0': 'Index', // 首页
        '1': 'newHouseList', // 新房
        '2': 'shopList', // 商铺
        '3': 'officeBuildList', // 写字楼
        '4': 'business', // 商务合作
        '5': 'marketAnalysisList', // 市场分析
        '6': 'delegate', // 房屋委托
        '7': 'dynamic', // 企业动态
        '8': 'company' // 公司介绍
      }
      let goUrlname = objrouter[item.id]
      this.$router.push({name: goUrlname, query: { code: this.code }})
    }
  },
  watch: {
    shownavigationpops (newvalue, oldvalue) {
      if (newvalue) {
        setTimeout(() => {
          this.showProps = true
        }, 50)
      }
    }
  },
  created () {
  }
}

</script>

<style lang="scss" scoped>
.navigation-pops {
  .fixed-pops {
     position: fixed;
     right: 0;
     left: 0;
     top: 0;
     bottom: 0;
     z-index: 9999;
     background: rgba(0, 0, 0, .6);
     .fixed-pops-conten {
        display: flex;
        position: absolute;
        right: -100%;
        top: 0;
        bottom: 0;
        width: 65%;
        background: #ddd;
        transition: right .5s linear;
        .fixed-pops-left {
          flex: 1;
          overflow-y: auto;
          ul {
            li {
              height: .5rem;
              line-height: .5rem;
              font-size: .14rem;
              text-align: center;
            }
          }
        }
        .fixed-pops-right {
           width: .52rem;
           min-width: 50px;
           background: #fff;
           padding: .1rem 0 0 .1rem;
           display: flex;
           justify-content: center;
           img {
             width: .14rem;
             height: .23rem;
           }
        }
     }
   }
}
.menu-button {
  width: .24rem;
  height: .24rem;
}
.pithOne {
  color: #2ea1d7 !important;
}
.outclass {
  right: 0 !important;
}
.inclass {
  right: -100% !important;
}

</style>
