<template>
  <div id="app">
   <Header></Header>
   <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/Header'
export default {
 name:'App',
 components:{Header},
 beforeCreate() {
   window.localStorage.setItem(usersList,JSON.stringify([{
    username:'Leo',
    password:'123456'
}])),
  window.localStorage.setItem(loginFlag,JSON.stringify({
    username:'Leo1',
    password:'123456'
}))
 },
}
</script>

