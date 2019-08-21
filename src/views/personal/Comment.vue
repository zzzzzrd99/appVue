<template>
    <div style="height: 100%">
        <my-header></my-header>
        <!--头部以下收货地址标题-->
        <div class="newAddAdress">
            <div class="backImg">
                <i class="iconfont icon-xiangzuo"></i>
            </div>
            <div class="newAddAdressTitle">评价</div>
        </div>
        <!--主要部分开始-->
        <div class="mian">
            <div class="goods">
                <img src="../../assets/images/browse2.png" alt="">
            </div>
            <div class="goodsItem">
                <p>BOSC XISTERA<span class="goodsName">现代客厅沙发</span></p>
                <h3 class="goodsType">绿色/单人座</h3>
                <h3 class="date">
                    <span class="xingxing"><img src="../../assets/images/xingxingY.jpg" alt=""></span>
                    <span class="xingxing"><img src="../../assets/images/xingxingY.jpg" alt=""></span>
                    <span class="xingxing"><img src="../../assets/images/xingxingY.jpg" alt=""></span>
                    <span class="xingxing"><img src="../../assets/images/xingxingY.jpg" alt=""></span>
                    <span class="xingxing"><img src="../../assets/images/xingxing.jpg" alt=""></span>
                </h3>
            </div>
        </div>
        <div class="requestBox">
            <div class="requestTitle">
                问题描述
            </div>
            <div class="reasonText">
                <textarea name="" id="" cols="30" rows="10"  class="textBox" placeholder="请描述退款的原因"></textarea>
                <span class="nowNum">0</span ><span class="nowNumX">/</span><span class="nowNumTotla">500</span>
            </div>
            <div class="camera">
                <i class="iconfont icon-picture-o"></i>
            </div>
            <div class="picture">
                <img src="../../assets/images/photo.png" alt="">
                <div class="chaDelect">
                    <i class="iconfont icon-guanbi1"></i>
                </div>
            </div>
        </div>
        <div class="btnSubmit"><a href="">提交并发表</a></div>

    </div>
</template>

