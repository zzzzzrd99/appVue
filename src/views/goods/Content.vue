<template>
    <div class="content">
        <my-header></my-header>
        <div class="wrapper" ref="wrapper">
            <div class="inner">
                <!--顶部导航开始-->
                <div class="header container">
                    <router-link to="/content">
                        <div class="choose active">商品详情 <span></span></div>
                    </router-link>
                    <router-link to="/comment">
                        <div class="choose">商品评论</div>
                    </router-link>
                </div>
                <!--顶部导航结束-->
                <!--商品详情开始-->
                <div class="goodsDetail">
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="item in goods.pics">
                            <div class="goodsBigImg">
                                <img :src="item" alt="">
                            </div>
                        </swiper-slide>
                    </swiper>
                    <div class="imgNum">
                    </div>
                    <div class="goodsDetaileBox container">
                        <h1>{{goods.name_ch}} {{goods.name_en}}</h1>
                        <div class="aline"></div>
                        <h2>种类<span>{{goods.category}}</span></h2>
                        <h2>规格<span>{{goods.size_dec}}</span></h2>
                        <h2 class="differH2">颜色
                            <span class="allColor">
                                <label v-for="item in goods.colors">
                                    <input type="radio" :value="item" :key="item" name="size" v-model="checkedColor">
                                    {{item}}
                                </label>
                            </span>
                        </h2>
                        <h2>配送<span>{{goods.from}} 至 ... 家装物流 免运费 </span></h2>
                        <div class="aline"></div>
                        <h1 class="price">{{goods.price}} <span>RMB</span></h1>
                        <div class="buyNum">购买数量
                            <div class="add">
                                <span class="lassGoods" @click="number<=1?number=1:number--">-</span>
                                <i class="wantGoodsNum">{{number}}</i>
                                <span class="addGoods" @click="number++">+</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!--商品详情结束-->
                <!--浏览过的商品开始-->
                <div class="haveSawGoods container">
                    <div class="alineShort"></div>
                    <h2>您已经<span>浏览</span>过的商品</h2>
                    <div class="sawList">
                        <swiper :options="options2" ref="mySwiper">
                            <swiper-slide v-for="item in viewGoods" :key="item.id">
                                <my-goods :item="item"></my-goods>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
                <!--浏览过的商品结束-->
                <!--商品详情开始-->
                <div class="goodsDetailBox">
                    <!--块头开始-->
                    <div class="introduceHead">
                        <div class="IHline1"></div>
                        <div class="IHline2"></div>
                        <h5>COMMODITY DETAILS</h5>
                        <h1> 商品 <span>详情</span></h1>
                        <div class="IHline3"></div>
                    </div>
                    <!--块头结束-->
                    <!--商品尺寸开始-->
                    <div class="goodsSize">
                        <div class="goodsSizeImg">
                            <img :src="goods.thumb" alt="">
                        </div>
                        <div class="circleBig">
                            <div class="circleFFSmall">
                                坚固椅背
                            </div>
                        </div>
                        <div class="circleBig2">
                            <div class="circleFFSmall">
                                柔软坐垫
                            </div>
                        </div>
                        <div class="topLineSize">
                            <span>1000MM</span>
                        </div>
                        <div class="leftLineSize">
                            <span>1200MM</span>
                        </div>
                        <div class="bottomLineSize">
                            <span>1000MM</span>
                        </div>
                        <div class="leftLine"></div>
                        <div class="rightLine"></div>
                    </div>
                    <!--商品尺寸结束-->
                    <!--场景图开始-->
                    <div class="scenarioBox">
                        <div class="scenarioImg">
                            <img :src="goods.content_mob" alt="">
                            <div class="cover"></div>
                            <div class="scenarioImgSmall">
                                <img :src="goods.content_mob" alt="">
                            </div>
                            <div class="verticalLine"></div>
                        </div>
                        <h2>场景图</h2>
                        <h3>SCENARIO</h3>
                    </div>
                    <!--场景图结束-->
                    <!--细节图开始-->
                    <div class="scenarioBox">
                        <div class="scenarioImg">
                            <img :src="goods.content_pc" alt="">
                            <div class="cover"></div>
                            <div class="scenarioImgSmall">
                                <img :src="goods.content_pc" alt="">
                            </div>
                            <div class="verticalLine"></div>
                        </div>
                        <h2>细节图</h2>
                        <h3>DETAILS</h3>
                    </div>
                    <!--细节图结束-->
                </div>
                <!--商品详情结束-->
                <!--服务保障开始-->
                <div class="serviceProtect">
                    <div class="introduceHead">
                        <div class="IHline1"></div>
                        <div class="IHline2"></div>
                        <h5>SERVICE GUARANTEE</h5>
                        <h1> 服务 <span>保障</span></h1>
                        <div class="IHline3"></div>
                    </div>
                    <ul class="fourProtect">
                        <li>
