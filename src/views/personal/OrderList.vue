<template>
    <div>
        <my-header></my-header>
        <!--标题开始-->
        <div class="payTitle">
            <div class="back">
                <!--icon图标-->
                <i class="iconfont icon-xiangzuo"></i>
            </div>
            <h3>我的订单</h3>
        </div>
        <!--标题结束-->
        <!--导航选项卡开始-->
        <div class="navBox">
            <ul>
                <swiper :options="option" ref="mySwiper">
                    <swiper-slide>
                        <li :class="[{active:state===10}]" @click="state=10">
                            <router-link to="/orderList">全部</router-link>
                        </li>
                    </swiper-slide>
                    <swiper-slide>
                        <li :class="[{active:state==='0'}]" @click="state='0'">
                            <router-link to="/orderList?state=0">待付款</router-link>
                        </li>
                    </swiper-slide>
                    <swiper-slide>
                        <li :class="[{active:state==='1'}]" @click="state='1'">
                            <router-link to="/orderList?state=1">待发货</router-link>
                        </li>
                    </swiper-slide>
                    <swiper-slide>
                        <li :class="[{active:state==='2'}]" @click="state='2'">
                            <router-link to="/orderList?state=2">待收货</router-link>
                        </li>
                    </swiper-slide>
                    <swiper-slide>
                        <li :class="[{active:state==='3'}]" @click="state='3'">
                            <router-link to="/orderList?state=3">待评价</router-link>
                        </li>
                    </swiper-slide>
                    <swiper-slide>
                        <li :class="[{active:state==='4'}]" @click="state='4'">
                            <router-link to="/orderList?state=4">退款</router-link>
                        </li>
                    </swiper-slide>
                </swiper>
            </ul>
        </div>
        <!--导航选项卡结束-->
        <div class="wrapper" ref="wrapper">
            <div class="inner">
                <!--订单内容开始-->
                <div class="orderItem">
                    <ul class="CarList" v-if="state===10">
                        <div class="noOrderMessage" v-if="allList.length===0">暂无订单信息</div>
                        <li v-else v-for="item in allList">
                            <div class="goods">
                                <img :src="item.thumb" alt="">
                            </div>
                            <div class="goodsItem">
                                <p>{{item.name_en}}<span class="goodsName">{{item.name_ch}}</span></p>
                                <h3 class="goodsType">{{item.colors}}</h3>
                                <h3 class="date">2019-03-20</h3>
                            </div>
                            <div class="goodsNumber">
                                <h3 class="number">￥{{item.goods_price}}</h3>
                                <div class="goodsPrice">
                                    <h3>{{item.price}}<span>RMB</span></h3>
                                </div>
                                <div class="status">
                                    <h3>{{item.stateText}}</h3>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="CarList" v-if="state==='0'">
                        <div class="noOrderMessage" v-if="cartList.length===0">暂无订单信息</div>
                        <li v-else v-for="item in cartList">
                            <div class="goods">
                                <img :src="item.thumb" alt="">
                            </div>
                            <div class="goodsItem">
                                <p>{{item.name_en}}<span class="goodsName">{{item.name_ch}}</span></p>
                                <h3 class="goodsType">{{item.colors}}</h3>
                                <h3 class="date">2019-03-20</h3>
                            </div>
                            <div class="goodsNumber">
                                <h3 class="number">￥{{item.goods_price}}</h3>
                                <div class="goodsPrice">
                                    <h3>{{item.price}}<span>RMB</span></h3>
                                </div>
                                <div class="status">
                                    <h3>{{item.stateText}}</h3>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="CarList" v-if="state==='1'">
                        <div class="noOrderMessage" v-if="sendList.length===0">暂无订单信息</div>
                        <li v-else v-for="item in sendList">
                            <div class="goods">
                                <img :src="item.thumb" alt="">
                            </div>
                            <div class="goodsItem">
                                <p>{{item.name_en}}<span class="goodsName">{{item.name_ch}}</span></p>
                                <h3 class="goodsType">{{item.colors}}</h3>
                                <h3 class="date">2019-03-20</h3>
                            </div>
                            <div class="goodsNumber">
                                <h3 class="number">￥{{item.goods_price}}</h3>
                                <div class="goodsPrice">
                                    <h3>{{item.price}}<span>RMB</span></h3>
                                </div>
                                <div class="status">
                                    <h3>{{item.stateText}}</h3>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="CarList" v-if="state==='2'">
                        <div class="noOrderMessage" v-if="getList.length===0">暂无订单信息</div>
                        <li v-else v-for="item in getList">
                            <div class="goods">
                                <img :src="item.thumb" alt="">
                            </div>
                            <div class="goodsItem">
                                <p>{{item.name_en}}<span class="goodsName">{{item.name_ch}}</span></p>
                                <h3 class="goodsType">{{item.color}}</h3>
                                <h3 class="date">2019-03-20</h3>
                            </div>
                            <div class="goodsNumber">
                                <h3 class="number">￥{{item.goods_price}}</h3>
                                <div class="goodsPrice">
                                    <h3>{{item.price}}<span>RMB</span></h3>
                                </div>
                                <div class="status">
                                    <h3>{{item.stateText}}</h3>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="CarList" v-if="state==='3'">
                        <div class="noOrderMessage" v-if="commitList.length===0">暂无订单信息</div>
                        <li v-else v-for="item in commitList">
                            <div class="goods">
                                <img :src="item.thumb" alt="">
                            </div>
                            <div class="goodsItem">
                                <p>{{item.name_en}}<span class="goodsName">{{item.name_ch}}</span></p>
                                <h3 class="goodsType">{{item.color}}</h3>
                                <h3 class="date">2019-03-20</h3>
                            </div>
                            <div class="goodsNumber">
                                <h3 class="number">￥{{item.goods_price}}</h3>
                                <div class="goodsPrice">
                                    <h3>{{item.price}}<span>RMB</span></h3>
                                </div>
                                <div class="status">
                                    <h3>{{item.stateText}}</h3>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="CarList" v-if="state==='4'">
                        <div class="noOrderMessage" v-if="backList.length===0">暂无订单信息</div>
                        <li v-else v-for="item in backList">
                            <div class="goods">
                                <img :src="item.thumb" alt="">
                            </div>
                            <div class="goodsItem">
                                <p>{{item.name_en}}<span class="goodsName">{{item.name_ch}}</span></p>
                                <h3 class="goodsType">{{item.color}}</h3>
                                <h3 class="date">2019-03-20</h3>
                            </div>
                            <div class="goodsNumber">
                                <h3 class="number">￥{{item.goods_price}}</h3>
                                <div class="goodsPrice">
                                    <h3>{{item.price}}<span>RMB</span></h3>
                                </div>
                                <div class="status">
                                    <h3>{{item.stateText}}</h3>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--订单内容结束-->
                <!--推荐商品开始-->
                <my-recommend :goods="goods"></my-recommend>
                <!--推荐商品结束-->
            </div>
        </div>
        <my-footer hot="My"></my-footer>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import Footer from "@/components/Footer"
    import Recommend from "@/components/Recommend"
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import {mapMutations, mapGetters} from 'vuex'
    import BScroll from 'better-scroll'

    export default {
        name: "OrderList",
        data: () => ({
            state: 10,
            option: {
                el: '',
                freeMode: true,
                slidesPerView: 5,
            },
            stateText: '',
            goods: [],
            total: 0,
            page: 1,
            showMore: true,
        }),
        components: {
            "my-header": Header,
            "my-footer": Footer,
            "my-recommend": Recommend,
            swiper,
            swiperSlide
        },
        methods: {
            ...mapMutations(['concat']),
            fetchOrderList: function () {
                this.$http.get('/api/orders/ordersT', {params: {uid: localStorage.login}}).then(res => {
                    if (res.data.code === 200) {
                        let orderList = res.data.data;
                        orderList.forEach(v => {
                            v.checked = false;
                        });
                        this.concat(orderList);
                    } else {
                        console.log('获取失败')
                    }
                }).catch(() => {
                    console.log("未知错误");
                })
            },
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
        computed: {
            ...mapGetters(['allList', 'cartList', 'payList', 'sendList', 'backList', 'commitList', 'getList']),
            swiper() {
                return this.$refs.mySwiper.swiper;
            },
        },
        beforeUpdate() {
            this.allList.forEach(v => {
                switch (v.state) {
                    case 0:
                        v.stateText = '未付款';
                        break;
                    case 1:
                        v.stateText = '待发货';
                        break;
                    case 2:
                        v.stateText = '待收货';
                        break;
                    case 3:
                        v.stateText = '待评价';
                        break;
                    case 4:
                        v.stateText = '退款';
                        break;
                    default:
                        v.stateText = '交易完成';
                        break;
                }
            })
        },
        mounted: function () {
            this.fetchGoodsData();
            if (this.$route.query.state) {
                this.state = this.$route.query.state;
                if (this.state === '4') {
                    this.swiper.slideNext();
                }
            }
            this.fetchOrderList();
        },
    }
</script>

<style lang="scss" scoped>
    /*滚动开始*/
    .wrapper {
        width: 100%;
        height: 9.8rem;
        overflow: hidden;
        position: relative;
    }

    .inner {
        width: 100%;
        height: auto;
    }
    /*滚动结束*/
    body {
        background: #fcfcfc;
        padding-top: 0.88rem;
        height: 100%;
    }

    /*标题开始*/
    .payTitle {
        width: 100%;
        height: 0.78rem;
        background: #fff;
        padding: 0 0.24rem;
        border-top: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
        box-sizing: border-box;
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
    /*顶部选项卡开始*/
    .navBox {
        width: 100%;
        height: 0.78rem;
        padding: 0 0.44rem;
        background: #fff;
        border-bottom: 0.01rem solid #ffcb3f;
        box-sizing: border-box;
    }

    .navBox ul {
        width: 100%;
        height: 100%;
    }

    .navBox li {
        width: 1.324rem;
        position: relative;
        float: left;
    }

    .navBox li a {
        display: block;
        color: rgba(0, 0, 0, 0.7);
        font-size: 0.24rem;
        line-height: 0.78rem;
        text-align: center;
    }

    .navBox li.active {
        color: #ffcb3f;
        font-weight: bold;
    }

    .navBox li.active:after {
        content: "";
        display: block;
        width: 100%;
        height: 0.03rem;
        background-color: #ffcb3f;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
    }

    /*顶部选项卡结束*/
    /*订单内容开始*/
    .orderItem {
        width: 7.02rem;
        height: auto;
        margin: 0 auto 0.6rem;
    }

    .noOrderMessage{
        width: 100%;
        height: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
        font-size: 0.4rem;
    }

    .CarList {
        width: 7.02rem;
        height: auto;
        margin: 0 auto;
    }

    .CarList li {
        width: 7.02rem;
        height: 2.62rem;
        background: #fff;
        box-shadow: 0 0.02rem 0.03rem 0 rgba(0, 0, 0, 0.09);
        border-radius: 0.1rem;
        margin-top: 0.24rem;
        padding-top: 0.52rem;
    }

    .checkBox {
        width: 0.24rem;
        height: 0.24rem;
        border-radius: 50%;
        border: 0.01rem solid #ffcb3f;
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -0.12rem;
    }

    .goods {
        width: 1.85rem;
        height: 1.3rem;
        margin-left: 0.2rem;
        float: left;
    }

    .goods img {
        width: 100%;
        height: 100%;
        display: block;
    }

    .goodsItem {
        margin-left: 0.2rem;
        height: auto;
        float: left;
        margin-top: 0.1rem;
    }

    .goodsItem p {
        font-size: 0.18rem;
    }

    .goodsName {
        font-size: 0.24rem;
    }

    .goodsType {
        font-size: 0.18rem;
        margin-top: 0.08rem;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.7);
    }

    .date {
        font-size: 0.18rem;
        color: rgba(0, 0, 0, 0.7);
        margin-top: 0.3rem;
        font-weight: 400;
    }

    .goodsNumber {
        float: right;
        margin-right: 0.24rem;
        margin-top: 0.1rem;
    }

    .number {
        font-size: 0.24rem;
        font-weight: 400;
    }

    .goodsPrice {
        margin-top: 0.7rem;
    }

    .goodsPrice h3 {
        font-size: 0.26rem;
    }

    .goodsPrice h3 span {
        font-size: 0.18rem;
        font-weight: 400;
    }

    .status {
        font-size: 0.24rem;
        color: #ffcb3f;
        margin-top: 0.08rem;
    }

    .statusEnd h3 {
        color: #000;
        font-weight: 400;
    }

    /*订单内容结束*/
    /*推荐商品开始*/
    #recommendShop {
        padding-bottom: 0.5rem;
    }
    /*推荐商品结束*/
</style>