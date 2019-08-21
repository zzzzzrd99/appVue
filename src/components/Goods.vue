<template>
    <li class="recommendItem" @click="$router.push({name:'content',query:{id:item.id}})">
        <div class="recommendItemTop">
            <img :src="item.thumb" alt="">
        </div>
        <div class="recommendItemBottom">
            <div class="recommendItemLine"></div>
            <h4>{{item.name_en}}</h4>
            <h3>{{item.name_ch}}</h3>
            <div class="recommendItemBottomFooter">
                <h3>{{item.price}}<span>RMB</span></h3>
                <a href="#" class="recommendItemBottomFooterBuy">
                    <i class="iconfont icon-jia"></i>
                    点击购买
                </a>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        name: "Goods",
        data: () => ({}),
        props: {
            item: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    #goods {
        padding-bottom: 0.5rem;
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
    .recommendItemTop>img{
        width: 100%;
        height: 100%;
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
</style>