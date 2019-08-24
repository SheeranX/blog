import http from '~/plugins/axios';
const URL = "http://127.0.0.1:3000";

/**
 * 前台页面
 */
export const getArticle = async function(params){
    return  await http.get('/api/front/article',params); 
}

export const getProfileData = async (articleId) => {
    return await http.get('/api/front/profileBox');
}

/**
 * 后台系统
 */

//保存个人信息
export const savePersonnel = async (params)=>{
     return await http.post('/api/admin/personnel',params);
 }

