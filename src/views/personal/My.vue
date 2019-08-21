<template>
    <div>
        <my-header></my-header>
        <!--用户信息开始-->
        <div id="section">
            <div id="section-nav">
                <div id="section-nav-box">
                    <img class="nav-img" src="../../assets/images/userbg.png">
                    <div class="user-info-box">
                        <div class="container user-info">
                            <div class="user-head">
                                <p class="user-name-box">
                                    <span class="user-name">我家有只小狗</span>
                                    <!--引入用户名信息旁边的vip icon图标  css第57行添加icon大小并去掉背景颜色-->
                                    <i class="iconfont icon-huizhang"></i>
                                    <br>
                                    <!--点击它可以修改个人资料-->
                                    <a href="#"><span class="user-edit">编辑个人资料</span></a>
                                </p>
                                <div class="user-header"><img src="../../assets/images/userHead3.png" alt="">
                                </div>
                            </div>
                            <!--用户的主要功能列表-->
                            <div class="user-lists">
                                <ul>
                                    <li>
                                        <!--点击跳转到待付款-->
                                        <router-link to="/orderList?state=0">
                                            <div class="list-img"><img src="../../assets/images/userMoneyBag.png" alt=""></div>
                                            <span>待付款</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <!--点击跳转到待发货-->
                                        <router-link to="/orderList?state=1">
                                            <div class="list-img"><img src="../../assets/images/userReadyGoods.png" alt=""></div>
                                            <span>待发货</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <!--点击跳转到待收货-->
                                        <router-link to="/orderList?state=2">
                                            <div class="list-img"><img src="../../assets/images/userReadyReGoods.png" alt=""></div>
                                            <span>待收货</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <!--点击跳转到待评价-->
                                        <router-link to="/orderList?state=3">
                                            <div class="list-img"><img src="../../assets/images/userMessage.png" alt=""></div>
                                            <span>待评价</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <!--点击跳转到退款-->
                                        <router-link to="/orderList?state=4">
                                            <div class="list-img"><img src="../../assets/images/userBackPay.png" alt=""></div>
                                            <span>退&nbsp;/&nbsp;款</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--用户信息结束-->
        <!--用户功能列表开始-->
        <div id="user-container-box">
            <div class="container user-container">
                <ul>
                    <li>
                        <!--链接到我的订单-->
                        <router-link to="/orderList">
                            <div class="user-function-lists"><img src="../../assets/images/userOrder.png" alt=""></div>
                            <span>我的订单</span>
                        </router-link>
                    </li>
                    <li>
                        <!--链接到我的收藏-->
                        <router-link to="/myCollect">
                            <div class="user-function-lists"><img src="../../assets/images/userCollection.png" alt=""></div>
                            <span>我的收藏</span>
                        </router-link>
                    </li>
                    <li>
                        <!--链接到优惠券-->
                        <a href="##">
                            <div class="user-function-lists"><img src="../../assets/images/userCoupon.png" alt=""></div>
                            <span>优惠券</span>
                        </a>
                    </li>
                    <li>
                        <!--链接到浏览记录-->
                        <a href="##">
                            <div class="user-function-lists"><img src="../../assets/images/userLookLog.png" alt=""></div>
                            <span>浏览记录</span>
                        </a>
                    </li>
                    <li>
                        <!--链接到收货地址-->
                        <a href="##">
                            <div class="user-function-lists">
                                <img src="../../assets/images/userPos.png" alt="">
                            </div>
                            <span>收货地址</span>
                        </a>
                    </li>
                    <li>
                        <!--链接到客服-->
                        <a href="##">
                            <div class="user-function-lists"><img src="../../assets/images/userCutomerService.png" alt=""></div>
                            <span>客服</span>
                        </a>
                    </li>
                    <li>
                        <!--链接到设置-->
                        <a href="#">
                            <div class="user-function-lists"><img src="../../assets/images/userSetting.png" alt=""></div>
                            <span>设置</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!--用户功能列表结束-->
        <!--用户附加功能开始-->
        <div id="user-extra-function">
            <div class="container user-extra-function-lists">
                <div>
                    <img src="../../assets/images/userConnect.png" alt="">
                    <span>&nbsp;关联账号 </span>
                    <a href="#">
                        <!--插入一个箭头朝着右方的icon图标，点击可以进入关联账号的页面，在css的末尾去掉icon背景颜色并添加icon大小-->
                        <i class="iconfont icon-xiangyou"> </i>
                    </a>


                </div>
                <div>
                    <img src="../../assets/images/userAbout.png" alt="">
                    <span>&nbsp;关于我们</span>
                    <a href="#">
                        <!--插入一个箭头朝着右方的icon图标，点击可以进入关于我们的页面，同上-->
                        <i class="iconfont icon-xiangyou"> </i>
                    </a>
                </div>
            </div>
        </div>
        <!--用户附加功能结束-->
        <my-footer hot="My"></my-footer>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import Footer from "@/components/Footer"
    export default {
        name: "My",
        data: () => ({}),
        components: {
            "my-header": Header,
            "my-footer": Footer,
        }
    }
</script>

