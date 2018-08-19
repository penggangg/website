/**
  inputsearch
*/
<template>
  <div class="input-search-compent" :style="{bottom:styleObjet.positionbottom}">
    <div class="input-search">
        <div @click="dorpdown=!dorpdown" v-if = "styleObjet.dorpdownDome" class="input-searchdiv1">
            <span :searchid = "searchobj.id">{{searchobj.text}}</span>
            <span :class="[dorpdown ? 'downshanjiao' : 'upshanjiao']"></span>
        </div>
        <div class="input-searchdiv2">
            <input type="text" :placeholder="styleObjet.placeholder" v-model="query">
        </div>
        <div class="input-searchdiv3" :style="{background:styleObjet.bgse}">
            <img :src="searchinputbg" @click="fliterData">
        </div>
    </div>
    <div class="alertposition" v-show="!dorpdown" >
        <p v-for="(item,index) in arrlist" :key="index" @click="swithchSearch(index)">{{item.text}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'inputSearch',
  props: {
    styleObjet: {
      type: Object,
      required: true
    },
    searchinputbg: {
      type: String,
      default: require('../../../assets/appimages/icon-search.svg')
    },
    value: String
  },
  data () {
    return {
      dorpdown: true,
      query: '',
      searchobj: {
        text: '新房',
        id: '0'
      },
      arrlist: [
        {text: '新房', id: '0'},
        {text: '商铺', id: '1'},
        {text: '写字楼', id: '2'}
      ]
    }
  },
  mounted: function () {
    this.$nextTick(() => {
    })
  },
  methods: {
    swithchSearch (index) {
      this.dorpdown = true
      this.searchobj = this.arrlist[index]
    },
    fliterData () {
      this.$emit('fliterData')
    }
  },
  watch: {
    query (newValue) {
      this.$emit('input', newValue)
    },
    value (newValue) {
      this.query = newValue
    }
  }
}

</script>

<style lang="scss" scoped>
.input-search-compent {
    position: absolute;
    left: 0;
    width: 100%;
    font-size: .12rem;
    color:#888;
    .alertposition {
        position: absolute;
        top: .38rem;
        left: 5%;
        z-index: 99;
        width: .7rem;
        background: #fff;
        box-shadow: 1px 1px 10px #888;
        p{
            height: .3rem;
            line-height: .3rem;
            text-align: center;
            border-bottom: 1px solid #ddd;
            &:nth-last-of-type(1) {
                border-bottom: none;
            }
        }
    }
    .alertposition::after {
        content: '';
        border-bottom: .04rem solid #fff;
        border-top: .04rem solid transparent;
        border-left: .04rem solid transparent;
        border-right: .04rem solid transparent;
        position: absolute;
        top: -.08rem;
        left: 50%;
        transform: translateX(-50%);
    }
}
.input-search {
    display: flex;
    overflow: hidden;
    width: 90%;
    margin: 0 auto;
    height: .32rem;
    border-radius: .04rem;
    background: #fff;
    &>.input-searchdiv1 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: .7rem;
        height: .32rem;
        border-right: 1px solid #F5F5F6;
        &>span:nth-of-type(1) {
            margin-right: .05rem;
        }
    }
    &>.input-searchdiv2 {
        flex:1;
        input {
            width:100%;
            text-indent: 10px;
            height: .32rem;
            border: none;
        }
    }
    &>.input-searchdiv3 {
        width: .45rem;
        height: .32rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: .16rem;
            height: .16rem;
        }
    }
}
</style>
