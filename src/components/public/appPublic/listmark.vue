<template>
  <div class="mark-list">
      <p class="mark-list-nav">
          推荐
      </p>
      <div style="padding:0 .15rem;">
        <div class="list-items" v-for="(item,index) in article_list" :key="index">
            <div>
                <img :src="item.pic" alt="" srcset="">
            </div>
            <div>
                <p class="fontsizeoverflow">{{item.title}}</p>
                <p>{{item.desc}}</p>
                <p><span>作者:</span> <span>{{item.author}}</span></p>
                <p style="display: flex" class="fontsizeoverflow">
                    <span class="icoen_item" v-for="(ite,index) in item.labels" :key="index" :style="{background: ite.color}"> {{ite.text}}</span>
                </p>
            </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'marklist',
  props: {
    article_list: Array
  },
  data () {
    return {
      arrhuoselist: [{id: 1}, {id: 2}, {id: 1}, {id: 2}, {id: 1}, {id: 2}]
    }
  },
  mounted: function () {
    this.$nextTick(function () {
    })
  },
  methods: {
  },
  components: {
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.mark-list {
    .mark-list-nav {
        height: .47rem;
        border-bottom: 1px solid #B7B7B7;
        padding-left: .15rem;
        line-height: .47rem;
        font-size: .14rem;
        font-weight: bold;
        color:#333;
    }
    .list-items:nth-of-type(1) {
        border-top: none;
    }
    .list-items {
        border-top: 1px solid #B7B7B7;
        padding: .15rem 0;
        display: flex;
        div:nth-of-type(1) {
            width: .96rem;
            height: .96rem;
            min-width: .96rem;
            margin-right: .15rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        div:nth-of-type(2) {
            width: calc(100% - 1.11rem);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p:nth-of-type(1){
                font-size: .15rem;
                color: #333;
                height: .2rem;
                line-height: .2rem;
            }
            p:nth-of-type(2) {
                font-size: .12rem;
                width: 125%;
                color: #888;
                overflow:hidden;
                text-overflow: ellipsis;
                display:-webkit-box;
                -webkit-line-clamp:2;
                -webkit-box-orient:vertical;
                transform: translateX(-10%) scale(.8);
            }
            p:nth-of-type(3){
                font-size: .12rem;
                width: 125%;
                transform: translateX(-10%) scale(.8);
                span {
                    font-size: .09rem;
                    color: #888;
                }
                span:nth-of-type(1){
                    margin-right: .05rem;
                }
            }
             p:nth-of-type(4) {
                padding: .02rem 0;
                text-align: center;
                color: #5D9CF9;
                font-size: .12rem;
            }
        }
    }
    .icoen_item{
        padding: 2px;
        margin-right: 2px;
    }
    .icoen_item:last-child {
        margin-right: 0
    }
}
</style>
