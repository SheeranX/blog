<template>
  <div>
    <!-- 页面顶部导航 -->
    <topnav></topnav>
    <!-- 页面主题部分 -->
  <div class="container">
      <div class="section">
      <div class="columns">
        <div class="column is-three-quarters">
           <figure class="image is-3by1">
            <img src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
          <!-- 内容缩略图 -->
          <box></box>
        </div>
        <!-- 右侧导航 -->
        <div class="column">
          <rightnav></rightnav>
        </div>
      </div>
    </div>
  </div>
    <!-- 页面底部footer -->
    <btmfooter></btmfooter>
  </div>
</template>

<script>
import box from '~/components/box.vue';
import rightnav from '~/components/rightNav.vue';
import btmfooter from "~/components/footer.vue";
import topnav from "~/components/topnav.vue";

export default {
  components: {
    box,
    rightnav,
    btmfooter,
    topnav
  }
}
</script>

<style lang='less'>
</style>
