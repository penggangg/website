<template>
  <div class="filterpop">
    <div class="filterpop-height">
      <ul class="filterpop-items-contain">
        <li class="filterpop-items" :class="{activeClass: value.id === item.id}" v-for="(item,index) in arrlist" :key="index" @click="switchfiter(item)">{{item.text}}</li>
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
    }
  },
  data () {
    return {
      bottomPrice: '',
      topPrice: ''
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    switchfiter (item) {
      this.$emit('input', item)
    },
    surefilter () {
      debugger
      if (this.types === '1' && (this.bottomPrice || this.topPrice)) {
        this.$emit('input', {text: `${this.bottomPrice}-${this.topPrice}万`, id: '-1'})
      }
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
  position: fixed;
  top: 1.51rem;
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
  .activeClass {
    color: blue !important;
  }
}
</style>
