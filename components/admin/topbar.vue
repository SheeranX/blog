<template>
    <div class="topbar">
        <!-- <breadcrumb></breadcrumb> -->
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                     <span>
                        <span class="icon">
                         <i class="fas fa-outdent"></i>
                        </span>
                    </span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-end">
                    <a class="navbar-item">
                       <span class="icon">
                            <i class="fas fa-sign-out-alt"></i>
                        </span>  
                    </a>
                </div>
            </div>    
        </nav>
    </div>
</template>
<style scoped>
    .topbar {
        position: fixed;
        left: 200px;
        right: 0;
        top: 0;
        height: 3.25rem;
        background: #ffff;
        box-shadow: 0 4px 1px -4px #ccc;
    }
</style>
<script>
import breadcrumb from '~/components/admin/breadcrumb.vue';
export default {
    components:{
        breadcrumb
    }
}
</script>
