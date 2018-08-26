<template>
    <div class="appmarketdetail" :style="{overflow:shownavigationpops ? 'hidden' : ''}">
        <div class="appmarketdetail_header" :style="{backgroundImage: 'url(' + marketdetail.pic + ')', backgroundSize:'100%'}">
            <div class="apphuosedetail-header-nav">
                <div class="newHouselist-header-left">
                    <img src="../../assets/images/icon-left.svg" @click="$root.goback">
                    <citydropdown :citylocationbg="citylocationbg" v-domstyle="{color: '#fff', width: '.11rem', height: '.06rem'}" ></citydropdown>
                </div>
                <div class="newHouselist-header-right">
                    <navigationpops @closePops="shownavigationpops=false"
                    @shownavigationpopsshow="shownavigationpops=true"
                    v-model = "pithOne"
                    :shownavigationpops="shownavigationpops" ></navigationpops>
                </div>
            </div>
            <p class="marketP1">{{marketdetail.title}}</p>
            <p class="marketP2">{{marketdetail.desc}}</p>
            <p class="marketP3">
                <span>作者:</span>
                <span>{{marketdetail.author}}</span>
            </p>
            <div class="marketdiv1">
                <p>
                    <span>发布时间:</span>
                    <span>{{marketdetail.add_time}}</span>
                </p>
                <p>
                    <span v-for="(item,index) in marketdetail.labels" :key ="index"
                    :style="{background: item.color}"
                    v-if = "index<3"
                    >{{item.text}}</span>
                </p>
            </div>
        </div>
        <div class="messconten">
           {{marketdetail.content}}
        </div>
        <huosefooter></huosefooter>
    </div>
</template>

<script>
import citydropdown from '@/components/public/appPublic/citydropdown'
import navigationpops from '@/components/public/appPublic/navigationPops'
import huosefooter from '@/components/public/appPublic/footer'
export default {
  name: 'appmarketdetail',
  props: {
    marketdetail: Object,
    pithOne: String
  },
  data () {
    return {
      citylocationbg: 'rgba(0, 0, 0, .5)', // 给city切换传背景色
      shownavigationpops: false // 控制右侧弹窗的显示隐藏
    }
  },
  computed: {

  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
  },
  components: {
    citydropdown,
    navigationpops,
    huosefooter
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.appmarketdetail {
    height:100%;
    .appmarketdetail_header {
        height: 2.04rem;
        .apphuosedetail-header-nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: .52rem;
            padding: 0 .15rem;
            .newHouselist-header-left {
                display: flex;
                align-items: center;
                img{
                    width: .14rem;
                    height: .24rem;
                    margin-right: .1rem;
                }
            }
        }
        .marketP1 {
            font-size: .18rem;
            color: #fff;
            text-align: center;
            margin-top: .2rem;
            margin-bottom: .1rem;
            font-weight: bold;
        }
        .marketP2 {
            font-size: .18rem;
            color: #fff;
            text-align: center;
            margin-bottom: .2rem;
            font-weight: bold;
        }
        .marketP3 {
            padding-left: .15rem;
            margin-bottom: .05rem;
            span {
                color: #fff;
                font-size: .1rem;
            }
        }
        .marketdiv1 {
            display: flex;
            justify-content: space-between;
            padding: 0 .15rem;
            font-size: .1rem;
            p:nth-of-type(1) {
                span {
                    font-size: .1rem;
                    color: #fff;
                }
            }
            p:nth-of-type(2) {
                span {
                    color: #5D9CF9;
                    font-size: .1rem;
                    padding: .02rem .03rem;
                    margin-right: .02rem;
                    border-radius: .01rem;
                }
                span:last-child {
                    margin-right: 0
                }
            }
        }
    }
    .messconten {
        min-height: calc(100% - 2.99rem);
        padding: .15rem;
        font-size: .14rem;
        color: #888;
    }
}
</style>
