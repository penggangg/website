
<template>
  <div class="newHouselist" :style="{overflow:shownavigationpops ? 'hidden' : ''}">
    <div class="newHouselist-header">
      <div class="newHouselist-header-left">
        <img src="../../assets/appimages/icon-lback.svg" @click="$root.goback">
        <citydropdown :bgurl="cityxialabg" v-domstyle="{color: '#333', width: '.11rem', height: '.06rem'}" ></citydropdown>
      </div>
      <div class="newHouselist-header-right">
        <navigationpops @closePops="shownavigationpops=false"
        @shownavigationpopsshow="shownavigationpops=true"
        v-model = "pithOne"
        :shownavigationpops="shownavigationpops" :menuSrc="navigationbg"></navigationpops>
      </div>
    </div>

    <div class="newHouselist-search">
       <div class="switch-type" >
           <p :class="[activePclass ==2 ? 'activePclass' : '']" @click="activePclass = 2">出售</p>
           <p :class="[activePclass ==1 ? 'activePclass' : '']" @click="activePclass = 1">出租</p>
        </div>
        <div class="from-conten">
            <p>
                <label>尊称</label>
                <input type="text" v-model="uname" placeholder="我们怎么称呼您">
            </p>
            <p>
                <label>手机号</label>
                <input type="text" v-model.number="tel" placeholder="请输入您的手机号，方便我们联系您">
            </p>
            <div class="textareadiv">
                <div style="font-weight: bold;">需求说明</div>
                <textarea placeholder="进一步描述需求，合屋将为您提供更精准的服务" v-model="desc"></textarea>
            </div>

            <div class="call_telphone">
                <p>咨询热线：400-888-9950</p>
                <p @click="submit">提交申请</p>
            </div>

            <div class="bugliucheng">
                <span></span>
                <span></span>
                <span>卖房全流程</span>
                <span></span>
                <span></span>
            </div>

            <div class="bugliuchenglist">
                <div>
                    <p>1</p>
                    <p>
                        <span>发布房源</span>
                        <span>线上免费发布房源</span>
                    </p>
                </div>
                <div>
                    <p>2</p>
                    <p>
                        <span>核对房源</span>
                        <span>30分钟内客服联系</span>
                    </p>
                </div>
                <div>
                    <p>3</p>
                    <p>
                        <span>在线销售</span>
                        <span>专业线上委托销售</span>
                    </p>
                </div>
                <div>
                    <p>4</p>
                    <p>
                        <span>签约出售</span>
                        <span>签约全程服务</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
     <div class="cut-off"></div>
    <div class="huosefooter">
    <housefooter></housefooter>
    </div>
  </div>
</template>

