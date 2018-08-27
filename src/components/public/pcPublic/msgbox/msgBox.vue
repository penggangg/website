<template>
<transition name="msgbox-fade">
    <div class="msg-wrapper" v-show="showWrap">
        <span class="title">提示</span>
        <span class="msg">{{msg}}</span>
        <span @click="showWrap=false" class="btn">关闭</span>
    </div>
</transition>
</template>
<script>

</script>

<style lang="scss" scoped>
.msg-wrapper {
    position: fixed;
    top: 30%;
    left: 42%;
    /* transform: translate(-50%,-50%); */
    background: rgba(0, 0, 0, .7);
    width: 240px;
    height: 160px;
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
      padding: 10px;
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

@-webkit-keyframes msgbox-fade-in {
    0% {
        -webkit-transform: translate3d(0,-20px,0);
        transform: translate3d(0,-20px,0);
        opacity: 0
    }

    100% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        opacity: 1
    }
}

@keyframes msgbox-fade-in {
    0% {
        -webkit-transform: translate3d(0,-20px,0);
        transform: translate3d(0,-20px,0);
        opacity: 0
    }

    100% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        opacity: 1
    }
}

@-webkit-keyframes msgbox-fade-out {
    0% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        opacity: 1
    }

    100% {
        -webkit-transform: translate3d(0,-20px,0);
        transform: translate3d(0,-20px,0);
        opacity: 0
    }
}

@keyframes msgbox-fade-out {
    0% {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        opacity: 1
    }

    100% {
        -webkit-transform: translate3d(0,-20px,0);
        transform: translate3d(0,-20px,0);
        opacity: 0
    }
}
</style>
