const express = require('express');
const router = express.Router();

const Article = require("../schema/Personnel");

router.post("/personnel",(req,res,next)=>{
    console.log(req);
    res.send("成功");
});

let insert = (fn)=>{
    let personnel = new Personnel({
        
    })

}

module.exports = router;