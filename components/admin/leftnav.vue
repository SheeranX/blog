<template>
    <div class="f-column left-bar"> 
        <p class="title font16 has-text-white">
            <span>后台管理系统</span>
        </p>
        <div class="f-row a-center" @click="linkTo('/admin/personnel')">
            <span>
                <span class="icon">
                 <i class="fas fa-info-circle"></i>
                </span>
            </span>
            <span class="font14 padding-left">个人信息</span>
        </div>
         <div class="f-row a-center" @click="linkTo('/admin/articleManager')">
            <span>
                <span class="icon">
                 <i class="fas fa-file"></i>
                </span>
            </span>
            <span class="font14 padding-left">文章信息</span>
        </div>
         <div class="f-row a-center">
            <span>
                <span class="icon">
                 <i class="fas fa-chart-line"></i>
                </span>
            </span>
            <span class="font14 padding-left">数据统计</span>
        </div>
         <div class="f-row a-center">
            <span>
                <span class="icon">
                 <i class="fas fa-location-arrow"></i>
                </span>
            </span>
            <span class="font14 padding-left">导航信息</span>
        </div>
    </div>
</template>
<style scoped>
    .title{
        text-align: center;
        height: 3.25rem;
        line-height: 3.25rem;
        margin: 0;
        box-shadow: 0 3px 4px -3px #333;
    }
    .left-bar{
        width: 200px;
        background: #393D49;
        position: fixed;
        left: 0;
        top: 0px;
        bottom: 0;
        text-align: center;
        color: #ddd;
        transition: color ease .5s;
        box-shadow: 2px 0 2px rgba(0, 0, 0, .2);
        z-index: 99;
    }
    .left-bar>div{
        height: 40px;
        line-height: 40px;
        padding-left: 30px;
        transition: all ease .5s;
    }
    .left-bar>div:hover{
        color: #fff;
        transition: color ease .5s;
        background: #31343e;
        cursor: pointer;
        transition: all ease .5s;
    }
    .padding-left{
        padding-left: 10px;
    }
</style>
<script>
export default {
    name:"leftnav",
    methods: {
        linkTo(url){
            this.$router.push({path:url})
        }
    },
}
</script>


