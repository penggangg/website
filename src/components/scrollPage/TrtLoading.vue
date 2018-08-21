<template>
    <div class="trt-loading">
        <span class="trt-loading-spinners" :style="style">
          <i class="trt-loading-spinner"
          v-for='(item,key) in balde'
          :key='key'
          :style="{'background':color}"></i>
        </span>
    </div>
</template>

<script>
export default {
  data () {
    return {
      balde: 12
    }
  },
  props: {
    size: {
      type: Number
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  computed: {
    style () {
      if (!this.size) {
        return
      }
      const value = `${this.size / 100}rem`
      return {
        width: value,
        height: value
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.trt-loading {
    font-size: .24rem;
    text-align: center;
    .trt-loading-spinners {
        position: relative;
        display: block;
        width: 1em;
        height: 1em;
    }
    .trt-loading-spinner {
        position: absolute;
        top: 37%;
        width: 2px;
        height: 25%;
        border-radius: 50%/20%;
        opacity: 0.25;
        animation: spinner-fade 1s linear infinite;
        @for $i from 1 to 14 {
            &:nth-child(#{$i}) {
                animation-delay: #{(($i - 1)/12)}s;
                transform: rotate(30deg * ($i - 6)) translateY(-150%);
            }
        }
    }
    @keyframes spinner-fade {
        0% {
            opacity: 0.85;
        }
        50% {
            opacity: 0.25;
        }
        100% {
            opacity: 0.25;
        }
    }
}
</style>
