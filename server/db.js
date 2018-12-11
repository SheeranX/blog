var mongoose = require('mongoose'),
    DB_URL = 'mongodb://127.0.0.1:27017/blog';

//连接
mongoose.connect(DB_URL);
//连接成功
mongoose.connection.on('connected',function(){
    console.log('mongoose connected');
});

//连接异常
mongoose.connection.on('error',function(){
    console.log('mogoose error');
});

//连接断开
mongoose.connection.on('disconnected',function(){
    console.log('mongoose disconnected');
});


module.exports = mongoose



