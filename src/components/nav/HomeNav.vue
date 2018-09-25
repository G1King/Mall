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
                <li @mouseenter="showDetail(1)" @mouseleave="showDetail(2)">
                    <span class="nav-side-item">家用电器</span>
                </li>
                <li @mouseenter="showDetail(1)" @mouseleave="showDetail(2)">
                    <span class="nav-side-item">手机</span> /
                    <span class="nav-side-item">运营商</span> /
                    <span class="nav-side-item">数码</span>
                </li>
               <li @mouseenter="showDetail(1)" @mouseleave="showDetail(2)">
                    <span class="nav-side-item">电脑</span> /
                    <span class="nav-side-item">办公</span>
                </li>
               <li @mouseenter="showDetail(1)" @mouseleave="showDetail(2)">
                    <span class="nav-side-item">家居</span> /
                    <span class="nav-side-item">家具</span> /
                    <span class="nav-side-item">家装</span> /
                    <span class="nav-side-item">厨具</span>
                </li>
                <li @mouseenter="showDetail(1)" @mouseleave="showDetail(2)">
                    <span class="nav-side-item">男装</span> /
                    <span class="nav-side-item">女装</span> /
                    <span class="nav-side-item">童装</span> /
                    <span class="nav-side-item">内衣</span>
                </li>
                <li @mouseenter="showDetail(1)" @mouseleave="showDetail(2)">
                    <span class="nav-side-item">美妆个护</span> /
                    <span class="nav-side-item">宠物</span>
                </li>
                <li @mouseenter="showDetail(1)" @mouseleave="showDetail(2)">
                    <span class="nav-side-item">女鞋</span> /
                    <span class="nav-side-item">箱包</span> /
                    <span class="nav-side-item">钟表</span> /
                    <span class="nav-side-item">珠宝</span>
                </li>
               <li @mouseenter="showDetail(1)" @mouseleave="showDetail(2)">
                    <span class="nav-side-item">男鞋</span> /
                    <span class="nav-side-item">运动</span> /
                    <span class="nav-side-item">户外</span>
                </li>
                <li @mouseenter="showDetail(1)" @mouseleave="showDetail(2)">
                    <span class="nav-side-item">汽车</span> /
                    <span class="nav-side-item">汽车用品</span>
                </li>
                <li @mouseenter="showDetail(1)" @mouseleave="showDetail(2)">
                    <span class="nav-side-item">母婴</span> /
                    <span class="nav-side-item">玩具乐器</span>
                </li>
                <li @mouseenter="showDetail(1)" @mouseleave="showDetail(2)">
                    <span class="nav-side-item">食品</span> /
                    <span class="nav-side-item">酒类</span> /
                    <span class="nav-side-item">生鲜</span> /
                    <span class="nav-side-item">特产</span>
                </li>
                <li @mouseenter="showDetail(1)" @mouseleave="showDetail(2)">
                    <span class="nav-side-item">礼品鲜花</span> /
                    <span class="nav-side-item">农资绿植</span>
                </li>
                <li @mouseenter="showDetail(1)" @mouseleave="showDetail(2)">
                    <span class="nav-side-item">医药保健</span> /
                    <span class="nav-side-item">计生情趣</span>
                </li>
                <li @mouseenter="showDetail(1)" @mouseleave="showDetail(2)">
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
    <transition name="fade" :duration = "{enter: 100 ,leave: 100}" >
       <div class="detail-item-panel panel-1" ref="itemPanel1" v-show="panel1" @mouseenter="showDetail(1)" @mouseleave="showDetail(2)">
        <div class="nav-detail-item">
            <span v-for="(item, index) in panelData1.navTags" :key="index">{{item}} ></span>
        </div>
        <ul>
            <li v-for="(items,index) in panelData1.classNav" :key="index" class="detail-item-row">
                <span class="detail-item-title">{{items.title}}
                <span class="glyphicon glyphicon-menu-right"></span>
                </span>
                 <router-link to="/goodsList" v-for="(item,subindex) in items.tags" :key="subindex">
                 <span class="detail-item">{{item}}</span>
                 </router-link>
             </li>
        </ul>
       </div>
    </transition>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'

