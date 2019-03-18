const mongoose = require("../db.js"),
    Scheme = mongoose.Schema;

let PersonnelSchema = new Scheme({
    id : {type : String},
    uesrname : {type : String},
    nickname:{type : String},
    name:{type : String},
    email: {type : String},
    mobile:{type:String},
    bachlor:{type:String},
    introduce:{type:String},
})
 
module.exports = mongoose.model('Personnel',PersonnelSchema);

