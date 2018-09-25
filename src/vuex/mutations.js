/*
 * @Author: Leo 
 * @Date: 2018-09-07 16:19:54 
 * @Last Modified by: Leo
 * @Last Modified time: 2018-09-25 17:03:06
 */

// 设置用户登录信息
export const SET_USER_LOGIN_INFO = (state,payload) => {
  state.userInfo = payload
}
export const SET_CAROUSELITEMS_INFO = (state,payload) =>{
  state.marketing.CarouselItems = payload.carouselItems
  state.marketing.activity = payload.activity
  
}