<template>
    <div>
        <my-header></my-header>
        <!--内容标题-->
        <div id="title">
            <!--引入标题部分的icon图标  箭头朝左  颜色已加，直接在css第33行去掉背景色并添加字体大小即可-->
            <i class="iconfont icon-xiangzuo"></i>
            浏览记录
        </div>
        <div class="wrapper" ref="wrapper">
            <div class="inner">
                <!--小标题-->
                <div class="container small-title today">
                    今日
                </div>
                <!--内容部分开始-->
                <div class="section">
                    <ul class="container">
                        <li>
                            <!--点击整个商品详情的框进入商品详情页-->
                            <div class="shop-container">
                                <div class="goods">
                                    <img src="../../assets/images/browse1.png" alt="">
                                </div>
                                <div class="goods-item">
                                    <p>BOSC XISTERA<span class="goods-name">现代客厅沙发</span></p>
                                    <h3 class="goods-type">绿色/单人座</h3>
                                    <!--高度有点问题 css96行-->
                                    <h3 class="date">2019-03-20</h3>
                                </div>
                                <div class="goods-price">
                                    <p class="goods-num">￥520*2</p>
                                    <p class="price-box"><span class="price">1040</span>RMB</p>
                                </div>
                                <span class="shop-extra-function">
                    <a href="#" class="find">找相似</a>
                    <a href="#" class="buy">加入购物车</a>
                </span>
                            </div>
                        </li>
                        <li>
                            <!--点击整个商品详情的框进入商品详情页-->
                            <div class="shop-container">
                                <div class="goods">
                                    <img src="../../assets/images/browse2.png" alt="">
                                </div>
                                <div class="goods-item">
                                    <p>BOSC XISTERA<span class="goods-name">现代客厅沙发</span></p>
                                    <h3 class="goods-type">绿色/单人座</h3>
                                    <!--高度有点问题 css96行-->
                                    <h3 class="date">2019-03-20</h3>
                                </div>
                                <div class="goods-price">
                                    <p class="goods-num">￥520*1</p>
                                    <p class="price-box"><span class="price">520</span>RMB</p>
                                </div>
                                <span class="shop-extra-function">
                    <a href="#" class="find">找相似</a>
                    <a href="#" class="buy">加入购物车</a>
                </span>
                            </div>
                        </li>
                        <li>
                            <!--点击整个商品详情的框进入商品详情页-->
                            <div class="shop-container">
                                <div class="goods">
                                    <img src="../../assets/images/browse3.png" alt="">
                                </div>
                                <div class="goods-item">
                                    <p>BOSC XISTERA<span class="goods-name">现代客厅沙发</span></p>
                                    <h3 class="goods-type">绿色/单人座</h3>
                                    <!--高度有点问题 css96行-->
                                    <h3 class="date">2019-03-20</h3>
                                </div>
                                <div class="goods-price">
                                    <p class="goods-num">￥520*1</p>
                                    <p class="price-box"><span class="price">520</span>RMB</p>
                                </div>
                                <span class="shop-extra-function">
                    <a href="#" class="find">找相似</a>
                    <a href="#" class="buy">加入购物车</a>
                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--内容部分结束-->
                <!--小标题-->
                <div class="container small-title">
                    3月11日
                </div>
                <!--内容部分开始-->
                <div class="section">
                    <ul class="container">
                        <li>
                            <!--点击整个商品详情的框进入商品详情页-->
                            <div class="shop-container">
                                <div class="goods">
                                    <img src="../../assets/images/browse1.png" alt="">
                                </div>
                                <div class="goods-item">
                                    <p>BOSC XISTERA<span class="goods-name">现代客厅沙发</span></p>
                                    <h3 class="goods-type">绿色/单人座</h3>
                                    <!--高度有点问题 css96行-->
                                    <h3 class="date">2019-03-20</h3>
                                </div>
                                <div class="goods-price">
                                    <p class="goods-num">￥520*2</p>
                                    <p class="price-box"><span class="price">1040</span>RMB</p>
                                </div>
                                <span class="shop-extra-function">
                    <a href="#" class="find">找相似</a>
                    <a href="#" class="buy">加入购物车</a>
                </span>
                            </div>
                        </li>
                        <li>
                            <!--点击整个商品详情的框进入商品详情页-->
                            <div class="shop-container">
                                <div class="goods">
                                    <img src="../../assets/images/browse2.png" alt="">
                                </div>
                                <div class="goods-item">
                                    <p>BOSC XISTERA<span class="goods-name">现代客厅沙发</span></p>
                                    <h3 class="goods-type">绿色/单人座</h3>
                                    <!--高度有点问题 css96行-->
                                    <h3 class="date">2019-03-20</h3>
                                </div>
                                <div class="goods-price">
                                    <p class="goods-num">￥520*1</p>
                                    <p class="price-box"><span class="price">520</span>RMB</p>
                                </div>
                                <span class="shop-extra-function">
                    <a href="#" class="find">找相似</a>
                    <a href="#" class="buy">加入购物车</a>
                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--内容部分结束-->
            </div>
        </div>
        <my-footer hot="My"></my-footer>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import Footer from "@/components/Footer"
    import BScroll from 'better-scroll'

    export default {
        name: "Parse",
        data: () => ({}),
        components: {
            "my-header": Header,
            "my-footer": Footer,
        },
        mounted() {
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.wrapper, {})
            })
        }
    }
