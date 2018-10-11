<template>
<div class="container">
    <Search></Search>
    <HomeNav></HomeNav>
    <!-- 内容部分 -->
    <div class="content">
        <!-- 秒杀 -->
        <div class="seckill">
            <div class="seckill-head">
                <div class="seckill-icon">
                    <img src="../../assets/img/index/clock.png" alt="">
                </div>
                    <div class="seckill-text">
                        <span class="seckill-title">限时秒杀</span>
                        <span class="seckill-remarks">总有你想不到的低价</span>
                    </div>
                    <div class="count-down">
                        <span class="count-down-text">当前场次</span>
                        <span class="count-down-number count-down-hour">{{seckillsHours}}</span>
                        <span class="count-down-point">:</span>
                        <span class="count-down-number count-down-minute">{{seckillsMinutes}}</span>
                        <span class="count-down-point">:</span>
                        <span class="count-down-number count-down-seconds">{{seckillsSeconds}}</span>
                        <span class="count-down-text">后结束抢购</span>
                    </div>
                </div>
                <!-- 秒杀内容 -->
                <div class="seckill-content">
                    <div class="seckill-item" v-for="(item,index) in seckills.goodsList" :key="index">
                        <div class="seckill-item-img">
                            <router-link to="/goodsList">
                                <img :src="item.img" alt="" >
                   </router-link>
                        </div>
                        <div class="seckill-item-info">
                            <p>{{item.intro}}</p>
                            <p>
                                <span class = "seckill-price text-danger">
                       <Icon type = "logo-yen"></Icon>{{item.price}}
                     </span>
                                <span class="seckill-old-price"><del>{{item.realPrice}}</del></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 电脑数码 -->
            <div class="item-class">
                <div class="item-class-head">
                    <span class="item-class-title">{{computer.title}}</span>
                    <ul>
                        <li v-for="(item,index) in computer.link" :key="index">
                        <router-link to="/goodsList">{{item}}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="item-class-content" v-for="(item,index) in computer.detail" :key="index">
                    <div class="item-content-top">
                        <div class="item-big-img">
                            <router-link to="/goodsList">
                                <img :src="item.bigImg" alt="">
                             </router-link>
                        </div>
                        <div class="item-four-img">
                            <div class="item-four-detail" v-for="(subItem,index) in item.itemFour" :key="index">
                                <div class="item-four-detail-text">
                                    <p class="pt_bi_tt">{{subItem.title}}</p>
                                    <p class="pt_bi_promo">{{subItem.intro}}</p>
                                </div>
                                <div class="item-four-detail-img">
                                    <router-link to="/goodsList">
                                        <img :src="subItem.img" alt="">
                                     </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-content-bottm">
                     <div class="item-content-bottom-img" v-for="(subImg,index) in item.itemContent" :key="index">
                       <router-link to="">
                         <img :src="subImg" alt="">
                       </router-link>
                     </div>

                    </div>
                </div>
            </div>

        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Search from './Search.vue'
import Footer from './Footer/Footer.vue'
import HomeNav from './nav/HomeNav.vue'
import {
    mapState,
    mapActions,
    mapGetters,
    mapMutations
} from 'vuex';
export default {
    name: 'Index',
    created() {
        this.loadCarouselItems()
        this.loadSeckillsInfo()
        this.loadComputer()
    },
    mounted() {

        this.setIntervalObj = setInterval(() => {
            this.REDUCE_SECKILLS_TIME()
        }, 1000);
    },
    data() {
        return {
            setIntervalObj: null
        };

    },
    components: {
        Search,
        Footer,
        HomeNav
    },
    methods: {
        ...mapActions(['loadCarouselItems', 'loadSeckillsInfo','loadComputer']),
        ...mapMutations(['REDUCE_SECKILLS_TIME'])
    },
    computed: {
        ...mapState(['seckills','computer']),
        ...mapGetters(['seckillsHours', 'seckillsMinutes', 'seckillsSeconds'])
    },
    destroyed() {
        clearInterval(this.setIntervalObj)
    }
}
</script>

<style scoped>
.content {
    width: 1008px;
    margin: 0 auto;
}

/*秒杀专栏*/
.seckill {
    width: 100%;
    height: 330px;
    margin: 15px auto;
    background-color: #fff;
}

.seckill .seckill-head {
    width: 100%;
    height: 50px;
    background-color: #e01222;
}

.seckill .seckill-icon {
    float: left;
    width: 98px;
    height: 100%;
}

.seckill-icon img {
    margin-left: 15px;
    margin-top: 6px;
    width: 35px;
    height: 35px;
    animation: shake-clock 0.4s infinite;
}

