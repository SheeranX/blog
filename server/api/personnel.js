const express = require('express');
const router = express.Router();

const Personnel = require("../schema/Personnel");

router.post("/personnel",(req,res,next)=>{
    console.log(req);
    insert(req,()=>{
        res.send("成功");
    });
});

let insert = (data,fn)=>{

    
    let personnel = new Personnel({
        uesrname : data.body.username,
        nickname:data.body.nickname,
        name:data.body.name,
        email: data.body.email,
        mobile:data.body.mobile,
        bachlor:data.body.bachlor,
        introduce:data.body.introduce,
    })

    personnel.save(((err,res)=>{
        if(err) throw err
        else
         fn()
    }));

}

module.exports = router;