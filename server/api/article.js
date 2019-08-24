const express = require('express');
const router = express.Router();

const Article = require("../schema/Article.js");
const Mock = require('mockjs');
const Random = Mock.Random;
//获取文章信息
router.get('/article',function(req,res,next){
    // find(function(e){
        
    // })
        let data = {
            parag: Random.csentence(400, 800),
            title: Random.word(),
            date: Random.date(),
            read: Random.integer(6, 100),
            review: Random.integer(60, 100),
            word: Random.integer(60, 100),
            like: Random.integer(60,100)
        };
        res.send(Mock.mock(data));
        next();
});

router.get('/profileBox', (req, res, next) => {
        let data = {
            imgUrl: Random.image('200x100'),
            nickName: Random.word(6,10),
            content:Random.csentence(100, 150)
        };
        res.send(Mock.mock(data));
})



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