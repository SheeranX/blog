<template>
  <div style="position:relative">
    <figure class="image is-3by1" @mouseover="clear" @mouseout="autoPlay">
      <img :src="val" v-for="(val,index) in item" :key="index" :data-src='val' :class="currentIdx==index?'swiper-show':''">
      <div class="swiper-operate prev" @click="prev">
        <span class="icon is-medium">
          <i class="fas fa-2x fa-arrow-circle-left"></i>
        </span>
      </div>
      <div class="swiper-operate next" @click="next">
        <span class="icon is-medium">
          <i class="fas fa-2x fa-arrow-circle-right"></i>
        </span>
      </div>
      <div class="pagenation">
        <div class="pagenation-item" v-for="(val,idx) in item" :key="idx" :class="currentIdx==idx?'pagenation-active':''" @click="goto(idx)"></div>
      </div>
    </figure>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: ['https://bulma.io/images/placeholders/256x256.png','https://bulma.io/images/placeholders/128x128.png','https://bulma.io/images/placeholders/480x480.png'],
      currentIdx:0,
      inter:''
    }
  },
  mounted() {
    this.autoPlay();
  },
  methods:{
    prev:function(){
     this.currentIdx>0?this.currentIdx--:this.currentIdx==0;
    },
    next:function(){
      let len = this.item.length;
      this.currentIdx>=(len-1)?this.currentIdx=0:this.currentIdx++; 
    },
    autoPlay:function(){
       this.inter = setInterval(()=>{
          this.next();
        },3000)
      },
      goto:function(idx){
        this.currentIdx = idx;
      },
      clear:function(){
        clearInterval(this.inter);
      },

  }
}
</script>
<style scoped>
.swiper-operate {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: none;
  z-index: 2;
}
.swiper-operate:hover {
  cursor: pointer;
}
.image{
  overflow: hidden;
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
.swiper-show{
  z-index: 1;
  animation: swiper-in .1s;
}
.pagenation{
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  bottom: 10px;
  z-index: 1;
}
.pagenation .pagenation-item{
  width: 25px;
  height: 1px;
  border: 1px solid hsla(0,0%,47%,.4);
  margin: 2px;
  border-radius: 2px;
  transition: all ease-in-out 1s;
}
.pagenation .pagenation-item:hover{
  cursor: pointer;
}
.pagenation-active{
  border: 1px solid #fff!important;
}
@keyframes swiper-in {
  0% {
    transform:translateX(-10%);
  }
  30%{
     transform:translateX(-8%);
  }
  50% {
    transform:translateX(-5%);
  }
  80% {
    transform:translateX(-3%);
  }
  100% {
    transform:translateX(0%);
  }
}


</style>