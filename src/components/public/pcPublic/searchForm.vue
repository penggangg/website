<template>
  <div class="search">
    <div class="serch-cot">
      <input type="text" @keyup.enter="changeCondition" v-model.trim="query" placeholder="请输入城区/商圈/项目">
      <img src="../../../assets/images/smallSearch.svg" @click="changeCondition" alt="" srcset="" >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search {
  height: 115px;
  background: #F5F5F6;
  .serch-cot {
    width: 1200px;
    margin:  0 auto;
    padding: 30px 0;
    height: 100%;
    position: relative;
    input {
      width: 772px;
      height: 55px;
      font-size: 14px;
      color: #888;
      text-indent: 20px;
    }
    img {
      position: absolute;
      left: 724px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
}
</style>
<script>
export default {
  data () {
    return {
      query: ''
    }
  },
  methods: {
    changeCondition () {
      this.$emit('changeCondition', {query: this.query})
    }
  },
  created () {
    this.query = this.$route.params.query
  }
}
</script>
