<template>
    <div>
     <div class="box margin15 has-background-white-ter">
            <article class="media">
                <div class="media-left">
                <figure class="image is-64x64">
                    <img :src="boxData.imgUrl" alt="Image" class="img-responsive">
                </figure>
                </div>
                <div class="media-content">
                <div class="content">
                    <p>
                    <strong>{{boxData.nickName}}</strong>
                    <br>
                    {{boxData.content}}
                    </p>
                </div>
                </div>
            </article>
      </div>
    </div>
</template>
<script>
import { getProfileData } from '~/assets/scripts/getData.js'
export default {
    props: ['articleID'],
    data() {
        return {
            boxData: {}
        }
    },
    mounted() {
        let id = this.articleID;
        getProfileData(id).then(res => {
            this.boxData = res;
        });
    },
}
</script>
<style scoped>
 .margin15 {
  margin-top: 60px;
}
</style>

