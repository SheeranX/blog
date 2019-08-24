<template>
  <div>
    <topnav></topnav>
    <div class="section">
      <h1 class="title margin15 has-text-centered">{{contentObj.title}}</h1>
      <div class="columns is-centered">
        <div class="column is-half">
          <h6 class="subtitle is-6 has-text-centered has-text-grey-light is-size-7">
            <span>{{contentObj.date}}</span>
            <span>字数 {{contentObj.word}}</span>
            <span>阅读 {{contentObj.review}}</span>
            <span>评论 {{contentObj.review}}</span>
            <span>喜欢 {{contentObj.like}}</span>
          </h6>
          <div class="content">
           {{contentObj.parag}}
          </div>
          <!--box-->
          <profile-box :articleId='id'></profile-box>
            <div class="has-text-right has-text-grey-light is-size-7">
                <p>@著作权归作者所有</p>
            </div>
          <div class="has-text-centered margin15">
               <a class="button is-large is-rounded is-outlined is-danger">
                    <span class="icon is-medium">
                    <i class="fa fa-heart"></i>
                    </span>
                    <span class="is-size-6">喜欢</span>
                </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topnav from '~/components/topnav.vue';
import profileBox from '~/components/profileBox.vue';
import {getArticle, getProfileData} from '~/assets/scripts/getData.js'
export default {
  components: {
    topnav,
    profileBox
  },
  data() {
    return {
      id: '',
      contentObj: {}
    }
  },
  mounted() {
    this.id = this.$route.params.id;

    getArticle()
    .then(res=>{
      this.contentObj = res;
      console.log(res);
    });

    getProfileData();
  },
  methods:{
     
  }
}
</script>
<style scoped>

</style>

