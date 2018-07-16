
<template>
  <div class="citydropdown">
    <p @click="showSwitchcity = !showSwitchcity" :style="{background: citylocationbg}">
      <span class="downcity">{{code==="310000"?"上海":"北京"}}</span>
      <span class="downIcon" :style="{backgroundImage: bgurl}"></span>
    </p>
    <div class="citydropconten" v-show="showSwitchcity">
      <p class="city-items" v-for="(item,index) in cityArrList" :key="index" :class="{checkCityActive: item.id === code}" @click="switchcity(item, index)">{{item.cityaddress}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'citydrop',
  props: {
    bgurl: {
      type: String,
      default: 'url(' + require('../../../assets/appimages/xiala.svg') + ')'
    },
    citylocationbg: {
      type: String
    }
  },
  data () {
    return {
      cityArrList: [
        {cityaddress: '北京', id: '110000'},
        {cityaddress: '上海', id: '310000'}
      ],
      showSwitchcity: false
    }
  },
  methods: {
    switchcity (item, index) {
      debugger
      this.showSwitchcity = false
      this.code = item.id
      this.$router.push({name: 'Index', query: { code: this.code }})
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
    box-shadow: 2px 2px 2px 1px #ddd;
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
