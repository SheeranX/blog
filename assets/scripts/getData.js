import http from '~/plugins/axios';

const URL = "http://127.0.0.1:3000";

const getArticle = async function(params){
    return  await http.get('/api/user',params); 
}

export {
    getArticle
}