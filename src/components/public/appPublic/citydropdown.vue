/**
  右侧导航弹窗
*/
<template>
  <div class="citydropdown">
    <p>
      <span>{{checkCity}}</span>
      <span class="downIcon"></span>
    </p>
    <div class="citydropconten" :style="{top: citydownTop}">
      <p class="city-items" v-for="(item,index) in cityArrList" :key="index" :class="{checkCityActive: checkCity===item.id}">{{item.city}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Appindex',
  props: {
    // 选中
    cityArrList: {
      type: Array,
      default: [
        {city: '北京', id: '0'},
        {city: '上海', id: '1'}
      ]
    },
    citydownTop: {
      type: 'string',
      default: 0
    },
    checkCity: {
      type: String,
      default: '0'
    }
  },
  data () {
    return {
      checkCity: '北京'
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
.citydropdown {
  position: relative;
  width: .8rem;
  span {
    display: inline-block;
  }
  .downIcon {
    width: .2rem;
    height: .2rem;
    background: url(../../../assets/images/logo.png) no-repeat center;
  }
  .citydropconten {
    position: absolute;
    margin-top: calc(100% + 5px);
    width: .8rem;
    border: 1px solid #ddd;
    border-radius: .08rem;
    .city-items {
      height: .4rem;
      border: 1px solid #ddd;
      text-align: center;
    }
    .city-items:nth-last-type(1) {
      border-bottom: none;
    }
  }
  .check-city-active {
    color: #25adfb;
  }
}

</style>
