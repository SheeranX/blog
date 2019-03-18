const express = require('express');
const router = express.Router();

const Article = require("../schema/Article.js");

//获取文章信息
router.get('/article',function(req,res,next){
    find(function(e){
        res.send(e);
    })
});



function insert(fn){
    let article = new Article({
        name:'gone with the wind'
    })

    article.save(function(err,res){
        if(err) throw err
        else
         fn()
    });
}

function find(fn){
    let name = {name:"gone with the wind"}
    Article.find(function(err,res){
       if(err) throw err
       else
        fn(res);
    })
}

module.exports = router