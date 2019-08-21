<template>
    <div id="kuozhan">
        <header id="header">
            <div class="container headerBox">
                <a href="#" class="headerExit">
                    <i class="iconfont icon-guanbi"></i>
                </a>
                <div class="title">
                    用户注册
                </div>
                <a href="#" class="headerMore">
                    <i class="iconfont icon-gengduo"></i>
                </a>
            </div>
        </header>
        <!--登录顶部结束-->
        <div id="bigBox">
            <!--登录主体开始-->
            <div id="title">
                <div class="title"></div>
                <div class="introduce">因为顾家 所以爱家</div>
            </div>
            <div class="img"></div>
            <div class="loginInput">
                <form action="">
                    <ul class="ulInput">
                        <li><span>手机号：</span><input type="text" placeholder="请输入手机号" class="name" v-model="phone"></li>
                        <li><span>密码：</span><input type="password" placeholder="请输入密码" class="password" v-model="password"></li>
                        <li><span>确认密码</span><input type="password" placeholder="请确认密码" class="password" v-model="repassword"></li>
                        <li><span>验证码</span><input type="password" placeholder="请输入验证码" class="code" v-model="code" @blur="checkCode">
                            <span :class="['Register-huoqu',{active:isActive}]" @click="sendPhone">{{msg}}</span>
                        </li>
                        <li>
                            <el-row>
                                <el-button type="primary" round @click='$router.push({name:"login"})'>To登录</el-button>
                                <el-button type="primary" round @click="submit">注册</el-button>
                            </el-row>
                        </li>
                    </ul>
                </form>
            </div>
            <!--登录主体结束-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sign",
        data: () => ({
            phone: '',
            password: '',
            repassword: '',
            code: '',
            isActive: false,
            msg: "获取验证码",
            checkState: false,
        }),
        methods:{
            sendPhone: function () {
                if (this.isActive) {
                    return;
                }
                let reg = /^1[356789]\d{9}$/;
                if (reg.test(this.phone)) {
                    this.isActive = true;
                    this.msg = "60s";
                    let n = 60;
                    this.$http.post("/api/users/sendMessage", {phone: this.phone}).then(res => {
                        console.log(res);
                    }).catch(() => {
                        console.log("传输失败")
                    });
                    let t = setInterval(() => {
                        n--;
                        this.msg = n + "s";
                        if (n === 0) {
                            clearInterval(t);
                            this.msg = "重新发送";
                            this.isActive = false;
                        }
                    }, 1000)
                } else {
                    alert("请输入正确的手机号");
                }

            },
            checkCode: function () {
                if (this.code !== "") {
                    this.$http.post('/api/users/checkCode', {code: this.code}).then(res => {
                        if (res.data.code === 200) {
                            console.log("验证成功");
                        } else {
                            alert("验证失败");
                        }
                    }).catch(() => {
                        alert("验证码提交失败");
                    })
                } else {
                    alert("请输入验证码")
                }
            },
            submit: function () {
                let reg1 = /^1[356789]\d{9}$/;
                let reg2 = /^\d{4}$/;
                let reg3 = /^[0-9a-z]{6,}$/;
                if (!reg1.test(this.phone)) {
                    alert("请输入正确的手机号码");
                    return;
                }
                if (!reg3.test(this.password)) {
                    alert("密码由6位以上的数字或字母组成");
                    return;
                }
                if (this.password !== this.repassword) {
                    alert("请确认密码");
                    return;
                }
                if (!reg2.test(this.code)) {
                    alert("输入正确的验证码");
                    return;
                }
                this.$http.post('/api/users/sign', {phone: this.phone, password: this.password}).then(res => {
                    if (res.data.code === 200) {
                        alert("注册成功");
                        this.$router.push({name: 'login'});
                    }
                }).catch(() => {
                    alert("注册失败")
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    #kuozhan{
        width: 100%;
        height: 100%;
        padding-top: 0.88rem;
    }
    #header{
        width:100%;
        background-color:#fff;
        position:fixed;
        left:0;
        top:0;
        z-index: 999;
    }
    .container{
        width:7.02rem;
        margin:0 auto;
    }
    .headerBox{
        height:0.88rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .headerExit{
        display: block;
        width:0.28rem;
        height:0.3rem;
    }
    .headerExit>i{
        display: block;
        font-size:0.28rem;
        color: #000;
    }
    .headerLogo{
        width:0.92rem;
        height:0.3rem;
    }
    .headerLogo>img{
        display: block;
        width:100%;
        height:100%;
    }
    .headerMore{
        display: block;
        width:0.36rem;
        height:0.3rem;
    }
    .headerMore>i{
        display: block;
        font-size:0.36rem;
        color: #000;
    }

    body{
        background: #fcfcfc;
        padding-top: 0.88rem;
    }
    /*登录顶部开始*/
    #header .title{
        font-size: 0.3rem;
        color: #000;
    }
    /*登录顶部结束*/
    #bigBox{
        width: 100%;
        height: calc(100% - 0.8rem);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    /*登录主体开始*/
    #title{
        width: 100%;
        height: 1.14rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    #title .title{
        height: 0.46rem;
        background-image: url("../../assets/images/logo.png");
        background-repeat: no-repeat;
        background-size: auto 0.46rem;
        background-position: center;
    }
    .introduce{
        font-size: 0.2rem;
        text-align: center;
        letter-spacing: 0.01rem;
        color: #000000;
        opacity: 0.7;
        position: relative;
    }
    .introduce::before{
        content: "";
        display: block;
        width: 0.65rem;
        height: 0.02rem;
        background-color: #d9d9d9;
        position: absolute;
        left: 1.84rem;
        bottom: 0.06rem;
    }
    .introduce::after{
        content: "";
        display: block;
        width: 0.65rem;
        height: 0.02rem;
        background-color: #d9d9d9;
        position: absolute;
        right: 1.84rem;
        bottom: 0.06rem;
    }
    .img{
        width: 7.02rem;
        height: 4.55rem;
        margin: 0 auto;
        background-image: url("../../assets/images/login.png");
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .loginInput{
        width: 7rem;
        height: 7rem;
        background: rgba(255,255,255,0.9);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        border-radius: 0.3rem;
    }
    .ulInput{
        padding-top: 1.15rem;
    }
    .ulInput>li{
        text-align: center;
        size: 0.6rem;
        margin-bottom: 0.5rem;
    }
    .ulInput>li>span{
        display: inline-block;
        width: 1.8rem;
    }
    .ulInput>li>input{
        width: 4rem;
        height: 0.6rem;
        border: 0.01rem solid #ccc;
        padding: 0 0.15rem;
    }
    .code{
        width: 2rem!important;
    }
    .codeButton{
        width: 2rem!important;
        background: #409EFF;
        color: #fff;
        border-radius: 0.2rem;
    }
    .button{
        display: block;
        width: 6.38rem;
        height: 0.98rem;
        background-color: #ffcb3f;
        border-radius: 0.08rem;
        text-align: center;
        line-height: 0.98rem;
        font-size: 0.3rem;
        font-weight: bold;
        letter-spacing: 0.018rem;
        color: #ffffff;
        margin: 0 auto;
    }
    .button .iconfont{
        font-size: 0.4rem;
        margin-right: 0.24rem;
    }
    /*登录主体结束*/
    .Register-huoqu {
        width: 2rem;
        height: 0.6rem;
        border-radius: 0.2rem;
        background: #5f74ff;
        color: #fff;
        line-height: 0.6rem;
        font-size: 0.28rem;
        text-align: center;
        cursor: pointer;
    }
</style>