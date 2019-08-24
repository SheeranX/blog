<template>
    <div class="f-column left-bar"> 
        <p class="title font16 has-text-white">
            <span>后台管理系统</span>
        </p>
        <div class="f-row a-center" @click="linkTo(baseUrl+item.link,index)"
         v-for="(item,index) in list" :key="index" :class="item.isActive?'isActive':''"
        >
            <span>
                <span class="icon">
                 <i :class="item.icon"></i>
                </span>
            </span>
            <span class="font14 padding-left">{{item.text}}</span>
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
    .isActive{
        background: #26282e;
    }
    .padding-left{
        padding-left: 10px;
    }
</style>
<script>
export default {
    name:"leftnav",
    methods: {
        linkTo(url,index){
            this.list.map((item,idx) => {
                if (idx === index) 
                    item.isActive = true;
                else
                    item.isActive = false;
            })
            this.$router.replace({path:url});
           // this.navIdx = index;
        }
    },
    props: ['defaultNav'],
    data() {
        return {
           // navIdx: this.defaultNav,
            baseUrl: '/admin',
            list: [
                {
                    name: 'personnelInfo',
                    text: '个人信息',
                    link: '/personnel',
                    icon: 'fas fa-info-circle',
                    isActive: false
                },
                {
                    name: 'acticleInfo',
                    text: '文章信息',
                    link: '/articleManager',
                    icon: 'fas fa-info-circle',
                    isActive: false
                },
                {
                    name: 'dataInfo',
                    text: '数据统计',
                    link: 'fas fa-chart-line',
                    isActive: false
                },
                {
                    name: 'navigatorInfo',
                    text: '导航信息',
                    icon: 'fas fa-location-arrow',
                    isActive: false,
                }
            ]
        }
    },
    mounted() {
        let path = this.$route.fullPath;
        this.list.map( (item,index) => {
            if(`${this.baseUrl+item.link}` === path)
               item.isActive = true;
        })
    },
}
</script>


