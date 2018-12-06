<template>
  <div>
    <!-- 页面顶部导航 -->
    <nav
      class="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="https://bulma.io"
        >
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          >
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
      >
        <div class="navbar-start">
          <a class="navbar-item">
            首页
          </a>

          <a class="navbar-item">
            内容1 
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              更多
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>关于我</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
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

export default {
  components: {
    box,
    rightnav,
    btmfooter
  }
}
</script>

<style lang='less'>
</style>
