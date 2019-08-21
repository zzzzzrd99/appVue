<template>
    <div style="height: 100%;">
        <my-header></my-header>
        <!--订单确认开始-->
        <div class="orderSure dongContainer" v-for="item in payList">
            <h1>订单详情</h1>
            <div class="aline"></div>
            <div class="orderDetail">
                <div class="orderDetailImg">
                    <img :src="item.thumb" alt="">
                </div>
                <div class="orderDetailBox">
                    <h6>{{item.name_en}}}</h6>
                    <div class="detailMore"><span>{{item.name_ch}}</span><span
                            class="blod">{{item.goods_price}}<i>RMB</i></span><span>X{{item.number}}</span><span>有货</span>
                    </div>
                    <h6>{{item.colors}}</h6>
                </div>
            </div>
            <div class="otherMessage">商品总价<span>{{totalPrice}}<i>RMB</i></span></div>
            <div class="otherMessage">运费<span>包邮</span></div>
            <div class="moreMessage"><span>备注</span><textarea name="" id="" cols="30" rows="1"
                                                              placeholder="限45个字（请将购买需求在备注中做详细说明）"></textarea></div>
        </div>
        <!--订单确认结束-->
        <!--发票开始-->
        <div class="receipt dongContainer">
            <h4>发票信息</h4>
            <div class="aline"></div>
            <h5>不开发票</h5>
        </div>
        <!--发票结束-->
        <!--选择支付方式开始-->
        <div class="choosePayWay">
            <ul>
                <li>
                    <div class="payWayImg">
                        <i class="iconfont icon-weixin"></i>
                        <div class="chooseThis">
                            <i class="iconfont icon-duigou"></i>
                        </div>
                    </div>
                    <i>微信支付</i>
                </li>
                <li>
                    <div class="payWayImg blueColor">
                        <i class="iconfont icon-zhifubao"></i>
                    </div>
                    <i>支付宝</i>
                </li>
            </ul>
        </div>
        <!--选择支付方式结束-->
        <!--去支付开始-->
        <div class="goPay">
            付款<i class="rmbAll">{{totalPrice}}</i><i class="unit">RMB</i>
            <a href="">
                <div>
                    <i>去支付</i><i class="lastTime"><i class="iconfont icon-naozhong"></i>29.59</i></div>
            </a>
        </div>
        <!--去支付结束-->
        <!--覆盖开始-->
        <div class="bigCover"></div>
        <!--覆盖结束-->
        <!--支付开始-->
        <div class="toTruePay dongContainer">
            <div class="toTruePayHead">
                <i class="iconfont icon-guanbi" @click="$router.back()"></i>
                <span>支付</span>
            </div>
            <div class="nameAll">
                <h2>VICOR家居有限公司</h2>
                <h1>￥{{totalPrice}}</h1>
            </div>
            <div class="coin">
                <div class="lingqian">
                    <div class="coinBack">
                        <i class="iconfont icon-qian"></i>
                    </div>
                    <span>零钱</span>
                </div>
                <i class="iconfont icon-xiangyou"></i>
            </div>
            <div class="sureToPay" @click="pay">确认支付</div>
        </div>
        <!--支付结束-->

    </div>
</template>

<script>
    import Header from "@/components/Header"
    import {mapGetters} from 'vuex'

    export default {
        name: "Pay",
        data: () => ({}),
        components: {
            "my-header": Header,
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
            pay() {
                this.$http.post('/api/pay/pay', {money: this.totalPrice}).then(res => {
                    if (res.data.code === 200) {
                        console.log('支付成功');
                        this.payList.forEach(v => {
                            v.state = 1
                        });
                        this.$http.post('/api/orders/pay', {data: this.payList}).then(
                            res => {
                                if (res.data.code === 200) {
                                    console.log('付款成功,等待发货');
                                    this.$router.push('/payResult');
                                }
                            }
                        ).catch(() => {
                                console.log('支付失败');
                            }
                        )
                    }
                }).catch(()=>{
                    console.log('后台错误');
                    }
                );
            }
        }
    }
</script>

