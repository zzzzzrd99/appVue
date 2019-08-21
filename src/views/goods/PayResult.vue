<template>
    <div id="result">
        <my-header></my-header>
        <!--标题开始-->
        <div class="payTitle">
            <div class="back">
                <i class="iconfont icon-xiangzuo"></i>
            </div>
            <h3>支付成功</h3>
        </div>
        <!--标题结束-->
        <div class="wrapper" ref="wrapper">
            <div class="inner">
                <!--内容开始-->
                <div class="payContent">
                    <div class="payImg">
                        <img src="../../assets/images/payfinsh.png" alt="">
                    </div>
                    <div class="payText">
                        <h1>您的订单已完成 宝贝正在飞奔向你~</h1>
                        <p>YOUR ORDER HAS BEEN COMPLETED BABY IS FLYING TO YOU.</p>
                        <h3>支付 <span class="price">{{totalPrice}}</span> <span class="RMB">RMB</span></h3>
                    </div>
                    <div class="btn">
                        <div class="backIndex" @click="$router.push({name:'index'})">返回首页</div>
                        <div class="lookOrder" @click="$router.push({name:'orderList'})">查看订单</div>
                    </div>
                </div>
                <!--内容结束-->
                <!--推荐商品开始-->
                <my-recommend :goods="goods"></my-recommend>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import Recommend from "@/components/Recommend"
    import {mapGetters} from 'vuex'
    import BScroll from 'better-scroll'

    export default {
        name: "PayResult",
        data: () => ({
            page: 1,
            total: 0,
            goods: [],
            showMore: true,
        }),
        components: {
            "my-header": Header,
            "my-recommend": Recommend
        },
        computed: {
            ...mapGetters(['payList']),
            totalPrice() {
                let total = 0;
                this.payList.forEach(v => {
                    total += v.price;
                });
                return total;
            }
        },
        methods: {
            fetchGoodsData: function () {
                let params = {
                    pageSize: 8,
                    page: this.page,
                };
                this.$http.get('/api/goods/goods', {params}).then(res => {
                    if (res.data.code === 200) {
                        this.total = res.data.total;
                        this.goods = [...this.goods, ...res.data.data];
                        if (!this.scroll) {
                            this.$nextTick(() => {
                                this.scroll = new BScroll(this.$refs.wrapper, {
                                    pullUpLoad: {
                                        thresholds: 0
                                    },
                                    click: true
                                });
                                this.total = res.data.total;
                                this.scroll.on("pullingUp", () => {
                                    if (this.page * 8 > this.total) {
                                        this.scroll.finishPullUp();
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
                        console.log("获取失败");
                    }
                )
            }
        },
        mounted: function () {
            this.fetchGoodsData();
        }
    }
</script>

<style lang="scss" scoped>
    #result {
        height: 100%;
    }

    body {
        background: #fcfcfc;
        padding-top: 0.88rem;
    }

    /*标题开始*/
    .payTitle {
        width: 100%;
        height: 0.78rem;
        background: #fff;
        padding: 0 0.24rem;
        border-top: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
    }

    .payTitle h3 {
        font-size: 0.28rem;
        text-align: center;
        line-height: 0.78rem;
    }

    .payTitle .back {
        width: 0.24rem;
        height: 0.24rem;
        float: left;
        margin-top: 0.27rem;
    }

    .back i {
        float: left;
        text-align: center;
        line-height: 0.24rem;
        font-size: 0.24rem;
    }

    /*标题结束*/
    /*内容开始*/
    .payContent {
        width: 7.02rem;
        height: 3.25rem;
        background: #fff;
        margin: 0 auto 0.4rem;
        border-radius: 0.1rem;
        box-shadow: 0 0.02rem 0.03rem 0 rgba(0, 0, 0, 0.09);
    }

    .payImg {
        width: 3.85rem;
        height: 2.25rem;
        margin: 0 auto;
    }

    .payImg img {
        width: 100%;
        height: 100%;
        display: block;
    }

    .payText {
        width: 100%;
        height: auto;
        margin-top: -1.6rem;
    }

    .payText h1 {
        font-size: 0.28rem;
        text-align: center;
    }

    .payText p {
        font-size: 0.18rem;
        text-align: center;
    }

    .payText h3 {
        font-size: 0.24rem;
        text-align: center;
        margin-top: 0.5rem;
    }

    .payText h3 .price {
        font-size: 0.28rem;
        color: #ffcb3f;
    }

    .payText h3 .RMB {
        font-size: 0.18rem;
    }

    .btn {
        width: 4.75rem;
        height: 0.5rem;
        margin: 0.2rem auto 0;
        display: flex;
        justify-content: space-between;
    }

    .backIndex, .lookOrder {
        width: 1.45rem;
        height: 0.5rem;
        background: #ffcb3f;
        font-size: 0.24rem;
        color: #fff;
        line-height: 0.5rem;
        text-align: center;
    }

    /*内容结束*/
    .wrapper{
        width: 100%;
        height: calc(100% - 0.78rem);
        overflow: hidden;
        position: relative;
    }
    .inner{
        width: 100%;
        height: auto;
    }
</style>