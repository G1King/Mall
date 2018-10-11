/*
 * @Author: Leo 
 * @Date: 2018-09-07 16:19:28 
 * @Last Modified by: Leo
 * @Last Modified time: 2018-10-11 15:12:33
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
//获取轮播数据
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
 //加载 限时信息
export const loadSeckillsInfo = (context) => {
  return new Promise((resolve, reject) => {
    const data = [{
        intro: '【赠小风扇】维他 柠檬茶250ml*32盒 礼品装 整箱',
        img: '../assets/img/index/seckill/seckill-item1.jpg',
        price: 71.9,
        realPrice: 89.6
      },
      {
        intro: 'Kindle Paperwhite 全新升级版6英寸护眼非反光电子墨水',
        img: '../assets/img/index/seckill/seckill-item2.jpg',
        price: 989.0,
        realPrice: 1299.0
      },
      {
        intro: '粮悦 大吃兄糯米锅巴 安徽特产锅巴糯米原味400g*2盒',
        img: '../assets/img/index/seckill/seckill-item3.jpg',
        price: 21.8,
        realPrice: 49.0
      },
      {
        intro: '【京东超市】清风（APP）抽纸 原木纯品金装系列 3层',
        img: '../assets/img/index/seckill/seckill-item4.jpg',
        price: 49.9,
        realPrice: 59.0
      },
      {
        intro: 'NIKE耐克 男子休闲鞋 AIR MAX 90 ESSENTIAL 气垫',
        img: '../assets/img/index/seckill/seckill-item5.jpg',
        price: 559.9,
        realPrice: 759.9
      }
    ];
    
    const deadline = {
      hours:1,
      minute:38,
      seconds: 36
    }
    context.commit('SET_SECKILLS_INFO', [data, deadline])
   })
}

//电脑专栏
export const loadComputer = (context) => {
  return new Promise((resolve, reject) => {
    const computer = {
      title: '电脑数码',
      link: ['电脑馆', '游戏极品', '装机大师', '职场焕新', '女神频道', '虚拟现实', '二合一平板', '电子教育', '万物周刊'],
      detail: [{
          bigImg: 'assets/img/index/computer/item-computer-1.jpg',
          itemFour: [{
              title: '电脑馆',
              intro: '笔记本999元限量秒！',
              img: 'assets/img/index/computer/item-computer-2.jpg'
            },
            {
              title: '外设装备',
              intro: '1000减618',
              img: 'assets/img/index/computer/item-computer-1-3.jpg'
            },
            {
              title: '电脑配件',
              intro: '联合满减最高省618',
              img: 'assets/img/index/computer/item-computer-1-4.jpg'
            },
            {
              title: '办公生活',
              intro: '5折神券 精品文具',
              img: 'assets/img/index/computer/item-computer-1-5.jpg'
            }
          ],
          itemContent: [
            'assets/img/index/computer/item-computer-1-6.jpg',
            'assets/img/index/computer/item-computer-1-7.jpg',
            'assets/img/index/computer/item-computer-1-8.jpg'
          ]
        },
        {
          bigImg: 'assets/img/index/computer/item-computer-2-1.jpg',
          itemFour: [{
              title: '平板电脑',
              intro: '爆款平板12期免息',
              img: '../assets/img/index/computer/item-computer-2-2.jpg'
            },
            {
              title: '智能酷玩',
              intro: '抢999减666神券',
              img: '../assets/img/index/computer/item-computer-2-3.jpg'
            },
            {
              title: '娱乐影音',
              intro: '大牌耳机低至5折',
              img: '../assets/img/index/computer/item-computer-2-4.jpg'
            },
            {
              title: '摄影摄像',
              intro: '大牌相机5折抢',
              img: '../assets/img/index/computer/item-computer-2-5.jpg'
            }
          ],
          itemContent: [
            '../../assets/img/index/computer/item-computer-2-6.jpg',
            '../assets/img/index/computer/item-computer-2-7.jpg',
            '../assets/img/index/computer/item-computer-2-8.jpg'
          ]
        }
      ]
    };
    context.commit('SET_COMPUTER_INFO', computer)
  })
}