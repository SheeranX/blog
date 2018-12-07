<template>
    <div>
        <topnav></topnav>
            <div class="section">
                <h1 class="title margin15 is-center">共产主义接班人</h1>
                {{id}}
            </div>
    </div>
</template>
<script>
import topnav from '~/components/topnav.vue';
    export default{
        components:{
            topnav
        },
        data(){
          return {
              id:''
          }  
        },
        mounted() {
            this.id =  this.$route.params.id;
        },
    }
</script>
<style scoped>
.margin15{
    margin-top: 15px;
}
</style>