</script>

<style lang="scss" scoped>

    .wrapper{
        width: 100%;
        height: 11.5rem;
        overflow: hidden;
        position: relative;
        margin-top: 0.9rem;
    }
    .inner{
        width: 100%;
        height: auto;
        padding-bottom: 1.2rem;
    }
    
    body {
        background: #f6f6f6;
        padding-top: 1.66rem;
    }

    /*内容标题*/
    #title {
        width: 100%;
        height: 0.78rem;
        background: #fff;
        border-top: solid 0.01rem #eeeeee;
        border-bottom: solid 0.01rem #eeeeee;
        text-align: center;
        font-size: 0.28rem;
        line-height: 0.78rem;
        padding: 0 0.24rem;
        position: fixed;
        top: 0.88rem;
    }

    #title > i {
        float: left;
        color: #000;
        position: absolute;
        left: 0.24rem;
    }

    /*小标题*/
    .small-title {
        height: 0.26rem;
        margin: 0.31rem 0.24rem 0;
        border-left: #ffcf52 0.04rem solid;
        padding-left: 0.09rem;
        font-size: 0.26rem;
        line-height: 0.26rem;
        color: #666;
    }

    .today {
        margin-top: 1rem;
    }

    /*内容部分开始*/
    .section {
        width: 100%;
        height: auto;
    }

    .section > ul {
        height: auto;
        margin: 0 auto;
    }

    .section > ul > li {
        width: 100%;
        height: 3.06rem;
        padding-top: 0.3rem;
    }

    .section > ul > li > a {
        color: #000;
    }

    .shop-container {
        display: block;
        width: 100%;
        height: 100%;
        background: #fff;
        box-shadow: 0 0.01rem 0.21rem 0 rgba(0, 0, 0, 0.09);
        border-radius: 0.1rem;
        padding: 0.52rem 0.18rem 0.23rem 0.18rem;
    }

    .goods > img {
        width: 1.86rem;
        height: 1.31rem;
        float: left;
    }

    .goods-item {
        width: auto;
        height: auto;
        float: left;
        padding-top: 0.14rem;
        margin-left: 0.1rem;
        color: rgba(0, 0, 0, 0.6);
    }

    .goods-item > p {
        font-family: Arial;
        font-size: 0.16rem;
        line-height: 0.18rem;
    }

    .goods-item > p > span {
        font-family: 微软雅黑;
        font-size: 0.22rem;
        color: #000;
    }

    .goods-item > h3 {
        font-size: 0.16rem;
        margin-top: 0.09rem;
        font-weight: normal;
    }

    .goods-item > h3.date {
        margin-top: 0.37rem;
        font-size: 0.16rem;
    }

    .goods-price {
        width: 1.35rem;
        height: auto;
        float: right;
        padding-top: 0.07rem;
        text-align: right;
    }

    .goods-num {
        width: 100%;
        font-size: 0.24rem;
    }

    .price-box {
        width: 100%;
        font-size: 0.18rem;
        margin-top: 0.79rem;
        letter-spacing: 0.03rem;
    }

    .price-box > span {
        font-size: 0.26rem;
        font-weight: bold;
    }

    .shop-extra-function {
        width: 100%;
        height: 0.44rem;
        float: left;
        margin-top: 0.11rem;
    }

    .shop-extra-function > a.find {
        display: block;
        color: #999;
        font-size: 0.24rem;
        line-height: 0.44rem;
        margin-left: 4.1rem;
        float: left;
    }

    .shop-extra-function > a.buy {
        display: block;
        float: right;
        width: 1.59rem;
        height: 0.44rem;
        border-radius: 0.04rem;
        border: solid 0.01rem #ffcb3f;
        font-size: 0.24rem;
        line-height: 0.44rem;
        color: #ffcb3f;
        text-align: center;
    }

</style>