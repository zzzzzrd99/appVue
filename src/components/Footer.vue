<template>
    <div>
        <footer id="footer">
            <div class="footerContainer">
                <ul class="footerList">
                    <li>
                        <router-link to="/">
                            <img v-if="hot==='index'" src="../assets/images/icon-index-active.png" alt="">
                            <img v-else src="../assets/images/icon-index.png" alt="">
                            <p :class="['footerDesc',{active:hot==='index'}]">首页</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/category">
                            <img v-if="hot==='category'" src="../assets/images/icon-classify-active.png" alt="">
                            <img v-else src="../assets/images/icon-classify.png" alt="">
                            <p :class="['footerDesc',{active:hot==='category'}]">分类</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/shopCar">
                            <img v-if="hot==='shopCar'" src="../assets/images/icon-cart-active.png" alt="">
                            <img v-else src="../assets/images/icon-cart.png" alt="">
                            <p :class="['footerDesc',{active:hot==='shopCar'}]">购物车</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/My">
                            <img v-if="hot==='My'" src="../assets/images/icon-user-active.png" alt="">
                            <img v-else src="../assets/images/icon-user.png" alt="">
                            <p :class="['footerDesc',{active:hot==='My'}]">我的</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data: () => ({}),
        props:{
            hot:{
                type:String,
                required:true
            }
        }
    }
</script>

<style lang="scss" scoped>
    #footer{
        width:100%;
        border-top:0.01rem solid #bfbfbf;
        position:fixed;
        bottom:0;
        left:0;
        background-color:#fafafa;
        z-index: 999;
    }
    .footerContainer{
        width:6.1rem;
        height:0.98rem;
        margin:0 auto;
        display: flex;
        align-items: center;

    }
    .footerList{
        width:100%;
        display: flex;
        justify-content: space-between;
        padding: 0.15rem 0;
    }
    .footerList>li{
        width: auto;
        height: 100%;
    }
    .footerList>li>a{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items:center;
        width:100%;
        height:0.71rem;
    }
    .footerList>li>a>img{
        height: 0.4rem;
        width: auto;
    }
    .footerList>li>a>p.active{
        color: #ffcb3f;
        font-weight: bold;
    }
    .footerDesc{
        font-size:0.2rem;
        height: 0.16rem;
        line-height: 0.16rem;
        letter-spacing: 0.01rem;
        color:#000;
    }
</style>