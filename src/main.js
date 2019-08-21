import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.prototype.$http=Axios;

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (localStorage.token){
        config.headers['x-access-token']=localStorage.token;
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data.msg==='token验证失败'){
        localStorage.to='index';
        router.push({name:'login'});
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


router.beforeEach((to,from,next)=>{
    if(to.name==='shopCar' || to.name==='my'|| to.name==='order'){
      if(localStorage.login){
        next();
      }else{
          localStorage.to=to.name;
          next('/login');
      }
    }else{
      next();
    }
});

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
