
<template>
  <div class="pictureWindows">
   <div class="pictureWindows-header">
       <img src="../../../assets/appimages/back.svg" @click="closeImg">
   </div>
   <div class="pictureWindows-contain">
      <swiper :options="swiperOption" v-if="doormodellist&&doormodellist.length>0">
        <swiper-slide v-for="(item,index) in doormodellist" :key="index">
            <div class="img-conten">
                 <img :src="item" >
            </div>
        </swiper-slide>
      </swiper>
   </div>
   <div class="pictureWindows-bottom">
     <p>
       <span>{{swiperindex}}</span> / <span>{{doormodellist&&doormodellist.length}}</span>
     </p>
   </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'pictureWindows',
  props: {
    doormodellist: {
      type: Array
    }
  },
  data () {
    let _this = this
    return {
      swiperindex: 1,
      swiperOption: {
        observeParents: true,
        on: {
          slideChangeTransitionEnd: function () {
            _this.swiperindex = this.activeIndex + 1 // 切换结束时，告诉我现在是第几个slide
          }
        }
      }
    }
  },
  methods: {
    closeImg () {
      this.$emit('closeImg')
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  watch: {
  },
  created () {
  }
}

</script>

<style lang="scss" scoped>
@import '../../../assets/css/mixin';
.pictureWindows {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background: #000;
  .pictureWindows-header {
    height: .52rem;
    padding: 0 .15rem;
    display: flex;
    align-items: center;
    img {
      width: .13rem;
      height: .22rem;
    }
  }
  .pictureWindows-contain {
    height: 2.1rem;
    .img-conten {
      img {
        width: 100%;
        height: 2.1rem;
      }
    }
  }
  .pictureWindows-bottom {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: .15rem;
    height: .52rem;
    p {
      color: #fff;
    }
    span {
      color: #fff;
    }
  }
}
</style>
