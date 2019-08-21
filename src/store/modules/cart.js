export default ({
    state: {
        orderList: [], // 所有订单

    },
    getters: {
        // 购物车中的商品种类
        cartLength(state, getters) {
            return getters.cartList.length;
        },
        //所有订单
        allList(state) {
            return state.orderList
        },
        // 购物车列表
        cartList(state) {
            return state.orderList.filter(v => v.state == 0);
        },
        // 判断当前订单当中有没有某个商品
        hasSomeGoods(state, getters) {
            return function (id) {
                let obj = getters.cartList.find(function (obj) {
                    if (obj.gid === String(id)) {
                        return true;
                    }
                });
                if (obj) {
                    return obj;
                } else {
                    return false;
                }
            }
        },
        //需要结算的订单
        payList(state) {
            return state.orderList.filter(v => v.checked);
        },
        // 代发货列表
        sendList(state) {
            return state.orderList.filter(v => v.state == 1);
        },
        // 待收获
        getList(state) {
            return state.orderList.filter(v => v.state == 2);
        },
        // 待评价
        commitList(state) {
            return state.orderList.filter(v => v.state == 3);
        },
        // 退货列表
        backList(state) {
            return state.orderList.filter(v => v.state == 4);
        }
    },
    mutations: {
        add(state, payload) {
            state.orderList.push(payload);
        },
        remove(state, payload) {
            let index = state.orderList.findIndex((obj) => {
                if (1 * obj.pid === 1 * payload.id) {
                    return true;
                }
            });
            state.orderList.splice(index, 1);
        },
        concat(state, payload) {
            // payload 从数据库中获取到的当前用户的购物车信息
            // orderList 当前用户向购物车中添加的信息
            payload = payload.filter(v => {
                // v 数据库中当前用户的每一个订单
                let r = state.orderList.find(function (val) {
                    return val.gid == v.gid && val.state == v.state
                });
                if (r) {
                    return false;
                } else {
                    return true;
                }
                // val vue.state 中的每一个订单
            });
            state.orderList = [...state.orderList, ...payload];
        }
    },
    action: {}
})
