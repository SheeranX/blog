<template>
    <div class="left-bar">
        <div class="modal-hover"></div>
        <div class="left-bar-content">
            <div class="columns is-mobile">
                <div class="column is-three-quarters-mobile">
                    <figure class="image is-1by1">
                        <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                </div>
            </div>
        </div>
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
}
</style>
<script>
</script>

