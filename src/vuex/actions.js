/*
 * @Author: Leo 
 * @Date: 2018-09-07 16:19:28 
 * @Last Modified by: Leo
 * @Last Modified time: 2018-09-25 16:41:39
 */

export const isLogin = (context) => {
  const flag = localStorage.getItem(loginFlag);
  if (flag) {
    context.commit('SET_USER_LOGIN_INFO', JSON.parse(flag))
  }
}
export const signOut = (context) => {
  localStorage.removeItem(loginFlag)
  context.commit('SET_USER_LOGIN_INFO', {})
}

export const login = (context, data) => {
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
    } else {
      resolve(false)
    }

  });
}
export const loadCarouselItems = (context) => {
  return new Promise((resolve, reject) => {
    const data = {
      carouselItems: [
        'assets/img/nav/1.jpg',
        'assets/img/nav/2.jpg',
        'assets/img/nav/3.jpg',
        'assets/img/nav/4.jpg',
        'assets/img/nav/5.jpg'
      ],
      activity: [
        'assets/img/nav/nav_showimg1.jpg',
        'assets/img/nav/nav_showimg2.jpg'
      ]
    };
    context.commit('SET_CAROUSELITEMS_INFO', data)

  });
};
