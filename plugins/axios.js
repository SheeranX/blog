import axios from 'axios';

axios.defaults.timeout = 5000;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

let http = {
    get: (url,params = {})=>{
        return new Promise((resolve,reject)=>{
           axios.get(url,{
            params:params
           })
           .then(res=>{
              resolve(res);
           })
           .catch(error=>{
             reject(error);
           })
        })
    },
    post:(url,params)=>{
       return new Promise((resolve,reject)=>{
        axios.post(url,params)
        .then(res=>{
          resolve(res)
        })
        .catch(error=>{
          reject(error);
        })
       })
    }
}

export default http