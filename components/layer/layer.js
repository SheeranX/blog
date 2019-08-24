import Vue from 'vue'
import layer from './layer.vue'

let layerContructor = Vue.extend(layer);

let instance ;
let instances = [];
let seed = 1;
//使用vue构造器，创建’子类‘
const Layer = (options) => {
    options = options || {};

    if(typeof options === 'string') {
        options = {
            message: options
        }
    }
    let id = 'message_'+seed++;
    //属性混入到组件的data属性中
    instance = new layerContructor({
        data: options
    });
    instance.id = id;
    //创建实例并挂载在对象上
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    instance.vm.visiable = true;
    instance.dom = instance.vm.$el;
    instances.push(instance);
    return instance.vm
};
//方法配置
['success', 'info', 'error', 'warning'].forEach(type => {
    Layer[type] = options => {
        if(typeof options === 'string')
        {
            options = {
                message: options
            };
        }
        options.type = type;
        //创建子类
        return Layer(options)
    }
});

Layer.close = (id) => {
    for(let i=0,len=instances.length-1;i<len;i++){
        if(id === instances[i].id){
            instances.splice(i,1);
            break
        }
    }
}

Layer.closeAll = () => {
    for (let i = instances.length - 1; i >= 0; i--) {
        instances[i].close();
      }
}

const install = function(Vue,options){
    //Vue.component(Layer);
    Vue.prototype.$message = Layer;
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default install;