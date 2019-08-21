<template>
    <div id="address">
        <my-header></my-header>
        <!--头部以下收货地址标题-->
        <div class="newAddAdress">
            <div class="backImg" @click="chose">
                <i class="iconfont icon-xiangzuo"></i>
            </div>
            <div class="newAddAdressTitle">收货地址</div>
        </div>
        <!--主要部分开始-->
        <div :class="['box',{active:index===item.id}]" v-for="item in addressList" @click="index=item.id">
            <div class="mainContent">
                <div class="mainContentBox">
                    <div class="firstFloor">
                        <span class="name">{{item.name}}</span>
                        <span class="phone">{{item.phone}}</span>
                        <span class="address">{{item.type}}</span>
                    </div>
                    <div class="secondFloor">
                        {{item.province}}{{item.city}}{{item.area}}{{item.address}}
                    </div>
                    <a href="" class="bianji">
                        <i class="iconfont icon-edit"></i>
                    </a>
                </div>
                <a href="" class="moRen">设为默认</a>
                <a href="" class="delect">删除</a>
            </div>
        </div>
        <router-link to="paddress" class="btns">新增收货地址</router-link>
    </div>
</template>

<script>
    import Header from "@/components/Header"

    export default {
        name: "Address",
        data: () => ({
            addressList: [],
            index: 0,
        }),
        components: {
            "my-header": Header,
        },
        methods: {
            fetchUserAddress: function () {
                this.$http.get('/api/address/address', {params: {uid: localStorage.login}}).then(res => {
                    if (res.data.code === 200) {
                        this.addressList = res.data.data;
                        this.addressList.forEach(v => {
                            switch (v.type) {
                                case 1:
                                    v.type = '住宅';
                                    break;
                                case 2:
                                    v.type = '公司';
                                    break;
                                case 3:
                                    v.type = '学校';
                                    break;
                                case 4:
                                    v.type = '其他';
                                    break;
                                default:
                                    v.type = '未知'
                            }
                        })
                    }
                }).catch(() => {
                    console.log('与数据库链接失败');
                })
            },
            chose: function () {
                if (this.index === 0) {
                    alert('请选择地址');
                    return;
                } else {
                    let address=this.addressList;
                    let newAddress = address.find(v=>v.id===this.index);
                    localStorage.address=JSON.stringify(newAddress);
                    this.$router.back();
                }
            }
        },
        mounted:function(){
            this.fetchUserAddress();
        }
    }
</script>

<style lang="scss" scoped>
    .active {
        background: #ff2d28 !important;
    }

    #address {
        width: 100%;
        height: 100%;
        position: relative;
    }

    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    html {
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
    .box {
        width: 100%;
        height: 1.36rem;
        background: white;
        overflow: visible;
        margin: 0.02rem auto 0;
        position: relative;
        box-sizing: border-box;
    }

    .mainContent {
        width: 7.02rem;
        height: 1.36rem;
        background: white;
        overflow: hidden;
        margin: 0 auto;
        position: relative;
    }

    .mainContentBox {
        width: auto;
        height: 1.36rem;
        position: relative;
    }

    .firstFloor {
        height: 0.65rem;
        position: absolute;
        top: 0.10rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .name {
        font-size: 0.3rem;
        color: black;
        float: left;
    }

    .phone {
        font-size: 0.28rem;
        color: black;
        float: left;
        margin-left: 0.48rem;
    }

    .address {
        width: 0.65rem;
        height: 0.39rem;
        text-align: center;
        line-height: 0.39rem;
        font-size: 0.22rem;
        color: #666666;
        float: left;
        margin-left: 0.18rem;
        background: #ffcb3f;
        border-radius: 0.07rem;
    }

    .secondFloor {
        height: 0.65rem;
        width: 6.20rem;
        line-height: 0.65rem;
        position: absolute;
        top: 0.7rem;
        font-size: 0.22rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #666666;
    }

    .bianji {
        width: 0.35rem;
        height: 0.35rem;
        float: right;
        display: block;
        margin-top: 0.5rem;
        margin-right: 0.3rem;
        color: #666666;
    }

    .bianji i {
        width: 100%;
        height: auto;
    }

    .moRen {
        width: 1.15rem;
        height: 1.36rem;
        display: block;
        position: absolute;
        top: 0;
        right: -1.15rem;
        font-size: 0.22rem;
        background: #f4f4f4;
        text-align: center;
        border-left: 0.02rem solid #000000;
        line-height: 1.36rem;
        color: #666666;
    }

    .delect {
        width: 1.15rem;
        height: 1.36rem;
        text-align: center;
        display: block;
        position: absolute;
        top: 0;
        right: -2.3rem;
        font-size: 0.22rem;
        background: #ffcb3f;
        line-height: 1.36rem;
        color: #666666;
    }

    .btns {
        width: 6.39rem;
        height: 0.79rem;
        background: #ffcb3f;
        text-align: center;
        line-height: 0.79rem;
        border-radius: 0.1rem;
        display: block;
        color: white;
        font-size: 0.28rem;
        position: absolute;
        left: 0.6rem;
        bottom: 0.5rem;
    }
</style>