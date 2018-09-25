<template>
<div class="container">
    <div class="nav-item">
        <ul>
            <li v-for="(item,index) in nav" :key="index">
                <a href="#">{{item}}</a>
            </li>

        </ul>
    </div>
    <div class="nav-body">
        <div class="nav-side">
            <ul>
                <li>
                    <span class="nav-side-item">家用电器</span>
                </li>
                <li>
                    <span class="nav-side-item">手机</span> /
                    <span class="nav-side-item">运营商</span> /
                    <span class="nav-side-item">数码</span>
                </li>
                <li>
                    <span class="nav-side-item">电脑</span> /
                    <span class="nav-side-item">办公</span>
                </li>
                <li>
                    <span class="nav-side-item">家居</span> /
                    <span class="nav-side-item">家具</span> /
                    <span class="nav-side-item">家装</span> /
                    <span class="nav-side-item">厨具</span>
                </li>
                <li>
                    <span class="nav-side-item">男装</span> /
                    <span class="nav-side-item">女装</span> /
                    <span class="nav-side-item">童装</span> /
                    <span class="nav-side-item">内衣</span>
                </li>
                <li>
                    <span class="nav-side-item">美妆个护</span> /
                    <span class="nav-side-item">宠物</span>
                </li>
                <li>
                    <span class="nav-side-item">女鞋</span> /
                    <span class="nav-side-item">箱包</span> /
                    <span class="nav-side-item">钟表</span> /
                    <span class="nav-side-item">珠宝</span>
                </li>
                <li>
                    <span class="nav-side-item">男鞋</span> /
                    <span class="nav-side-item">运动</span> /
                    <span class="nav-side-item">户外</span>
                </li>
                <li>
                    <span class="nav-side-item">汽车</span> /
                    <span class="nav-side-item">汽车用品</span>
                </li>
                <li>
                    <span class="nav-side-item">母婴</span> /
                    <span class="nav-side-item">玩具乐器</span>
                </li>
                <li>
                    <span class="nav-side-item">食品</span> /
                    <span class="nav-side-item">酒类</span> /
                    <span class="nav-side-item">生鲜</span> /
                    <span class="nav-side-item">特产</span>
                </li>
                <li>
                    <span class="nav-side-item">礼品鲜花</span> /
                    <span class="nav-side-item">农资绿植</span>
                </li>
                <li>
                    <span class="nav-side-item">医药保健</span> /
                    <span class="nav-side-item">计生情趣</span>
                </li>
                <li>
                    <span class="nav-side-item">图书</span> /
                    <span class="nav-side-item">音像</span> /
                    <span class="nav-side-item">电子书</span>
                </li>

            </ul>
        </div>
        <!-- 内容 -->
        <div class="nav-content">
            <div>
                <Carousel autoplay  loop>
                    <CarouselItem v-for="(item,index) in marketing.CarouselItems" :key="index">
                <router-link to="/goodsList">
                            <img :src="item">
                </router-link>
                    </CarouselItem>
                </Carousel>
            </div>
            <div class="nav-show">
                <div class="nav-show-img" v-for="(item,index) in marketing.activity" :key="index">
                    <router-link to="./goodsList">
                    <img :src="item">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'

export default {
    
    data() {
        return {
            nav: [
                '秒杀',
                '优惠券',
                '闪购',
                '拍卖',
                '服装城',
                '超市',
                '生鲜',
                '全球购',
                '金融'
            ]
        }
    },
    computed: {
        ...mapState(['marketing'])
        
    }
    
}

</script>

<style scoped>
.container .nav-item {
    margin: 0 auto;
    width: 680px;
    height: 36px;

}

.nav-item ul {
    margin-left: 15px;
    list-style: none;
}

.nav-item li {
    float: left;
    margin-left: 30px;
    font-size: 16px;
    font-weight: bold;
}

.nav-item li a {
    text-decoration: none;
    color: #555;
}

.nav-item a:hover {
    color: #d9534f;
}

/* 左边导航 */
.nav-body {
    margin: 0px auto;
    width: 1020px;
    height: 485px;
}

.nav-body .nav-side {
    float: left;
    padding: 0px;
    color: #fff;
    background-color: #6e6568;
    width: 200px;
    height: 100%;
}

.nav-side ul {
    padding: 0px;
    padding-top: 15px;
    width: 100%;
    list-style: none;
}

.nav-side li {
    padding: 7.5px;
    padding-left: 15px;
    font-size: 14px;
    line-height: 18px;
}

.nav-side li:hover {
    background-color: #999395;
}

.nav-side li span:hover {
    cursor: pointer;
    color: #c81623;
}

/*导航栏内容*/
.nav-content {
  width: 792px;
  margin-left: 15px;
  overflow: hidden;
  float: left;
}
.nav-show {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
}
</style>
