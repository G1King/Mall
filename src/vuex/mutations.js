/*
 * @Author: Leo 
 * @Date: 2018-09-07 16:19:54 
 * @Last Modified by: Leo
 * @Last Modified time: 2018-09-29 15:08:54
 */

// 设置用户登录信息
export const SET_USER_LOGIN_INFO = (state,payload) => {
  state.userInfo = payload
}
//轮播
export const SET_CAROUSELITEMS_INFO = (state,payload) =>{
  state.marketing.CarouselItems = payload.carouselItems
  state.marketing.activity = payload.activity
  
}
//获取秒杀数据
export const SET_SECKILLS_INFO = (state,payload) => {
  state.seckills.goodsList = payload[0]
  state.seckills.deadline = payload[1]
}
// 减少秒杀时间
export const REDUCE_SECKILLS_TIME = state => {
  state.seckills.deadline.seconds--;
  if (state.seckills.deadline.seconds === -1) {
     state.seckills.deadline.seconds = 59;
      state.seckills.deadline.minutes --;
  } else if (state.seckills.deadline.minutes === -1) {
     state.seckills.deadline.minutes = 59;
     state.seckills.deadline.hours--;
  }
}
// 电脑专栏
export const SET_COMPUTER_INFO = (state,payload) => {
  state.computer = payload
}