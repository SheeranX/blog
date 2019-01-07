<template>
    <div class="left-bar" v-show="isLeft">
        <div class="modal-hover" @click="close"></div>
            <transition name="fade">
                <div class="left-bar-content" v-show="isLeft">
                <div class="columns is-mobile is-centered">
                    <div class="column is-half">
                        <figure class="image is-1by1 margin-top">
                            <img class="is-rounded portrait" src="../static/images/demo_test.jpg">
                        </figure>
                    </div>
                </div>
                <aside class="menu">
                    <ul class="menu-list">
                    <li><a>每日推荐</a></li>
                    <li><a>法律大全</a></li>
                    <li><a>推荐链接</a></li>
                    <li><a>关于我</a></li>
                    </ul>
                </aside>
           </div>
            </transition>
    </div>
</template>
<style scoped>
.left-bar {
  position: fixed;
  bottom: 0;
  z-index: 999;
  width: 100%;
  top: 0;
}
.modal-hover {
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
}
.left-bar-content {
  width: 50%;
  background: #fff;
  position: absolute;
  z-index: 9999;
  bottom: 0;
  top: 0;
  text-align: center;
  transition: all 0.5s;
}
.margin-top{
    margin-top: 30px;
}
.fade-enter-active, .fade-leave-active {
  transition: transform .5s;
  transform: translateX(0%);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-150%);
}
/* .image{
    max-width: 100px;
    max-height: 100px;
} */
</style>
<script>
export default {
    data() {
        return {
            isLeft:this.value
        }
    },
     props: {
            value: {
                type: Boolean,
                default: true
            }
     },
     watch:{
             value (val) {
                this.isLeft = val;
            },
         },
    methods: {
        close(){
            this.isLeft = false;
            this.$emit('input',false);
          }
    },
}
</script>
