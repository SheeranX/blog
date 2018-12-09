<template>
     <div class="modal is-active" v-show="visible">
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
export default {
         props: {
            value: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                visible:this.value
            }
        },
         mounted() {
             let _this = this;
         },
         methods:{
             close:function(){
                 let _this = this;
                 _this.visible = false;
                 _this.$emit('input',false);
             }
         },
         watch:{
             value (val) {
                this.visible = val;
            },
         }

     }
</script>
