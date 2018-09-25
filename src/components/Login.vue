<template>
    <div>
     <Row class="container">
         <i-col span="13" class="login-img-box">
         <img src="../../assets/sale.jpg" alt="">
         </i-col>
         <i-col span="7" class="login-box">
             <div class="login-wrapper">
                 <div class="login-header">
                     <p>欢迎登陆</p>
                 </div>
                 <div class="form-box">
                     <Form ref="formInline" :rules="ruleInline" :model="formData">
                         <FormItem prop="username">
                             <i-input type="text" size="large" placeholder="用户名" :model="formData.username">
                                 <Icon slot="prepend" type="ios-person"></Icon>
                             </i-input>
                         </FormItem>
                         <FormItem prop="password">
                             <i-input type="password" size="large" placeholder="密码" :model="formData.password">
                                <Icon slot="prepend" type="ios-lock-outline"></Icon>
                             </i-input>
                         </FormItem>
                         <FormItem>
                              <Button type="error" size="large" long @click="clickLogin('formInline')">登录</Button>
                         </FormItem>
                     </Form>
                 </div>
             </div>
         </i-col>
     </Row>
     <!-- <Footer></Footer> -->
    </div>
</template>
<script>
    import Footer from '../components/Footer/Footer.vue'
    import {mapActions,mapMutations} from 'vuex';
    export default {
        name:'Login',
        components:{Footer},
        data(){
            return {
                formData:{
                    username:'',
                    password:''
                },
                ruleInline:{
                   username: [
                       {require: true ,message:'请输入用户名',trigger:'blur'}
                   ],
                   password:[
                       {
                           require:true,message:'请输入密码',trigger:'blur'
                       },
                       {
                           type:'string',min:6,message:'密码不能少于6位',trigger:'blur'
                       }
                   ]
                }
            }
        },
        methods:{
            ...mapMutations(['SET_USER_LOGIN_INFO']),
            ...mapActions(['login']),
             clickLogin(par){
                 const self = this;
                 console.log(this.$refs[par])
                this.$refs[par].validate((valid)=>{
                    if (valid) {
                        this.login(self.formData).then((value) => {
                            if (value) {
                                self.$Message.success('登录成功')
                                self.$router.push('/')
                            }else{
                               self.$Message.error('用户名或密码错误')
                            }
                        })
                    }else{
                        self.$Message.error('请填写正确的用户名或者密码')
                    }
                })
             }
        }
    }
</script>
<style scoped>
.container{
margin-top: 30px;
height: 485px;;
background-color: #fff;
}
.login-img-box{
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    height: 485px;;
}
.login-img-box > img {
    width: 68%;
}
.login-box{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 485px;;
}
.login-wrapper{
   width: 80%;
   height: 280px;
   border: #ED3F14 solid 1px;
}
.login-wrapper .login-header{
    height: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  letter-spacing: 5px;
  color: #fff;
  background-color: #ED3F14;
}
.form-box{
    width: 80%;
    margin: 30px auto;
}
</style>
