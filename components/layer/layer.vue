<template>
    <div class="layer has-background-white br-5" 
     :class="`border-${typeClass} bs-${typeClass}`"
     v-show="visiable"
     @mouseenter="clearTimer"
     @mouseleave="startTimer"
     >
        <div class="layer-content f-row a-center j-center">
            <p class="has-text-grey">{{message}}</p>
        </div>
    </div>
</template>
<style scoped>
    .layer{
        position: fixed;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999999;
        padding: 10px;
        box-shadow:0 0 10px rgba(0, 0, 0, .1);
    }
    .layer-content{
        height: 20px;
        width: 300px;
    }
</style>
<script>
const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
}
export default {
    //props:['type'],
    data(){
        return {
            visiable: false,
            message: '',
            duration: 2000,
            type: 'info',
            timer: null,
            dangerouslyUseHTMLString: false,
            closed: false
        }
    },
    computed: {
        typeClass(){
            return this.type ? typeMap[this.type] : ''
        }
    },
    watch: {
        closed(newVal){
            if(newVal)
                this.visiable = false
        }
    },
    methods: {
        handleAfterLeave(){
            //To-Do 
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
        close(){
            this.closed = true;
        },
        clearTimer(){
            clearTimeout(this.timer);
        },
        startTimer(){
            if(this.duration>0){
                this.timer = setTimeout(() => {
                    if(!this.closed){
                        this.close();
                    }
                }, this.duration);
            }
        }
    },
    mounted() {
        this.startTimer();
    },
}
</script>