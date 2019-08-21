<template>
    <div style="height: 100%;padding-top: 0.8rem">
        <div id="searchBox">
            <my-header></my-header>
                    <!--搜索框开始-->
                    <div id="search">
                        <div class="searchBox">
                            <img src="../../assets/images/search.png" alt="">
                            <input type="text" placeholder="布艺沙发" v-model="search" ref="input">
                        </div>
                        <span class="text" @click="handleSearch">搜索</span>
                    </div>
            <div class="wrapper" ref="wrapper">
                <div class="inner">
                    <!--搜索框结束-->
                    <my-recommend :goods="goods" :showTitle="false"></my-recommend>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import Recommend from "@/components/Recommend"
    import BScroll from 'better-scroll'

    export default {
        name: "SearchList",
        data: () => ({
            search: '',
            page: 1,
            total: 0,
            goods: [],
            history: [],
        }),
        components: {
            "my-header": Header,
            "my-recommend": Recommend
        },
        methods: {
            fetchGoodsData: function () {
                this.$http.get("/api/goods/goods", {
                    params: {
                        page: this.page,
                        pageSize: 8,
                        name: this.search
                    }
                }).then(res => {
                    if (res.data.code === 200) {
                        this.goods = [...this.goods, ...res.data.data];
                        this.total = res.data.total;
                        if (!this.scroll) {
                            this.scroll = new BScroll(this.$refs.wrapper, {
                                pullUpLoad: {
                                    thresholds: 0
                                },
                                click: true
                            });
                            this.scroll.on("pullingUp", () => {
                                if (this.page * 8 > this.total) {
                                    this.scroll.finishPullUp();
                                    return;
                                } else {
                                    this.page++;
                                    this.fetchGoodsData();
                                    this.scroll.finishPullUp();
                                }
                            })
                        } else {
                            this.scroll.refresh();
                        }
                    } else {
                        console.log("获取失败");
                    }
                }).catch(() => {
                    console.log("请求失败");
                })
            },
            handleSearch:function(){
                this.search=this.$refs.input.value;
                if (this.search===""){
                    this.$router.push({name:'search'});
                    return;
                }else{
                    this.total=0;
                    this.goods=[];
                    let index = this.history.indexOf(this.search);
                    if (index !== -1) {
                        this.history.splice(index, 1);
                    }
                    this.history.unshift(this.search);
                    if (this.history.length > 10) {
                        this.history = this.history.slice(0, 10);
                        this.history.push('...');
                    }
                    localStorage.setItem("history", JSON.stringify(this.history));
                    this.fetchGoodsData();
                }
            }

        },
        mounted: function () {
            this.search = this.$route.query.search;
            this.fetchGoodsData();
        }
    }
</script>

<style lang="scss" scoped>
    #searchBox {
        width: 100%;
        height: 100%;
    }

    /*搜索框开始*/
    #search {
        width: 100%;
        height: 0.8rem;
        padding: 0.1rem 0.24rem;
        background: #fff;
        border: solid 0.01rem #eeeeee;
        padding-bottom: 0.6rem;
        box-sizing: border-box;
        position: fixed;
        left: 0;
        top: 0.88rem;
    }

    .searchBox {
        width: 6.12rem;
        height: 0.6rem;
        border-radius: 0.3rem;
        border: solid 0.01rem rgba(217, 217, 217, 0.7);
        opacity: 0.7;
        float: left;
        padding: 0.14rem 0;
        box-sizing: border-box;
    }

    .searchBox img {
        display: block;
        width: 0.24rem;
        height: 0.26rem;
        margin: 0 0.2rem;
        float: left;
    }

    .searchBox input {
        width: 4.82rem;
        outline: none;
        border: none;
        float: left;
    }

    #search .text {
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.24rem;
        letter-spacing: 0.012rem;
        color: #000000;
        float: right;
    }

    /*搜索框结束*/
    .wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }
    .inner{
        width: 100%;
        height: auto;
    }


    /*热门搜索开始*/
    #hotSearch {
        width: 100%;
        height: 1.24rem;
        padding: 0 0.24rem;
        margin-bottom: 0.42rem;
    }

    .smallTitle {
        padding-left: 0.13rem;
        font-size: 0.3rem;
        letter-spacing: 0.015rem;
        color: #000000;
        position: relative;
        margin-bottom: 0.24rem;
    }

    .smallTitle::before {
        content: "";
        display: block;
        width: 0.03rem;
        height: 0.2rem;
        background: #ffcb3f;
        position: absolute;
        left: 0;
        top: 0.1rem;
    }

    .searchItems {
        width: 100%;
        height: 0.6rem;
        padding-left: 0.24rem;
    }

    .searchItem {
        display: block;
        width: 1.5rem;
        height: 100%;
        margin-right: 0.1rem;
        margin-bottom: 0.1rem;
        background-color: #efefef;
        border-radius: 0.3rem;
        font-size: 0.24rem;
        letter-spacing: 0.012rem;
        text-align: center;
        line-height: 0.6rem;
        color: #666666;
        float: left;
    }

    /*热门搜索结束*/
    /*历史搜索结束*/
    #historySearch {
        width: 100%;
        height: 2.1rem;
        padding: 0.4rem 0.24rem;
    }

    .delete {
        float: right;
        font-size: 0.24rem;
        letter-spacing: 0.012rem;
        color: #000000;
        opacity: 0.7;
    }

    .delete .iconfont {
        font-size: 0.24rem;
        margin-left: 0.14rem;
    }

    /*历史搜索结束*/
</style>