<span class="circleCont">
<span class="circleSmall">1</span>
</span>
                            <span>优质选材</span>
                        </li>
                        <div class="rowLineShort"></div>
                        <li>
<span class="circleCont">
<span class="circleSmall">2</span>
</span>
                            <span>科技生产</span>
                        </li>
                        <div class="rowLineShort"></div>
                        <li>
<span class="circleCont">
<span class="circleSmall">3</span>
</span>
                            <span>精湛工艺</span>
                        </li>
                        <div class="rowLineShort"></div>
                        <li>
<span class="circleCont">
<span class="circleSmall">4</span>
</span>
                            <span>贴心包装</span>
                        </li>
                    </ul>
                </div>
                <!--服务保障结束-->
                <!--推荐商品开始-->
                <my-recommend :goods="goodsList"></my-recommend>
                <!--推荐商品结束-->
            </div>
        </div>
        <!--底部导航栏开始-->
        <div class="footerNav">
            <div class="collectGoods" @click="collect">
                <span><i :class="['iconfont','icon-shoucang',{active:collectState}]"></i></span> <!-- 添加icon-->
                <span>{{collectState?'已收藏':'收藏'}}</span>
            </div>
            <div class="intoCar" @click="jumpToShopCar">加入购物车</div>
            <a href="#">
                <div class="byNow">立即购买</div>
            </a>
        </div>
        <!--底部导航栏结束-->
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Recommend from "@/components/Recommend";
    import Goods from "@/components/Goods";
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import BScroll from 'better-scroll'
    import { mapMutations, mapGetters } from 'vuex'

    export default {
        name: "Content",
        data: () => ({
            id: 0,
            goods: [],
            goodsList: [],
            page: 1,
            page2: 0,
            pageSize: 0,
            total: 0,
            viewHistory: [],
            viewGoods: [],
            checkedColor: '红色',
            number: 1,
            stateCart:false,  // 当前商品有没有加入checked:false购物车
            swiperOption: {
                autoplay: true,
                pagination: {
                    el: '.imgNum',
                    type: 'fraction',
                },
            },
            options2: {
                freeMode: true,
                slidesPerView: 2
            },
            collectState:false,
        }),
        computed: {
            ...mapGetters(['hasSomeGoods']),
            swiper: function () {
                return this.$refs.mySwiper.swiper;
            },
        },
        methods: {
            ...mapMutations(['add','remove']),
            fetchData: function () {
                this.$http.get("/api/goods/goods", {
                    params: {
                        id: this.id
                    }
                }).then(r => {
                    let data = r.data.data;
                    data.pics = data.pics.split(";");
                    data.colors = data.colors.split(",");
                    this.goods = data;
                    this.checkedColor = this.goods.colors[0];
                    this.stateCart = this.hasSomeGoods(data.id);
                    if (this.stateCart) {
                        this.number = this.stateCart.number;
                        this.checkedColor = this.stateCart.colors;
                    }
                    if (localStorage.login){
                        this.$http.get('/api/collection/collection',{params:{uid:localStorage.login,gid:this.goods.id}}).then(res=>{
                            if (res.data.code===200){
                                this.collectState=true;
                            } else{
                                console.log(res.data.msg);
                            }
                        }).catch(()=>{
                            console.log('未知错误');
                        })
                    }
                    else{
                        console.log('购物车信息获取失败');
                    }
                }).catch(() => {
                    console.log("信息获取失败");
                })
            },
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
            fetchViewHistory: function () {
                let data = this.viewHistory.slice(this.page2 * 5, this.page2 * 5 + 5);
                data.forEach((id) => {
                    if (id === this.id) {
                        return;
                    }
                    this.$http.get("/api/goods/goods", {params: {id}}).then(res => {
                        if (res.data.code === 200) {
                            this.viewGoods.push(res.data.data);
                        } else {
                            console.log("获取失败")
                        }
                    }).catch(() => {
                        console.log("未知错误");
                    })
                })
            },
            jumpToShopCar: function () {
                if(this.stateCart){
                    this.remove({id:this.id});
                }
                if (localStorage.login) {
                    this.add({
                        gid: this.id,
                        sizes: this.checked,
                        number: this.number,
                        state: 0,
                        name_ch: this.goods.name_ch,
                        name_en: this.goods.name_en,
                        brand: this.goods.brand,
                        thumb: this.goods.thumb,
                        colors: this.checkedColor,
                        goods_price: this.goods.price,
                        tags: this.goods.tags,
                        checked:false,
                        uid: localStorage.login
                    })
                } else {
                    localStorage.goods = JSON.stringify({
                        sizes: this.checked,
                        number: this.number,
                        state: 0,
                        name_ch: this.goods.name_ch,
                        name_en: this.goods.name_en,
                        brand: this.goods.brand,
                        thumb: this.goods.thumb,
                        goods_price: this.goods.price,
                        tags: this.goods.tags,
                        colors: this.checkedColor,
                        checked:false
                    });
                }
                this.$router.push('/shopCar');
            },
            collect:function(){
                if (this.collectState){
                    this.$http.delete('/api/collection/collection',{params:{uid:localStorage.login,gid:this.goods.id}}).then(res=>{
                        if (res.data.code===200){
                            console.log("已经取消收藏");
                            this.collectState=false;
                        } else{
                            console.log('后台操作失败')
                        }
                    }).catch(()=>{
                        console.log("操作失败")
                    })
                }else{
                    if (localStorage.login){
                        this.$http.post('/api/collection/collection',{uid:localStorage.login,gid:this.goods.id}).then(res=>{
                            if (res.data.code===200){
                                console.log("收藏成功");
                                this.collectState=true;
                            } else{
                                console.log('收藏失败')
                            }
                        }).catch(()=>{
                            console.log("操作失败")
                        })
                    } else{
                        this.$router.push('/login');
                    }

                }
            }
        },
        components: {
            "my-header": Header,
            "my-recommend": Recommend,
            "my-goods": Goods,
            swiper,
            swiperSlide
        },
        beforeRouteUpdate(to, from, next) {
            this.page2 = 0;
            this.id = String(to.query.id);
            this.fetchData();
            this.viewGoods = [];
            this.fetchViewHistory();
            this.swiper.slideTo(1, 0);
            this.scroll.scrollTo(0, 0, 0);
            next();
        },
        mounted: function () {
            // 初始化
            let {id} = this.$route.query;
            this.id = String(id);
            if (localStorage.viewHistory) {
                this.viewHistory = JSON.parse(localStorage.viewHistory);
            }
            if (!(this.viewHistory.includes(this.id))) {
                this.viewHistory.push(this.id);
                localStorage.viewHistory = JSON.stringify(this.viewHistory);
            }
            // 调用获取数据的方法
            this.fetchData();
            this.fetchGoodsData();
            this.fetchViewHistory();
            // 注册事件
            this.swiper.on("reachEnd", () => {
                if (this.page2 * 5 > this.viewHistory.length) {
                    return;
                }
                this.page2++;
                this.fetchViewHistory();
            });
        }
    }
