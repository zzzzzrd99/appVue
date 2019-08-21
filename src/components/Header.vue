<template>
    <!--头部开始-->
    <div id="header1">
        <div class="container1 headerBox">
            <a href="#" class="headerExit">
                <i class="iconfont icon-guanbi" @click="$router.back()"></i>
            </a>
            <div class="headerLogo">
                <img src="../assets/images/logo.png" alt="">
            </div>
            <a class="headerMore" @click="$router.push({name:'index'})">
                <i class="iconfont icon-gengduo"></i>
            </a>
        </div>
    </div>
    <!--头部结束-->
</template>

<script>
    export default {
        name: "Header",
        data: () => ({})
    }
</script>

<style lang="scss" scoped>
    #header1{
        width:100%;
        background-color:#fff;
        position:fixed;
        left:0;
        top:0;
        z-index: 999;
    }
    .container1{
        width:7.02rem;
        margin:0 auto;
    }
    .headerBox{
        height:0.88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .headerExit{
        display: block;
        width:0.28rem;
        height:0.3rem;
    }
    .headerExit>i{
        display: block;
        font-size:0.28rem;
        color: #000;
    }
    .headerLogo{
        width:0.92rem;
        height:0.3rem;
    }
    .headerLogo>img{
        display: block;
        width:100%;
        height:100%;
    }
    .headerMore{
        display: block;
        width:0.36rem;
        height:0.3rem;
    }
    .headerMore>i{
        display: block;
        font-size:0.36rem;
        color: #000;
    }
</style>