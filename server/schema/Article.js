const mongoose = require('../db.js'),
   Scheme = mongoose.Schema;

   let ArticleSchema = new Scheme({
       articleId : {type : String},
       authorId: {type: String},
       name : {type : String},
   })

   module.exports = mongoose.model('Article',ArticleSchema);