<template>
  <div class="filterpop" :style="{top: filtertop,height:newheight}">
    <div class="filterpop-height">
      <ul class="filterpop-items-contain" v-if="types !='3'">
        <li class="filterpop-items" :class="{activeClass: value.value === ''}" @click="switchfiter({key:'',value:''})">不限</li>
        <li class="filterpop-items" :class="{activeClass: value.value === item.value}" v-for="(item,index) in arrlist" :key="index" @click="switchfiter(item)">{{item.key}}</li>
      </ul>
      <ul class="filterpop-items-contain" v-if="types == 3">
        <li class="filterpop-items flex-li"  v-for="(item,index) in arrlist" :key="index" @click="switchflitercheck(item)">
          <span>{{item.key}}</span>
          <span :class="{activeClasscheck: value.value&&value.value.split(',').indexOf(JSON.stringify(item.value)) !== -1}"></span>
        </li>
      </ul>
      <div class="sure_buttom">
        <button @click="surefilter" v-if="types != '1'">确定</button>
        <p class="price-section" v-if ="types == '1'">
          <span><input type="number" v-model="bottomPrice"></span> -
          <span><input type="number" v-model="topPrice"></span> 万
          <span @click="surefilter">确定</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'filterpop',
  props: {
    arrlist: {
      type: Array
    },
    types: {
      type: String
    },
    activeClass: {
      type: String,
      default: '0'
    },
    value: {
      type: Object
    },
    filtertop: {
      type: String,
      default: '1.51rem'
    }
  },
  data () {
    return {
      bottomPrice: '',
      topPrice: '',
      checktextarr: [], // 配套设施选中的文字
      checkidarr: [] // 配套设施选中的Id
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  computed: {
    newheight () {
      console.log('calc(100% - ' + this.filtertop + ')')
      return 'calc(100% - ' + this.filtertop + ')'
    }
  },
  methods: {
    switchfiter (item) {
      this.$emit('input', item)
      this.bottomPrice = ''
      this.topPrice = ''
    },
    switchflitercheck (item) {
      this.checkidarr = this.value.value.split(',')
      this.checktextarr = this.value.key.split(',')
      let index = this.checkidarr.indexOf(JSON.stringify(item.value))
      let gochecktextarr = ''
      let gocheckidarr = ''
      if (index === -1) {
        this.checkidarr.push(item.value)
        this.checktextarr.push(item.key)
      } else {
        this.checkidarr.splice(index, 1)
        this.checktextarr.splice(index, 1)
      }
      gocheckidarr = this.checkidarr.join(',').replace(/^[,]*/, '')
      gochecktextarr = this.checktextarr.join(',').replace(/^[,]*/, '')
      this.$emit('input', {key: gochecktextarr, value: gocheckidarr})
    },
    surefilter () {
      if (this.types === '1' && (this.bottomPrice || this.topPrice)) {
        this.$emit('input', {key: `${this.bottomPrice}-${this.topPrice}万`, value: `${this.bottomPrice}0000-${this.topPrice}0000`})
        // this.bottomPrice = ''
        // this.topPrice = ''
      }
      this.checkidarr = []
      this.checktextarr = []
      this.$emit('surefilter', this.types)
    }
  },
  components: {
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.filterpop {
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: rgba(0, 0, 0, .6);
  .filterpop-height {
    position: absolute;
    top: 0;
    bottom: .2rem;;
    left: 0;
    right: 0;
    background: #fff;
  }
  .filterpop-items-contain {
    position: absolute;
    top: 0;
    bottom: .5rem;
    overflow-y: auto;
    width: 100%;
    .filterpop-items {
      height: .4rem;
      line-height: .4rem;
      font-size: .14rem;
      text-align: center;
    }
  }
  .sure_buttom {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:.5rem;
    button {
      height: .4rem;
      width: 90%;
      border-radius: .02rem;
      background: #5D9CF9;
      font-size: .18rem;
      line-height: .4rem;
      text-align: center;
      color: #fff;
    }
  }
  .price-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: .4rem;
    span {
      display: inline-block;
      width: .84rem;
      height: .27rem;
      input {
        border: none;
        width: 100%;
        height: 100%;
        background: #F5F5F6;
      }
    }
    span:nth-of-type(3) {
      border-radius: .04rem;
      width: 1.12rem;
      height: .36rem;
      background: #5D9CF9;
      color: #fff;
      font-size: .18rem;
      text-align: center;
      line-height: .36rem;
    }
  }
  .flex-li {
    display: flex;
    align-items: center;
    padding: 0 .15rem;
    justify-content: space-between;
    span:nth-of-type(2) {
      display: inline-block;
      width: .12rem;
      height:.12rem;
      border: 1px solid #B7B7B7;
    }
  }
  .activeClass {
    color: blue !important;
  }
  .activeClasscheck {
    background: #5D9CF9 !important;
    border: none !important;
  }
}
</style>
