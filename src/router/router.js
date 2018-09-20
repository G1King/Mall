import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue';
import Login  from '../components/Login.vue';
import Register from '../components/Register.vue';
import GoodsList from '../components/GoodsList.vue'
// import CheckPhone from '../'
Vue.use(VueRouter)
var routes = [{
    path: '/', //首页
    name: 'Index',
    component: Index
  },
  {
    path:'/goodsList/:id',//商品列表
    name:'GoodsList',
    component: GoodsList
  },
  {
    path: '/login', //登录
    name: 'Login',
    component: Login
  },
  {
    path: '/register', //注册
    name: 'Register',
    component: Register
    // children:[
    //     {
    //         path:'/',
    //         name:'index',
    //         component:
    //     }
    // ]
  }

]
export  const router = new VueRouter({
      routes: routes,
      mode: 'history'
})
