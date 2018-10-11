/*
 * @Author: Leo 
 * @Date: 2018-09-07 16:20:02 
 * @Last Modified by: Leo
 * @Last Modified time: 2018-09-29 15:03:50
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

Vue.use(Vuex)
const store = new Vuex.Store({
   state:{
    orderBy: 'sale', // 根据什么字段排序
     userInfo:{ //用户信息
         username:''
     },
     shoppingCart: [
       {
         img: "",
         package: "我是手机",
         price: 1100,
         title:"手机啊"
       }
     ], // 购物车
     marketing:{
          CarouselItems: [], // 轮播图
          activity: [] // 活动
     },
      seckills: { // 秒杀
        deadline: {
          hours: 0,
          minute: 0,
          seconds: 0
        },
        goodsList: []
      },
        computer: {}, // 电脑专栏
        eat: {}, // 爱吃专栏
        asItems: [], // 广告
        goodsList: [], // 商品列表
        shoppingCart: [], // 购物车
        newShoppingCart: [], // 刚加入的购物车，作为展示
        recommend: [] // 推荐购买
   },
   actions,
   mutations,
   getters
})
export default store;