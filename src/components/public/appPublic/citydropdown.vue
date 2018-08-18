
<template>
  <div class="citydropdown">
    <p @click="showSwitchcity = !showSwitchcity" :style="{background: citylocationbg}">
      <span class="downcity">{{code==="3"?"上海":"北京"}}</span>
      <span class="downIcon" :style="{backgroundImage: bgurl}"></span>
    </p>
     <transition name="fade">
      <div class="citydropconten" v-show="showSwitchcity">
        <p class="city-items" v-for="(item,index) in $constDatas.cityLocation" :key="index" :class="{checkCityActive: item.code === code}" @click="switchcity(item, index)">{{item.text}}</p>
      </div>
    </transition>
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
      showSwitchcity: false
    }
  },
  methods: {
    switchcity (item, index) {
      debugger
      this.showSwitchcity = false
      this.code = item.code
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
    overflow: hidden;
    position: absolute;
    top: .3rem;
    z-index: 999;
    margin-top: 5px;
    width: .8rem;
    height: .8rem;
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
  .fade-enter-active, .fade-leave{
    transition: all .3s ease;
    height: .8rem;
  }
  .fade-enter, .fade-leave-active{
    transition: all .3s ease;
    height: 0rem;
  }
}
</style>
