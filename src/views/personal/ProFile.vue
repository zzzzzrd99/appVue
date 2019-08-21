<template>
    <div id="profile">
        <my-header></my-header>
        <!--个人信息内容开始-->
        <div id="section">
            <div id="section-nav">
                <div id="section-nav-box">
                    <img class="nav-img" src="../../assets/images/userbg.png">
                    <div class="user-info-box">
                        <div class="container user-info">
                            <ul>
                                <li>
                                    <img src="../../assets/images/userHead3.png" alt="">
                                    <a href="" class="edit">
                                        <span>修改头像&nbsp;</span>
                                        <!--icon引入  右箭头-->
                                        <i class="iconfont icon-xiangyou"></i>
                                    </a>
                                </li>
                                <li>
                                    <span>昵称</span>
                                    <a href="" class="edit">
                                        <span>我家有只小狗&nbsp;</span>
                                        <!--icon引入  右箭头-->
                                        <i class="iconfont icon-xiangyou"></i>
                                    </a>
                                </li>
                                <li>
                                    <span>性别</span>
                                    <a href="" class="edit">
                                        <span>未设置&nbsp;</span>
                                        <!--icon引入  右箭头-->
                                        <i class="iconfont icon-xiangyou"></i>
                                    </a>
                                </li>
                                <li>
                                    <span>我的手机号</span>
                                    <a href="" class="edit">
                                        <span>135****594&nbsp;</span>
                                        <!--icon引入  右箭头-->
                                        <i class="iconfont icon-xiangyou"></i>
                                    </a>
                                </li>
                                <li>
                                    <span>出生年月</span>
                                    <a href="" class="edit">
                                        <span>未设置&nbsp;</span>
                                        <!--icon引入  右箭头-->
                                        <i class="iconfont icon-xiangyou"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--个人信息内容结束-->

    </div>
</template>

<script>
    import Header from "@/components/Header"
    export default {
        name: "ProFile",
        data: () => ({}),
        components: {
            "my-header": Header,
        }
    }
</script>

<style lang="scss" scoped>
    #profile{
        padding-top: 0.88rem;
    }
    /*背景颜色*/
    body{
        background: #f7f7f7;
        padding-top: 1.66rem;
    }
    /*公共类*/
    .container{
        width: 7.03rem;
    }
    /*内容标题*/
    #title{
        width: 100%;
        height: 0.78rem;
        background: #fff;
        border-top: solid 0.01rem #eeeeee;
        border-bottom: solid 0.01rem #eeeeee;
        text-align:center;
        font-size: 0.28rem;
        line-height: 0.78rem;
        padding-left: 0.24rem;
        position: fixed;
        top: 0.88rem;
    }

    /*标题部分的icon图标*/
    #title>i{
        float: left;
        color: #000;
        position: absolute;
        left: 0.24rem;
    }
    /*个人信息内容开始*/
    #section-nav{
        width: 100%;
        height: 2.24rem;
    }
    #section-nav-box{
        position: relative;
        width: 100%;
        height: 100%;
    }
    #section-nav>#section-nav-box>img{
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    #section-nav .user-info-box {
        width: 100%;
        height: 3.1rem;
        position: absolute;
        top: 0.53rem;
    }
    .user-info{
        height: 10.31rem;
        background: #fff;
        margin: 0 auto;
        box-shadow: 0  0.01rem 0.21rem 0    rgba(118, 118, 118, 0.17);
        border-radius: 0.1rem;
        padding: 0 0.5rem;
    }
    .user-info>ul{
        width: 100%;
        height: 100%;
    }
    .user-info>ul>li{
        width: 100%;
        height: 0.89rem;
        border-bottom: 0.02rem solid #f2f2f2;
        line-height: 0.89rem;
        font-size: 0.26rem;
    }
    .user-info>ul>li>span{
        float: left;
    }
    .user-info>ul>li>a{
        float: right;
        font-size: 0.24rem;
        color: #999;
    }
    .user-info>ul>li>a>i{
        color: rgba(0,0,0,0.7);
        float: right;
    }
    .user-info>ul>li:first-child{
        height: 1.65rem;
        padding-top: 0.39rem;
    }
    .user-info>ul>li:first-child>img{
        width: 0.94rem;
        height: 0.94rem;
        float: left;
    }


    /*个人信息内容结束*/
</style>