<template>
 <div class="top-bar">
    <nav
    class="navbar is-light"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
          <div class="navbar-brand">
      <nuxt-link to="/"
        class="navbar-item"
        href=""
      >
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        >
      </nuxt-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasic"
        @click="close"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasic"
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
            <a class="button is-primary" @click="isActive=true">
              <strong>关于我</strong>
            </a>
            <!-- <a class="button is-light">
              Log in
            </a> -->
          </div>
        </div>
      </div>
    </div>
    </div>
  </nav>
   <!-- 内容弹窗 -->
    <modal v-model="isActive"></modal>
    <!-- 左侧栏弹窗 -->
    <leftbar v-model="isLeft"></leftbar>
 </div>
</template>
<style scoped>
.top-bar {
  position: fixed;
  width: 100%;
  z-index: 999;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
}
</style>
<script>
import modal from '~/components/modal.vue';
import leftbar from '~/components/leftBar.vue';
export default {
  components: {
    modal,
    leftbar
  },
  data: function() {
    return {
      isActive: false,
      isLeft:false
    }
  },
  mounted() {},
  methods: {
    close(){
      this.isLeft = true;
      console.log('++');
    }
  }
}
</script>