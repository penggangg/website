
<template>
  <div class="citydropdown">
    <p @click="showSwitchcity = !showSwitchcity">
      <span class="downcity">{{cityArrList[checkCity].cityaddress}}</span>
      <span class="downIcon" :style="{backgroundImage: bgurl}"></span>
    </p>
    <div class="citydropconten" v-show="showSwitchcity">
      <p class="city-items" v-for="(item,index) in cityArrList" :key="index" :class="{checkCityActive: index === checkCity}" @click="switchcity(item, index)">{{item.cityaddress}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'citydrop',
  props: {
    // 选中
    checkCity: {
      type: Number,
      default: 0
    },
    bgurl: {
      type: String,
      default: 'url(' + require('../../../assets/appimages/xiala.svg') + ')'
    }
  },
  data () {
    return {
      cityArrList: [
        {cityaddress: '北京', id: '0'},
        {cityaddress: '上海', id: '1'}
      ],
      showSwitchcity: false
    }
  },
  methods: {
    switchcity (item, index) {
      this.showSwitchcity = false
      this.$emit('switchcity', {item: item, index: index})
    }
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
  &>p{
    display: flex;
    padding: .06rem .1rem;
    border-radius: .15rem;
    background: rgba(0, 0, 0, .5);
    align-items: center;
  }
  span {
    display: inline-block;
  }
  .downcity {
    font-size: .12rem;
    color: #fff;
  }
  .downIcon {
    margin-left: .05rem;
    width: .1rem;
    height: .06rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
  .citydropconten {
    position: absolute;
    top: .3rem;
    z-index: 999;
    margin-top: 5px;
    width: .8rem;
    background: #fff;
    border-radius: .08rem;
    .city-items {
      height: .4rem;
      font-size: .12rem;
      border-bottom: 1px solid #ddd;
      line-height: .4rem;
      text-align: center;
    }
    .city-items:nth-last-of-type(1) {
      border-bottom: none;
    }
  }
  .checkCityActive {
    color: #25adfb;
  }
}
</style>
