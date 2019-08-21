<template>
    <div>
        <my-header></my-header>
        <div id="search">
            <div class="searchBox">
                <div class="searchBoxInput">
                    <div class="searchBoxInputIcon">
                        <img src="../../assets/images/search.png" alt="">
                    </div>
                    <input type="text" id="searchInput" placeholder="搜索店内精品">
                </div>
                <router-link to="/search" class="price">搜索</router-link>
            </div>
        </div>
        <!--搜索部分结束-->
        <div id="contentBox">
            <!--侧边导航栏开始-->
            <nav id="nav">
                <ul class="navList">
                    <li :class="['allB',{active:activeCategory===0}]" @click="changeCategory(0)">全部宝贝</li>
                    <li v-for="item in this.categorys" :key="item.id" :class="[{active:activeCategory===item.id}]"
                        @click="changeCategory(item.id)">{{item.category}}
                    </li>
                </ul>
            </nav>
            <!--侧边导航栏开始-->
            <!--轮播图开始-->
            <div id="banner">
                <div class="backImg">
                    <img src="../../assets/images/classifyBanner.png" alt="" v-if="categoryImg===''">
                    <img :src="categoryImg" alt="">
                </div>
            </div>
            <!--轮播图结束-->
            <!--新品到店开始-->
            <div id="newShop">
                <div class="newShopTop">
                    <div class="newShopLine"></div>
                    <h3 class="title" v-if="activeCategory===0">新品到店</h3>
                    <h3 class="title" v-else>{{categoryName}}</h3>
                    <div class="newShopLine"></div>
                </div>
                <div ref="wrapper" class="scrollBox">
                    <ul class="newShopList">
                        <li v-for="item in goods" :key="item.id">
                            <router-link :to="{path:'/content',query:{id:item.id}}" class="newShopItemTop newShopImg1">
                                <img :src="item.thumb" alt="">
                            </router-link>
                            <p>{{item.name_ch}}</p>
                        </li>
                        <div class="more" v-if="showMore">上拉加载更多</div>
                        <div class="more" v-else>没了</div>
                    </ul>
                </div>

            </div>
            <!--新品到店结束-->
        </div>
        <!--底部开始-->
        <my-footer hot="category"></my-footer>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import Footer from "@/components/Footer"
    import BScroll from 'better-scroll'

    export default {
        name: "Category",
        data: () => ({
            // 响应式的数据
            categorys: [],
            activeCategory: 0,
            page: 1,
            pageSize: 0,
            goods: [],
            showMore: true
        }),
        computed: {
            categoryImg: function () {
                if (this.activeCategory === 0) {
                    return "";
                }
                return this.categorys.find(v => v.id === this.activeCategory).thumb;
            },
            categoryName: function () {
                if (this.activeCategory === 0) {
                    return "";
                }
                return this.categorys.find(v => v.id === this.activeCategory).category;
            },
        },
        components: {
            "my-header": Header,
            "my-footer": Footer,
        },
        methods: {
            fetchCategoryData: function () {
                this.$http.get("/api/type/type").then(
                    (res) => {
                        if (res.data.code === 200) {
                            this.categorys = res.data.data;
                        }
                    }
                ).catch(
                    () => {
                        console.log("获取失败")
                    }
                )
            },
            changeCategory: function (id) {
                this.activeCategory = id;
                this.fetchGoodsData();
                this.page = 1;
                this.goods = [];
                this.showMore = true;
            },
            fetchGoodsData: function () {
                let params = {
                    pageSize: 12,
                    page: this.page,
                };
                if (this.activeCategory !== 0) {
                    params.type = this.activeCategory;
                }
                this.$http.get("/api/goods/goods", {
                    params
                }).then(r => {
                    if (r.data.code === 200) {
                        this.goods = [...this.goods, ...r.data.data];
                        if (!this.scroll) {
                            // nextTick 延迟函数 保证当前浏览器网页渲染完成
                            this.$nextTick(() => {
                                this.scroll = new BScroll(this.$refs.wrapper, {
                                    // 当前向下滚动超出多少像素的时候会触发上拉加载的效果
                                    pullUpLoad: {
                                        thresholds: -50
                                    },
                                    click: true            // 允许触发点击效果
                                });
                                this.total = r.data.total;
                                // on 添加事件 上拉
                                this.scroll.on("pullingUp", () => {
                                    if (this.page * 12 > this.total) {
                                        this.scroll.finishPullUp(); // 结束pullup 否则只能执行一次
                                        this.showMore = false;
                                        return;
                                    }
                                    this.page++;
                                    this.fetchGoodsData();
                                    this.scroll.finishPullUp();
                                });
                            })
                        } else {
                            this.scroll.refresh(); // 刷新当前滚动效果
                        }

                    } else {
                        console.log("输出失败");
                    }
                }).catch(() => {
                    console.log("输出失败");
                })
            }
        },
        mounted: function () {
            this.fetchCategoryData();
            this.fetchGoodsData();
        }
    }
