<template>
    <div class="container">
        <i-input v-model="searchData" placeholder="输入你想查找的商品" size="large" class="search" >
            <Button slot="append" icon="ios-search" @click="search">
            </Button>
        </i-input>
        <Tag v-for="(item , index) in promotionTags" :key="index" closable @on-close="closeTag(index)"> <span @click="clickTag(index)">{{item}}</span></Tag>
    </div>
</template>
<script>
export default {
    name:'Search',
    data(){
        return {
              searchData:'',
              promotionTags: ['买2免1', '领200神券', '199减100', '母婴5折抢', '充100送20'],
              id:'123'
        };
    },
    methods:{
        search(){
          this.$router.push({path:"/goodsList",query:{searchData: this.searchData}})
        },

        clickTag(index){
            this.searchData = this.promotionTags[index];
        },
        closeTag(index){
         this.promotionTags.splice(index,1)
        }
    }
}
</script>

<style scoped>
  .container{
      padding-top: 15px;
      margin: 0 auto;
      margin-bottom: 15px;
      width: 470px;
  }
  .search{
      margin: 5px 0;
  }
</style>
