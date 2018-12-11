const mongoose = require('../db.js'),
   Scheme = mongoose.Schema;

   let ArticleSchema = new Scheme({
       id : {type : String},
       name : {type : String},
   })

   module.exports = mongoose.model('Article',ArticleSchema);