</script>

<style lang="scss" scoped>
    body {
        font-family: 微软雅黑;
    }

    /*搜索部分开始*/
    #search {
        width: 100%;
        border: 0.01rem solid #f2f2f2;
        background: #fff;
        position: fixed;
        top: 0.88rem;
        left: 0;
        z-index: 999;
        box-shadow: 0 0.1rem 0.16rem rgba(0, 0, 0, 0.04);
    }

    .searchBox {
        width: 6.82rem;
        margin: 0 auto;
        height: 0.88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .searchBoxInput {
        width: 6.04rem;
        height: 0.6rem;
        border-radius: 0.3rem;
        border: 0.01rem solid #d9d9d9;
        padding: 0 0.2rem;
        display: flex;
        align-items: center;
    }

    .searchBoxInputIcon {
        width: 0.24rem;
        height: 0.25rem;
    }

    .searchBoxInputIcon > img {
        display: block;
        width: 100%;
        height: 100%;
    }

    #searchInput {
        border: none;
        color: rgba(0, 0, 0, 0.7);
        padding: 0 0.12rem;
    }

    #searchInput:focus {
        outline: none;
    }

    .price {
        display: block;
        font-size: 0.24rem;
        color: #000;
        letter-spacing: 0.01rem;
        font-weight: 400;
    }

    /*搜索部分结束*/
    #contentBox {
        width: 100%;
        position: absolute;
        left: 0;
        top: 1.76rem;
    }

    /*侧边导航栏开始*/
    #nav {
        width: 2rem;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
    }

    .navList {
        width: 100%;
        height: 100%;
    }

    .navList > li {
        width: 100%;
        height: 1.04rem;
        text-align: center;
        color: #000;
        font-size: 0.26rem;
        background-color: #f7f7f7;
        line-height: 1.04rem;
        margin-bottom: 0.03rem;
        cursor: pointer;
    }

    .navList > li.active {
        background-color: #fff;
        cursor: default;
        position: relative;
    }

    .navList > li.active::before {
        content: "";
        display: block;
        width: 0.11rem;
        height: 1.09rem;
        position: absolute;
        left: 0;
        top: -0.03rem;
        background-color: #ffcb3f;
    }

    .allB {
        margin-bottom: 52px;
    }

    /*侧边导航栏结束*/
    /*轮播图开始*/
    #banner {
        width: 5.04rem;
        height: 1.57rem;
        position: absolute;
        top: 0;
        right: 0.24rem;
    }

    .backImg {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }

    .backImg > img {
        width: 100%;
        height: 100%;
    }

    /*轮播图结束*/
    /*新品到店开始*/
    #newShop {
        width: 4.89rem;
        height: 8.7rem;
        position: absolute;
        right: 0.33rem;
        top: 1.91rem;
    }

    .newShopTop {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .newShopLine {
        width: 0.83rem;
        height: 0.01rem;
        background-color: #ffcb3f;
    }

    .title {
        font-size: 0.32rem;
        color: #000;
        text-align: center;
        margin: 0 0.17rem;
    }

    .scrollBox {
        width: 100%;
        height: 8.3rem;
        overflow: hidden;
        position: absolute;
        left: 0;
        right: 0;
    }

    .newShopList {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .newShopList > li {
        width: 1.5rem;
        height: 1.94rem;
        margin-top: 0.23rem;
        margin-bottom: 0.22rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .newShopList > li > p {
        font-size: 0.22rem;
        letter-spacing: 0.01rem;
        color: #000;
        text-align: center;
    }

    .newShopItemTop {
        width: 100%;
        height: 1.42rem;
        display: block;
    }

    .newShopItemTop > img {
        width: 100%;
        height: 100%;
    }

    .newShopImg1 {
        /*background-image:url("../../assets/images/classifysafa1.png");*/
        background-size: 1.5rem;
    }

    .newShopImg2 {
        background-image: url("../../assets/images/classifysafa2.png");
        background-size: 1.5rem;
    }

    .newShopImg3 {
        background-image: url("../../assets/images/classifysafa3.png");
        background-size: 1.5rem;
    }

    .newShopImg4 {
        background-image: url("../../assets/images/classifysafa4.png");
        background-size: 1.5rem;
    }

    .newShopImg5 {
        background-image: url("../../assets/images/classifysafa5.png");
        background-size: 1.5rem;
    }

    .newShopImg6 {
        background-image: url("../../assets/images/classifysafa6.png");
        background-size: 1.5rem;
    }

    .newShopImg7 {
        background-image: url("../../assets/images/classifysafa7.png");
        background-size: 1.5rem;
    }

    .newShopImg8 {
        background-image: url("../../assets/images/classifysafa8.png");
        background-size: 1.5rem;
    }

    .newShopImg9 {
        background-image: url("../../assets/images/classifysafa9.png");
        background-size: 1.5rem;
    }

    /*新品到店结束*/
    .more {
        width: 100%;
        text-align: center;
    }
</style>