export default {
    
    data() {
        return {
            panel1: false,
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
            ],
         panelData1: {
        navTags: [ '清洁用品', '美妆商城', '美妆馆', '妆比社', '全球购美妆', '宠物馆' ],
        classNav: [
          {
            title: '面部护肤',
            tags: [ '补水保湿', '卸妆', '洁面', '爽肤水', '乳液面霜', '精华', '眼霜', '防晒', '面膜', '剃须', '套装' ]
          },
          {
            title: '洗发护发',
            tags: [ '洗发', '护发', '染发', '造型', '假发', '美发工具', '套装' ]
          },
          {
            title: '身体护理',
            tags: [ '补水保湿', '沐浴', '润肤', '精油', '颈部', '手足', '纤体塑形', '美胸', '套装' ]
          },
          {
            title: '口腔护理',
            tags: [ '牙膏/牙粉', '牙刷/牙线', '漱口水', '套装' ]
          },
          {
            title: '女性护理',
            tags: [ '卫生巾', '卫生护垫', '私密护理', '脱毛膏' ]
          },
          {
            title: '香水彩妆',
            tags: [ 'BB霜', '化妆棉', '女士香水', '男士香水', '底妆', '眉笔', '睫毛膏', '眼线', '眼影', '唇膏/彩' ]
          },
          {
            title: '清洁用品',
            tags: [ '纸品湿巾', '衣物清洁', '清洁工具', '家庭清洁', '一次性用品', '驱虫用品', '皮具护理' ]
          },
          {
            title: '宠物生活',
            tags: [ '水族世界', '狗粮', '猫粮', '猫狗罐头', '狗零食', '猫零食', '医疗保健', '宠物玩具', '宠物服饰' ]
          },
          {
            title: '香水彩妆',
            tags: [ 'BB霜', '化妆棉', '女士香水', '男士香水', '底妆', '眉笔', '睫毛膏', '眼线', '眼影', '唇膏/彩' ]
          },
          {
            title: '清洁用品',
            tags: [ '纸品湿巾', '衣物清洁', '清洁工具', '家庭清洁', '一次性用品', '驱虫用品', '皮具护理' ]
          },
          {
            title: '宠物生活',
            tags: [ '水族世界', '狗粮', '猫粮', '猫狗罐头', '狗零食', '猫零食', '医疗保健', '宠物玩具', '宠物服饰' ]
          }
        ]
      },
        }
    },
    computed: {
        ...mapState(['marketing'])
        
    },
    methods: {
        showDetail(v) {
            
          v == 1 ? ( this.panel1 = true ): (this.panel1 = false)
          
        }
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
.detail-item-panel {
    position: absolute;
    top: 168px;
    left: 330px;
    z-index: 999;
width: 815px;
height: 490px;
 background-color: #fff;
}
.nav-detail-item{
    margin-left: 26px;
    margin-top: 15px;
    margin-bottom: 15px;
    cursor: pointer;
    color: #eee;
}
.nav-detail-item span {
  padding: 6px;
  padding-left: 12px;
  margin-left: 15px;
  font-size: 12px;
  background-color: #6e6568;
}
.nav-detail-item span:hover {
  margin-left: 15px;
  background-color: #f44336;
}
.detail-item-panel ul {
  list-style: none;
}
.detail-item-panel li {
  line-height: 38px;
  margin-left: 40px;
}
.detail-item-title {
  padding-right: 6px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  color: #555555;
}
.detail-item-title:hover {
  color: #d9534f;
}
.detail-item-row a {
  color: #555555;
}
.detail-item{
  font-size: 14px;
  padding-left: 12px;
  padding-right: 8px;
  cursor: pointer;
  border-left: 1px solid #ccc;
}
.detail-item:hover {
  color: #d9534f;
}
</style>