</script>

<style lang="scss" scoped>
    i {
        font-style: normal;
    }

    .content {
        width: 100%;
        height: 100%;
    }

    .header {
        width: 7.5rem;
        height: 0.8rem;
        border-bottom: 0.01rem solid #ffcb3f;
        border-top: 0.01rem solid #f2f2f2;
        font-size: 0.24rem;
        text-align: center;
        line-height: 0.75rem;
        display: flex;
        justify-content: space-around;
    }

    .choose {
        width: 1rem;
        height: 100%;
        color: #000;
    }

    .choose span {
        display: block;
        width: 0.46rem;
        height: 0.03rem;
        background: #ffcb3f;
        margin: 0 auto;
    }

    .active {
        font-weight: bold;
        color: #ffcb3f;
    }

    /*顶部导航结束*/
    /*商品详情开始*/
    .goodsDetail {
        width: 100%;
        height: 10.94rem;
        padding: 0 0.24rem;
    }

    .goodsBigImg {
        width: 100%;
        height: 5rem;
    }

    .goodsBigImg > img {
        width: 100%;
        height: 100%;
    }

    .imgNum {
        text-align: right;
        font-size: 0.24rem;
        margin-top: 0.09rem;
    }

    .imgNum > span {
        font-size: 0.3rem;
        color: #ffcb3f;
    }

    .goodsDetaileBox h1 {
        font-size: 0.3rem;
        line-height: 0.36rem;
        letter-spacing: 0.03rem;
        color: #000000;
        margin-top: 0.32rem;
    }

    .aline {
        width: 100%;
        height: 0.01rem;
        background: #d7d7d7;
        margin-top: 0.22rem;
        position: relative;
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

    .goodsDetaileBox > h2 {
        font-size: 0.24rem;
        line-height: 0.36rem;
        margin-top: 0.3rem;
        font-weight: normal;
    }

    .differH2 {
        display: flex;
        flex-direction: row;
        align-items: center;
        vertical-align: middle;
    }

    .allColor {
        width: 3.5rem;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .allColor label {
        display: flex;
        align-items: center;
    }

    .chooseColor {
        display: inline-block;
        width: 0.44rem;
        height: 0.44rem;
        border: 0.01rem solid #ffcb3f;
        border-radius: 50%;
        position: relative;
    }

    .chooseColor-2 {
        width: 0.38rem;
        height: 0.38rem;
        border: 0.02rem solid #ffcb3f;
        border-radius: 50%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .chooseColor-3 {
        width: 0.3rem;
        height: 0.3rem;
        border: 0.02rem solid #fff;
        background: #ffcb3f;
        border-radius: 50%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .chooseColor2 {
        display: inline-block;
        width: 0.37rem;
        height: 0.37rem;
        border: 0.06rem solid #d880d7;
        background: #fff;
        border-radius: 50%;
        margin-left: 0.52rem;
    }

    .b5d5 {
        border-color: #b5d548;
    }

    .efc5 {
        border-color: #efc5a1;
    }

    .goodsDetaileBox > h2 > span {
        margin-left: 0.27rem;
    }

    .price {
        font-family: Arial;
        letter-spacing: 0 !important;
    }

    .price span {
        font-family: Arial;
        font-size: 0.16rem;
    }

    .buyNum {
        width: 100%;
        height: 0.43rem;
        /*background: #d7d7d7;*/
        margin-top: 0.3rem;
        font-size: 0.24rem;
    }

    .buyNum > .add {
        float: right;
    }

    .buyNum > .add > span {
        display: inline-block;
        width: 0.43rem;
        height: 0.43rem;
        line-height: 0.43rem;
        text-align: center;
        border: 1px solid #d7d7d7;
        margin: 0 0.12rem;
    }

    .buyNum > .add > span:last-child {
        margin-right: 0;
    }

    /*商品详情结束*/
    /*浏览过的商品开始*/
    .haveSawGoods {
        width: 100%;
        height: 6.26rem;
        padding: 0 0.24rem;
    }

    .alineShort {
        width: 3rem;
        height: 0.02rem;
        background: #d7d7d7;
        position: relative;
        margin-bottom: 0.38rem;
    }

    .alineShort::before {
        content: '';
        display: inline-block;
        width: 0.47rem;
        height: 0.02rem;
        background: #ffcb3f;
        position: absolute;
        left: 0;
        top: 0;
    }

    .haveSawGoods > h2 {
        font-size: 0.24rem;
        margin-bottom: 0.31rem;
    }

    .haveSawGoods > h2 > span {
        font-size: 0.26rem;
        font-weight: bold;
        color: #ffcb3f;
    }

    .sawList {
        width: 100%;
        height: 5.08rem;
    }

    .recommendItem2 {
        width: 3.24rem;
        height: 5.08rem;
        background: #fff;
        margin-right: 0.3rem;
        box-sizing: content-box;
        flex-shrink: 0;
    }

    /*浏览过的商品结束*/
    /*块头介绍开始*/
    .serviceProtect {
        margin-bottom: 0.96rem;
    }

    .introduceHead {
        width: auto;
        height: auto;
        margin: 0.84rem 0 0.73rem 0;
    }

    .introduceHead > .IHline1 {
        width: 1.47rem;
        height: 0.02rem;
        background: #fff;
        margin: 0 auto 0.08rem;
        border-left: 0.47rem solid #ffcb3f;
    }

    .introduceHead > .IHline2 {
        width: 1.47rem;
        height: 0.01rem;
        background: #d7d7d7;
        margin: 0 auto;
    }

    .introduceHead > .IHline3 {
        width: 0.34rem;
        height: 0.02rem;
        background: #000;
        margin: 0 auto;
    }

    .introduceHead > h5 {
        font-size: 0.18rem;
        text-align: center;
    }

    .introduceHead > h1 {
        font-size: 0.32rem;
        text-align: center;
        margin-bottom: 0.19rem;
    }

    .introduceHead > h1 > span {
        color: #ffcb3f;
    }

    /*块头介绍结束*/
    /*商品尺寸开始*/
    .goodsSize {
        width: 6.41rem;
        height: 6.48rem;
        margin: 0 auto 1.07rem;
        position: relative;
    }

    .goodsSizeImg {
        width: 2.91rem;
        height: 3.5rem;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }

    .goodsSizeImg > img {
        width: 100%;
        height: 100%;
    }

    .circleBig {
        width: 1.21rem;
        height: 1.22rem;
        border: 0.02rem solid #ffcb3f;
        border-radius: 50%;
        position: relative;
    }

    .circleFFSmall {
        width: 1rem;
        height: 0.99rem;
        background: #ffcb3f;
        border-radius: 50%;
        color: #fff;
        font-size: 0.22rem;
        text-align: center;
        line-height: 0.99rem;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }

    .circleBig::before {
        content: "";
        display: block;
        width: 0.1rem;
        height: 0.1rem;
        background: #fff;
        border: 0.01rem solid #ffcb3f;
        border-radius: 50%;
        position: absolute;
        left: 0.034rem;
        top: 0.19rem;
    }

    .circleBig::after {
        content: "";
        display: block;
        width: 0.1rem;
        height: 0.1rem;
        background: #fff;
        border: 0.01rem solid #ffcb3f;
        border-radius: 50%;
        position: absolute;
        right: 0.034rem;
        bottom: 0.19rem;
    }

    .circleBig2 {
        width: 1.21rem;
        height: 1.22rem;
        float: right;
        position: absolute;
        bottom: 2rem;
        right: 0;
        border: 0.01rem solid #ffcb3f;
        border-radius: 50%;
    }

    .circleBig2::before {
        content: "";
        display: block;
        width: 0.1rem;
        height: 0.1rem;
        background: #fff;
        border: 0.01rem solid #ffcb3f;
        border-radius: 50%;
        position: absolute;
        left: 0.034rem;
        top: 0.19rem;
    }

    .circleBig2::after {
        content: "";
        display: block;
        width: 0.1rem;
        height: 0.1rem;
        background: #fff;
        border: 0.01rem solid #ffcb3f;
        border-radius: 50%;
        position: absolute;
        right: 0.034rem;
        bottom: 0.19rem;
    }

    .topLineSize {
        width: 2.91rem;
        height: 0.6rem;
        border: 0.01rem solid #ffcb3f;
        border-bottom: none;
        position: absolute;
        top: 0.89rem;
        left: 1.75rem;
    }

    .topLineSize > span {
        display: block;
        width: 0.83rem;
        height: 0.15rem;
        background: #fff;
        color: #000;
        font-size: 0.18rem;
        line-height: 0.16rem;
        position: absolute;
        left: 1rem;
        top: -0.1rem;
        text-align: center;
    }

    .leftLineSize {
        width: 0.69rem;
        height: 3.5rem;
        border: 0.01rem solid #ffcb3f;
        border-right: none;
        position: absolute;
        left: 1.1rem;
        top: 1.49rem;
    }

    .leftLineSize > span {
        display: block;
        width: 0.83rem;
        height: 0.15rem;
        background: #fff;
        color: #000;
        font-size: 0.18rem;
        line-height: 0.16rem;
        position: absolute;
        left: -0.4rem;
        top: 1.6rem;
        text-align: center;
    }

    .bottomLineSize {
        width: 2.32rem;
        height: 0.52rem;
        border: 0.01rem solid #ffcb3f;
        border-top: none;
        position: absolute;
        left: 2.04rem;
        bottom: 1rem;
    }

    .bottomLineSize > span {
        display: block;
        width: 0.83rem;
        height: 0.15rem;
        background: #fff;
        color: #000;
        font-size: 0.18rem;
        line-height: 0.16rem;
        position: absolute;
        left: 0.7rem;
        top: 0.45rem;
        text-align: center;
    }

    .leftLine {
        width: 1.4rem;
        height: 0.01rem;
        background: #ffcb3f;
        transform: rotate(45deg);
        position: absolute;
        left: 1rem;
    }

    .rightLine {
        width: 1rem;
        height: 0.01rem;
        background: #ffcb3f;
        transform: rotate(-20deg);
        position: absolute;
        right: 1.18rem;
        bottom: 2.5rem;
    }

    /*商品尺寸结束*/
    /*场景图开始*/
    .scenarioBox {
        margin-bottom: 0.9rem;
    }

    .scenarioImg {
        width: 100%;
        height: 4.14rem;
        position: relative;
    }

    .scenarioImg > img {
        width: 100%;
        height: 100%;
    }

    .cover {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        position: absolute;
        left: 0;
        top: 0;
    }

    .scenarioImgSmall {
        width: 4.92rem;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: white;
    }

    .scenarioImgSmall > img {
        width: 100%;
        height: 100%;
    }

    .verticalLine {
        width: 0.03rem;
        height: 1.06rem;
        background: #ffcb3f;
        position: absolute;
        top: 3.8rem;
        left: 2.24rem;
    }

    .scenarioBox > h2 {
        font-size: 0.24rem;
        text-align: center;
        margin-bottom: 0.08rem;
        margin-top: 0.72rem;
    }

    .scenarioBox > h3 {
        font-size: 0.18rem;
        text-align: center;
    }

    /*场景图结束*/
    /*服务保障开始*/
    .fourProtect {
        width: 6.63rem;
        height: 1.91rem;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .fourProtect > li {
        width: 1.02rem;
        height: 1.92rem;
        position: relative;
        line-height: 1rem;
    }

    .fourProtect > li > .circleCont {
        display: block;
        width: 0.98rem;
        height: 0.98rem;
        border: 0.01rem solid #ffcb3f;
        border-radius: 50%;
        position: relative;
    }

    .circleSmall {
        display: block;
        width: 0.77rem;
        height: 0.77rem;
        background: #ffcb3f;
        border-radius: 50%;
        text-align: center;
        line-height: 0.77rem;
        font-size: 0.36rem;
        color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .circleCont::before {
        content: "";
        width: 0.11rem;
        height: 0.11rem;
        border: 0.01rem solid #ffcb3f;
        border-radius: 50%;
        position: absolute;
        left: 0.04rem;
        top: 0.1rem;
        background: #fff;
    }

    .circleCont::after {
        content: "";
        width: 0.11rem;
        height: 0.11rem;
        border: 0.01rem solid #ffcb3f;
        border-radius: 50%;
        position: absolute;
        right: 0.06rem;
        bottom: 0.07rem;
        background: #fff;
    }

    .rowLineShort {
        width: 0.82rem;
        height: 0.01rem;
        background: #ffcb3f;
        margin-top: 0.48rem;
    }

    .fourProtect > li > span:last-child {
        font-size: 0.24rem;
    }

    /*服务保障结束*/
    /*底部导航开始*/
    .footerNav {
        width: 100%;
        height: 0.96rem;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        background: #fff;
    }

    .collectGoods {
        width: 1.3rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-content: center;
        border-right: 0.02rem solid #eeeeee;
    }

    .collectGoods > span {
        font-size: 0.2rem;
        color: #666666;
        text-align: center;
    }

    .intoCar {
        width: 3.11rem;
        height: 100%;
        color: #666666;
        font-size: 0.28rem;
        line-height: 0.96rem;
        text-align: center;
    }

    .byNow {
        width: 3.09rem;
        height: 100%;
        background: #ffcb3f;
        border-radius: 0.04rem;
        line-height: 0.96rem;
        text-align: center;
        color: #fff;
        font-size: 0.28rem;
    }

    /*底部导航结束*/
    #recommendShop {
        margin-bottom: 0.96rem;
    }

    #recommendShop {
        width: 100%;
    }

    .recommendContainer {
        width: 7.02rem;
        margin: 0 auto;
        position: relative;
    }

    .recommendLine {
        width: 0.03rem;
        height: 0.21rem;
        position: absolute;
        background-color: #ffcb3f;
        left: 0;
        top: 0.1rem;
    }

    .recommendBox {
        width: 6.82rem;
        height: 11.06rem;
        margin: 0 auto;
    }

    .recommendBox > h3 {
        font-size: 0.3rem;
        color: #000;
        letter-spacing: 0.02rem;
        font-weight: 400;
        margin-bottom: 0.36rem;
    }

    .recommendList {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .recommendItem {
        width: 3.24rem;
        height: 5.08rem;
        margin-bottom: 0.24rem;
        background: #fff;
    }

    .recommendItemTop {
        width: 100%;
        height: 3.05rem;
        margin-bottom: 0.24rem;
    }

    .img1 {
        background-image: url("../../assets/images/recommend5.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .recommendItemBottom {
        width: 2.82rem;
        height: 1.58rem;
        margin: 0 auto;
    }

    .recommendItemLine {
        width: 0.36rem;
        height: 0.01rem;
        background-color: #000;
        margin-bottom: 0.1rem;
    }

    .recommendItemBottom > h4 {
        font-size: 0.18rem;
        font-weight: 400;
    }

    .recommendItemBottom > h3 {
        font-size: 0.24rem;
        margin-bottom: 0.46rem;
    }

    .recommendItemBottomFooter {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .recommendItemBottomFooter > h3 {
        font-size: 0.23rem;
    }

    .recommendItemBottomFooter > h3 > span {
        font-size: 0.18rem;
        font-weight: 400;
    }

    .recommendItemBottomFooterBuy {
        display: block;
        width: 1.53rem;
        height: 0.44rem;
        text-align: center;
        line-height: 0.44rem;
        font-size: 0.22rem;
        color: #fff;
        background-color: #ffcb3f;
        border-radius: 0.04rem;
    }

    .recommendItemBottomFooterBuy .iconfont {
        font-size: 0.22rem;
        color: #fff;
    }

    .wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

    .inner {
        width: 100%;
        height: auto;
    }
</style>