<template>
<transition name="msgbox-fade">
    <div class="msg-wrapper" v-show="appshowWrap">
        <span class="title">提示</span>
        <span class="msg">{{msg}}</span>
        <span @click="appshowWrap=false" class="btn">关闭</span>
    </div>
</transition>
</template>
<script>

</script>

<style lang="scss" scoped>
.msg-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: rgba(0, 0, 0, .7);
    width: 2rem;
    height:1.8rem;
    z-index: 100002;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .title {
      color: #fff;
    }
    .msg {
      color: #fff;
    }
    .btn {
      color: #fff;
      background-color: #409eff;
      border: 1px solid #409eff;
      cursor: pointer;
      padding: 5px 14px;
    }
}
.msgbox-fade-enter-active {
    -webkit-animation: msgbox-fade-in .3s;
    animation: msgbox-fade-in .3s
}

.msgbox-fade-leave-active {
    -webkit-animation: msgbox-fade-out .3s;
    animation: msgbox-fade-out .3s
}

@keyframes msgbox-fade-in {
    0% {
        transform: translate(-50%,-70%);
        opacity: 0
    }

    100% {
        transform: translate(-50%,-50%);
        opacity: 1
    }
}

@keyframes msgbox-fade-out {
    0% {
       transform: translate(-50%,-50%);
        opacity: 1
    }

    100% {
        transform: translate(-50%,-70%);
        opacity: 0
    }
}
</style>
