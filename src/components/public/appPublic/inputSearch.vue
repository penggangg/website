/**
  inputsearch
*/
<template>
  <div class="input-search-compent">
    <div class="input-search">
        <div>
            <span>新房</span>
            <img src="../../../assets/appimages/icon-search.svg" >
        </div>
        <div>
            <input type="text" placeholder="dsad">
        </div>
        <div>
            <img src="../../../assets/appimages/icon-search.svg">
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'inputSearch',
  props: {
  },
  data () {
    return {
    }
  },
  mounted: function () {
    this.$nextTick(() => {
    })
  },
  methods: {
  },
  watch: {
  },
  created () {
  }
}

</script>

<style lang="scss" scoped>
.input-search-compent {
    width: 100%;
    padding: 0 5%;
}
.input-search {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: .32rem;
    background: #fff;
    &>div:nth-of-type(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: .53rem;
        height: .32rem;
        border-right: 1px solid #F5F5F6;
        &>span {
            margin-right: .05rem;
        }
    }
    &>div:nth-of-type(2) {
        flex:1;
        input {
            width:100%;
            height: .32rem;
            border: none;
        }
    }
    &>div:nth-of-type(3) {
        width: .45rem;
        height: .32rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #3886F8;
    }
}
</style>