@keyframes shake-clock {
    0% {
        transform: rotate(-18deg);
    }

    50% {
        transform: rotate(18deg);
    }

    100% {
        transform: rotate(-18deg);
    }
}

.seckill-text {
    float: left;
    width: 300px;
    height: 100%;
}

.seckill-text .seckill-title {
    font-size: 22px;
    line-height: 50px;
    color: #fff;
}

.seckill-text .seckill-remarks {
    margin-left: 5px;
    font-size: 10px;
    color: #fff;
}

/*倒计时*/
.count-down {
    float: right;
    height: 100%;
    margin-right: 30px;
    line-height: 50px;
}

.count-down .count-down-text {
    color: #fff;
}

.count-down .count-down-number {
    padding: 3px;
    border-radius: 5px;
    background-color: #440106;
    font-size: 26px;
    font-weight: bold;
    color: #f90013;
}

.count-down .count-down-point {
    font-size: 26px;
    font-weight: bold;
    color: #440106;
}

/*秒杀内容*/
.seckill-content {
    width: 100%;
    height: 280px;
}

.seckill-content .seckill-item {
    float: left;
    margin-top: 15px;
    margin-left: 15px;
    width: 183px;
    height: 250px;
    box-shadow: 0px 0px 8px #ccc;
    cursor: pointer;

}

.seckill-content .seckill-item .seckill-item-img {
    margin: 0 auto;
    width: 160px;
    height: 160px;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
}

.seckill-item .seckill-item-img img {
    margin-left: 15px;
    margin-top: 15px;
    width: 130px;
    height: 130px;
    transition: margin-top 0.3s;
}

.seckill-content .seckill-item-img:hover img {
    margin-top: 6px;
    transition: margin-top 0.3s;
}

.seckill-content .seckill-item-info {
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 12px;
    color: #009688;
}

.seckill-content .seckill-price {
    margin-right: 5px;
    font-size: 25px;
    font-weight: bold;
}
/*电脑专栏*/
.item-class{
  margin-top: 15px;
  width: 100%;
  height: 470px;
  background-color: #fff;
}
.item-class .item-class-head {
  width: 100%;
  height: 50px;
  background-color: #4488a7;
}
.item-class-head ul{
  float: right;
  margin-right: 30px;
  list-style: none;
  line-height: 50px;
}
.item-class-head .item-class-title{
  margin-left: 15px;;
  font-size: 25px;
  line-height: 50px;
  color: #fff;
}
.item-class-head a{
  padding: 6px;
  margin-left: 15px;
  font-size: 12px;
  text-decoration: none;
  color: #fff;
  background-color: #6da6be;
  border: 1px solid #6da6be;
}
.item-class-head a:hover{
  border: 1px solid #fff;;
}
.item-class-head ul li {
  float: left;
}

.item-class-content{
    float: left;
    margin-left: 0.9%;
    border: 1px solid #ccc;
    border-bottom: none;
    border-left: none;
    width: 49%;
    cursor: pointer;
}
.item-class-content:nth-child(odd) {
  border: none;
}
.item-content-top{
    width: 100%;
    height: 260px;
}
.item-big-img{
    float: left;
    overflow: hidden;
    width: 180px;
    height: 260px;
}
.item-big-img img{
    margin-left: 0px;
    transition:  margin-left 0.3s;
}
.item-big-img:hover img {
    margin-left: -15px;
    transition: margin-left 0.3s;
}
.item-four-img{
    float: left;
     width: 303px;
  margin-left: 8px;
}
.item-four-detail{
    float: left;
    margin-left: -1px;
    width: 152px;
    height: 130px;;
}
.item-four-detail-img{
    margin-left: 0;
    transition: margin-left 0.3s;
}
.item-four-detail-img:hover img{
    margin-left: -6px;
    transition: margin-left 0.3s;
}
.item-four-detail:first-child {
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
.item-four-detail:last-child{
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc; 
}
.item-four-detail-text {
    float: left;
     width: 50px;
  margin-left: 5px;
  margin-top: 15px;
}
.item-four-detail-img{
    float: left;
    margin-top: 15px;
    width: 96px;
    overflow: hidden;
}
.item-four-detail-img img {
  margin-left: 5px;
  width: 90px;
}
.pt_bi_tit {
  font-weight: bold;
  font-size: 12px;
  color: #4488a7;
}
.pt_bi_tit-eat {
  color: #ecb127;
}
.pt_bi_promo {
  color: #00695c;
}
.item-content-bottm{
   
    width: 100%;
    margin-top: 18px;

}
.item-content-bottom-img {
    float: left;
    width: 156px;
    margin-right: 8px;
    overflow: hidden;
}
.item-content-bottom-img:hover img{
    margin-left: -15px;
    transition: margin-left 0.3s;
}
</style>
