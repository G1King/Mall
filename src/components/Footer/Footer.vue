<template>
    <div class="container">
         <footer class="footer">
            <div class="icon-row">
                <div class="footer-icon">
                    <h5 class="footer-icon-child"></h5>
                    <span class="footer-icon-text">品类齐全,轻松购物</span>
                </div>
                <div class="footer-icon">
                    <h5 class="footer-icon-child footer-icon-child-2"></h5>
                    <span class="footer-icon-text">多仓直发，极速配送</span>
                </div>
                <div class="footer-icon">
                    <h5 class="footer-icon-child footer-icon-child-3"></h5>
                    <span class="footer-icon-text">正品行货，精致服务</span>
                </div>
                <div class="footer-icon">
                    <h5 class="footer-icon-child footer-icon-child-4"></h5>
                    <span class="footer-icon-text">天天低价，畅选无忧</span>
                </div>
            </div>
            <div class="service-into">
                <div class="servece-type">
                    <div class="servece-type-info" v-for="(guide,index) in guideArr" :key="index">
                    <ul>
                     <li v-for = "(item,index) in guide" :key="index">{{item}}</li>
                    </ul>
                    </div>
                </div>
                <div class="friend-link">
                    <div class="fiend-link-item">
                     <ul>
                         <li v-for="(item,index) in moreLink" :key="index">
                        
                         <span :class="[linkItemClass, {'link-last-item': index === 9}]">{{item}}</span>
                         </li>
                     </ul>
                    </div>
                </div>
                <div class="copyright">
                    <p>Copyright © 2018 by Leo <a href="https://www.baidu.com"><Icon type="logo-github"/></a> <span>本项目仅供学习参考</span></p>
                </div>
            </div>
         </footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
             linkItemClass: 'link-item',
            guideArr:[
        [ '购物指南', '购物流程', '会员介绍', '生活旅行', '常见问题', '大家电', '联系客服' ],
        [ '配送方式', '上门自提', '211限时达', '配送服务查询', '收取标准', '海外配送' ],
        [ '支付方式', '货到付款', '在线支付', '分期付款', '邮局汇款', '公司转账' ],
        [ '售后服务', '售后政策', '价格保护', '退款说明', '返修/退换货', '取消订单' ]
            ],
         moreLink:[
             '关于我们', '联系我们', '联系客服', '合作招商', '商家帮助', '营销中心', '销售联盟', '校园社区', '风险监测', '隐私政策'
         ]
        };
    }
}
</script>
<style scoped>
.footer{
    width: 100%;
    height: 390px;
    margin-top: 30px;
    background-color: #eaeaea;
}
.icon-row{
    margin: 15px  auto;
    padding-top: 8px;
    width: 1000px;
    height: 64px;
}
.footer-icon{
    margin-left: 17px;
    margin-right: 17px;
    float: left;
}
.footer-icon-child{
    margin-top: 10px;
    overflow: hidden;
    position: absolute;
    width: 36px;
    height: 42px;
    background-image: url("../../../assets/img/footer/ico_service.png");
    text-indent: -999px;
}
.footer-icon-child-2 {
  background-position: 0 -43px;
}
.footer-icon-child-3 {
  background-position: 0 -86px;
}
.footer-icon-child-4 {
  background-position: 0 -129px;
}
.footer-icon-text{
    margin-left: 45px;
    color: #444444;
    font-size: 18px;
    font-weight: bold;
    line-height: 64px;
}
.service-into{
    width: 100%;
    border-top: 1px solid #b2dfdb;
}

.servece-type{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px auto;
    width: 800px;
    height: 200px;
}
.servece-type-info{
    color: #666666;
}
 ul{
    list-style: none;
}
.servece-type-info li{
    font-size: 14px;
    cursor: pointer;
    line-height: 26px;
}
.servece-type-info li:first-child{
  font-size: 16px;
  line-height: 28px;
  font-weight: bold;
}
.friend-link{
    display: flex;
    align-items: center;
    margin: 0px auto;
    color: #666;
    border-top: 1px solid #b2dfdb;
    width: 908px;
    height: 30px;
    
}
.fiend-link-item{
    margin: 0 auto;
}
.fiend-link-item li{
    padding: 5px 0px;
    float: left;
}
.link-item{
    padding: 0 8px;
    cursor: pointer;
    border-right: 1px solid #ccc;
}
.link-last-item {
  border: none;
}
.copyright{
  width: 100%;
  color: #666;
  line-height: 30px;
  text-align: center;
}
.copyright a{
    color: #232323;
    font-size: 20px;
}
</style>