<style lang="scss" scoped>
    /*背景颜色*/
    body{
        background: #f7f7f7;
        padding-top: 0.88rem;
    }

    /*内容公共宽度*/
    .container{
        width: 7.02rem;
    }

    /*个人信息开始*/
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
        height: 3.1rem;
        background: #fff;
        margin: 0 auto;
        box-shadow: 0  0.01rem 0.21rem 0    rgba(118, 118, 118, 0.17);
        border-radius: 0.1rem;
        padding:0.4rem 0.5rem;
    }
    .user-head>p.user-name-box{
        width: 4rem;
        float: left;
        height: 100%;
        line-height:0.2rem;
        letter-spacing: 0.02rem;
        margin-top: 0.2rem;
    }
    .user-name{
        float: left;
        line-height: 0.2rem;
        font-size: 0.26rem;
    }
    .user-name-box>i{
        display: block;
        width: 0.24rem;
        height: 0.26rem;
        color:#ffcb3f;
        float: left;
        margin-left: 0.09rem;
        text-align: center;
        line-height: 0.26rem;
    }
    .user-head{
        width: 100%;
        height: 0.92rem;
        margin-bottom: 0.66rem;
    }
    .user-edit{
        display: block;
        margin-top: 0.09rem;
        font-size: 0.18rem;
        line-height: 0.2rem;
        letter-spacing: 0.01rem;
        color: rgba(0,0,0,0.5);
    }
    .user-header{
        width: 0.94rem;
        height: auto;
        float: right;
        border-radius:50%;
        box-shadow:0.02rem 0.02rem 0.2rem rgba(0,0,0,0.17);
    }
    .user-header>img{
        width: 100%;
        height: auto;
        float: left;
    }
    .user-lists{
        width: 100%;
        height: 0.7rem;
    }
    .user-lists>ul{
        width: 100%;
        height: 0.7rem;
        display: flex;
        justify-content: space-between;
    }
    .user-lists>ul>li>a{
        display: block;
        height: 0.7rem;
    }
    .user-lists>ul>li>a>div.list-img{
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 0.45rem;
    }
    .user-lists>ul>li>a>div.list-img>img{
        display: block;
        margin: 0 auto;
    }
    .user-lists>ul>li>a>span{
        display: block;
        color: #000;
        font-size: 0.24rem;
    }
    .user-lists>ul>li:nth-child(1) img{
        width: 0.38rem;
    }
    .user-lists>ul>li:nth-child(2) img{
        width: 0.33rem;
    }
    .user-lists>ul>li:nth-child(3) img{
        width: 0.37rem;
    }
    .user-lists>ul>li:nth-child(4) img{
        width: 0.35rem;
    }
    .user-lists>ul>li:nth-child(5) img{
        width: 0.35rem;
    }

    /*个人信息结束*/


    /*用户功能列表开始*/

    #user-container-box{
        width: 100%;
        height: 4.24rem;
        margin-top: 1.64rem;
    }
    .user-container{
        height: 4.24rem;
        background: #fff;
        border-radius: 0.1rem;
        margin: 0 auto;
        box-shadow: 0 0.01rem 0.21rem 0  rgba(118, 118, 118, 0.17);
        padding: 0.4rem 0.5rem;
    }
    .user-container>ul{
        width: 100%;
        height: 100%;
    }
    .user-container>ul>li{
        width: 1.2rem;
        height: 1.24rem;
        float: left;
        margin-left: 1.11rem;
    }
    .user-container>ul>li:nth-child(1),.user-container>ul>li:nth-child(4),.user-container>ul>li:nth-child(7){
        margin-left: 0;
    }
    .user-container>ul>li>a{
        display: block;
        width: 100%;
        height: 0.74rem;
    }
    .user-container>ul>li>a>div.user-function-lists{
        width: 100%;
        height: 0.5rem;
    }
    .user-container>ul>li>a>div.user-function-lists>img{
        height: auto;
        display: block;
        margin: 0 auto;
    }
    .user-container>ul>li>a>span{
        display: block;
        font-size: 0.24rem;
        line-height:0.2rem;
        letter-spacing: 0.01rem;
        color: #000;
        text-align: center;
    }
    .user-container>ul>li:nth-child(1)>a>div.user-function-lists>img{
        width: 0.28rem;
    }
    .user-container>ul>li:nth-child(2)>a>div.user-function-lists>img,.user-container>ul>li:nth-child(3)>a>div.user-function-lists>img,.user-container>ul>li:nth-child(6)>a>div.user-function-lists>img{
        width: 0.35rem;
    }
    .user-container>ul>li:nth-child(4)>a>div.user-function-lists>img{
        width: 0.32rem;
    }
    .user-container>ul>li:nth-child(5)>a>div.user-function-lists>img{
        width: 0.27rem;
    }
    .user-container>ul>li:nth-child(7)>a>div.user-function-lists>img{
        width: 0.3rem;
    }
    .user-container>ul>li:nth-child(3)>a>div.user-function-lists{
        padding-top: 0.04rem;
    }
    /*用户功能列表结束*/


    /*用户附加功能开始*/
    #user-extra-function{
        width: 100%;
        height: 2.42rem;
        margin-top: 0.27rem;
        margin-bottom: 1.2rem;
    }
    .user-extra-function-lists{
        height: 2.42rem;
        background: #fff;
        margin: 0 auto;
        box-shadow: 0 0.01rem 0.21rem 0   rgba(118, 118, 118, 0.17);
        border-radius: 0.1rem;
        padding: 0 0.5rem;
    }
    .user-extra-function-lists>div{
        width: 100%;
        border-bottom: 0.02rem solid #f2f2f2;
        padding-top: 0.4rem;
        font-size: 0.24rem;
    }
    .user-extra-function-lists>div>img{
        width: 0.33rem;
        float: left;
    }
    .user-extra-function-lists>div:first-child{
        height: 0.88rem;
        padding-top: 0.4rem;
    }
    .user-extra-function-lists>div:last-child{
        height: 0.93rem;
        padding-top: 0.45rem;
        padding-left: 0.08rem;
    }
    .user-extra-function-lists>div:last-child>img{
        width: 0.22rem;
    }
    .user-extra-function-lists>div>a>i{
        display: block;
        float: right;
        width: 0.2rem;
        height: 0.24rem;
        color:rgba(0,0,0,0.7) ;
        text-align: right;
        line-height: 0.24rem;
    }
    /*用户附加功能结束*/
</style>