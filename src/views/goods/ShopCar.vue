<template>
    <div style="height: 100%">
        <my-header></my-header>
        <div class="wrapper" ref="wrapper">
            <div class="inner">
                <div class="CarBox">
                    <ul class="CarList" v-if="cartLength>0">
                        <li v-for="item in cartList">
                            <div :class="['checkBox',{active:item.checked}]" @click="item.checked=!item.checked">
                                <div class="check " v-show="item.checked"></div>
                            </div>
                            <div class="goods">
                                <img :src="item.thumb" alt="">
                            </div>
                            <div class="goodsItem">
                                <p>{{item.name_en}}</p>
                                <h3 class="goodsName">{{item.name_ch}}</h3>
                                <h3 class="goodsType">{{item.tags}}</h3>
                                <h3 class="goodsType">颜色：{{item.colors}}</h3>
                                <h3 class="goodsPrice">{{item.goods_price}} <span>RMB</span></h3>
                            </div>
                            <div class="goodsNumber">
                                <div class="reduce" @click="dec(item)">-</div>
                                <div class="number">{{item.number}}</div>
                                <div class="add" @click="item.number++">+</div>
                            </div>
                        </li>
                    </ul>
                    <div v-else class="noGoods">还没有选择任何商品</div>
                </div>
                <!--购物车列表结束-->
                <!--推荐商品开始-->
                <my-recommend :goods="goodsList"></my-recommend>
                <!--推荐商品结束-->
            </div>
        </div>
        <!--结算开始-->
        <div class="countBox">
            <div :class="['checkAllBox',{active:checkAll}]" @click="handleCheckAll">
                <div class="checkAll" v-show="checkAll"></div>
            </div>
            <div class="checkText">{{checkAll?'取消全选':'全选'}}</div>
            <div class="count">
                <h3>合计：<span class="price">{{totalPrice}}</span> <span class="RMB">RMB</span></h3>
                <p>免邮</p>
            </div>
            <transition name="fade">
                <div class="countBtn" v-show="totalPrice>0">
                    <router-link to="/order" style="color: #fff;">
                        去结算
                    </router-link>
                </div>
            </transition>
        </div>
        <!--结算结束-->
        <my-footer hot="shopCar"></my-footer>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import Footer from "@/components/Footer"
    import Recommend from "@/components/Recommend"
    import BScroll from "better-scroll"
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "ShopCar",
        components: {
            "my-header": Header,
            "my-footer": Footer,
            "my-recommend": Recommend
        },
        data: () => ({
            page: 1,
            goodsList: [],
            total: 0,
            checkAll: false,
        }),
        methods: {
            ...mapMutations(['add', 'remove', 'concat']),
            fetchGoodsData: function () {
                let params = {
                    pageSize: 8,
                    page: this.page,
                };
                this.$http.get("/api/goods/goods", {params}).then(res => {
                    if (res.data.code === 200) {
                        this.total = res.data.total;
                        this.goodsList = [...this.goodsList, ...res.data.data];
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
                    console.log("获取失败")
                })
            },
            dec: function (obj) {
                obj.number--;
                if (obj.number === 0) {
                    this.remove(obj.gid);
                }
            },
            handleCheckAll: function () {
                this.checkAll = !this.checkAll;
                if (this.checkAll) {
                    this.cartList.forEach(v => {
                        v.checked = true
                    })
                } else {
                    this.cartList.forEach(v => {
                        v.checked = false
                    })
                }
            },
            fetchOrderList: function () {
                this.$http.get('/api/orders/orders', {params: {uid: localStorage.login}}).then(res => {
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
            }
        },
        computed: {
            ...mapGetters(['cartList', 'cartLength']),
            totalPrice: function () {
                let total = 0;
                this.cartList.filter(v => v.checked).forEach(v => {
                    total += v.goods_price * v.number;
                });
                return total;
            }
        },
        beforeRouteLeave: function (to, form, next) {
            this.cartList.forEach(v => {
                if (to.name !== 'order') {
                    v.checked = false;
                }
                v.price = v.goods_price * v.number;
                delete v.id;
            });
            this.checkAll = false;
            this.$http.post('/api/orders/addOrders', {data: this.cartList, uid: localStorage.login}).then(res => {
                if (res.data.code === 200) {
                    console.log('同步成功')
                } else {
                    console.log('同步失败')
                }
            }).catch(() => {
                console.log("提交失败")
            });
            next()
        },
        mounted: function () {
            this.fetchOrderList();
            this.fetchGoodsData();
            if (localStorage.goods) {
                let obj = JSON.parse(localStorage.goods);
                obj.uid = localStorage.login;
                this.add(obj);
                localStorage.removeItem('goods');
            }
        },
    }
</script>

<style lang="scss" scoped>
    // 过渡

    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    // 滚动
    .wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    .inner {
        width: 100%;
        height: auto;
        padding-bottom: 1.8rem;
    }

    .CarBox {
        width: 100%;
        height: auto;
    }

    .CarList {
        width: 100%;
        margin: 0 auto 0.7rem;
        padding: 0 0.24rem;
        background: #fff;
    }

    .CarList li {
        width: 100%;
        height: 2.35rem;
        border-top: 0.01rem solid #f2f2f2;
        position: relative;
        padding: 0.47rem 0;
    }

    .CarList li:last-child {
        border-bottom: 0.01rem solid #f2f2f2;
    }

    .noGoods {
        width: 100%;
        height: 2rem;
        text-align: center;
        line-height: 2rem;
        font-size: 0.4rem;
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

    .check {
        width: 0.13rem;
        height: 0.13rem;
        background: #ffcb3f;
        margin-top: 0.05rem;
        margin-left: 0.04rem;
        border-radius: 50%;
        display: none;
    }

    .goods {
        width: 2rem;
        height: 1.4rem;
        margin-left: 0.43rem;
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
        margin-top: 0.1rem;
        font-weight: 400;
    }

    .goodsPrice {
        font-size: 0.24rem;
    }

    .goodsPrice span {
        font-size: 0.18rem;
        font-weight: 400;
    }

    .goodsNumber {
        float: left;
        width: 1.65rem;
        height: auto;
        margin-left: 0.9rem;
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
    }

    .reduce, .add {
        width: 0.38rem;
        height: 0.38rem;
        border: 1px solid rgba(0, 0, 0, 0.1);
        font-size: 0.29rem;
        text-align: center;
        line-height: 0.32rem;
    }

    .number {
        font-size: 0.24rem;
        line-height: 0.38rem;
    }

    .CarList li > .checkBox.active .check {
        display: block;
    }

    .CarList li::after {
        content: "";
        display: block;
        width: 0.47rem;
        height: 0.02rem;
        background-color: #ffcb3f;
        position: absolute;
        left: 0;
        bottom: -0.01rem;
        z-index: 99;
    }


    /*结算开始*/
    .countBox {
        width: 100%;
        height: 0.9rem;
        position: fixed;
        bottom: 0.98rem;
        left: 0;
        padding: 0 0.24rem;
        background: #fff;
        z-index: 999;
    }

    .checkAllBox {
        width: 0.24rem;
        height: 0.24rem;
        border-radius: 50%;
        border: 0.01rem solid #ffcb3f;
        margin-top: 0.33rem;
        float: left;
    }

    .checkAll {
        width: 0.13rem;
        height: 0.13rem;
        background: #ffcb3f;
        margin-top: 0.05rem;
        margin-left: 0.04rem;
        border-radius: 50%;
        display: none;
    }

    .checkAllBox.active .checkAll {
        display: block;
    }

    .checkText {
        float: left;
        font-size: 0.24rem;
        margin-top: 0.3rem;
        margin-left: 0.3rem;
    }

    .count {
        float: left;
        font-size: 0.24rem;
        margin-left: 0.25rem;
        margin-top: 0.15rem;
    }

    .count .price {
        color: #ffcb3f;

    }

    .count .RMB {
        font-size: 0.18rem;
    }

    .count p {
        font-size: 0.18rem;
        color: rgba(0, 0, 0, 0.7);
    }

    .countBtn {
        width: 2.12rem;
        height: 0.9rem;
        background: #ffcb3f;
        color: #fff;
        text-align: center;
        line-height: 0.9rem;
        font-size: 0.28rem;
        position: absolute;
        right: 0;
        top: 0;
        box-shadow: 0 0.02rem 0.07rem 0 rgba(224, 163, 0, 0.45);
        border-radius: 0.04rem;
    }

    /*结算结束*/
</style>