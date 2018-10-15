<template>
    <div>
      <div class="banner" :style="{backgroundImage:`url(${bannerImg})`}">
        <div class="pic-cot">
          <div class="item" v-for="(item,index) in swiperPicList" :key="index">
            <router-link  :to="{ path:`/dynamicDetail/${item.id}`, query: { code }}" target="_blank">
              <img :src="item.pic"  alt="" srcset="">
              <span>{{item.title}}</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="marketAnalysis-list">
        <h3>推荐</h3>
        <div class="item" v-for="(item,index) in article_list" :key="index">
          <router-link :to="{ path:`/dynamicDetail/${item.id}`, query: { code }}" target="_blank"> <img :src="item.pic" alt=""></router-link>
          <div class="right-cot">
            <span class="title">
              <router-link :to="{ path:`/dynamicDetail/${item.id}`, query: { code }}" target="_blank">{{item.title}}</router-link>
            </span>
            <span class="details">{{item.desc}}</span>
            <span class="author">{{item.author}}</span>
            <div class="tags">
              <span v-for="(item, index) in item.labels" :key="index" >{{item.text}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="page-cot">
        <mo-paging :page-index="currentPage" @changePageSize="changePageSize" :total="count" :page-size="limit"></mo-paging>
      </div>
      <footers></footers>
    </div>
</template>
<script>
import MoPaging from '../public/pcPublic/page'
import { indexbanner } from '@/assets/js/api'
export default {
  data () {
    return {
      limit: 10,
      currentPage: 1,
      bannerImg: ''
    }
  },
  props: {
    article_list: Array,
    swiperPicList: Array,
    count: Number
  },
  methods: {
    changePageSize (page) {
      this.currentPage = page
      this.$emit('changePageSize', page)
    }
  },
  async created () {
    let { result } = await indexbanner({
      city_id: this.code,
      pid: 9
    })
    this.bannerImg = result.length && result[0].pic
  },
  components: {
    MoPaging
  }
}
</script>

<style lang="scss" scoped>
.banner {
  min-width: 1220px;
  height: 700px;
  // background: url('../../assets/images/pic-banner2.png') no-repeat;
  background-repeat: no-repeat;
  background-position: center center;
  background-size:cover;
  overflow: hidden;
  .pic-cot {
    margin: 0 auto;
    margin-top: 512px;
    width: 1200px;
    display: flex;
    .item {
      margin-right: 20px;
      width: 228px;
      height: 128px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      span {
        display: inline-block;
        width: 228px;
        position: absolute;
        bottom: 0;
        color: #fff;
        padding: 4px 10px;
        background: rgb(0,0,0);
        opacity: 0.5;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
.marketAnalysis-list {
  width: 1200px;
  margin:  0 auto;
  h3 {
    margin-top: 50px;
    font-size: 22px;
  }
  .item {
    padding: 50px 0;
    border-bottom: 1px solid #B7B7B7;
    img {
      margin-right: 50px;
      width: 334px;
      height: 188px;
    }
    .right-cot {
      display: inline-flex;
      flex-direction: column;
      width: 810px;
      height: 188px;
      vertical-align: bottom;
      .title {
        font-size: 18px;
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        a {
          font-weight: bold;
        }
      }
      .details {
        margin: 20px 0;
        height: 64px;
        color: #888;
      }
      .author {
        margin-bottom: 17px;
        color: #888;
      }
      .tags {
        span {
          padding: 2px 10px;
          margin-right: 7px;
          color: #5D9CF9;
          border: 1px solid #5D9CF9;
          border-radius: 4px;
        }
      }
    }
  }

}
.page-cot {
  margin: 0 auto;
  width: 1200px;
  text-align: right;
}
</style>
