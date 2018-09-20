/*
 * @Author: Leo 
 * @Date: 2018-09-07 16:19:28 
 * @Last Modified by: Leo
 * @Last Modified time: 2018-09-12 14:39:22
 */

export const isLogin = (context) => {
    const flag = localStorage.getItem(loginFlag);
    if (flag) {
        context.commit('SET_USER_LOGIN_INFO', JSON.parse(flag))
    }
}
export const signOut = (context) => {
localStorage.removeItem(loginFlag)
context.commit('SET_USER_LOGIN_INFO',{})
}

export const login = (context,data) =>{
   return new Promise((resolve, reject) => {
       const array = JSON.parse(localStorage.getItem(usersList))
       const user = JSON.parse(localStorage.getItem(loginFlag))
       
       if (user) {
           for (const item of array) {
               console.log(item)
             if (item.username = user.username) {
               resolve(true);
               break;
             }
           }
       }else{
           resolve(false)
       }

   })
}