<script>
    import Header from "@/components/Header"
    export default {
        name: "Comment",
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

    body{
        background: #f5f5f5;
    }
    a {
        text-decoration: none;
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
        //background: #ff2b77;
        float: left;
    }

    .newAddAdressTitle {
        font-size: 0.28rem;
        margin: 0 auto;
        color: #000000;
    }

    /*主要内容开始*/

    /*订单内容开始*/
    .orderItem{
        width: 7.02rem;
        height: auto;
        margin: 0 auto;
    }
    .CarList{
        width: 7.02rem;
        height:auto;
        margin: 0 auto;
    }
    .CarList li{
        width: 7.02rem;
        height: 2.76rem;
        background: #fff;
        box-shadow: 0 0.02rem 0.03rem 0
        rgba(0, 0, 0, 0.09);
        border-radius: 0.1rem;
        margin-top: 0.24rem;
        padding-top: 0.52rem;
        position: relative;
    }
    .checkBox{
        width: 0.24rem;
        height: 0.24rem;
        border-radius: 50%;
        border: 0.01rem solid #ffcb3f;
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -0.12rem;
    }
    .goods{
        width: 1.85rem;
        height: 1.3rem;
        margin-left: 0.2rem;
        float: left;
        margin-top: 0.46rem;
    }
    .goods img{
        width: 100%;
        height:100%;
        display:block;
    }
    .goodsItem{
        margin-left: 0.2rem;
        height: auto;
        float: left;
        margin-top: 0.46rem;
    }
    .goodsItem p{
        font-size: 0.18rem;
    }
    .goodsName{
        font-size: 0.24rem;
    }
    .goodsType{
        font-size: 0.18rem;
        margin-top: 0.08rem;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.7);
    }
    .date{
        font-size: 0.18rem;
        color: rgba(0, 0, 0, 0.7);
        margin-top: 0.3rem;
        font-weight: 400;
    }
    .goodsNumber{
        float: right;
        /*margin-left: 0.7rem;*/
        margin-right: 0.24rem;
        margin-top: 0.1rem;
    }
    .number{
        font-size: 0.24rem;
        font-weight: 400;
    }
    .goodsPrice{
        margin-top: 0.65rem;
    }
    .goodsPrice h3{
        font-size: 0.26rem;
    }
    .goodsPrice h3 span{
        font-size: 0.18rem;
        font-weight: 400;
    }
    .status{
        width: 3rem;
        height: 0.45rem;
        font-size: 0.24rem;
        margin-top: 0.1rem;
        display: flex;
        justify-content: space-between;
        position: absolute;
        right: 0.3rem;
        bottom: 0.24rem;
    }
    .payBtn{
        width: 1.35rem;
        height: 0.45rem;
        border:1px solid  #ffcb3f;
        color: #ffcb3f;
        text-align: center;
        line-height: 0.45rem;
        border-radius: 0.04rem;
    }
    .cancel{
        width: 1.35rem;
        height: 0.45rem;
        text-align: center;
        line-height: 0.45rem;
        color: #999999;
    }
    /*订单内容结束*/
    /*修改*/
    .mian{
        width: 7.02rem;
        height: 2.31rem;
        background:white;
        margin:0 auto;
        border-radius: 0.09rem;
    }
    .onlyMoney{
        color: black;
    }
    .purchaseNumberBox{
        margin-left: 0.25rem;
    }
    .needNumberBox{
        margin-left: 0.25rem;
    }
    .purchaseNumber{
        color: black;
    }
    .needNumber{
        color: black;
    }
    /*申请原因选择*/
    .reasonOption{
        width: 7.02rem;
        height: 0.90rem;
        background: white;
        border-radius: 0.09rem;
        margin: 0.2rem auto 0;
        line-height: 0.90rem;
    }
    .reason{
        font-size: 0.24rem;
        color: black;
        float: left;
        margin-left: 0.24rem;
    }
    .backReason{
        font-size: 0.24rem;
        color: black;
        float: right;
    }
    .backOption{
        background: #ff2b77;
        font-size: 0.24rem;
        color: black;
        float: right;
        margin-right: 0.24rem;
    }
    .backOption a{

    }
    /*问题描述*/
    .requestBox{
        width: 7.02rem;
        height: 5.9rem;
        background: white;
        border-radius: 0.09rem;
        margin: 0.2rem auto 0;
        padding-top: 0.22rem;
        padding-left: 0.2rem;
        box-sizing: border-box;
    }
    .requestTitle{
        font-size: 0.24rem;
    }
    .reasonText{
        width: 6.61rem;
        height: 2.06rem;
        background: #f5f5f5;
        margin-top: 0.2rem;
        position: relative;
    }
    .textBox{
        width: 6.61rem;
        height: 2.06rem;
        border: none; background: #f5f5f5;
    }
    .textBox::-webkit-input-placeholder{
        padding-top: 0.2rem;
        padding-left: 0.2rem;
        box-sizing: border-box;
        color:#999999;
    }
    .nowNum{
        font-size: 0.18rem;
        position: absolute;
        bottom: 0.35rem;
        left: 0.24rem;
    }
    .nowNumX{
        font-size: 0.18rem;
        position: absolute;
        bottom: 0.35rem;
        left: 0.45rem;
    }
    .nowNumTotla{
        font-size: 0.18rem;
        position: absolute;
        bottom: 0.35rem;
        left: 0.6rem;
    }
    .camera{
        width:0.32rem;
        height: 0.32rem;
        //background: #f580c9;
        margin-top: 0.2rem;
        color: #999999;
    }
    .btnSubmit{
        width: 7.02rem;
        height: 0.75rem;
        background: #ffcb3f;
        margin: 1.41rem auto 0;
        border-radius: 0.09rem;
        text-align: center;
        line-height: 0.75rem;
    }
    .btnSubmit a{
        color: white;
        font-size: 0.28rem;
    }
    .xingxing{

    }
    .xingxing img{
        width: 0.28rem;
    }
    .xingxingY{

    }
    .xingxingY img{
        color: #ffcb3f;
        width: 0.28rem;
    }
    .picture{
        width: 1.7rem;
        height: 1.7rem;
        margin-top: 0.3rem;
        position: relative;
    }
    .picture img{
        width: 1.7rem;
        height: 1.7rem;
    }
    .chaDelect{
        width: 0.3rem;
        height: 0.3rem;
        position: absolute;
        top: -0.15rem;
        right: -0.15rem;
        border-radius: 0.15rem;
        color: #999999;
    }
</style>