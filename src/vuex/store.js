/*
 * @Author: Leo 
 * @Date: 2018-09-07 16:20:02 
 * @Last Modified by:   Leo 
 * @Last Modified time: 2018-09-07 16:20:02 
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";

Vue.use(Vuex)
const store = new Vuex.Store({
   state:{
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
   },
   actions,
   mutations,
   getters
})
export default store;