<style lang="scss" scoped>
    body {
        position: relative;
    }

    .choosePayWay {
        width: 7.02rem;
        height: 3rem;
        margin: 0 auto;
        border-radius: 0.04rem;
        box-shadow: -0.01rem 0.05rem 0.05rem 0 rgba(118, 118, 118, 0.17);
    }

    .choosePayWay > ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .choosePayWay > ul > li {
        width: 1.07rem;
        height: 1.57rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .payWayImg {
        width: 1.07rem;
        height: 1.07rem;
        background: #8dc81b;
        border-radius: 50%;
        line-height: 1.07rem;
        text-align: center;
        color: #fff;
        position: relative;
    }

    .payWayImg > i {
        font-size: 1rem;
    }

    .chooseThis {
        width: 0.28rem;
        height: 0.28rem;
        background: #8dc81b;
        border-radius: 50%;
        font-size: 0.2rem;
        color: #fff;
        text-align: center;
        line-height: 0.28rem;
        position: absolute;
        right: 0;
        top: 0;
    }

    .chooseThis > i {
        font-size: 0.2rem;
    }

    .choosePayWay > ul > li > i {
        font-size: 0.24rem;
        text-align: center;
    }

    .blueColor {
        background: none;
        color: #5f74ff;
    }

    /*去支付的时间开始*/
    .lastTime {
        color: #fff;
        font-size: 0.18rem;
    }

    .icon-naozhong {
        font-size: 0.16rem;
    }

    /*去支付的时间结束*/
    /*覆盖开始*/
    .bigCover {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
    }

    /*覆盖结束*/
    /*真正支付开始*/
    .toTruePay {
        width: 5.64rem;
        height: 4.95rem;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: 999;
    }

    .toTruePayHead {
        width: 100%;
        height: 0.85rem;
        border-bottom: 0.01rem solid #d7d7d7;
        padding-top: 0.3rem;
    }

    .toTruePayHead > i {
        font-size: 0.3rem;
    }

    .toTruePayHead > span {
        font-size: 0.3rem;
        margin-left: 1.7rem;
    }

    .nameAll {
        width: 100%;
        height: 1.66rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-bottom: 0.01rem solid #d7d7d7;
    }

    .nameAll > h2 {
        font-size: 0.28rem;
        text-align: center;
    }

    .nameAll > h1 {
        font-size: 0.4rem;
        text-align: center;
    }

    .coin {
        width: 100%;
        height: 0.83rem;
        border-bottom: 0.01rem solid #d7d7d7;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .lingqian {
        width: 1.06rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .coinBack {
        height: 0.45rem;
        width: 0.45rem;
        background: #ffdd65;
        border-radius: 50%;
        position: relative;
    }

    .coinBack > i {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
        line-height: 0.45rem;
        text-align: center;
        color: #ffb30c;
    }

    .lingqian > span {
        font-size: 0.24rem;
    }

    .coin > i {
        font-size: 0.24rem;
    }

    .sureToPay {
        width: 4.99rem;
        height: 0.82rem;
        text-align: center;
        line-height: 0.82rem;
        font-size: 0.28rem;
        color: #fff;
        background: #ffcb3f;
        margin: 0 auto;
        margin-top: 0.36rem;
        border-radius: 0.1rem;
    }

    /*真正支付结束*/

    .dongContainer {
        padding: 0 0.24rem;
    }

    a {
        color: #000;
    }

    * {
        font-family: "微软雅黑";
    }

    i {
        font-style: normal;
    }

    body {
        padding-top: 1.18rem;
    }

    /*收获地址开始*/
    .getGoodsAddress {
        width: 7.02rem;
        height: 2.73rem;
        border-radius: 0.1rem;
        margin: 0 auto 0.3rem;
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

    .getGoodsAddress > h3 > i {
        float: right;
    }

    .bottomBorderBox {
        width: 100%;
        height: 0.03rem;
        position: absolute;
        top: 1.65rem;
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

    /*收获地址结束*/
    /*订单确认开始*/
    .orderSure {
        width: 7.02rem;
        height: 4.87rem;
        border-radius: 0.1rem;
        margin: 0 auto 0.3rem;
        padding-top: 0.27rem;
        box-shadow: -0.01rem 0.05rem 0.05rem 0 rgba(118, 118, 118, 0.17);
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
        box-shadow: -0.01rem 0.05rem 0.05rem 0 rgba(118, 118, 118, 0.17);
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

    .goPay > a > div {
        width: 2.12rem;
        height: 100%;
        font-size: 0.28rem;
        border-radius: 0.04rem;
        background: #ffcb3f;
        color: #fff;
        font-weight: bold;
        float: right;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .goPay > a > div > i {
        display: block;
        width: 0.9rem;
        height: 0.28rem;
    }

    /*去支付结束*/
</style>