<template>
    <div class="breadcrumb">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul class="font14">
            <li><a href="#">主页</a></li>
            <li><a href="#">文档</a></li>
            <li><a href="#">个人信息</a></li>
            <li class="is-active"><a href="#" aria-current="page">个人资料</a></li>
        </ul>
     </nav>
    </div>
</template>
<style scoped>
    .breadcrumb{
        height: 40px;
        line-height: 40px;
        position: fixed;
        top: 53px;
        left: 200px;
        right: 0;
        box-shadow: 0 3px 3px -1px #ccc;
        background: #fff;
        padding-left: 10px;
    }
</style>
