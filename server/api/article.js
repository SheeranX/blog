const express = require('express');
const router = express.Router();

const Article = require("../schema/Article.js");

router.get('/acticle',function(req,res,next){
    insert(function(){
        res.send('success')
    });
});

function insert(fn){
    debugger
    let article = new Article({
        name:'gone with the wind'
    })

    article.save(function(err,res){
        if(err) throw err
        else
         fn()
    });
}

module.exports = router