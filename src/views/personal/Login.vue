<template>
    <div id="kuozhan">
        <header id="header">
            <div class="container headerBox">
                <a href="#" class="headerExit">
                    <i class="iconfont icon-guanbi"></i>
                </a>
                <div class="title">
                    用户登录
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
                        <li>登录名：<input type="text" placeholder="请输入手机号" class="name" v-model="phone"></li>
                        <li>密码：&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" placeholder="请输入密码" class="password" v-model="password"></li>
                        <li>
                            <el-row>
                                <el-button type="primary" round @click="submit">登录</el-button>
                                <el-button type="primary" round @click="$router.push({name:'sign'})">注册</el-button>
                            </el-row>
                        </li>
                    </ul>
                </form>
            </div>
            <a href="#" class="button">
                <i class="iconfont icon-weixin"></i>
                微信授权
            </a>
            <!--登录主体结束-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data: () => ({
            phone:'',
            password:'',
        }),
        methods:{
            submit: function () {
                let reg1 = /^1[356789]\d{9}$/;
                let reg3 = /^[0-9a-z]{6,}$/;
                if (!reg1.test(this.phone)) {
                    alert("请输入正确的手机号码");
                    return;
                }
                if (!reg3.test(this.password)) {
                    alert("密码由6位以上的数字或字母组成");
                    return;
                }
                this.$http.post('/api/users/login', {phone: this.phone, password: this.password}).then(res => {
                    if (res.data.code === 200) {
                        localStorage.token=res.data.token;
                        localStorage.login=res.data.id;
                        this.$router.push({name:localStorage.to});
                    }else{
                        alert(res.data.msg)
                    }
                }).catch(() => {
                    alert("登录失败")
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
        height: 5rem;
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
    .ulInput>li>input{
        width: 4rem;
        height: 0.6rem;
        border: 0.01rem solid #ccc;
        padding: 0 0.15rem;
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
</style>