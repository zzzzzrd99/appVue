<template>
    <div style="height: 100%;padding-bottom: 0.98rem">
        <my-header></my-header>
        <!--内容标题-->
        <div id="title">
            我的收藏
        </div>

        <div class="wrapper" ref="wrapper">
            <div class="inner">
                <!--内容部分开始-->
                <div class="section">
                    <ul class="container">
                        <li v-for="item in collectList">
                            <!--点击整个商品详情的框进入商品详情页-->
                            <div class="shop-container">
                                <div class="goods">
                                    <img :src="item.thumb" alt="">
                                </div>
                                <div class="goods-item">
                                    <p>{{item.brand}}<span class="goods-name">{{item.name_ch}}</span></p>
                                    <h3 class="goods-type">{{item.colors}}</h3>
                                    <h3 class="date">2019-03-20</h3>
                                </div>
                                <div class="goods-price">
                                    <!--<p class="goods-num">￥{{item.goods_price * item.number}}</p>-->
                                    <p class="price-box"> <span class="price">{{item.price}}</span>RMB</p>
                                </div>
                                <span class="shop-extra-function">
                                    <span class="find" @click="cancelCollection(item.id)">取消收藏</span>
                                    <span class="buy">加入购物车</span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--内容部分结束-->
                <my-recommend :goods="goods"></my-recommend>
            </div>
        </div>
        <my-footer hot="My"></my-footer>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue"
    import Recommend from "../../components/Recommend";
    import Footer from "../../components/Footer";
    import BScroll from "better-scroll"
    import {mapGetters} from "vuex"

    export default {
        name: "MyCollect",
        data: () => ({
            goods:[],
            page:1,
            total:0,
            collectList:[]
        }),
        components:{
            "my-header":Header,
            "my-recommend":Recommend,
            "my-footer":Footer
        },
        methods:{
            fetchGoodsData:function () {
                this.$http.get("/api/goods/goods",{
                    params:{
                        page: this.page,
                        pageSize: 8,
                    }
                }).then(res=>{
                    if(res.data.code===200){
                        this.goods=[...this.goods,...res.data.data];
                        this.total=res.data.total;
                        if(!this.scroll){
                            this.$nextTick(()=>{
                                this.scroll=new BScroll(this.$refs.wrapper,{
                                    pullUpLoad:{
                                        threshold:0
                                    },
                                    click:true
                                });
                                this.scroll.on("pullingUp",()=>{
                                    if(this.page*8>this.total){
                                        this.scroll.finishPullUp();
                                        return;
                                    }else{
                                        this.page++;
                                        this.fetchGoodsData();
                                        this.scroll.finishPullUp();
                                    }
                                })
                            })
                        }else{
                            this.scroll.refresh();
                        }
                    }else{
                        console.log("获取失败");
                    }
                }).catch(()=>{
                    console.log("获取失败");
                })
            },
            fetchCollectList:function () {
                this.$http.get("/api/collection/collection",{
                    params:{
                        uid:localStorage.login
                    }
                }).then(res=>{
                    if(res.data.code===200){
                        this.collectList=res.data.data;
                        console.log("获取成功");
                    }else if(res.data.code===400){
                        this.collectList=[];
                    }else{
                        console.log("后台错误");
                    }
                })
            },
            cancelCollection:function(id){
                this.$http.delete('/api/collection/collection',{params:{uid:localStorage.login,gid:id}}).then(res=>{
                    if (res.data.code===200){
                        console.log(res.data.msg);
                        this.fetchCollectList();
                    } else{
                        console.log(res.data.msg);
                    }
                }).catch(()=>{
                    console.log('连接失败');
                })
            }
        },
        mounted() {
            this.fetchGoodsData();
            this.fetchCollectList();
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
        padding-top: 0.78rem;
    }

    .inner {
        width: 100%;
        height: auto;
        padding-top: 0.78rem;
    }

    /*内容标题*/
    #title{
        width: 100%;
        height: 0.78rem;
        background: #fff;
        border-top: solid 0.01rem #eeeeee;
        border-bottom: solid 0.01rem #eeeeee;
        text-align:center;
        font-size: 0.28rem;
        line-height: 0.78rem;
        padding: 0 0.24rem;
        position:fixed;
        top: 0.88rem;
        left: 0;
        z-index: 10;
    }
    #title>i{
        position: absolute;
        left: 0.24rem;
        float: left;
        color: #000;
    }

    /*内容部分开始*/
    .section{
        width: 100%;
        height:auto;
        margin-bottom: 0.5rem;
    }
    .section>ul{
        height: auto;
        margin: 0 auto;
    }
    .section>ul>li{
        width: 100%;
        height: 3.06rem;
        margin-bottom: 0.2rem;
    }
    .section>ul>li>a{
        color: #000;
    }
    .shop-container{
        display: block;
        width: 100%;
        height: 100%;
        background: #fff;
        box-shadow: 0 0.01rem 0.21rem 0  rgba(0, 0, 0, 0.09);
        border-radius: 0.1rem;
        padding: 0.52rem 0.18rem 0.23rem 0.18rem;
    }
    .goods>img{
        width: 1.86rem;
        height: 1.31rem;
        float: left;
    }
    .goods-item{
        width: auto;
        height: auto;
        float: left;
        padding-top: 0.14rem;
        margin-left: 0.1rem;
        color: rgba(0,0,0,0.6);
    }
    .goods-item>p{
        font-size: 0.16rem;
        line-height: 0.18rem;
    }
    .goods-item>p>span{
        font-size: 0.22rem;
        color: #000;
    }
    .goods-item>h3{
        font-size: 0.16rem;
        margin-top: 0.09rem;
        font-weight: normal;
    }
    .goods-item>h3.date{
        margin-top: 0.37rem;
        font-size: 0.16rem;
    }
    .goods-price{
        width: 2rem;
        height: auto;
        float: right;
        padding-top: 0.07rem;
        text-align: right;
    }
    .goods-num{
        width: 100%;
        font-size: 0.24rem;
    }
    .price-box{
        width: 100%;
        font-size: 0.18rem;
        margin-top: 0.79rem;
        letter-spacing:0.03rem;
    }

    .price-box>span{
        font-size: 0.26rem;
        font-weight: bold;
    }
    .shop-extra-function{
        width: 100%;
        height: 0.44rem;
        float: left;
        margin-top: 0.11rem;
    }
    .shop-extra-function>span.find{
        display: block;
        color: #999;
        font-size: 0.24rem;
        line-height: 0.44rem;
        margin-left: 3.88rem;
        float: left;
    }
    .shop-extra-function>span.buy{
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
    #space{
        width: 100%;
        height: 1.24rem;
    }
</style>