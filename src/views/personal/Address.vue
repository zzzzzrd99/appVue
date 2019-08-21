<template>
    <div>
        <my-header></my-header>
        <div class="newAddAdress">
            <div class="backImg" @click="$router.back()">
                <i class="iconfont icon-xiangzuo"></i>
            </div>
            <div class="newAddAdressTitle">新增收货地址</div>
        </div>
        <div class="mianContent">
            <div class="mainTitleBox">
                <div class="leftTitle after">收获地址</div>
            </div>
            <div class="mainTitleBox">
                <div class="leftTitle">姓名</div>
                <input type="text" class="titleRight" placeholder="" value="王清">
            </div>
            <div class="mainTitleBoxTwo">
                <div class="leftTitleTwo">电话</div>
                <input type="text" class="titleRightTwo" placeholder="" value="18735184627">
            </div>
            <div class="mainTitleBoxTwo">
                <div class="leftTitleTwo">所在城市</div>
                <input type="text" class="titleRightTwo" placeholder="选择你所在城市" value="">
            </div>
            <div class="mainTitleBoxTwo">
                <div class="leftTitleTwo">详细地址</div>
                <input type="text" class="titleRightTwo" placeholder="小区/写字楼" value="">
            </div>
            <div class="mainTitleBoxTwo">
                <div class="leftTitleTwo">楼号门牌</div>
                <input type="text" class="titleRightTwo" placeholder="楼号/单元/门牌号" value="">
            </div>
            <div class="mainTitleBoxTwo">
                <div class="leftTitleTwo">地址类型</div>
                <div class="btns">
                    <div class="addressBtnOne active"><a href="">住宅</a></div>
                    <div class="addressBtnOne"><a href="">公司</a></div>
                    <div class="addressBtnOne"><a href="">学校</a></div>
                    <div class="addressBtnOne"><a href="">其他</a></div>
                </div>
            </div>
            <div class="mainTitleBoxTwo">
                <div class="saveAddress">
                    <a href="">保存地址</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Header from "@/components/Header"
    export default {
        name: "Address",
        data: () => ({}),
        components: {
            "my-header": Header,
        }
    }
</script>

<style lang="scss" scoped>

    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    input[type=text]:focus{
        outline: none;
    }
    a {
        text-decoration: none;
    }
    html{
        font-family: 微软雅黑;
    }
    /*头部下边第一块*/
    .newAddAdress {
        width: 100%;
        height: 0.8rem;
        background: white;
        padding: 0 0.24rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border-bottom: 0.01rem solid #d9d9d9;
        border-top: 0.01rem solid #d9d9d9;
    }

    .backImg {
        width: 0.18rem;
        height: 0.28rem;
        float: left;
    }

    .newAddAdressTitle {
        font-size: 0.28rem;
        margin: 0 auto;
        color: #000000;
    }

    /*主要内容开始*/
    .mianContent {
        width: 7.02rem;
        height: auto;
        background: white;
        border-radius: 0.1rem;
        margin: 0 auto;
        box-shadow: 0 0 0.02rem 0.03rem #d9d9d9;
    }

    .mainTitleBox {
        width: 6.35rem;
        height: 0.8rem;
        //background: blue;
        margin: 0 auto;
        border-bottom: 0.01rem solid #d9d9d9;
        position: relative;
    }

    .leftTitle {
        color: #000000;
        float: left;
        font-size: 0.28rem;
        position: absolute;
        left: 0;
        top: 0.25rem;
    }
    .after::after{
        width: 0.45rem;
        height: 0.05rem;
        display: block;
        margin-top:0.12rem;
        content: "";
        background: #ffcb3f;
        color: #ffcb3f;
    }
    .titleRight {
        float: right;
        width: 4.50rem;
        position: absolute;
        right: 0;
        top: 0.29rem;
        border: none;
        color: black;
    }

    .mainTitleBoxTwo {
        width: 6.35rem;
        height: 1.05rem;
        //background: blue;
        margin: 0 auto;
        border-bottom: 0.01rem solid #d9d9d9;
        position: relative;
    }

    .leftTitleTwo {
        color: #000000;
        float: left;
        font-size: 0.28rem;
        position: absolute;
        left: 0;
        top: 0.54rem;
    }

    .titleRightTwo {
        float: right;
        width: 4.50rem;
        position: absolute;
        right: 0;
        top: 0.55rem;
        border: none;
        color: black;
    }
    .btns{
        float: right;
        width: 4.50rem;
        position: absolute;
        right: 0;
        top: 0.5rem;
        border: none;
        //background: #ff2b77;
    }
    .addressBtnOne{
        width: 0.71rem;
        height: 0.42rem;
        border: 0.01rem solid rgba(118, 118, 118, 0.66);
        font-size: 0.22rem;
        line-height:0.42rem;
        text-align: center;
        float: left;
        border-radius: 0.1rem;
        box-sizing: border-box;
        margin-right: 0.3rem;
    }
    .addressBtnOne a{
        color: #2b2b2b;
    }
    .active{
        background: #ffcb3f;
        font-weight: bold;
        color: black;
    }
    .saveAddress{
        width: 6.37rem;
        height: 0.76rem;
        background: #ffcb3f;
        text-align: center;
        margin: 0.4rem auto 0.4rem;
        border-radius: 0.1rem;
        line-height: 0.76rem;
    }
    .saveAddress a{
        color: white;
        font-weight: bold;
        letter-spacing: 0.05rem;
        font-size: 0.28rem;
    }
    .mainTitleBoxTwo:last-child{
        border-bottom: none;
    }
</style>