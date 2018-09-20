<template>
    <div class="container">
        <Search></Search>
      
      <Footer></Footer>
    </div>
</template>
<script>
  import Search from './Search.vue'
  import Footer from './Footer/Footer.vue'
    export default {
       name:'Index',
       components:{Search,Footer}
    }
</script>
