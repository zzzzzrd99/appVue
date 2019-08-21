<template>
    <div>
        <section id="recommendShop">
            <div class="recommendContainer">
                <div class="recommendLine" v-if="showTitle"></div>
                <div class="recommendBox">
                    <h3 v-if="showTitle">推荐商品</h3>
                    <ul class="recommendList">
                        <Goods v-for="item in goods" :item="item" :key="item.id"></Goods>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Goods from "./Goods";

    export default {
        name: "Recommend",
        data: () => ({}),
        props: {
            showTitle: {
                type: Boolean,
                default: true
            },
            goods: {
                type: Array,
                required: true
            }
        },
        components: {
            "Goods": Goods
        },
    }
</script>

<style lang="scss" scoped>
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
</style>