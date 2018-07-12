/**
  右侧导航弹窗
*/
<template>
  <div class="navigation-pops">
    <slot></slot>
    <div v-if = "theCustom">
        <button type="button" name="button" @click="shownavigationpopsshow">点击出现导航菜单11</button>
    </div>
    <div class="fixed-pops"  v-show="shownavigationpops">
      <div class="fixed-pops-conten" :class="[showProps ? 'outclass' : 'inclass' ]">
        <div class="fixed-pops-left">
           <ul>
             <li :class="{pithOne: pithOne === index}" v-for="(item,index) in tablist" :key="index">{{item.text}}</li>
           </ul>
        </div>
        <div class="fixed-pops-right">
          <p @click="closePops">关闭</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Appindex',
  props: {
    // 选中
    pithOne: {
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
    }
  },
  data () {
    return {
      showProps: false,
      tablist: [
        {text: '首页', id: '0'},
        {text: '新房', id: '1'},
        {text: '商铺', id: '2'},
        {text: '写字楼', id: '3'},
        {text: '商务合作', id: '4'},
        {text: '市场分析', id: '5'},
        {text: '房产委托', id: '6'},
        {text: '企业动态', id: '7'},
        {text: '公司介绍', id: '8'}
      ]
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
              text-align: center;
            }
          }
        }
        .fixed-pops-right {
           width: .8rem;
           min-width: 50px;
           background: #fff;
           padding: .1rem 0 0 .1rem;
           p {
             width: .6rem;
             height: .6rem;
             background: yellow;
           }
        }
     }
   }
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
