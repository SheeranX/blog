<template>
  <div>
    <topnav></topnav>
    <div class="section">
      <h1 class="title margin15 has-text-centered">共产主义接班人</h1>
      <div class="columns is-centered">
        <div class="column is-half">
          <h6 class="subtitle is-6 has-text-centered has-text-grey-light is-size-7">
            <span>2018.09.20 12:33</span>
            <span>字数 458</span>
            <span>阅读 11132</span>
            <span>评论 11</span>
            <span>喜欢 27</span>
          </h6>
          <div class="content">
            9月19号，顺丰一名高级运维工程师，需求变更之后发布版本，经过一番操作之后登录生产数据库，
            连接SHIVA-OMCS的RUSS库进行操作，但是在操作过程中，选错了RUSS 数据库打算删除执行的sql。
            同时，在删除的delete语句时，直接忽略弹出提示，爽爽的回车键，数据库RUSS库被删除。
            导致OMCS运营监控系统瞬间崩溃，该系统上临时车线上发车功能无法使用并持续约10个小时。
            同比9月5日的929条临时车需求临时变更，
            此次删库对生产业务产生了严重的负面影响。运维工程师发现误删数据库之后，傻傻地想着完蛋了，36计走位上策，直接跑路要紧。
            <!-- 9月19号，顺丰一名高级运维工程师，需求变更之后发布版本，经过一番操作之后登录生产数据库，
            连接SHIVA-OMCS的RUSS库进行操作，但是在操作过程中，选错了RUSS 数据库打算删除执行的sql。
            同时，在删除的delete语句时，直接忽略弹出提示，爽爽的回车键，数据库RUSS库被删除。
            导致OMCS运营监控系统瞬间崩溃，该系统上临时车线上发车功能无法使用并持续约10个小时。
            同比9月5日的929条临时车需求临时变更，
            此次删库对生产业务产生了严重的负面影响。运维工程师发现误删数据库之后，傻傻地想着完蛋了，36计走位上策，直接跑路要紧。9月19号，顺丰一名高级运维工程师，需求变更之后发布版本，经过一番操作之后登录生产数据库，
            连接SHIVA-OMCS的RUSS库进行操作，但是在操作过程中，选错了RUSS 数据库打算删除执行的sql。
            同时，在删除的delete语句时，直接忽略弹出提示，爽爽的回车键，数据库RUSS库被删除。
            导致OMCS运营监控系统瞬间崩溃，该系统上临时车线上发车功能无法使用并持续约10个小时。
            同比9月5日的929条临时车需求临时变更，
            此次删库对生产业务产生了严重的负面影响。运维工程师发现误删数据库之后，傻傻地想着完蛋了，36计走位上策，直接跑路要紧。9月19号，顺丰一名高级运维工程师，需求变更之后发布版本，经过一番操作之后登录生产数据库，
            连接SHIVA-OMCS的RUSS库进行操作，但是在操作过程中，选错了RUSS 数据库打算删除执行的sql。
            同时，在删除的delete语句时，直接忽略弹出提示，爽爽的回车键，数据库RUSS库被删除。
            导致OMCS运营监控系统瞬间崩溃，该系统上临时车线上发车功能无法使用并持续约10个小时。
            同比9月5日的929条临时车需求临时变更，
            此次删库对生产业务产生了严重的负面影响。运维工程师发现误删数据库之后，傻傻地想着完蛋了，36计走位上策，直接跑路要紧。
            9月19号，顺丰一名高级运维工程师，需求变更之后发布版本，经过一番操作之后登录生产数据库，
            连接SHIVA-OMCS的RUSS库进行操作，但是在操作过程中，选错了RUSS 数据库打算删除执行的sql。
            同时，在删除的delete语句时，直接忽略弹出提示，爽爽的回车键，数据库RUSS库被删除。
            导致OMCS运营监控系统瞬间崩溃，该系统上临时车线上发车功能无法使用并持续约10个小时。
            同比9月5日的929条临时车需求临时变更，
            此次删库对生产业务产生了严重的负面影响。运维工程师发现误删数据库之后，傻傻地想着完蛋了，36计走位上策，直接跑路要紧。 -->
          </div>
         <div class="box margin15 has-background-white-ter">
            <article class="media">
                <div class="media-left">
                <figure class="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" class="is-rounded">
                </figure>
                </div>
                <div class="media-content">
                <div class="content">
                    <p>
                    <strong>John Smit</strong> <small>@johnsmith</small> <small>31m</small>
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                    </p>
                </div>
                </div>
            </article>
            </div>
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
      {{id}}
    </div>
  </div>
</template>
<script>
import topnav from '~/components/topnav.vue';
import {getArticle} from '~/assets/scripts/getData.js'
export default {
  components: {
    topnav
  },
  data() {
    return {
      id: ''
    }
  },
  mounted() {
    this.id = this.$route.params.id;

    getArticle({
        id:0
    })
    .then(res=>{
        console.log(res);
    })
  },
  methods:{
     
  }
}
</script>
<style scoped>
.margin15 {
  margin-top: 60px;
}
</style>

