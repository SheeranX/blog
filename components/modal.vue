<template>
     <div class="modal" :class="active">
      <div class="modal-background" @click="close"></div>
      <div class="modal-content">
        <!-- Any other Bulma elements you want -->
      </div>
      <button class="modal-close is-large" aria-label="close" @click="close"></button>
    </div>
</template>
<style scoped>
</style>
<script>
import bus from "~/plugins/eventBus.js";
export default {
         data:function(){
             return {
                 active:""
             }
         },
         mounted() {
             let _this = this;
             bus.$on('openModal',function(msg){
                 _this.active = msg
             })
         },
         methods:{
             close:function(){
                 let _this = this;
                 _this.active = "";
             }
         }

     }
</script>
