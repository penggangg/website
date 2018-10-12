<template>
    <div>
      <div class="bread-crumbs">
        <router-link :to="{ path: '/marketAnalysis', query: { code }}" v-if="$route.name==='marketAnalysisDetail'">市场分析</router-link>
        <router-link :to="{ path: '/dynamicDetail', query: { code }}" v-if="$route.name==='dynamicDetail'">企业动态</router-link>
        ><a href="javascript:void(0);">征文</a>
      </div>
      <div class="artice">
        <div class="title">
          {{marketdetail.title}}
        </div>
        <div class="author">
          <div>
            <span>作者：{{marketdetail.author}}</span>
            <span>发布时间：{{marketdetail.add_time}}</span>
          </div>
          <div class="labels">
            <span v-for="(item,index) in marketdetail.labels" :key="index" :style="{background:item.color}">{{item.text}}</span>
          </div>
        </div>
        <div class="pic">
          <img :src="marketdetail.pic" alt="" srcset="">
        </div>
        <div class="dec">
          {{marketdetail.content}}
        </div>
      </div>
      <footers></footers>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    marketdetail: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.bread-crumbs {
    margin: 0 auto;
    padding: 30px 0;
    width: 1200px;
    a {
      margin-right: 10px;
      font-size: 12px;
      color: #888C8E;
      &:not(:first-child) {
        margin-left: 10px;
      }
    }
}
.artice {
  margin: 0 auto;
  width: 1200px;
  .title {
    padding: 30px 0;
    font-size: 32px;
    font-weight: bold;
    color: #333;
  }
  .author {
    display: flex;
    justify-content: space-between;;
    align-items: center;
    span {
      margin-right: 30px;
      color: #888;
      font-size: 14px;
    }
    .labels {
      span {
        margin: 0 5px;
        padding: 2px 4px;
        font-size: 12px;
        color: #5D9CF9;
        border-radius:4px;
        border:1px solid rgba(93,156,249,1);
      }
    }
  }
  .pic {
    margin: 30px 0 50px 0;
    img {
      width: 1200px;
      height: 675px;
    }
  }
  .dec {
    padding-bottom: 120px;
    color: #888;
    font-size: 16px;
  }
}
</style>
