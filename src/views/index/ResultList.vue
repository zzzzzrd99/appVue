<template>
    <div>
        <my-header></my-header>
        <!--搜索部分开始-->
        <div id="search">
            <div class="searchBox">
                <div class="searchBoxInput">
                    <div class="searchBoxInputIcon">
                        <img src="../../assets/images/searchActive.png" alt="">
                    </div><!--icon-->
                    <input type="text" id="searchInput" placeholder="搜索店内精品">
                </div>
                <a href="#" class="price">搜索</a>
            </div>
        </div>
        <!--搜索部分结束-->
        <section id="recommendShop" class="listPos">
            <div class="recommendContainer">
                <div class="recommendBox">
                    <ul class="recommendList">
                        <li class="recommendItem">
                            <div class="recommendItemTop img-1"></div>
                            <div class="recommendItemBottom">
                                <div class="recommendItemLine"></div>
                                <h4>VERFO LAB</h4>
                                <h3>现代简约时尚布艺沙发</h3>
                                <div class="recommendItemBottomFooter">
                                    <h3>800<span>RMB</span></h3>
                                    <a href="##" class="recommendItemBottomFooterBuy">
                                        <i class="iconfont icon-jia"></i>
                                        点击购买
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="recommendItem">
                            <div class="recommendItemTop img-2"></div>
                            <div class="recommendItemBottom">
                                <div class="recommendItemLine"></div>
                                <h4>VERFO LAB</h4>
                                <h3>现代简约时尚布艺沙发</h3>
                                <div class="recommendItemBottomFooter">
                                    <h3>800<span>RMB</span></h3>
                                    <a href="##" class="recommendItemBottomFooterBuy">
                                        <i class="iconfont icon-jia"></i>
                                        点击购买
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="recommendItem">
                            <div class="recommendItemTop img-3"></div>
                            <div class="recommendItemBottom">
                                <div class="recommendItemLine"></div>
                                <h4>VERFO LAB</h4>
                                <h3>现代简约时尚布艺沙发</h3>
                                <div class="recommendItemBottomFooter">
                                    <h3>800<span>RMB</span></h3>
                                    <a href="##" class="recommendItemBottomFooterBuy">
                                        <i class="iconfont icon-jia"></i>
                                        点击购买
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="recommendItem">
                            <div class="recommendItemTop img-4"></div>
                            <div class="recommendItemBottom">
                                <div class="recommendItemLine"></div>
                                <h4>VERFO LAB</h4>
                                <h3>现代简约时尚布艺沙发</h3>
                                <div class="recommendItemBottomFooter">
                                    <h3>800<span>RMB</span></h3>
                                    <a href="##" class="recommendItemBottomFooterBuy">
                                        <i class="iconfont icon-jia"></i>
                                        点击购买
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="recommendItem">
                            <div class="recommendItemTop img-5"></div>
                            <div class="recommendItemBottom">
                                <div class="recommendItemLine"></div>
                                <h4>VERFO LAB</h4>
                                <h3>现代简约时尚布艺沙发</h3>
                                <div class="recommendItemBottomFooter">
                                    <h3>800<span>RMB</span></h3>
                                    <a href="##" class="recommendItemBottomFooterBuy">
                                        <i class="iconfont icon-jia"></i>
                                        点击购买
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="recommendItem">
                            <div class="recommendItemTop img-6"></div>
                            <div class="recommendItemBottom">
                                <div class="recommendItemLine"></div>
                                <h4>VERFO LAB</h4>
                                <h3>现代简约时尚布艺沙发</h3>
                                <div class="recommendItemBottomFooter">
                                    <h3>800<span>RMB</span></h3>
                                    <a href="##" class="recommendItemBottomFooterBuy">
                                        <i class="iconfont icon-jia"></i>
                                        点击购买
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue"
    export default {
        name: "ResultList",
        data: () => ({})
    }
</script>

