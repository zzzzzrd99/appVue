<template>
    <div style="height: 100%">
        <my-header></my-header>
        <div class="wrapper" ref="wrapper">
            <div class="inner">
                <!--收货地址开始-->
                <div class="getGoodsAddress dongContainer" v-if="address">
                    <h1>收货地址</h1>
                    <div class="aline"></div>
                    <h2><span v-if="address.type">{{address.type}}</span> {{address.province}} {{address.city}} {{address.area}}</h2>
                    <h3>{{address.address}} <router-link to="address" class="toAddress"><i class="iconfont icon-xiangyou"></i></router-link></h3>   <!--icon-->
                    <h2>{{address.name}} {{address.phone}}</h2>
                    <div class="bottomBorderBox">
                        <span class="blueBorder"></span>
                        <span class="redBorder"></span>
                        <span class="blueBorder"></span>
                        <span class="redBorder"></span>
                        <span class="blueBorder"></span>
                        <span class="redBorder"></span>
                        <span class="blueBorder"></span>
                        <span class="redBorder"></span>
                    </div>
                </div>
                <div class="newAddress" v-else>
                    <router-link to="/address" style="color: #fff">去添加收获地址</router-link>
                </div>
                <!--收货地址结束-->
                <!--订单确认开始-->
                <div class="orderSure dongContainer">
                    <h1>确认订单</h1>
                    <div class="aline"></div>
                    <div class="orderDetail" v-for="item in payList" :key="item.id">
                        <div class="orderDetailImg">
                            <img :src="item.thumb" alt="">
                        </div>
                        <div class="orderDetailBox">
                            <h6>{{item.name_en}}</h6>
                            <div class="detailMore"><span>{{item.name_ch}}</span><span
                                    class="blod">{{item.goods_price}}<i>RMB</i></span><span>X{{item.number}}</span><span>有货</span>
                            </div>
                            <h6>{{item.colors}}</h6>
                        </div>
                    </div>
                    <div class="otherMessage">商品总价<span>{{totalPrice}}<i>RMB</i></span></div>
                    <div class="otherMessage">运费<span>包邮</span></div>
                    <div class="moreMessage"><span>备注</span>
                        <textarea v-model="note" name="" id="" cols="30" rows="1" placeholder="限45个字（请将购买需求在备注中做详细说明）"></textarea>
                    </div>
                </div>
                <!--订单确认结束-->
                <!--发票开始-->
                <div class="receipt dongContainer">
                    <h4>发票信息</h4>
                    <div class="aline"></div>
                    <h5>不开发票</h5>
                </div>
                <!--发票结束-->
                <!--去支付开始-->
                <div class="goPay">
                    <div>
                        付款<i class="rmbAll">{{totalPrice}}</i><i class="unit">RMB</i>
                    </div>
                    <div class="quzhifu" @click="pay">
                            <i>去支付</i>
                    </div>
                </div>
                <!--去支付结束-->
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header"
    import {mapGetters} from 'vuex'
    import BScroll from 'better-scroll'

    export default {
        name: "Order",
        data: () => ({
            address: null,
            note:'',
        }),
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
        components: {
            "my-header": Header,
        },
        methods: {
            fetchUserAddress: function () {
                this.$http.get('/api/address/address', {
                    params: {
                        uid: localStorage.login,
                        is_default: 1
                    }
                }).then(res => {
                    if (res.data.code === 200) {
                        this.address = res.data.data;
                        if (this.address.type){
                            switch (this.address.type) {
                                case 1: this.address.type='住宅';break;
                                case 2: this.address.type='公司';break;
                                case 3: this.address.type='学校';break;
                                case 4: this.address.type='其他';break;
                            }
                        }
                    }
                }).catch(() => {
                    console.log('获取用户信息失败')
                })
            },
            pay:function(){
                this.payList.forEach(v=>{
                    v.aid=this.address.id;
                    v.note=this.note;
                });
                this.$router.push('/pay');
            }
        },
        mounted:function(){
            console.log(this.payList);
            if (localStorage.address){
                this.address=JSON.parse(localStorage.address);
                localStorage.removeItem("address");
            }else{
                this.fetchUserAddress();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dongContainer {
        padding: 0 0.24rem;
    }

    i {
        font-style: normal;
    }

    body {
        padding-top: 1.18rem;
        background: #fff !important;
    }

    /*收获地址开始*/
    .getGoodsAddress {
        width: 7.02rem;
        height: 2.73rem;
        border-radius: 0.1rem;
        margin: 0 auto;
        padding-top: 0.27rem;
        box-shadow: -0.01rem 0.05rem 0.05rem 0 rgba(118, 118, 118, 0.17);
        position: relative;
    }

    .getGoodsAddress > h1 {
        font-size: 0.28rem;
        line-height: 0.36rem;
        font-weight: normal;
    }

    .aline {
        width: 100%;
        height: 0.01rem;
        background: #d7d7d7;
        margin-top: 0.12rem;
        position: relative;
        margin-bottom: 0.43rem;
    }

    .aline::before {
        content: '';
        display: inline-block;
        width: 0.47rem;
        height: 0.02rem;
        background: #ffcb3f;
        position: absolute;
        left: 0;
        top: 0;
    }

    .getGoodsAddress > h2 {
        font-size: 0.22rem;
        margin-top: 0.14rem;
        font-weight: normal;
    }

    .getGoodsAddress > h2 > span {
        display: inline-block;
        width: 0.55rem;
        height: 0.33rem;
        background: #ffcb3f;
        font-size: 0.18rem;
        line-height: 0.33rem;
        text-align: center;
        color: #fff;
        border-radius: 0.04rem;
        margin-right: 0.15rem;
    }

    .icon-xiangyou {
        color: rgba(0, 0, 0, 0.4);
    }

    .getGoodsAddress > h3 {
        font-size: 0.24rem;
        font-weight: bold;
        margin-top: 0.12rem;
    }

    .getGoodsAddress > h3 > .toAddress {
        float: right;
    }

    .bottomBorderBox {
        width: 100%;
        height: 0.03rem;
        position: absolute;
        top: 2.7rem;
        display: flex;
        justify-content: space-between;
        padding-right: 0.5rem;
    }

    .bottomBorder {
        width: 100%;
        height: 0.03rem;
    }

    .blueBorder {
        display: inline-block;
        width: 0.5rem;
        height: 0.03rem;
        background: #585fff;
        margin: 0 0.01rem;
    }

    .redBorder {
        display: inline-block;
        width: 0.5rem;
        height: 0.03rem;
        background: #ff2d28;
        margin: 0 0.01rem;
    }

    .newAddress {
        width: 4rem;
        height: 1rem;
        margin: 0.2rem auto;
        text-align: center;
        line-height: 1rem;
        font-size: 0.4rem;
        background: #ffcb3f;
        border-radius: 0.2rem;
    }

    /*收获地址结束*/
    /*订单确认开始*/
    .orderSure {
        width: 7.02rem;
        height: auto;
        border-radius: 0.1rem;
        margin: 0.3rem auto;
        padding-top: 0.27rem;
        padding-bottom: 0.27rem;
        box-shadow: 0 0.06rem 0.1rem 0.02rem rgba(118, 118, 118, 0.3);
        position: relative;
    }

    .orderSure > h1 {
        font-size: 0.28rem;
        line-height: 0.36rem;
        font-weight: normal;
    }

    .orderDetail {
        width: 7.02rem;
        height: 0.85rem;
    }

    .orderDetailImg {
        width: 1.02rem;
        height: 100%;
        float: left;
    }

    .orderDetailImg > img {
        display: block;
        width: 100%;
        height: 100%;
    }

    .orderDetailBox {
        margin-left: 0.11rem;
        width: 5.25rem;
        height: 100%;
        float: left;
    }

    .orderDetailBox > h6 {
        font-size: 0.18rem;
        font-weight: normal;
    }

    .detailMore {
        font-size: 0.24rem;
        display: flex;
        justify-content: space-between;
    }

    .detailMore > span > i {
        font-size: 0.18rem;
        font-weight: normal;
    }

    .blod {
        font-weight: bold;
    }

    .otherMessage {
        width: 100%;
        height: 0.34rem;
        font-size: 0.24rem;
        line-height: 0.34rem;
        margin-top: 0.4rem;
        border-bottom: 0.01rem solid #d9d9d9;
    }

    .otherMessage > span {
        float: right;
    }

    .otherMessage > span > i {
        font-size: 0.18rem;
    }

    .moreMessage {
        width: 100%;
        height: 0.48rem;
        font-size: 0.24rem;
        line-height: 0.48rem;
        margin-top: 0.4rem;
        vertical-align: middle;
    }

    .moreMessage > span {
        display: block;
        width: 0.5rem;
        height: 0.48rem;
        line-height: 0.48rem;
        float: left;
    }

    .moreMessage > textarea {
        float: left;
        width: 5.25rem;
        height: 0.44rem;
        border: solid 0.01rem #bfbfbf;
        margin-left: 0.34rem;
        resize: none;
        font-size: 0.18rem;
        line-height: 0.4rem;
        padding-left: 0.36rem;
        outline-color: lightskyblue;
    }

    /*订单确认结束*/
    /*发票信息开始*/
    .receipt {
        width: 7.02rem;
        height: 1.96rem;
        margin: 0 auto 0.3rem;
        border-radius: 0.1rem;
        padding-top: 0.27rem;
        box-shadow: 0 0.06rem 0.1rem 0.02rem rgba(118, 118, 118, 0.3);
    }

    .receipt > .aline {
        margin: 0.22rem 0 0.29rem 0;
    }

    .receipt > h4 {
        font-size: 0.28rem;
        font-weight: normal;
    }

    .receipt > h5 {
        font-size: 0.24rem;
        font-weight: normal;
    }

    /*发票信息结束*/
    /*去支付开始*/
    .goPay {
        width: 100%;
        height: 0.9rem;
        position: fixed;
        left: 0;
        bottom: 0;
        line-height: 0.9rem;
        font-size: 0.24rem;
        padding-left: 0.24rem;
        border-top: 0.01rem solid #d7d7d7;
        display: flex;
        justify-content: space-between;
    }

    .rmbAll {
        font-size: 0.28rem;
        font-weight: bold;
        color: #ffcb3f;
        margin-left: 0.1rem;
    }

    .unit {
        font-size: 0.18rem;
        font-weight: normal;
        color: #000;
        margin-left: 0;
    }

    .quzhifu {
        width: 2.12rem;
        height: 100%;
        font-size: 0.28rem;
        border-radius: 0.04rem;
        background: #ffcb3f;
        font-weight: bold;
        float: right;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .quzhifu > i {
        color: #fff;
    }

    /*去支付结束*/
    .wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        background: #fff!important;
    }

    .inner {
        width: 100%;
        height: auto;
    }
</style>