<script>
import citydropdown from '@/components/public/appPublic/citydropdown'
import navigationpops from '@/components/public/appPublic/navigationPops'
import inputSearch from '@/components/public/appPublic/inputSearch'
import housefooter from '@/components/public/appPublic/footer'
import { depute } from '@/assets/js/api'
export default {
  name: 'newHouseList',
  data () {
    return {
      activePclass: 2, // 选中的出售还是出租
      pithOne: '6',
      shownavigationpops: false, // 控制右侧弹窗的显示隐藏
      cityxialabg: 'url(' + require('../../assets/appimages/llocation.svg') + ')', // 城市的到三角样式颜色
      navigationbg: require('../../assets/appimages/icon-lmenu.svg'), // 右侧的弹窗按钮样式
      styleObjet: { // 搜索组件的一些配置
        positionbottom: '.1rem',
        placeholder: '请输入城区/商圈/胡同',
        bgse: '#fff',
        dorpdownDome: false
      },
      searchinputbg: require('../../assets/appimages/icon-lsearch.svg'), // 搜索框的放大镜的颜色
      tel: '',
      uname: '',
      desc: ''
    }
  },
  created () {
    // 获取网址参数来判断是北京还是上海
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
    submit () {
      let condition = {
        city_id: this.code,
        rent_type: this.activePclass,
        tel: this.tel,
        uname: this.uname,
        desc: this.desc
      }
      let reg = /^1[34578][0-9]{9}$/
      if (!reg.test(this.tel)) {
        this.$appshowMsg('请输入正确得电话号码')
        return
      }
      depute(condition).then(_ => {
        this.$appshowMsg('成功提交')
      })
    }
  },
  components: {
    citydropdown,
    navigationpops,
    inputSearch,
    housefooter
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
.newHouselist {
  height: 100%;
  font-size: .12rem;
  background: #fff;
  .newHouselist-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: .52rem;
    background: #fff;
    padding: 0 .29rem;
    .newHouselist-header-left {
      display: flex;
      img {
        width: .14rem;
        height: .24rem;
        margin-right: .1rem;
      }
    }
  }
  .newHouselist-search {
    position: relative;
    .switch-type {
        display: flex;
        border-top: 1px solid #ddd;
        box-sizing: border-box;
        p {
            height: .4rem;
            line-height: .4rem;
            text-align: center;
            width: 50%;
            background: #fff;
        }
         p.activePclass {
            background: #5D9CF9 !important;
            color:#fff !important;
         }
    }
    .from-conten {
        background: #fff;
        padding: 0 .15rem;
        p {
            background: #fff;
            border-bottom: 1px solid #B7B7B7;
            height: .47rem;
            line-height: .47rem;
        }
        p>label {
            display: inline-block;
            width: .6rem;
        }
        .textareadiv {
            padding-top: .15rem;
            div {
                margin-bottom: .1rem;
            }
            textarea {
                width: 100%;
                height: 1.5rem;
                border-bottom: 1px solid #B7B7B7;
                resize: none;
            }
        }
        .call_telphone {
            padding-top: .1rem;
            p:nth-of-type(1) {
                font-size: .14rem;
                color: #FB6550;
                height: .6rem;
                line-height: .3;
                border-bottom: none;
            }
            p:nth-of-type(2) {
                height: .4rem;
                background:#5D9CF9;
                font-size: .16rem;
                color: #fff;
                text-align: center;
                line-height: .4rem;
                border-radius: .05rem;
            }
        }
    }
  }
  .bugliucheng {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: .3rem;
      span {
          display: inline-block;
      }
      span:nth-of-type(1) {
          height:1px;
          background: #B7B7B7;
          flex: 1;
      }
      span:nth-of-type(2) {
         width: .04rem;
         height: .04rem;
         border-radius: 50%;
         background:#B7B7B7;
      }
      span:nth-of-type(3) {
          font-size: .14rem;
          font-weight: bold;
          padding: 0 .08rem;
      }
       span:nth-of-type(4) {
         width: .04rem;
         height: .04rem;
         border-radius: 50%;
         background:#B7B7B7;
      }
       span:nth-of-type(5) {
          height:1px;
          background: #B7B7B7;
          flex: 1;
      }
  }
  .bugliuchenglist {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: .15rem 0;
      div {
          width: 50%;
          display: flex;
          justify-content: center;
          margin-top: .1rem;
          p{
              width:.99rem;
          }
      }
      div p:nth-of-type(1){
          width: .4rem;
          height: .4rem;
          line-height: .4rem;
          border-radius: 50%;
          background: #5D9CF9;
          opacity: .5;
          color: #fff;
          font-size: .14rem;
          text-align: center;
          margin-right:.1rem;
      }
      div p:nth-of-type(2) {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          flex-wrap: nowrap;
          border-bottom: none;
          height:.4rem;
          span {
              height: .2rem;
              line-height: .2rem;
          }
          span:nth-of-type(1) {
              font-size: .14rem;
              font-weight: bold;
          }
          span:nth-of-type(2) {
              font-size: .1rem;
              color: #888;
          }
      }
  }
  .cut-off {
      height: .1rem;
      background: #F5F5F6;
  }
  .switch-type {
      border-bottom:1px solid #B7B7B7;
  }
}
</style>
