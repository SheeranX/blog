<template>
    <div>
        <topbar></topbar>
        <div class="container">
            <leftnav></leftnav>
            <div class="content">
               <nuxt-child/>
            </div>
        </div>
    </div>
</template>
<script>
import topbar from "~/components/admin/topbar.vue";
import leftnav from '~/components/admin/leftnav.vue';
export default {
    components:{
        topbar,
        leftnav
    },
    mounted() {
        this.$router.push({path:'/admin/personnel'});
    },
}
</script>
<style scoped>
    .margin5{
        margin-top: 5px;
    }
    .content{
        position: fixed;
        left: 220px;
        right: 0;
        bottom: 0;
        top: 95px;
        padding: 10px;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>