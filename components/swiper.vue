<template>
  <div style="position:relative">
    <figure class="image is-3by1">
      <img src="https://bulma.io/images/placeholders/128x128.png">
      <div class="swiper-operate prev">
        <span class="icon is-medium">
          <i class="fas fa-2x fa-arrow-circle-left"></i>
        </span>
      </div>
      <div class="swiper-operate next">
        <span class="icon is-medium">
          <i class="fas fa-2x fa-arrow-circle-right"></i>
        </span>
      </div>
    </figure>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: []
    }
  },
  mounted() {}
}
</script>
<style scoped>
.swiper-operate {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: none;
}
.swiper-operate:hover {
  cursor: pointer;
}
.image:hover .swiper-operate {
  display: block;
  transition: all ease-in-out 1s;
}
.next {
  right: 10px;
}
.prev {
  left: 10px;
}
</style>