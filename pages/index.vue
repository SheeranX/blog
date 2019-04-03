<template>
  <div>
    <!-- 页面顶部导航 -->
    <topnav></topnav>
    <!-- 页面主题部分 -->
  <div class="container">
      <div class="section">
      <div class="columns margin5"> 
        <div class="column is-three-quarters">
          <!-- 滑动组件 -->
          <swiper></swiper>
          <!-- 内容缩略图 -->
          <box v-for="(list,idx) in item" :key="idx" @click.native="checkArticle(idx)"></box>
        </div>
        <!-- 右侧导航 -->
        <div class="column">
          <rightnav></rightnav>
        </div>
      </div>
    </div>
  </div>
    <!-- 页面底部footer -->
    <!-- <btmfooter></btmfooter> -->
  </div>
</template>
<script>
import box from '~/components/box.vue';
import rightnav from '~/components/rightNav.vue';
import btmfooter from "~/components/footer.vue";
import topnav from "~/components/topnav.vue";
import swiper from "~/components/swiper.vue";
import axios from 'axios'
export default {
  components: {
    box,
    rightnav,
    btmfooter,
    topnav,
    swiper
  },
  data(){
    return {
      item:[1,2,4,5,6,7],
      isShow:false
    }
  },
  methods:{
    checkArticle:function(id){
      console.log(id);
      this.$router.push({path:`/article/${id}`});
      // axios.get('/user')
      // .then(res=>{
      //   console.log(res);
      // })
    }
  },
  mounted() {
    this.$message.error('halo');
  },
}
</script>

<style scoped>
  .margin5{
    margin-top: 5px;
  }
</style>
