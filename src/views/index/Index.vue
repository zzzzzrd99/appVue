<template>
    <div style="height: 100%;">
        <my-header></my-header>
        <div class="wrapper" ref="wrapper">
            <div class="inner">
                <!--首页轮播图开始-->
                <nav>
                    <a href="##" class="navItem">产品分类</a>
                    <a href="##" class="navItem">案例展示</a>
                    <a href="##" class="navItem">设计团队</a>
                    <a href="##" class="navItem">品牌故事</a>
                </nav>
                <div id="banner">
                    <swiper :options="options">
                        <swiper-slide>
                            <div class="bannerthumb"><img src="../../assets/images/indexBanner1.png" alt=""></div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="bannerthumb"><img src="../../assets/images/indexBanner1.png" alt=""></div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="bannerthumb"><img src="../../assets/images/indexBanner1.png" alt=""></div>
                        </swiper-slide>

                    </swiper>
                    <div class="dots">

                    </div>
                </div>
                <!--首页轮播图结束-->
                <!--首页新品首发开始-->
                <div id="newProduct">
                    <div class="swiper-pagination"></div>
                    <div class="blockTitle">
                        <div class="topLine"></div>
                        <div class="middleLine"></div>
                        <div class="en">NEW PRODUCT</div>
                        <div class="ch">
                            <span class="black">新品</span>
                            <span class="bold">首发</span>
                        </div>
                        <div class="bottomLine"></div>
                    </div>
                    <div class="newProductBox">
                        <swiper :options="options2">
                            <swiper-slide v-for="item in newProduct">
                                <my-goods :item="item"></my-goods>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
                <!--首页新品首发结束-->
                <!--首页热销产品开始-->
                <div id="hotProduct">
                    <div class="blockTitle">
                        <div class="topLine"></div>
                        <div class="middleLine"></div>
                        <div class="en">HOT PRODUCT</div>
                        <div class="ch">
                            <span class="black">热销</span>
                            <span class="bold">产品</span>
                        </div>
                        <div class="bottomLine"></div>
                    </div>
                    <div class="hotProductBox">
                        <a href="##" class="hotProductCon">
                            <img src="../../assets/images/index-hotProduct1.png" alt="">
                            <div class="infoBox">
                                <p class="title">舒适棉麻 布艺沙发</p>
                                <p class="introduce">告别繁琐多余的浮夸 保留实用主义的本质</p>
                                <div class="numBox">
                                    <span class="num">4450</span><span class="RMB">RMB</span>
                                </div>
                                <p class="buyNow">BUY NOW</p>
                                <div class="dots">
                                    <div class="dot one"></div>
                                    <div class="dot two"></div>
                                    <div class="dot three"></div>
                                </div>
                            </div>
                        </a>
                        <div class="hotProductCons">
                            <a href="##" class="contentBox">
                                <div class="content">
                                    <div class="titleInfo">
                                        <p class="title">FENDI CASA TUDOR</p>
                                        <p class="introduce">现代简约客厅沙发</p>
                                    </div>
                                    <div class="imgBox imgBox2"></div>
                                    <div class="price">
                                        <span class="num">520</span><span class="RMB">RMB</span>
                                        <p class="buyNow">BUY NOW</p>
                                    </div>
                                    <div class="dots">
                                        <div class="dot c1"></div>
                                        <div class="dot c2"></div>
                                        <div class="dot c3"></div>
                                    </div>
                                </div>
                            </a>
                            <a href="##" class="contentBox">
                                <div class="content">
                                    <div class="titleInfo">
                                        <p class="title">FENDI CASA TUDOR</p>
                                        <p class="introduce">现代简约客厅沙发</p>
                                    </div>
                                    <div class="imgBox imgBox3"></div>
                                    <div class="price">
                                        <span class="num">520</span><span class="RMB">RMB</span>
                                        <p class="buyNow">BUY NOW</p>
                                    </div>
                                    <div class="dots">
                                        <div class="dot c1"></div>
                                        <div class="dot c2"></div>
                                        <div class="dot c3"></div>
                                    </div>
                                </div>
                            </a>
                            <a href="##" class="contentBox">
                                <div class="content">
                                    <div class="titleInfo">
                                        <p class="title">FENDI CASA TUDOR</p>
                                        <p class="introduce">现代简约客厅沙发</p>
                                    </div>
                                    <div class="imgBox imgBox4"></div>
                                    <div class="price">
                                        <span class="num">520</span><span class="RMB">RMB</span>
                                        <p class="buyNow">BUY NOW</p>
                                    </div>
                                    <div class="dots">
                                        <div class="dot c1"></div>
                                        <div class="dot c2"></div>
                                        <div class="dot c3"></div>
                                    </div>
                                </div>
                            </a>
                            <a href="##" class="contentBox">
                                <div class="content">
                                    <div class="titleInfo">
                                        <p class="title">FENDI CASA TUDOR</p>
                                        <p class="introduce">现代简约客厅沙发</p>
                                    </div>
                                    <div class="imgBox imgBox5"></div>
                                    <div class="price">
                                        <span class="num">520</span><span class="RMB">RMB</span>
                                        <p class="buyNow">BUY NOW</p>
                                    </div>
                                    <div class="dots">
                                        <div class="dot c1"></div>
                                        <div class="dot c2"></div>
                                        <div class="dot c3"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="lookMore">查看更多</div>
                </div>
                <!--首页热销产品结束-->
                <!--首页案例展示开始-->
                <div id="brandStory">
                    <div class="blockTitle">
                        <div class="topLine"></div>
                        <div class="middleLine"></div>
                        <div class="en">BRAND STORY</div>
                        <div class="ch">
                            <span class="black">案例</span>
                            <span class="bold">展示</span>
                        </div>
                        <div class="bottomLine"></div>
                    </div>
                    <div class="brandStoryCons">
                        <div class="brandStoryCon">
                            <img src="../../assets/images/index-brandStory.png" alt="" class="bsBg">
                            <a href="##"><img src="../../assets/images/action.png" alt="" class="action"></a>
                        </div>
                        <div class="brandStoryText">
                            <div class="bsTitle">About the chair designer.</div>
                            <div class="article">透气性与柔和感并存，<br>
                                像三月的威风，也像五月的阳光，像恋人的热吻，<br>
                                也像傍晚归时的路灯。<br>
                                棉麻的柔软触感，让不大的客厅更加具有安全感，陷阱沙发<br>
                                的温柔里，追剧的日子变得幸福异常。
                            </div>
                            <a href="##" class="knowMore">了解更多</a>
                        </div>
                    </div>
                </div>
                <!--首页案例展示结束-->
                <!--首页品牌故事开始-->
                <div id="commodityDetails">
                    <div class="blockTitle">
                        <div class="topLine"></div>
                        <div class="middleLine"></div>
                        <div class="en">COMMODITY DETAILS</div>
                        <div class="ch">
                            <span class="black">品牌</span>
                            <span class="bold">故事</span>
                        </div>
                        <div class="bottomLine"></div>
                    </div>
                    <div class="cdCon">
                        <div class="cdImg">
                            <div class="mask">
                                <div class="textBox">
                                    <div class="en">VICOR</div>
                                    <div class="line"></div>
                                    <div class="ch">因为顾家，所以爱家</div>
                                    <div class="intro">34年沙发制造工艺，保证每一张沙发都拥有出色品质，真材实料，
                                        现代设计，让你的家更迷人温馨。
                                    </div>
                                    <img src="../../assets/images/down.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--首页品牌故事结束-->
            </div>
        </div>
        <my-footer hot="index"></my-footer>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import Footer from "@/components/Footer"
    import Goods from "@/components/Goods"
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import BScroll from 'better-scroll'

    export default {
        name: "Index",
        data: () => ({
            newProduct: [],
            options: {
                autoplay: true,
                pagination: {
                    el: '.dots'
                },
            },
            options2: {
                slidesPerView: 2,
                spaceBetween: 15,
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                }
            }
        }),
        components: {
            "my-header": Header,
            "my-footer": Footer,
            "my-goods": Goods,
            swiper,
            swiperSlide
        },
        methods: {
            fetchData: function () {
                this.$http.get("/api/goods/goods", {params: {page: 1, pageSize: 8}}).then(res => {
                    if (res.data.code === 200) {
                        this.newProduct = res.data.data;
                    } else {
                        console.log("获取失败")
                    }
                }).catch(() => {
                    console.log("获取失败")
                })
            },
        },
        mounted: function () {
            this.fetchData();
            new BScroll(this.$refs.wrapper, {
                click: true
            });
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    #header {
        width: 100%;
        background-color: #fff;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
    }

    .container {
        width: 7.02rem;
        margin: 0 auto;
    }

    .headerBox {
        height: 0.88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .headerExit {
        display: block;
        width: 0.28rem;
        height: 0.3rem;
    }

    .headerExit > i {
        display: block;
        font-size: 0.28rem;
        color: #000;
    }

    .headerLogo {
        width: 0.92rem;
        height: 0.3rem;
    }

    .headerLogo > img {
        display: block;
        width: 100%;
        height: 100%;
    }

    /*首页轮播图开始*/
    nav {
        width: 100%;
        height: 0.8rem;
        padding: 0 0.24rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navItem {
        display: block;
        font-size: 0.24rem;
        letter-spacing: 0.014rem;
        color: #000;
        opacity: 0.7;
    }

    #banner {
        width: 100%;
        height: 3.84rem;
        margin-bottom: 0.78rem;
        position: relative;
    }
    .bannerthumb {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .bannerthumb>img{
        width: 100%;
        height: 100%;
    }

    #banner .dots {
        width: 0.88rem;
        height: 0.08rem;
        position: absolute;
        bottom: 0.15rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        z-index: 999;
    }

    #banner .dots .dot {
        width: 0.08rem;
        height: 0.08rem;
        border-radius: 50%;
        border: solid 0.01rem #f8f8f8;
    }

    #banner .dots .dot.active {
        background: #f8f8f8;
    }

    /*首页轮播图结束*/
    /*首页新品首发开始*/
    #newProduct {
        width: 100%;
        height: 6.6rem;
        margin-bottom: 0.78rem;
        position: relative;
    }
    .swiper-pagination{
        width: 100%;
        height: 0.3rem;
        text-align: right;
        position: absolute;
        right: 0;
        top: 1.2rem;
    }
    .pageNum {
        font-size: 0.2rem;
        color: #000000;
        position: absolute;
        top: 1rem;
        right: 0.36rem;
    }

    .pageNum .active {
        font-size: 0.22rem;
        color: #ffcb3f;
    }

    /*块标题*/
    .blockTitle {
        width: 2.2rem;
        height: 0.92rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 0.58rem;
    }

    .blockTitle .topLine {
        width: 0.5rem;
        height: 0.02rem;
        background-color: #ffcb3f;
        margin-left: 0.35rem;
    }

    .blockTitle .middleLine {
        width: 1.5rem;
        height: 0.02rem;
        margin: 0 auto;
        background-color: #d7d7d7;
    }

    .blockTitle .en {
        font-size: 0.18rem;
        letter-spacing: 0.005rem;
        color: #000;
        text-align: center;
    }

    .blockTitle .ch {
        font-size: 0.32rem;
        letter-spacing: 0.019rem;
        color: #000;
        width: 1.5rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .blockTitle .ch .bold {
        font-weight: bold;
        color: #ffcb3f;
    }

    .blockTitle .bottomLine {
        width: 0.34rem;
        height: 0.02rem;
        background-color: #000;
        margin: 0 auto;
    }

    .newProductBox {
        width: 100%;
        height: 5.1rem;
        padding-left: 0.24rem;
        overflow: hidden;
    }

    .newProductLists {
        width: 26.64rem;
        height: 5.1rem;
        display: flex;
        justify-content: space-between;
    }

    .newProductList {
        width: 3.09rem;
        height: 100%;
        background: #fff;
        float: left;
    }

    .newProductList img {
        width: 100%;
    }

    .newProductText {
        width: 100%;
        height: 1.72rem;
        padding: 0 0.2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
    }

    .topText .blackLine {
        width: 0.27rem;
        height: 0.01rem;
        background-color: #000;
    }

    .topText .en {
        font-size: 0.18rem;
        letter-spacing: 0.005rem;
        color: #000;
    }

    .topText .ch {
        font-size: 0.24rem;
        letter-spacing: 0.014rem;
        color: #000;
    }

    /*.bottomText{*/
    /*height: 0.44rem;*/
    /*position: relative;*/
    /*}*/
    .bottomText .num {
        font-size: 0.26rem;
        color: #000;
        font-weight: bold;
    }

    .bottomText .RMB {
        font-size: 0.18rem;
        color: #000;
    }

    .clickBuy {
        display: block;
        width: 1.52rem;
        height: 0.44rem;
        background: #ffcb3f;
        border-radius: 0.04rem;
        position: absolute;
        right: 0.2rem;
        bottom: 0;
        font-size: 0.22rem;
        letter-spacing: 0.006rem;
        text-align: center;
        line-height: 0.44rem;
        color: #fff;
    }

    .clickBuy .iconfont {
        font-size: 0.22rem;
        color: #fff;
    }

    /*首页新品首发结束*/
    /*首页热销产品开始*/
    #hotProduct {
        width: 100%;
        height: 17.9rem;
        padding: 0 0.24rem;
        margin-bottom: 0.78rem;
    }

    .hotProductBox {
        width: 100%;
        height: 15.7rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 0.38rem;
    }

    .hotProductCon {
        display: block;
        width: 100%;
        height: 6.93rem;
        background: #fff;
    }

    .hotProductCon img {
        display: block;
        height: 2.62rem;
        margin: 1rem 0.37rem 0.6rem;
    }

    .hotProductCon .infoBox {
        width: 100%;
        height: 2.26rem;
        padding: 0 0.6rem;
        position: relative;
    }

    .infoBox > .title {
        font-size: 0.3rem;
        letter-spacing: 0.01rem;
        color: #000;
    }

    .infoBox > .introduce {
        font-size: 0.2rem;
        letter-spacing: 0.006rem;
        color: #000;
        margin-bottom: 0.8rem;
    }

    /*.infoBox>.numBox{*/
    /*height: 0.5rem;*/
    /*}*/
    .infoBox .num {
        font-size: 0.3rem;
        letter-spacing: 0.018rem;
        font-weight: bold;
        color: #000;
        /*float: left;*/
    }

    .infoBox .RMB {
        font-size: 0.18rem;
        letter-spacing: 0.01rem;
        color: #000;
        line-height: 0.5rem;
        /*float: left;*/
    }

    .infoBox > .buyNow {
        font-size: 0.18rem;
        color: #000;
    }

    .infoBox .dots {
        width: 0.2rem;
        height: 1.04rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0.7rem;
        margin: auto 0;
    }

    .infoBox .dots .dot {
        width: 0.16rem;
        height: 0.16rem;
        border-radius: 50%;
    }

    .infoBox .dots .one {
        background: #abe3e6;
    }

    .infoBox .dots .two {
        width: 0.2rem;
        height: 0.2rem;
        background: #cecdca;
    }

    .infoBox .dots .three {
        background: #ffcb3f;
    }

    .hotProductCons {
        width: 100%;
        height: 8.56rem;
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        flex-wrap: wrap;
    }

    .hotProductCons .contentBox {
        display: block;
        width: 3.38rem;
        height: 4.16rem;
        background: #fff;
        padding: 0.22rem 0.36rem;
    }

    .contentBox .content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: relative;
    }

    .content .title {
        font-size: 0.18rem;
        color: #000000;
    }

    .content .introduce {
        font-size: 0.26rem;
        color: #000000;
    }

    .content .imgBox {
        width: 1.62rem;
        height: 1.62rem;
        background-size: 80%;
    }

    .content .imgBox2 {
        background-image: url("../../assets/images/index-hotProduct2.png");
        background-repeat: no-repeat;
        background-position: center;
    }

    .content .imgBox3 {
        background-image: url("../../assets/images/index-hotProduct3.png");
        background-repeat: no-repeat;
        background-position: center;
    }

    .content .imgBox4 {
        background-image: url("../../assets/images/index-hotProduct4.png");
        background-repeat: no-repeat;
        background-position: center;
    }

    .content .imgBox5 {
        background-image: url("../../assets/images/index-hotProduct5.png");
        background-repeat: no-repeat;
        background-position: center;
    }

    .content .num {
        font-size: 0.26rem;
        font-weight: bold;
        letter-spacing: 0.007rem;
        color: #000000;
    }

    .content .RMB {
        font-size: 0.18rem;
        letter-spacing: 0.005rem;
        color: #000000;
    }

    .content .buyNow {
        font-size: 0.18rem;
        letter-spacing: 0.005rem;
        color: #000000;
    }

    .content .dots {
        width: 0.18rem;
        height: 0.78rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        position: absolute;
        right: 0;
    }

    .content .dots .dot {
        width: 0.14rem;
        height: 0.14rem;
        border-radius: 50%;
    }

    .content .dots .c1 {
        background: #efd28e;
    }

    .content .dots .c2 {
        width: 0.18rem;
        height: 0.18rem;
        background: #97d1d7;
    }

    .content .dots .c3 {
        background: #97a0d7;
    }

    .lookMore {
        font-size: 0.18rem;
        color: #a6a6a6;
        text-align: center;
        position: relative;
    }

    .lookMore::before {
        content: "";
        display: block;
        width: 1.13rem;
        height: 0.02rem;
        background: #d9d9d9;
        position: absolute;
        left: 1.62rem;
        top: 0;
        bottom: 0;
        margin: auto 0;
    }

    .lookMore::after {
        content: "";
        display: block;
        width: 1.13rem;
        height: 0.02rem;
        background: #d9d9d9;
        position: absolute;
        right: 1.62rem;
        top: 0;
        bottom: 0;
        margin: auto 0;
    }

    /*首页热销产品结束*/
    /*首页案例展示开始*/
    #brandStory {
        width: 100%;
        height: 9.64rem;
        padding: 0 0.24rem;
        margin-bottom: 0.78rem;
    }

    .brandStoryCons {
        width: 100%;
        height: 8.14rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .brandStoryCon {
        width: 100%;
        height: 4.38rem;
        position: relative;
    }

    .brandStoryCon .bsBg {
        width: 100%;
    }

    .brandStoryCon .action {
        width: 1.28rem;
        height: 1.31rem;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }

    .brandStoryText {
        width: 100%;
        height: 3.36rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 0.2rem;
    }

    .brandStoryText .bsTitle {
        font-size: 0.28rem;
        color: #000;
        font-weight: bold;
        text-align: center;
    }

    .brandStoryText .article {
        font-size: 0.24rem;
        letter-spacing: 0.014rem;
        color: #000000;
        text-align: center;
    }

    .brandStoryText .knowMore {
        display: block;
        margin: 0 auto;
        width: 1.4rem;
        height: 0.6rem;
        border-radius: 0.3rem;
        border: solid 0.01rem #fbca4a;
        text-align: center;
        line-height: 0.6rem;
        font-size: 0.18rem;
        color: #000;
    }

    /*首页案例展示结束*/
    /*首页品牌故事开始*/
    #commodityDetails {
        width: 100%;
        height: 5.83rem;
        padding-bottom: 0.99rem;
    }

    .cdCon {
        width: 100%;
        height: 3.34rem;
    }

    .cdCon .cdImg {
        width: 100%;
        height: 100%;
        background-image: url("../../assets/images/index-commodityDetails.png");
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
    }

    .cdCon .mask {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        padding: 0.6rem 1rem;
    }

    .mask .textBox {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .textBox .en {
        font-size: 0.3rem;
        color: #ffffff;
    }

    .textBox .line {
        width: 0.78rem;
        height: 0.02rem;
        background-color: #fbca4a;
    }

    .textBox .ch {
        font-size: 0.28rem;
        color: #ffffff;
    }

    .textBox .intro {
        font-size: 0.18rem;
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
    }

    .textBox img {
        width: 0.18rem;
    }

    /*首页品牌故事结束*/
    #footer {
        width: 100%;
        border-top: 0.01rem solid #bfbfbf;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #fafafa;
        z-index: 999;
    }

    .footerContainer {
        width: 6.1rem;
        height: 0.98rem;
        margin: 0 auto;
        display: flex;
        align-items: center;

    }

    .footerList {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0.15rem 0;
    }

    .footerList > li {
        width: auto;
        height: 100%;
    }

    .footerList > li > a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 0.71rem;
    }

    .footerList > li > a > img {
        height: 0.4rem;
        width: auto;
    }

    .footerList > li > a > p.active {
        color: #ffcb3f;
        font-weight: bold;
    }

    .footerDesc {
        font-size: 0.2rem;
        height: 0.16rem;
        line-height: 0.16rem;
        letter-spacing: 0.01rem;
        color: #000;
    }
</style>