import http from '~/plugins/axios';

const URL = "http://127.0.0.1:3000";

/**
 * 前台页面
 */
const getArticle = async function(params){
    return  await http.get('/api/front/article',params); 
}

/**
 * 后台系统
 */

 
export {
    getArticle
}