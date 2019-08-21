import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index/Index'
import Content from '@/views/goods/Content'
import Category from "./views/goods/Category";
import ShopCar from "./views/goods/ShopCar";
import Order from "./views/goods/Order";
import Address from "./views/goods/Address";
import PayResult from "./views/goods/PayResult";
import Pay from "./views/goods/Pay";
import Search from "./views/index/Search";
import SearchList from "./views/index/SearchList"
import Login from "./views/personal/Login";
import pAddress from "./views/personal/Address"
import Comment from "./views/personal/Comment"
import My from "./views/personal/My"
import OrderList from "./views/personal/OrderList"
import Parse from "./views/personal/Parse"
import ProFile from "./views/personal/ProFile"
import Sign from "./views/personal/Sign"
import PayO from "./views/goods/PayO";
import MyCollect from "./views/personal/MyCollect";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/index',
      name:'index',
      component:Index,
    },
    {
      path:'/',
      redirect:'/index'
    },
    {
      path:"/Content",
      name:'content',
      component:Content
    },
    {
      path:'/Category',
      name:'category',
      component:Category
    },
    {
      path:'/ShopCar',
      name:'shopCar',
      component:ShopCar
    },
    {
      path:'/Order',
      name:'order',
      component:Order
    },
    {
      path:'/Address',
      name:'address',
      component:Address
    },
    {
      path:'/PayResult',
      name:'payResult',
      component:PayResult
    },
    {
      path:'/Pay',
      name:'pay',
      component:Pay
    },
    {
      path:'/PayO',
      name:'payo',
      component:PayO
    },
    {
      path:'/Search',
      name:'search',
      component:Search
    },
    {
      path:'/SearchList',
      name:'searchlist',
      component:SearchList
    },
    {
      path:'/Login',
      name:'login',
      component:Login
    },
    {
      path:'/pAddress',
      name:'paddress',
      component:pAddress
    },
    {
      path:'/Comment',
      name:'comment',
      component:Comment
    },
    {
      path:'/My',
      name:'my',
      component:My
    },
    {
      path:'/OrderList',
      name:'orderList',
      component:OrderList
    },
    {
      path:'/Parse',
      name:'parse',
      component:Parse
    },
    {
      path:'/ProFile',
      name:'proFile',
      component:ProFile
    },
    {
      path:'/Sign',
      name:'sign',
      component:Sign
    },
    {
      path:'/MyCollect',
      name:'myCollect',
      component:MyCollect
    }
  ]
})