<style lang="scss" scoped>
    /*搜索部分开始*/
    #search{
        width:100%;
        border:0.01rem solid #f2f2f2;
        background: #fff;
        position:fixed;
        top:0.88rem;
        left:0;
        z-index: 999;
        box-shadow:0 0.1rem 0.16rem rgba(0,0,0,0.04);
    }
    .searchBox{
        width:6.82rem;
        margin:0 auto;
        height:0.88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .searchBoxInput{
        width:6.04rem;
        height:0.6rem;
        border-radius:0.3rem;
        border:0.01rem solid #d9d9d9;
        padding:0 0.2rem;
        display: flex;
        align-items: center;
    }
    .searchBoxInputIcon{
        width:0.24rem;
        height:0.25rem;
    }
    .searchBoxInputIcon>img{
        display: block;
        width:100%;
        height:100%;
    }
    #searchInput{
        border:none;
        color:rgba(0,0,0,0.7);
        padding:0 0.12rem;
    }
    #searchInput:focus{
        outline: none;
    }
    .price{
        display: block;
        font-size:0.24rem;
        color:#000;
        letter-spacing: 0.01rem;
        font-weight:400;
    }
    /*搜索部分结束*/
    .listPos{
        position:absolute;
        top:1.76rem;
        left:0;
        padding-top: 0.24rem;
    }
    .img-1{
        background-image:url("../../assets/images/listShowsafa1.png");
        background-position:center;
        background-size:5.01rem;
    }
    .img-2{
        background-image:url("../../assets/images/listShowsafa2.png");
        background-position: -1.24rem -1.2rem;
        background-size:5.01rem;
    }
    .img-3{
        background-image:url("../../assets/images/listShowsafa3.png");
        background-position:center;
        background-size:5.01rem;
    }
    .img-4{
        background-image:url("../../assets/images/listShowsafa7.png");
        background-position: center;
        background-size:5.01rem;
    }
    .img-5 {
        background-image: url("../../assets/images/listShowsafa5.png");
        background-position: center;
        background-size: 5.01rem;
    }
    .img-6 {
        background-image: url("../../assets/images/listShowsafa6.png");
        background-position: center;
        background-size: 5.01rem;
    }
    #recommendShop{
        width:100%;
    }
    .recommendContainer{
        width:7.02rem;
        margin:0 auto;
        position:relative;
    }
    .recommendLine{
        width:0.03rem;
        height:0.21rem;
        position:absolute;
        background-color:#ffcb3f;
        left:0;
        top:0.1rem;
    }
    .recommendBox{
        width:6.82rem;
        height:11.06rem;
        margin:0 auto;
    }
    .recommendBox>h3{
        font-size:0.3rem;
        color:#000;
        letter-spacing:0.02rem;
        font-weight:400;
        margin-bottom:0.36rem;
    }
    .recommendList{
        width:100%;
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
    }
    .recommendItem{
        width:3.24rem;
        height:5.08rem;
        margin-bottom:0.24rem;
        background: #fff;
    }
    .recommendItemTop{
        width:100%;
        height:3.05rem;
        margin-bottom:0.24rem;
    }
    .recommendItemBottom{
        width:2.82rem;
        height:1.58rem;
        margin:0 auto;
    }
    .recommendItemLine{
        width:0.36rem;
        height:0.01rem;
        background-color:#000;
        margin-bottom:0.1rem;
    }
    .recommendItemBottom>h4{
        font-size:0.18rem;
        font-weight:400;
    }
    .recommendItemBottom>h3{
        font-size:0.24rem;
        margin-bottom:0.46rem;
    }
    .recommendItemBottomFooter{
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .recommendItemBottomFooter>h3{
        font-size:0.23rem;
    }
    .recommendItemBottomFooter>h3>span{
        font-size:0.18rem;
        font-weight:400;
    }
    .recommendItemBottomFooterBuy{
        display: block;
        width:1.53rem;
        height:0.44rem;
        text-align:center;
        line-height:0.44rem;
        font-size:0.22rem;
        color:#fff;
        background-color: #ffcb3f;
        border-radius:0.04rem;
    }
    .recommendItemBottomFooterBuy .iconfont{
        font-size: 0.22rem;
        color: #fff;
    }
</style>