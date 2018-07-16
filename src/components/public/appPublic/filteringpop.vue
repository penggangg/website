<template>
  <div class="filterpop">
    <ul class="filterpop-items-contain">
      <li class="filterpop-items" :class="{activeClass: value.id === item.id}" v-for="(item,index) in arrlist" :key="index" @click="switchfiter(item)">{{item.text}}</li>
    </ul>
    <div class="sure_buttom">
      <button @click="surefilter">确定</button>
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
  background: #fff;
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
      background: green;
      line-height: .4rem;
      text-align: center;
      color: #fff;
    }
  }
  .activeClass {
    color: blue !important;
  }
}
</style>
