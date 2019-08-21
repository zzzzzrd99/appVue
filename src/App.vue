<template>
    <div id="app">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<style lang="scss">

    // 页面过渡属性
    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    body {
        width: 100%;
        height: 100%;
        background: #f6f6f6;
        font-size: 12px;
        padding-top: 0.88rem;
    }

    html {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        font-size: 100px;
    }

    @font-face {
        font-family: "iconfont";
        src: url('iconfont.eot?t=1553313809027'); /* IE9 */
        src: url('iconfont.eot?t=1553313809027#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
        url('iconfont.woff?t=1553313809027') format('woff'),
        url('iconfont.ttf?t=1553313809027') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('iconfont.svg?t=1553313809027#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon-gengduo:before {
        content: "\e600";
    }

    .icon-picture-o:before {
        content: "\e61c";
    }

    .icon-shanchu:before {
        content: "\e63d";
    }

    .icon-qian:before {
        content: "\e625";
    }

    .icon-zhifubao:before {
        content: "\e65f";
    }

    .icon-naozhong:before {
        content: "\e624";
    }

    .icon-xiangyou:before {
        content: "\e60c";
    }

    .icon-xiangzuo:before {
        content: "\e653";
    }

    .icon-guanbi1:before {
        content: "\e641";
    }

    .icon-weixin:before {
        content: "\e694";
    }

    .icon-jia:before {
        content: "\e74a";
    }

    .icon-xingxing:before {
        content: "\e64e";
    }

    .icon-huizhang:before {
        content: "\e671";
    }

    .icon-edit:before {
        content: "\e604";
    }

    .icon-shoucang:before {
        content: "\e7a9";
    }

    .icon-bankexingxing1:before {
        content: "\e601";
    }

    .icon-guanbi:before {
        content: "\e623";
    }

    .icon-duigou:before {
        content: "\e63e";
    }


    @media (min-width: 320px) {
        html {
            font-size: 42.66667px;
        }
    }

    @media (min-width: 360px) {
        html {
            font-size: 48px;
        }
    }

    @media (min-width: 375px) {
        html {
            font-size: 50px;
        }
    }

    @media (min-width: 411px) {
        html {
            font-size: 54.8px;
        }
    }

    @media (min-width: 414px) {
        html {
            font-size: 55.2px;
        }
    }

    @media (min-width: 768px) {
        html {
            font-size: 102.4px;
        }
    }

    @media (min-width: 1024px) {
        html {
            font-size: 136.53333px;
        }
    }
</style>
