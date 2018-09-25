<template>
    <div class="container">
        <Search></Search>
      <HomeNav></HomeNav>
      <Footer></Footer>
    </div>
</template>
<script>
  import Search from './Search.vue'
  import Footer from './Footer/Footer.vue'
  import HomeNav from './nav/HomeNav.vue'
  import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
    export default {
       name:'Index',
       created() {
         this.loadCarouselItems()
       },
       components:{Search,Footer,HomeNav},
       methods: {
         ...mapActions(['loadCarouselItems'])
       }

    }
</script>
